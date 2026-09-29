export const faqs = [
  { q: "Is een plaatsbezoek en offerte gratis?", a: "Ja, zowel het plaatsbezoek als de offerte zijn gratis. We streven ernaar om de offerte binnen twee weken te bezorgen. Is het erg druk, dan duurt het maximaal een maand." },
  { q: "Hoe rekenen jullie?", a: "Wij werken meestal in regie: u betaalt de werkuren plus het materiaal aan een vaste prijs. Het uurtarief vindt u in de offerte.\nVoor gazon hanteren we een vaste prijs, exclusief btw:\n• graszoden leggen: € 15 per m²\n• gazon inzaaien: € 10 per m²\nIn die prijs zit het uitspreiden van de aangevoerde grond, het harken en het leggen of inzaaien. De aanvoer van de grond zelf wordt apart aangerekend." },
  { q: "Kan ik zelf mijn materiaal kiezen?", a: "Ja. Voor granulaat, grasdallen en waterdoorlatende verharding verwijzen we u naar Jatu (www.jatu.be), de website voor particulieren van Gravelart. Voor tegels kunt u terecht bij Interieur Center Dekeyser in Veurne of bij Verhelst Bouwmaterialen in Veurne of Oostende." },
  { q: "Welk btw-tarief betaal ik?", a: "Is uw woning ouder dan 10 jaar en woont u er zelf? Dan geldt voor een deel van de werken 6% in plaats van 21%:\n• terras direct tegen de woning: 6%\n• oprit van de straat naar de voordeur, of naar een garage die deel uitmaakt van de woning: 6%\n• oprit naar een losstaande garage, of een parkeerplaats: 21%\n• terras midden in de tuin, tuinaanleg en omheiningen: 21%\nWij bekijken per offerte welk deel aan 6% kan, en zetten dat apart op de factuur." },
  { q: "Moet ik een voorschot betalen?", a: "Meestal niet. Voor grotere projecten kunnen we een voorschot vragen. Dat staat dan duidelijk in de offerte." },
  { q: "Heb ik een vergunning nodig voor een terras of oprit?", a: "Meestal niet. In Vlaanderen mag u zonder vergunning tot 80 m² verharden in de zij- en achtertuin. Dat is alles samen: terras, paden, oprit, kunstgras en grindzones. Het regenwater moet dan wel in uw eigen tuin in de grond kunnen lopen. Gaat u daarover, of legt u iets aan in de voortuin? Dan kijken wij samen met u na wat er nodig is. Sommige gemeenten hebben ook eigen regels." },
  { q: "Kasseien, klinkers of grind?", a: "Wij leggen ze alle drie, voor terrassen, opritten en paden. Een combinatie kan ook, bijvoorbeeld rijstroken in kasseien met grind ertussen. Bij het plaatsbezoek bekijken we wat het best past bij uw woning en gebruik." },
  { q: "Kunstgras of echt gras?", a: "Wij leggen beide. Echt gras kan als graszoden (€ 15 per m², excl. btw) of ingezaaid (€ 10 per m², excl. btw). Let op: kunstgras telt mee als verharding voor de vergunningsregel van 80 m²." },
  { q: "Wat met regenwater en riolering?", a: "Ook dat doen wij: grondwerken, afvoerleidingen, zichtputten en de aansluiting van regenwaterputten. Zo hoeft u voor uw buitenwerk geen aparte firma te zoeken: ons eigen team doet het van A tot Z." },
  { q: "Hoe hoog kan een omheining?", a: "Wij plaatsen omheiningen tot 2,50 m hoog. Tot 2 m in de zij- en achtertuin is geen vergunning nodig. In de voortuin mag een gesloten omheining zonder vergunning maximaal 1 m hoog zijn. Wilt u hoger, dan kijken wij samen met u na welke vergunning nodig is." },
  { q: "Welke omheining houdt het aan zee?", a: "U kiest zelf het materiaal en de stijl. Wat voor ons vaststaat is de plaatsing: de palen gaan minstens 75 cm diep in de grond, zodat de omheining stormachtig weer aan de kust aankan." },
  { q: "Hoe lang moet ik wachten voor jullie kunnen starten?", a: "Dat hangt af van de drukte. In de winter en de herfst kunnen we meestal snel starten. Vanaf het voorjaar is de planning vaak vol tot na de zomer. Wilt u in het voorjaar of de zomer klaar zijn, neem dan best in de winter al contact op." },
  { q: "Hoe lang duren de werken?", a: "Een richtlijn:\n• oprit van ± 50 m²: een goede week\n• terras van ± 30 m²: drie à vier dagen, afhankelijk van de afwerking\n• omheining van ± 20 m: een werkweek\n• volledige renovatie van een kleine tuin: drie à vier weken, afhankelijk van wat er moet gebeuren" },
  { q: "Wanneer leg je best een tuin aan?", a: "Verhardingen en omheiningen kunnen het hele jaar door, behalve bij vorst. Gazon en beplanting leg je best aan in het voorjaar of het najaar." },
  { q: "Moet ik thuis zijn tijdens de werken?", a: "Nee. Wij hebben enkel toegang tot de tuin nodig, met water en stroom." },
  { q: "Voeren jullie grond en afval af?", a: "Ja, wij voeren al het afval af dat u wilt laten weghalen. De afvoer zit niet in de prijs van het werk: ze wordt apart aangerekend en staat afzonderlijk op de factuur." },
  { q: "In welke gemeenten werken jullie?", a: "Wij werken in heel West-Vlaanderen, vooral aan de Kust: Koksijde, De Panne, Nieuwpoort, Middelkerke, Veurne, Diksmuide, Oostende, Brugge en hun deelgemeenten. Voor grondwerken gaan we soms ook verder; vraag het gerust." },
  { q: "Zijn jullie verzekerd en is er garantie?", a: "Wij hebben een BA-verzekering. Een vaste garantietermijn geven we niet, maar ligt een probleem aan ons werk, dan brengen we het in orde." },
  { q: "Doen jullie ook tuinonderhoud?", a: "Ja. Naast de aanleg doen wij ook tuinonderhoud: snoeien, hagen scheren en het algemene onderhoud van uw tuin. Ook als wij uw tuin niet zelf aanlegden." },
];

