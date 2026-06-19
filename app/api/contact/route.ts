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
  const { success, limit, remaining } = await ratelimit.limit(ip);

  if (!success) {
    return NextResponse.json(
      { error: 'Te veel aanvragen. Probeer het later opnieuw.' },
      { status: 429 }
    );
  }

  const { name, phone, email, address, service, description, period, message } = await request.json();

  try {
    await resend.emails.send({
      from: 'Croes Construct <offerte@croesconstruct.be>',
      to: 'Croes-construct@hotmail.com',
      subject: `Nieuwe offerte aanvraag van ${name}`,
      html: `
        <h2>Nieuwe offerte aanvraag</h2>
        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>Telefoon:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Adres werf:</strong> ${address || 'Niet ingevuld'}</p>
        <p><strong>Dienst:</strong> ${service}</p>
        <p><strong>Omschrijving:</strong> ${description}</p>
        <p><strong>Gewenste periode:</strong> ${period || 'Niet ingevuld'}</p>
        <p><strong>Extra opmerkingen:</strong> ${message || 'Geen'}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Email versturen mislukt' }, { status: 500 });
  }
}