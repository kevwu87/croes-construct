import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const resend = new Resend(process.env.RESEND_API_KEY);

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(3, '1 h'), // max 3 aanvragen per uur per IP
});

export async function POST(request: Request) {
  // Rate limiting check
  const ip = request.headers.get('x-forwarded-for') ?? '127.0.0.1';
  // ponytail: rate limit faalt open; ligt Upstash plat, dan gaan aanvragen door zonder limiet
  const success = await ratelimit.limit(ip).then((r) => r.success, (err) => {
    console.error('Rate limit niet bereikbaar:', err);
    return true;
  });

  if (!success) {
    return NextResponse.json(
      { error: 'Te veel aanvragen. Probeer het later opnieuw.' },
      { status: 429 }
    );
  }

  const body = await request.json().catch(() => ({}));
  // Formulierinvoer komt in een HTML-mail: afkappen en escapen
  const field = (key: string, max = 200) =>
    String(body[key] ?? '').trim().slice(0, max)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const name = field('name');
  const phone = field('phone', 40);
  const email = String(body.email ?? '').trim().slice(0, 200);
  const description = field('description', 3000);

  if (!name || !phone || !description) {
    return NextResponse.json({ error: 'Naam, telefoon en omschrijving zijn verplicht.' }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: 'Croes Construct <offerte@croesconstruct.be>',
      to: 'Croes-construct@hotmail.com',
      ...(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && { replyTo: email }),
      subject: `Nieuwe offerte aanvraag van ${String(body.name).trim().slice(0, 80)}`,
      html: `
        <h2>Nieuwe offerte aanvraag</h2>
        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>Telefoon:</strong> ${phone}</p>
        <p><strong>E-mail:</strong> ${field('email') || 'Niet ingevuld'}</p>
        <p><strong>Gemeente:</strong> ${field('address') || 'Niet ingevuld'}</p>
        <p><strong>Dienst:</strong> ${field('service', 40) || 'Niet gekozen'}</p>
        <p><strong>Wat wil de klant laten doen:</strong><br>${description.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Email versturen mislukt' }, { status: 500 });
  }
}