export type Service = {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  points: string[];
  images: { src: string; alt: string }[];
  faqs: string[];
};

export const services: Service[] = [
  {
    slug: "tuinaanleg",
    title: "Tuinaanleg",
    h1: "Tuinaanleg in Koksijde en aan de Kust",
    metaTitle: "Tuinaanleg Koksijde & Kust | Croes Construct",
    metaDescription: "Nieuwe tuin of tuinrenovatie aan de Kust: grondwerk, graszoden (€ 15/m²), ingezaaid gazon (€ 10/m²), kunstgras en beplanting. Gratis plaatsbezoek.",
    intro: [
      "Een nieuwe tuin of een volledige renovatie: wij doen het grondwerk, leggen het gazon of kunstgras en zorgen voor borders, beplanting en boordranden in cortenstaal.",
      "Grondwerken, riolering, verhardingen en omheiningen gebeuren door ons eigen team. U heeft voor de hele tuin één aanspreekpunt.",
    ],
    points: [
      "Graszoden leggen: € 15 per m², excl. btw",
      "Gazon inzaaien: € 10 per m², excl. btw",
      "Uitspreiden van de grond en harken zit in die prijs; de aanvoer van grond wordt apart aangerekend",
      "Kunstgras, borders, beplanting en cortenstalen boordranden",
      "Ook speelheuvels met glijbaan of tunnel",
      "Volledige renovatie van een kleine tuin: drie à vier weken",
    ],
    images: [
      { src: "/images/project 1.1.jpg", alt: "Aangelegde tuin met gestreept gazon en cortenstalen boordranden rond een villa met rieten dak" },
      { src: "/images/tuinaanleg-gazon-tegelterras.jpg", alt: "Nieuw gazon naast een tegelterras met ligzetels en houten omheining" },
      { src: "/images/speelheuvel-glijbaan-1.jpg", alt: "Speelheuvel met gele glijbaan, aangelegd door Croes Construct" },
      { src: "/images/speelheuvel-glijbaan-tunnel.jpg", alt: "Speelheuvel met kruiptunnel en glijbaan" },
      { src: "/images/project 1.2.jpg", alt: "Tuinrenovatie door Croes Construct, foto 2" },
      { src: "/images/project 1.3.jpg", alt: "Tuinrenovatie door Croes Construct, foto 3" },
      { src: "/images/project 3.5.jpg", alt: "Afgewerkte tuin met kunstgras en omheining" },
      { src: "/images/project 3.4.jpg", alt: "Tuin met kunstgras aangelegd door Croes Construct" },
      { src: "/images/speelheuvel-aanleg.jpg", alt: "Grondwerk voor een speelheuvel in een tuin met weids uitzicht" },
    ],
    faqs: ["Kunstgras of echt gras?", "Hoe rekenen jullie?", "Wanneer leg je best een tuin aan?", "Voeren jullie grond en afval af?"],
  },
  {
    slug: "opritten",
    title: "Opritten",
    h1: "Opritten aanleggen in Koksijde en aan de Kust",
    metaTitle: "Oprit aanleggen Koksijde & Kust | Kasseien, klinkers, grind",
    metaDescription: "Opritten in kasseien, klinkers, grind of grindplaten aan de Kust. Oprit van ± 50 m² in een goede week. 6% btw mogelijk. Gratis plaatsbezoek.",
    intro: [
      "Wij leggen opritten in kasseien, klinkers of grind, of een combinatie, zoals rijstroken in kasseien met grind ertussen. Waterdoorlatende oplossingen met grindplaten of grasdallen zijn ook mogelijk.",
      "Het grondwerk, de fundering en de afvoer van regenwater doen we zelf. Een oprit van ongeveer 50 m² is meestal klaar in een goede week.",
    ],
    points: [
      "Kasseien, klinkers, grind of een combinatie, ook rijstroken met een grasstrook ertussen",
      "Waterdoorlatend met grindplaten of grasdallen",
      "Grondwerk, fundering en afvoer door ons eigen team",
      "6% btw voor het stuk van de straat naar de voordeur, bij een woning ouder dan 10 jaar",
      "Oprit van ± 50 m²: een goede week",
    ],
    images: [
      { src: "/images/project 7.7.jpg", alt: "Oprit met rijstroken in kasseien en grind" },
      { src: "/images/oprit-grind-2.jpg", alt: "Nieuwe oprit in lichte grind naast klinkers, met zwarte draadafsluiting" },
      { src: "/images/oprit-rijstroken-grind-gras-1.jpg", alt: "Oprit met twee rijstroken in grind en een grasstrook in het midden, tussen hagen" },
      { src: "/images/oprit-grind-vooraanzicht.jpg", alt: "Vooraanzicht van een woning met nieuwe grindoprit en afsluiting" },
      { src: "/images/oprit-fundering-in-uitvoering.jpg", alt: "Fundering van een oprit in uitvoering, met boordstenen" },
      { src: "/images/project 6.4.jpg", alt: "Grindplaten voor een waterdoorlatende oprit" },
      { src: "/images/oprit-rijstroken-grind-gras-2.jpg", alt: "Rijstroken in grind met grasstrook, zicht op de hele oprit" },
      { src: "/images/project 11.3.jpg", alt: "Carport met nieuwe verharding in klinkers" },
      { src: "/images/project 6.1.jpg", alt: "Voorbereiding van een oprit: uitgegraven bed met worteldoek en boordstenen" },
    ],
    faqs: ["Kasseien, klinkers of grind?", "Welk btw-tarief betaal ik?", "Heb ik een vergunning nodig voor een terras of oprit?", "Kan ik zelf mijn materiaal kiezen?"],
  },
  {
    slug: "terrassen-en-paden",
    title: "Terrassen en paden",
    h1: "Terrassen en paden aan de Kust",
    metaTitle: "Terras aanleggen Koksijde & Kust | Croes Construct",
    metaDescription: "Terrassen en tuinpaden in kasseien, klinkers, tegels, natuursteen of hout. Terras van ± 30 m² in drie à vier dagen. 6% btw tegen de woning.",
    intro: [
      "Een terras tegen de woning, een zithoek achteraan in de tuin of paden die alles verbinden. Wij leggen ze in kasseien, klinkers, grind, tegels, natuursteen of hout.",
      "Tegels kiest u zelf bij Interieur Center Dekeyser in Veurne of bij Verhelst Bouwmaterialen in Veurne of Oostende. Wij zorgen voor de fundering en de plaatsing. Een terras van ongeveer 30 m² duurt drie à vier dagen, afhankelijk van de afwerking.",
    ],
    points: [
      "Kasseien, klinkers, grind, tegels, natuursteen of hout",
      "Tuintrappen in betontreden en stapstenen in grote betonplaten",
      "Fundering en plaatsing door ons eigen team",
      "6% btw voor een terras direct tegen een woning ouder dan 10 jaar",
      "Terras van ± 30 m²: drie à vier dagen",
    ],
    images: [
      { src: "/images/stapstenen-betonplaten-1.jpg", alt: "Stapstenen van grote betonplaten rond een houten woning" },
      { src: "/images/project 2.1.jpg", alt: "Houten terras aangelegd door Croes Construct" },
      { src: "/images/tuintrap-betontreden-1.jpg", alt: "Tuintrap in betontreden langs een woning" },
      { src: "/images/tuinpad-langs-gevel-1.jpg", alt: "Pad in grind langs een zwarte gevel" },
      { src: "/images/project 2.2.jpg", alt: "Betegeld tuinpad aangelegd door Croes Construct" },
      { src: "/images/stapstenen-betonplaten-aanleg.jpg", alt: "Aanleg van stapstenen in betonplaten, met minigraver" },
      { src: "/images/tuinpad-langs-gevel-2.jpg", alt: "Tuinpad in grind en betontreden langs de gevel" },
      { src: "/images/project 5.3.jpg", alt: "Gerenoveerde verandavloer" },
      { src: "/images/project 10.1.jpg", alt: "Aanleg van een terras met laser, kruiwagen en stapels tegels" },
    ],
    faqs: ["Welk btw-tarief betaal ik?", "Heb ik een vergunning nodig voor een terras of oprit?", "Kan ik zelf mijn materiaal kiezen?", "Hoe lang duren de werken?"],
  },
  {
    slug: "omheiningen",
    title: "Omheiningen",
    h1: "Omheiningen plaatsen aan de Kust",
    metaTitle: "Omheining plaatsen Koksijde & Kust | Croes Construct",
    metaDescription: "Omheiningen en poorten tot 2,50 m, met palen minstens 75 cm diep tegen stormweer aan zee. Houten schermen, draad en heide. Gratis plaatsbezoek.",
    intro: [
      "Houten schermen, draadafsluitingen, heidematten en poorten: u kiest het materiaal en de stijl, wij zorgen dat de omheining blijft staan.",
      "Aan de kust krijgt een omheining veel wind te verduren. Daarom gaan onze palen minstens 75 cm diep in de grond. Wij plaatsen omheiningen tot 2,50 m hoog; een omheining van ongeveer 20 m is een werkweek.",
    ],
    points: [
      "Palen minstens 75 cm diep, bestand tegen stormweer",
      "Hoogte tot 2,50 m",
      "Tot 2 m in de zij- en achtertuin zonder vergunning",
      "Omheining van ± 20 m: een werkweek",
    ],
    images: [
      { src: "/images/houten-omheining-zwarte-palen-1.jpg", alt: "Houten omheining tussen zwarte palen" },
      { src: "/images/project 4.2.jpg", alt: "Heidescherm geplaatst door Croes Construct" },
      { src: "/images/draadpoort-groen-1.jpg", alt: "Groene draadpoort met afsluiting op een oprit in klinkers" },
      { src: "/images/houten-tuinpoort.jpg", alt: "Houten tuinpoort in een zwart kader" },
      { src: "/images/tuin-houten-omheining-1.jpg", alt: "Tuin volledig omheind met houten schermen" },
      { src: "/images/project 4.1.jpg", alt: "Zwarte draadafsluiting langs een gazon" },
      { src: "/images/houten-omheining-zwarte-palen-2.jpg", alt: "Houten omheining met zwarte palen, zijaanzicht" },
      { src: "/images/tuin-houten-omheining-2.jpg", alt: "Houten omheining rond een tuin met terras" },
      { src: "/images/draadpoort-groen-2.jpg", alt: "Dubbele draadpoort in groen" },
    ],
    faqs: ["Hoe hoog kan een omheining?", "Welke omheining houdt het aan zee?", "Hoe lang duren de werken?", "Welk btw-tarief betaal ik?"],
  },
  {
    slug: "grondwerken-en-riolering",
    title: "Grond- en rioleringswerken",
    h1: "Grond- en rioleringswerken in West-Vlaanderen",
    metaTitle: "Grondwerken & riolering West-Vlaanderen | Croes Construct",
    metaDescription: "Uitgraven, nivelleren, afbraak, afvoerleidingen, zichtputten en aansluiting van regenwaterputten. Eigen team, van A tot Z, in West-Vlaanderen.",
    intro: [
      "Uitgraven, nivelleren en afbraak, afvoerleidingen, zichtputten en de aansluiting van regenwaterputten: ons eigen team doet het van A tot Z.",
      "Grondwerken doen we in heel West-Vlaanderen en soms ook verder. Afval en overtollige grond voeren we af als u dat wenst; dat staat apart op de factuur.",
    ],
    points: [
      "Uitgraven, nivelleren en afbraak",
      "Afvoerleidingen en zichtputten",
      "Aansluiting van regenwaterputten",
      "Afvoer van grond en afval op vraag, apart op de factuur",
    ],
    images: [
      { src: "/images/sleuf-leidingen-1.jpg", alt: "Lange sleuf voor leidingen langs een loods" },
      { src: "/images/aansluiting-regenwaterput.jpg", alt: "Aansluiting van een regenwaterput met minigraver" },
      { src: "/images/afvoerleidingen-zichtput.jpg", alt: "Afvoerleidingen aangesloten op een zichtput" },
      { src: "/images/sleuf-kabels-mantelbuizen.jpg", alt: "Sleuf met kabels en rode mantelbuizen" },
      { src: "/images/afvoerleiding-aansluiting.jpg", alt: "Aansluiting van een afvoerleiding" },
      { src: "/images/sleuf-leidingen-2.jpg", alt: "Sleuf met leiding door een gazon" },
      { src: "/images/project 8.1.jpg", alt: "Sleuf met leiding langs een sportveld" },
      { src: "/images/sleuf-leidingen-3.jpg", alt: "Afvoerleidingen in een sleuf langs een gebouw" },
      { src: "/images/project 3.2.jpg", alt: "Afbraak en grondwerken voor een tuinrenovatie" },
    ],
    faqs: ["Wat met regenwater en riolering?", "Voeren jullie grond en afval af?", "In welke gemeenten werken jullie?"],
  },
  {
    slug: "tuinonderhoud-en-snoeien",
    title: "Tuinonderhoud en snoeien",
    h1: "Tuinonderhoud en snoeiwerk aan de Kust",
    metaTitle: "Tuinonderhoud & snoeien Koksijde | Croes Construct",
    metaDescription: "Snoeien van bomen, hagen scheren en algemeen tuinonderhoud in Koksijde en omgeving, ook voor tuinen die wij niet zelf aanlegden.",
    intro: [
      "Vormsnoei, onderhoudssnoei, het inkorten van bomen die te groot werden en het scheren van hagen. Ook het algemene onderhoud van uw tuin nemen we over.",
      "Wij onderhouden ook tuinen die we niet zelf aanlegden. Snoeiafval voeren we af als u dat wenst.",
    ],
    points: [
      "Snoeien van bomen: vormsnoei en onderhoudssnoei",
      "Hagen scheren",
      "Algemeen tuinonderhoud",
      "Ook voor tuinen die wij niet zelf aanlegden",
    ],
    images: [
      { src: "/images/geschoren-bolbomen.jpg", alt: "Twee geschoren bolbomen na snoeiwerk" },
      { src: "/images/project 9.1.jpg", alt: "Geschoren blokboom boven hortensia's" },
      { src: "/images/project 9.2.jpg", alt: "Snoeiwerk door Croes Construct, foto 2" },
    ],
    faqs: ["Doen jullie ook tuinonderhoud?", "In welke gemeenten werken jullie?", "Voeren jullie grond en afval af?"],
  },
];
