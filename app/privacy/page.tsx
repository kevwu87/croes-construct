export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="font-serif text-4xl text-foreground mb-8">Privacybeleid</h1>
        <p className="text-muted-foreground mb-8">Laatst bijgewerkt: juni 2026</p>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl text-foreground mb-3">1. Wie zijn wij?</h2>
            <p>
              Croes Construct, met als zaakvoerder Tobias Croes (BTW BE 1032 219 065), 
              hecht belang aan de bescherming van uw persoonsgegevens. Dit privacybeleid 
              legt uit welke gegevens we verzamelen via deze website, waarom, en hoe we 
              ermee omgaan, in overeenstemming met de Algemene Verordening 
              Gegevensbescherming (AVG/GDPR).
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-3">2. Welke gegevens verzamelen wij?</h2>
            <p className="mb-3">Via het contactformulier op onze website verzamelen wij:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Naam</li>
              <li>Telefoonnummer</li>
              <li>E-mailadres</li>
              <li>Adres van de werf (indien ingevuld)</li>
              <li>Gegevens over uw project en aanvraag</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-3">3. Waarom verzamelen wij deze gegevens?</h2>
            <p>
              Wij gebruiken deze gegevens uitsluitend om uw offerteaanvraag te 
              behandelen, contact met u op te nemen, en indien gewenst de 
              werken die u aanvraagt uit te voeren. Wij verkopen of delen uw 
              gegevens nooit met derden voor commerciële doeleinden.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-3">4. Hoe lang bewaren wij uw gegevens?</h2>
            <p>
              Wij bewaren uw gegevens niet langer dan noodzakelijk. Offerteaanvragen 
              en klantgegevens worden bewaard tot maximaal 2 jaar na uw laatste 
              contact met ons, tenzij een wettelijke verplichting (bv. boekhouding) 
              een langere bewaartermijn vereist.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-3">5. Website-analyse</h2>
            <p>
              Deze website gebruikt Vercel Analytics, een privacyvriendelijke 
              analysetool die geen cookies gebruikt en geen persoonlijke gegevens 
              verzamelt. Er worden enkel anonieme, algemene statistieken bijgehouden 
              (bv. aantal bezoekers, land, type toestel) om de website te verbeteren.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-3">6. Beveiliging</h2>
            <p>
              Wij nemen passende technische maatregelen om uw gegevens te beschermen 
              tegen verlies, misbruik of ongeoorloofde toegang.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-3">7. Uw rechten</h2>
            <p className="mb-3">U heeft het recht om:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Inzage te vragen in de gegevens die wij over u bewaren</li>
              <li>Onjuiste gegevens te laten corrigeren</li>
              <li>Te vragen uw gegevens te laten verwijderen</li>
              <li>Bezwaar te maken tegen de verwerking van uw gegevens</li>
            </ul>
            <p className="mt-3">
              U kan deze rechten uitoefenen door ons te contacteren via{" "}
              <a href="mailto:Croes-construct@hotmail.com" className="text-primary hover:underline">
                Croes-construct@hotmail.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-3">8. Contact</h2>
            <p>
              Voor vragen over dit privacybeleid kan u ons contacteren:
            </p>
            <p className="mt-3">
              Croes Construct<br />
              Tobias Croes<br />
              Email: Croes-construct@hotmail.com<br />
              Tel: +32 478 40 69 67
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}