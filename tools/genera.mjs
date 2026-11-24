// Genera tutte le pagine del sito a partire dai contenuti qui sotto.
// Uso: node tools/genera.mjs   (dalla cartella principale del sito)
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const RADICE = join(dirname(fileURLToPath(import.meta.url)), '..');
const DOMINIO = 'https://rachelestermiericonsulente.it';
const TELEFONO = '+39 349 271 2137';
const TELEFONO_LINK = '+393492712137';

/* ------------------------------------------------------------------ */
/* Servizi                                                             */
/* ------------------------------------------------------------------ */
const SERVIZI = [
  {
    slug: 'conto-corrente', nome: 'Conto corrente', breve: 'Uno strumento di ogni giorno, adatto alle tue abitudini.',
    titolo: 'Un conto <em>che ti somiglia.</em>',
    intro: 'Il conto corrente è uno degli strumenti che utilizziamo ogni giorno. È importante che sia adatto alle nostre abitudini e alle nostre esigenze.',
    domande: [
      { d: 'Posso cambiare conto corrente senza difficoltà?',
        r: 'Sì, certamente. Cambiare conto corrente è molto più semplice di quanto si possa pensare. La procedura è guidata e richiede pochi passaggi.',
        a: 'Possiamo valutare insieme le alternative e individuare un conto più adatto alle tue esigenze, accompagnandoti nel trasferimento.' },
    ],
    aiuto: 'Partiamo da come usi il conto ogni giorno, per trovare la soluzione più adatta e renderti il passaggio semplice.',
    passi: ['Guardiamo insieme le tue abitudini', 'Valutiamo le alternative più adatte', 'Ti accompagno nel trasferimento'],
  },
  {
    slug: 'piano-di-accumulo', nome: 'Piano di accumulo', breve: 'I piccoli passi di oggi per i progetti di domani.',
    titolo: 'I piccoli passi di oggi possono contribuire a costruire <em>i progetti di domani.</em>',
    intro: 'Con un piano di accumulo metti da parte una cifra costante, mese dopo mese. Un modo semplice per trasformare il risparmio in un\'abitudine.',
    domande: [
      { d: 'Cos\'è un piano di accumulo?',
        r: 'È un modo di investire a piccoli passi: invece di versare tutto in una volta, versi una cifra costante a intervalli regolari, di solito ogni mese. Così il risparmio diventa un\'abitudine e l\'ingresso sui mercati avviene in modo graduale.',
        a: 'Insieme definiamo l\'obiettivo, la durata e la rata, e scegliamo gli strumenti più coerenti con il tuo profilo.' },
      { d: 'Posso iniziare con 50-100 euro al mese?',
        r: 'Sì. Il piano di accumulo nasce proprio per permettere di iniziare anche con cifre contenute. Più dell\'importo, conta la costanza.',
        a: 'Valutiamo insieme una rata sostenibile rispetto alle tue entrate e alle tue spese, così da poterla mantenere nel tempo.' },
      { d: 'Posso modificare l\'importo dei versamenti?',
        r: 'Sì. La vita cambia, e il piano può cambiare con te: puoi aumentare o ridurre la rata quando cambiano le tue possibilità.',
        a: 'Ci rivediamo periodicamente per verificare che la rata sia sempre in equilibrio con la tua situazione.' },
      { d: 'Posso sospendere temporaneamente i versamenti?',
        r: 'Sì. Se attraversi un periodo in cui ti serve più liquidità, i versamenti possono essere sospesi e ripresi in un secondo momento, secondo le condizioni dello strumento scelto.',
        a: 'Ti aiuto a capire come farlo e quale effetto può avere sul tuo obiettivo.' },
      { d: 'Posso creare un piano di accumulo per mio figlio?',
        r: 'Certo, ed è un bellissimo progetto: mettere da parte, un poco alla volta, qualcosa per il suo futuro, per i suoi studi o per i suoi sogni.',
        a: 'Possiamo valutare insieme lo strumento più adatto, la durata e l\'importo, in base al tempo che hai davanti.' },
      { d: 'È meglio iniziare con una piccola cifra oppure aspettare di avere più capitale?',
        r: 'Il tempo è uno dei più grandi alleati dell\'investimento. Iniziare prima, anche con poco, significa dare più tempo ai tuoi risparmi. Il piano di accumulo ti permette di sfruttare il meccanismo dell\'interesse composto: gli eventuali rendimenti maturati si sommano al capitale e, nel tempo, possono a loro volta generarne altri.',
        a: 'Possiamo confrontare insieme le due strade. Intanto puoi fare una prova con il calcolatore qui sotto.' },
    ],
    aiuto: 'Un piano di accumulo funziona quando è costruito sulle tue possibilità reali e sui tuoi obiettivi, e quando viene seguito nel tempo.',
    passi: ['Definiamo obiettivo e durata', 'Scegliamo una rata sostenibile', 'Rivediamo il piano nel tempo'],
    calcolatore: true,
  },
  {
    slug: 'investimenti', nome: 'Investimenti', breve: 'Dare una direzione ai propri risparmi.',
    titolo: 'Dare una direzione <em>ai propri risparmi.</em>',
    intro: 'Investire significa scegliere dove vuoi andare e con quali tempi. Ogni scelta ha senso solo se è coerente con i tuoi obiettivi.',
    domande: [
      { d: 'Posso trasferire i miei investimenti da un\'altra banca?',
        r: 'Sì, è possibile trasferire gli investimenti da un intermediario a un altro. Prima di farlo, però, è importante capire bene cosa possiedi e se è ancora coerente con i tuoi obiettivi.',
        a: 'Analizziamo insieme gli investimenti che hai oggi, verifichiamo se sono coerenti con i tuoi obiettivi, i tuoi tempi e il tuo profilo di rischio, e valutiamo l\'eventuale trasferimento.' },
    ],
    aiuto: 'Prima di ogni scelta, una fotografia chiara: cosa hai, perché lo hai e dove vuoi arrivare.',
    passi: ['Analizziamo gli investimenti esistenti', 'Verifichiamo la coerenza con i tuoi obiettivi', 'Valutiamo l\'eventuale trasferimento'],
  },
  {
    slug: 'previdenza', nome: 'Previdenza', breve: 'Il futuro si costruisce anche pensando alla pensione.',
    titolo: 'Il futuro si costruisce anche <em>pensando alla pensione.</em>',
    intro: 'Sapere quando e con quanto andrai in pensione ti permette di prepararti per tempo, con serenità.',
    domande: [
      { d: 'Quando dovrei iniziare a pensare alla pensione?',
        r: 'Il prima possibile. Prima si inizia a pianificare, più tempo si ha a disposizione: per versare con calma, per correggere la rotta e per far lavorare i propri risparmi.',
        a: 'Facciamo il punto sulla tua situazione e costruiamo un percorso adatto alla tua età e ai tuoi obiettivi.' },
      { d: 'Il mio TFR è investito nel modo giusto per me?',
        r: 'Il TFR può restare in azienda oppure essere destinato a un fondo pensione. Sono scelte diverse, con effetti diversi nel tempo, e spesso vengono fatte senza conoscerle davvero.',
        a: 'Verifichiamo insieme dove si trova oggi il tuo TFR e se la scelta è coerente con te e con i tuoi progetti.' },
      { d: 'Sto sfruttando la deducibilità dei versamenti?',
        r: 'I versamenti a una forma di previdenza complementare si possono dedurre dal reddito fino a 5.164,57 euro l\'anno. È un vantaggio fiscale che spesso non viene sfruttato del tutto.',
        a: 'Guardiamo insieme quanto stai già versando e valutiamo se ha senso fare di più.' },
      { d: 'Sai quando andrai in pensione?',
        r: 'Per molte persone la data della pensione è ancora un\'incognita. Conoscerla è il primo passo per pianificare con serenità.',
        a: 'Partendo dalla tua situazione contributiva, facciamo insieme una stima di quando potrai andare in pensione.' },
      { d: 'Sai con quanto potrai andare in pensione?',
        r: 'La pensione può essere più bassa dell\'ultimo stipendio. Conoscere in anticipo la differenza permette di organizzarsi per tempo.',
        a: 'Stimiamo insieme l\'importo della tua pensione e, se serve, valutiamo come integrarla.' },
    ],
    aiuto: 'La pensione è un progetto lungo: va impostato con cura e rivisto mentre la tua vita cambia.',
    passi: ['Facciamo il punto sulla tua situazione', 'Stimiamo quando e con quanto', 'Costruiamo un piano per integrarla'],
  },
  {
    slug: 'protezione', nome: 'Protezione', breve: 'Proteggere ciò che conta davvero.',
    titolo: 'Proteggere <em>ciò che conta davvero.</em>',
    intro: 'Gli imprevisti non si possono evitare. Ci si può però preparare, per proteggere le persone che ami e ciò che hai costruito.',
    domande: [
      { d: 'Come posso proteggere economicamente la mia famiglia?',
        r: 'Pensare a cosa succederebbe ai tuoi cari se venisse a mancare il tuo reddito non è piacevole, ma è un gesto di responsabilità e di cura.',
        a: 'Valutiamo insieme le esigenze della tua famiglia e le soluzioni di protezione disponibili, per scegliere quella più adatta.' },
      { d: 'Cosa succede se non posso più lavorare?',
        r: 'Un infortunio o una malattia possono ridurre o interrompere il reddito, anche per lungo tempo. È un rischio spesso sottovalutato.',
        a: 'Analizziamo quanto sei già coperto e valutiamo le soluzioni che possono proteggere il tuo reddito e il tuo tenore di vita.' },
      { d: 'Ho già una copertura assicurativa, ma è sufficiente?',
        r: 'Avere una polizza non significa sempre essere protetti nel modo giusto: le esigenze cambiano nel tempo, e le coperture dovrebbero cambiare con loro.',
        a: 'Rileggiamo insieme le coperture che hai già e verifichiamo se sono ancora adeguate alla tua situazione.' },
      { d: 'Come posso proteggere il mio patrimonio dagli imprevisti?',
        r: 'Danni alla casa, responsabilità verso altre persone o eventi inattesi possono incidere sul patrimonio costruito con fatica.',
        a: 'Individuiamo insieme i rischi principali e valutiamo le soluzioni per proteggere ciò che hai costruito.' },
    ],
    aiuto: 'Proteggersi bene significa sapere da cosa, quanto e per chi. Lo capiamo insieme, senza coperture inutili.',
    passi: ['Valutiamo le tue esigenze di protezione', 'Verifichiamo le coperture che hai già', 'Scegliamo le soluzioni più adatte'],
  },
  {
    slug: 'mutui', nome: 'Mutui', breve: 'La casa dei tuoi progetti merita una pianificazione attenta.',
    titolo: 'La casa dei tuoi progetti merita <em>una pianificazione attenta.</em>',
    intro: 'Un mutuo ti accompagna per molti anni. Sceglierlo con attenzione significa vivere la tua casa con più serenità.',
    domande: [
      { d: 'Quanto posso permettermi di spendere per acquistare casa?',
        r: 'Il prezzo della casa è solo una parte: contano anche l\'anticipo, le spese di acquisto e la rata che potrai sostenere negli anni.',
        a: 'Partendo da reddito, risparmi e progetti, definiamo insieme un budget realistico per l\'acquisto.' },
      { d: 'Quanto dovrebbe pesare la rata sul mio reddito?',
        r: 'Spesso si indica che la rata non dovrebbe superare circa un terzo del reddito netto. È un riferimento utile, ma ogni situazione è diversa.',
        a: 'Calcoliamo insieme il peso più adatto per te, considerando anche le altre spese e i tuoi obiettivi di risparmio.' },
      { d: 'Il mio mutuo attuale si può migliorare con una surroga?',
        r: 'La surroga permette di trasferire il mutuo a un\'altra banca, senza costi per te, per ottenere condizioni migliori se nel frattempo il mercato è cambiato.',
        a: 'Analizziamo il tuo mutuo attuale e valutiamo insieme se una surroga può migliorarne le condizioni.' },
      { d: 'Quale rata posso sostenere senza rinunciare ai miei progetti?',
        r: 'Una rata sostenibile sulla carta può diventare pesante se toglie spazio ai risparmi, agli imprevisti e ai progetti futuri.',
        a: 'Costruiamo insieme un piano che tenga conto della casa e di tutto il resto: famiglia, risparmio, tempo libero.' },
      { d: 'Meglio tasso fisso o variabile nella mia situazione?',
        r: 'Il tasso fisso offre una rata costante e prevedibile; il variabile segue l\'andamento dei tassi di mercato e può salire o scendere. Non esiste una scelta giusta per tutti.',
        a: 'Valutiamo insieme la durata del mutuo, la tua tranquillità rispetto alle variazioni della rata e i tuoi progetti, per capire quale soluzione è più adatta a te.' },
    ],
    aiuto: 'Prima di scegliere il mutuo, scegliamo la rata giusta per la tua vita.',
    passi: ['Definiamo un budget realistico', 'Valutiamo rata, durata e tasso', 'Verifichiamo se migliorare il mutuo attuale'],
  },
  {
    slug: 'prestiti-personali', nome: 'Prestiti personali', breve: 'Realizzare un progetto, con una scelta sostenibile.',
    titolo: 'Realizzare un progetto, <em>con una scelta finanziaria sostenibile.</em>',
    intro: 'Un\'auto, dei lavori in casa, un progetto personale: prima di decidere come finanziarlo, vale la pena capire cosa è davvero sostenibile.',
    domande: [
      { d: 'La rata è sostenibile insieme alle altre spese?',
        r: 'Una rata va considerata insieme a tutte le altre spese: casa, famiglia, imprevisti. Solo così si capisce se è davvero sostenibile.',
        a: 'Analizziamo insieme entrate e uscite per capire quale rata puoi sostenere con serenità.' },
      { d: 'È meglio utilizzare i risparmi o chiedere un finanziamento?',
        r: 'Dipende dall\'importo, dai tuoi risparmi e da quanta liquidità è bene tenere da parte per gli imprevisti. A volte conviene usare i risparmi, a volte no.',
        a: 'Confrontiamo insieme le due possibilità, valutando costi, tempi e impatto sui tuoi progetti.' },
    ],
    aiuto: 'L\'obiettivo è realizzare il tuo progetto senza mettere in difficoltà tutto il resto.',
    passi: ['Valutiamo la sostenibilità della rata', 'Confrontiamo risparmi e finanziamento', 'Scegliamo la strada più serena'],
  },
  {
    slug: 'grandi-patrimoni', nome: 'Grandi patrimoni', breve: 'Una visione d\'insieme per valorizzare il patrimonio.',
    titolo: 'Una visione d\'insieme per valorizzare <em>e pianificare il patrimonio.</em>',
    intro: 'Quando il patrimonio cresce, cresce anche la complessità. Una pianificazione completa ti aiuta a dare ordine, coerenza e continuità a ciò che hai costruito.',
    domande: [
      { d: 'Come posso organizzare meglio il mio patrimonio?',
        r: 'Conti, investimenti, immobili, partecipazioni: senza una visione d\'insieme è facile perdere coerenza tra le diverse parti del patrimonio.',
        a: 'Ricostruiamo insieme una fotografia completa del tuo patrimonio e dei tuoi obiettivi, per organizzarlo con ordine.' },
      { d: 'Come posso pianificare il passaggio generazionale?',
        r: 'Pianificare per tempo come trasmettere il patrimonio aiuta a proteggere la famiglia e a evitare incertezze future.',
        a: 'Valutiamo insieme le esigenze della tua famiglia e gli strumenti di pianificazione disponibili.' },
      { d: 'Come posso tutelare il patrimonio familiare?',
        r: 'Un patrimonio familiare va protetto dagli imprevisti e dai rischi che possono metterlo in difficoltà.',
        a: 'Individuiamo insieme i rischi principali e le soluzioni più adatte per tutelarlo.' },
      { d: 'Come posso coordinare il patrimonio personale e aziendale?',
        r: 'Per chi ha un\'impresa, patrimonio personale e aziendale sono spesso legati. Gestirli separatamente può far perdere opportunità o creare rischi.',
        a: 'Analizziamo insieme i due ambiti per costruire una strategia coerente.' },
      { d: 'Come posso avere una visione complessiva dei miei investimenti?',
        r: 'Investimenti distribuiti su più banche e strumenti diversi rendono difficile capire come stanno andando davvero le cose.',
        a: 'Costruiamo insieme una visione unica e chiara dei tuoi investimenti, da rivedere periodicamente.' },
    ],
    aiuto: 'Una pianificazione patrimoniale completa mette in relazione ogni parte del patrimonio, oggi e per chi verrà dopo.',
    passi: ['Ricostruiamo una visione d\'insieme', 'Pianifichiamo tutela e continuità', 'Coordiniamo patrimonio personale e aziendale'],
  },
  {
    slug: 'budget', nome: 'Budget e gestione del denaro', breve: 'Conoscere le proprie risorse è il primo passo.',
    titolo: 'Conoscere le proprie risorse è il primo passo <em>per pianificare.</em>',
    intro: 'Sapere quanto entra, quanto esce e quanto puoi mettere da parte ti dà libertà di scelta. Da qui nasce ogni progetto.',
    domande: [
      { d: 'Dove finiscono i miei soldi ogni mese?',
        r: 'Molte spese sono piccole e quotidiane: prese una per una sembrano poca cosa, sommate fanno la differenza.',
        a: 'Ricostruiamo insieme entrate e uscite del mese, così da vedere con chiarezza dove vanno i tuoi soldi.' },
      { d: 'Quanto dovrei mettere da parte?',
        r: 'Non esiste una cifra uguale per tutti: dipende dal reddito, dalle spese e dai tuoi obiettivi.',
        a: 'Definiamo insieme una quota di risparmio sostenibile e coerente con i tuoi progetti.' },
      { d: 'Come posso creare un fondo per gli imprevisti?',
        r: 'Un fondo per gli imprevisti è una riserva di denaro facilmente disponibile, pensata per affrontare spese inattese senza toccare i risparmi destinati ai progetti.',
        a: 'Stabiliamo insieme quanto dovrebbe essere e come costruirlo un passo alla volta.' },
      { d: 'Come posso organizzare le spese familiari?',
        r: 'Con più persone e più esigenze, le spese di famiglia possono diventare difficili da seguire.',
        a: 'Ti aiuto a organizzarle per categorie e priorità, con un metodo semplice da mantenere.' },
    ],
    aiuto: 'Un buon budget non è una rinuncia: è lo strumento che ti permette di scegliere.',
    passi: ['Mettiamo in fila entrate e uscite', 'Fissiamo un obiettivo di risparmio', 'Costruiamo un fondo per gli imprevisti'],
  },
];

/* ------------------------------------------------------------------ */
/* Pezzi comuni                                                        */
/* ------------------------------------------------------------------ */
const freccia = '<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M1 7h12M8 2l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.3"/></svg>';
const icona = '<svg viewBox="0 0 32 32" aria-hidden="true"><use href="#icona-wa"/></svg>';
const esc = s => s.replace(/<[^>]+>/g, '');

function testata(b, attiva) {
  const corr = k => (attiva === k ? ' aria-current="page"' : '');
  const tendina = SERVIZI.map(s => `<a href="${b}servizi/${s.slug}/"${corr(s.slug)}><b>${s.nome}</b><span>${s.breve}</span></a>`).join('\n            ');
  return `<header class="testata">
  <div class="contenitore">
    <a href="${b}" class="marchio" aria-label="Rachele Stermieri, homepage"><b>Rachele Stermieri</b><small>Consulente finanziaria</small></a>
    <button class="apri-menu" type="button" aria-label="Apri il menu" aria-expanded="false" aria-controls="menu"><span></span></button>
    <nav aria-label="Menu principale">
      <ul class="menu" id="menu">
        <li><a href="${b}chi-sono/"${corr('chi-sono')}>Chi sono</a></li>
        <li><a href="${b}metodo/"${corr('metodo')}>Il mio metodo</a></li>
        <li class="con-tendina">
          <button class="voce" type="button" aria-expanded="false" aria-controls="tendina-servizi">Servizi <svg viewBox="0 0 10 10" aria-hidden="true"><path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.4"/></svg></button>
          <div class="tendina" id="tendina-servizi">
            ${tendina}
            <a href="${b}servizi/" class="tutti">Tutti i servizi →</a>
          </div>
        </li>
        <li><a href="${b}approfondimenti/"${corr('approfondimenti')}>Approfondimenti</a></li>
        <li><a href="${b}contatti/"${corr('contatti')} class="btn btn-pieno">Primo incontro</a></li>
      </ul>
    </nav>
  </div>
</header>`;
}

function piede(b) {
  return `<footer class="piede">
  <div class="contenitore">
    <div class="piede-griglia">
      <div>
        <a href="${b}" class="marchio"><b>Rachele Stermieri</b><small>Consulente finanziaria</small></a>
        <p class="motto">I tuoi progetti meritano un piano.</p>
      </div>
      <div><h4>Sito</h4><ul><li><a href="${b}chi-sono/">Chi sono</a></li><li><a href="${b}metodo/">Il mio metodo</a></li><li><a href="${b}servizi/">Servizi</a></li><li><a href="${b}approfondimenti/">Approfondimenti</a></li><li><a href="${b}contatti/">Contatti</a></li></ul></div>
      <div><h4>Contatti</h4><ul><li><a href="tel:${TELEFONO_LINK}">${TELEFONO}</a></li><li><a href="#" data-whatsapp>Scrivimi su WhatsApp</a></li><li><a href="mailto:rachele.stermieri@bancamediolanum.it">rachele.stermieri@bancamediolanum.it</a></li><li>In presenza e online</li></ul></div>
    </div>
    <div class="normativa">
      <p class="dati-prof">Rachele Stermieri · Banker Consultant di Banca Mediolanum S.p.A. · Consulente finanziaria abilitata all'offerta fuori sede, iscritta all'Albo unico dei consulenti finanziari (OCF) n° 2853 · P. IVA 04232100364</p>
      <p>I contenuti di questo sito hanno finalità esclusivamente informative e non costituiscono consulenza personalizzata, raccomandazione, sollecitazione all'investimento né offerta di prodotti o servizi finanziari. Le simulazioni sono indicative e non rappresentano una previsione né una garanzia di risultati futuri.</p>
    </div>
    <div class="piede-fondo">
      <span>© <span data-anno>2026</span> Rachele Stermieri</span>
      <nav aria-label="Informazioni legali"><a href="${b}privacy/">Privacy policy</a><a href="${b}cookie/">Cookie policy</a><a href="${b}note-legali/">Note legali</a></nav>
    </div>
  </div>
</footer>

<a href="#" data-whatsapp class="wa" aria-label="Scrivi a Rachele su WhatsApp">${icona}</a>

<svg width="0" height="0" style="position:absolute" aria-hidden="true"><symbol id="icona-wa" viewBox="0 0 32 32"><path fill="currentColor" d="M16 3C8.8 3 3 8.7 3 15.8c0 2.5.7 4.9 2 6.9L3 29l6.5-2c1.9 1 4.1 1.6 6.4 1.6 7.2 0 13-5.7 13-12.8S23.2 3 16 3zm0 23.3c-2 0-4-.6-5.7-1.6l-.4-.2-3.9 1.2 1.2-3.7-.3-.4c-1.2-1.7-1.8-3.7-1.8-5.8C5.1 10 10 5.2 16 5.2S26.9 10 26.9 15.8 22 26.3 16 26.3zm6-7.8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.2-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.2 3.1 1.3 3.3c.2.2 2.3 3.5 5.6 4.9 2.8 1.1 3.3.9 3.9.8.6-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z"/></symbol></svg>`;
}

function chiusura(b, titolo = 'I tuoi progetti <em>meritano un piano.</em>', testo = 'Raccontami da dove vuoi partire. Ci incontriamo in ufficio oppure online, con calma.') {
  return `<section class="finale sezione-crema">
  <div class="contenitore">
    <p class="occhiello compare">Iniziamo</p>
    <h2 class="compare d1">${titolo}</h2>
    <p class="compare d2">${testo}</p>
    <div class="azioni compare d3">
      <a href="${b}contatti/" class="btn btn-pieno">Richiedi un incontro</a>
      <a href="#" data-whatsapp class="btn btn-linea">${icona}Scrivimi su WhatsApp</a>
    </div>
  </div>
</section>`;
}

function pagina({ percorso, titolo, descrizione, attiva = '', corpo, script = [], indicizza = true, stato = '', classe = '' }) {
  const prof = percorso === '' ? 0 : percorso.split('/').filter(Boolean).length;
  const b = '../'.repeat(prof) || './';
  const url = `${DOMINIO}/${percorso}`;
  const html = `<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${titolo}</title>
<meta name="description" content="${descrizione}">
${indicizza ? `<link rel="canonical" href="${url}">` : '<meta name="robots" content="noindex">'}
<meta name="theme-color" content="#F8FAFC">
<meta property="og:type" content="website">
<meta property="og:locale" content="it_IT">
<meta property="og:site_name" content="Rachele Stermieri · Consulente finanziaria">
<meta property="og:title" content="${titolo}">
<meta property="og:description" content="${descrizione}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${DOMINIO}/img/rachele-ritratto.jpg">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='16' fill='%2300436C'/%3E%3Ctext x='16' y='21.5' font-size='14' text-anchor='middle' fill='%23F8FAFC' font-family='Georgia,serif' font-style='italic'%3ERS%3C/text%3E%3C/svg%3E">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Manrope:wght@300;400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${b}assets/stile.css">${stato}
</head>
<body${classe ? ` class="${classe}"` : ''}>
<a class="salta" href="#contenuto">Vai al contenuto</a>

${testata(b, attiva)}

<main id="contenuto">
${corpo(b)}
</main>

${piede(b)}

<script src="${b}assets/sito.js" defer></script>
${script.map(s => `<script src="${b}assets/${s}" defer></script>`).join('\n')}
</body>
</html>
`;
  const file = join(RADICE, percorso, 'index.html');
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
  return percorso;
}

function testaPagina(b, { briciole = [], occhiello, titolo, intro }) {
  const br = briciole.length
    ? `<nav class="briciole compare" aria-label="Sei qui"><a href="${b}">Home</a>${briciole.map(([n, h]) => h ? `<span aria-hidden="true">/</span><a href="${b}${h}">${n}</a>` : `<span aria-hidden="true">/</span><span>${n}</span>`).join('')}</nav>`
    : '';
  return `<section class="testa-pagina">
  <div class="contenitore">
    <div>${br}
      <p class="occhiello compare">${occhiello}</p>
      <h1 class="compare d1">${titolo}</h1>
    </div>
    <p class="intro compare d2">${intro}</p>
  </div>
</section>`;
}

function grigliaServizi(b) {
  return `<div class="servizi">
      ${SERVIZI.map((s, i) => `<a class="servizio compare${['', ' d1', ' d2'][i % 3]}" href="${b}servizi/${s.slug}/"><span class="n">${String(i + 1).padStart(2, '0')}</span><span class="freccia" aria-hidden="true">${freccia}</span><h3>${s.nome}</h3><p>${s.breve}</p></a>`).join('\n      ')}
    </div>`;
}

const FASI = [
  ['Ascolto', 'Conoscere la persona, la sua storia e i suoi progetti.'],
  ['Analisi', 'Comprendere la situazione economica e patrimoniale, le risorse e le priorità.'],
  ['Pianificazione', 'Costruire un percorso coerente con le tue esigenze, le tue possibilità e il tuo profilo di rischio.'],
  ['Accompagnamento', 'Seguirti nel tempo, attraverso il dialogo e verifiche periodiche.'],
];
const FRASE_METODO = '«Non esiste un unico percorso valido per tutti. Esiste un percorso da costruire intorno a ogni persona.»';
const FORMAZIONE = ['Laurea in Economia Aziendale e Management', 'Master in Gestione d\'Impresa', 'Formazione professionale in ambito finanziario'];

const generate = [];

/* ------------------------------------------------------------------ */
/* Home                                                                */
/* ------------------------------------------------------------------ */
generate.push(pagina({
  percorso: '', classe: 'home',
  titolo: 'Rachele Stermieri · Consulente finanziaria — I tuoi progetti meritano un piano',
  descrizione: 'Rachele Stermieri, consulente finanziaria. Risparmio, investimenti, previdenza, protezione, mutui e pianificazione patrimoniale: un percorso costruito intorno a te, in presenza e online.',
  stato: `\n<link rel="preload" as="image" href="img/rachele-ritratto.jpg">\n<script type="application/ld+json">{"@context":"https://schema.org","@type":"FinancialService","name":"Rachele Stermieri · Consulente finanziaria","url":"${DOMINIO}/","telephone":"${TELEFONO}","email":"rachele.stermieri@bancamediolanum.it","image":"${DOMINIO}/img/rachele-ritratto.jpg","areaServed":"IT","slogan":"I tuoi progetti meritano un piano."}</script>`,
  corpo: b => `
<section class="eroe">
  <div class="eroe-foto" aria-hidden="true"><img src="${b}img/rachele-ritratto.jpg" alt="" width="1021" height="1540" fetchpriority="high"></div>
  <div class="eroe-velo" aria-hidden="true"></div>
  <div class="contenitore eroe-testo">
    <p class="occhiello entra"><span class="solo-largo">Rachele Stermieri · </span>Consulente finanziaria</p>
    <h1 class="entra e1">I tuoi progetti<br><em>meritano un piano.</em></h1>
    <p class="eroe-sotto entra e2">Prima di parlare di numeri, ascolto le persone.</p>
    <div class="azioni entra e3">
      <a href="${b}contatti/" class="btn btn-chiaro">Inizia a pianificare il tuo futuro</a>
      <a href="#" data-whatsapp class="btn btn-vetro solo-largo">${icona}WhatsApp</a>
    </div>
    <ul class="eroe-dati entra e4">
      <li><b>9</b><span>Aree di consulenza</span></li>
      <li><b>OCF</b><span>Albo n° 2853</span></li>
      <li><b>Online</b><span>e di persona</span></li>
    </ul>
  </div>
  <a href="#servizi" class="scendi" aria-label="Scorri ai servizi"><span></span></a>
</section>

<section class="sezione servizi-home" id="servizi">
  <div class="contenitore">
    <div class="testa-sezione compare"><h2>Di cosa possiamo <em>parlare.</em></h2><a href="${b}servizi/" class="collegamento">Tutti i servizi <span aria-hidden="true">→</span></a></div>
    <ul class="pillole">
      ${SERVIZI.map((s, i) => `<li class="compare" style="--i:${i}"><a href="${b}servizi/${s.slug}/">${s.nome}${freccia}</a></li>`).join('\n      ')}
    </ul>
  </div>
</section>

<section class="banda">
  <div class="banda-foto" aria-hidden="true"><img src="${b}img/rachele.jpg" alt="" width="440" height="550" loading="lazy"></div>
  <div class="contenitore banda-testo">
    <blockquote class="compare">Non esiste un unico percorso. <em>Esiste il tuo.</em></blockquote>
    <div class="azioni compare d1"><a href="${b}metodo/" class="btn btn-chiaro">Il mio metodo</a><a href="${b}chi-sono/" class="collegamento">Chi sono <span aria-hidden="true">→</span></a></div>
  </div>
</section>`,
}));

/* ------------------------------------------------------------------ */
/* Chi sono                                                            */
/* ------------------------------------------------------------------ */
generate.push(pagina({
  percorso: 'chi-sono/', attiva: 'chi-sono',
  titolo: 'Chi sono · Rachele Stermieri, consulente finanziaria',
  descrizione: 'Rachele Stermieri, consulente finanziaria: prima di parlare di numeri, ascolto le persone. Il mio approccio e la mia formazione.',
  corpo: b => `
${testaPagina(b, { briciole: [['Chi sono']], occhiello: 'Chi sono', titolo: 'Prima di parlare di numeri, <em>ascolto le persone.</em>', intro: 'Sono Rachele Stermieri, consulente finanziaria. Accompagno persone, famiglie e imprenditori nelle scelte che riguardano il loro denaro e i loro progetti.' })}

<section class="sezione chi-blocco">
  <div class="contenitore">
    <figure class="arco compare"><img src="${b}img/rachele-ritratto.jpg" alt="Rachele Stermieri" width="1021" height="1540"></figure>
    <div class="testo compare d1">
      <h2>Il mio lavoro parte <em>dalle persone, non dai prodotti.</em></h2>
      <p>Ogni persona ha una storia, delle esigenze e dei desideri diversi. Per questo il primo incontro è dedicato ad ascoltarti. Poi costruiamo insieme un percorso coerente con ciò che desideri, e lo seguiamo nel tempo.</p>
      <ul class="formazione">${FORMAZIONE.map(f => `<li>${f}</li>`).join('')}</ul>
      <div class="azioni" style="margin-top:0"><a href="${b}contatti/" class="btn btn-pieno">Conosciamoci</a><a href="${b}metodo/" class="collegamento">Il mio metodo <span aria-hidden="true">→</span></a></div>
    </div>
  </div>
</section>`,
}));

/* ------------------------------------------------------------------ */
/* Metodo                                                              */
/* ------------------------------------------------------------------ */
const FASI_DETTAGLIO = [
  ['Ascolto', 'Conoscere la persona, la sua storia e i suoi progetti.', 'Il primo incontro è dedicato a te: a cosa desideri, a cosa ti preoccupa, a dove vuoi arrivare. Prima di parlare di numeri, voglio capire chi sei.'],
  ['Analisi', 'Comprendere la situazione economica e patrimoniale, le risorse e le priorità.', 'Guardiamo insieme entrate, spese, risparmi, investimenti e coperture già presenti, per avere una fotografia chiara del punto di partenza.'],
  ['Pianificazione', 'Costruire un percorso coerente con le esigenze, le possibilità e il profilo di rischio.', 'Ti propongo un percorso pensato su di te, spiegato con parole semplici, perché ogni scelta sia chiara prima di essere presa.'],
  ['Accompagnamento', 'Seguire la persona nel tempo, attraverso il dialogo e verifiche periodiche.', 'La vita cambia e il piano cambia con te. Ci rivediamo con regolarità per verificare che il percorso sia sempre quello giusto.'],
];
generate.push(pagina({
  percorso: 'metodo/', attiva: 'metodo',
  titolo: 'Il mio metodo · Rachele Stermieri, consulente finanziaria',
  descrizione: 'Ascolto, analisi, pianificazione e accompagnamento: il metodo di Rachele Stermieri per costruire un percorso finanziario intorno a ogni persona.',
  corpo: b => `
${testaPagina(b, { briciole: [['Il mio metodo']], occhiello: 'Il mio metodo', titolo: 'Un percorso <em>costruito intorno a te.</em>', intro: 'Non esiste un unico percorso valido per tutti. Esiste un percorso da costruire intorno a ogni persona.' })}

<section class="sezione metodo-blocco">
  <div class="contenitore">
    <div class="fisso compare">
      <p class="occhiello">Quattro fasi</p>
      <h2>Dalla tua storia <em>al tuo piano.</em></h2>
      <p class="frase">${FRASE_METODO}</p>
      <a href="${b}contatti/" class="btn btn-pieno">Inizia dal primo incontro</a>
    </div>
    <ol class="fasi">
      ${FASI_DETTAGLIO.map(([t, d, e]) => `<li class="compare"><div><h3>${t}</h3><p><strong style="font-weight:500;color:var(--blu)">${d}</strong></p><p>${e}</p></div></li>`).join('\n      ')}
    </ol>
  </div>
</section>`,
}));

/* ------------------------------------------------------------------ */
/* Servizi: elenco                                                     */
/* ------------------------------------------------------------------ */
generate.push(pagina({
  percorso: 'servizi/', attiva: 'servizi',
  titolo: 'Servizi · Rachele Stermieri, consulente finanziaria',
  descrizione: 'Conto corrente, piano di accumulo, investimenti, previdenza, protezione, mutui, prestiti personali, grandi patrimoni e budget: le domande concrete e come posso aiutarti.',
  corpo: b => `
${testaPagina(b, { briciole: [['Servizi']], occhiello: 'Servizi', titolo: 'Di cosa possiamo <em>parlare insieme.</em>', intro: 'Ogni servizio parte dalle domande che ti fai davvero. Scegli quello che ti riguarda: troverai risposte semplici e come posso aiutarti.' })}

<section class="sezione">
  <div class="contenitore">
    ${grigliaServizi(b)}
  </div>
</section>`,
}));

/* ------------------------------------------------------------------ */
/* Servizi: pagine singole                                             */
/* ------------------------------------------------------------------ */
const CALCOLATORE = `
<section class="sezione" id="calcolatore">
  <div class="contenitore">
    <div class="testa-sezione compare">
      <div><p class="occhiello">Calcolatore PAC</p><h2>Prova a fare <em>una simulazione.</em></h2><p class="intro">Inserisci i tuoi valori: il calcolo si aggiorna mentre scrivi.</p></div>
    </div>
    <div class="calcolatore compare">
      <form class="calc-campi" id="calc" novalidate>
        <div class="calc-campo"><label for="c-iniziale">Capitale iniziale</label><div class="entrata"><input id="c-iniziale" type="number" inputmode="decimal" min="0" step="100" value="1000"><span class="unita">€</span></div></div>
        <div class="calc-campo"><label for="c-mensile">Versamento mensile</label><div class="entrata"><input id="c-mensile" type="number" inputmode="decimal" min="0" step="10" value="100"><span class="unita">€</span></div></div>
        <div class="calc-campo"><label for="c-rendimento">Rendimento annuo</label><div class="entrata"><input id="c-rendimento" type="number" inputmode="decimal" min="-20" max="20" step="0.1" value="3"><span class="unita">%</span></div><small>Il valore lo scegli tu: non è una previsione.</small></div>
        <div class="calc-campo"><label for="c-anni">Durata</label><div class="entrata"><input id="c-anni" type="number" inputmode="numeric" min="1" max="50" step="1" value="20"><span class="unita">anni</span></div></div>
      </form>
      <div class="calc-risultati" aria-live="polite">
        <div class="cifre">
          <div class="cifra"><small>Capitale versato</small><b id="r-versato">—</b></div>
          <div class="cifra"><small>Interessi</small><b id="r-interessi">—</b></div>
          <div class="cifra finale-c"><small>Capitale finale</small><b id="r-finale">—</b></div>
        </div>
        <div class="grafico-calc"><svg id="c-grafico" viewBox="0 0 640 280" role="img" aria-label="Grafico: capitale versato e interessi anno per anno"></svg>
          <div class="legenda"><span><i style="background:#00436C"></i>Capitale versato</span><span><i style="background:#6CADDF"></i>Interessi</span></div>
        </div>
        <details class="tabella-anni">
          <summary>Tabella anno per anno</summary>
          <div class="scorri-tabella"><table><thead><tr><th scope="col">Anno</th><th scope="col">Capitale versato</th><th scope="col">Interessi</th><th scope="col">Capitale finale</th></tr></thead><tbody id="c-tabella"></tbody></table></div>
        </details>
        <p class="nota-calc">Questa è una simulazione basata sul rendimento che hai inserito: non è una previsione né un risultato garantito. Il calcolo considera la capitalizzazione mensile e i versamenti a fine mese; non tiene conto di imposte, costi, inflazione e oscillazioni dei mercati.</p>
      </div>
    </div>
  </div>
</section>`;

SERVIZI.forEach((s, i) => {
  generate.push(pagina({
    percorso: `servizi/${s.slug}/`, attiva: s.slug,
    titolo: `${s.nome} · Rachele Stermieri, consulente finanziaria`,
    descrizione: `${esc(s.titolo)} ${s.intro}`.slice(0, 158),
    script: s.calcolatore ? ['calcolatore.js'] : [],
    corpo: b => `
${testaPagina(b, { briciole: [['Servizi', 'servizi/'], [s.nome]], occhiello: s.nome, titolo: s.titolo, intro: s.intro })}

<section class="sezione">
  <div class="contenitore domande-griglia">
    <div class="fisso compare">
      <p class="occhiello">Le tue domande</p>
      <h2>Ti riconosci in <em>queste situazioni?</em></h2>
      <p>Apri ${s.domande.length > 1 ? 'una domanda' : 'la domanda'}: troverai una risposta semplice e come posso aiutarti.</p>
    </div>
    <div class="domande compare d1">
      ${s.domande.map((q, k) => `<details class="domanda"${k === 0 ? ' open' : ''}>
        <summary>${q.d}<span class="segno" aria-hidden="true"></span></summary>
        <div class="risposta">
          <p>${q.r}</p>
          <div class="aiuto"><b>Come posso aiutarti</b>${q.a}</div>
          <a href="${b}contatti/" class="collegamento">Approfondiamolo insieme <span aria-hidden="true">→</span></a>
        </div>
      </details>`).join('\n      ')}
    </div>
  </div>
</section>
${s.calcolatore ? CALCOLATORE : ''}
<section class="sezione sezione-crema aiuto-blocco">
  <div class="contenitore">
    <div class="testo compare">
      <p class="occhiello">Come posso aiutarti</p>
      <h2>Un aiuto <em>concreto.</em></h2>
      <p>${s.aiuto}</p>
      <div class="azioni"><a href="${b}contatti/" class="btn btn-pieno">Parliamone insieme</a><a href="#" data-whatsapp class="collegamento">Scrivimi su WhatsApp <span aria-hidden="true">→</span></a></div>
    </div>
    <ol class="passi compare d1">${s.passi.map((p, k) => `<li><span>${k + 1}</span>${p}</li>`).join('')}</ol>
  </div>
</section>`,
  }));
});

/* ------------------------------------------------------------------ */
/* Approfondimenti                                                     */
/* ------------------------------------------------------------------ */
generate.push(pagina({
  percorso: 'approfondimenti/', attiva: 'approfondimenti',
  titolo: 'Approfondimenti · Rachele Stermieri, consulente finanziaria',
  descrizione: 'Strumenti e brevi letture per orientarti con più consapevolezza nelle scelte sul tuo denaro.',
  corpo: b => `
${testaPagina(b, { briciole: [['Approfondimenti']], occhiello: 'Approfondimenti', titolo: 'Per orientarti <em>con più consapevolezza.</em>', intro: 'Strumenti e brevi letture per capire meglio le scelte che riguardano il tuo denaro.' })}

<section class="sezione">
  <div class="contenitore">
    <a class="scheda-strumento compare" href="${b}servizi/piano-di-accumulo/#calcolatore">
      <div>
        <p class="occhiello">Strumento</p>
        <h2>Calcolatore <em>piano di accumulo.</em></h2>
        <p>Simula un piano di accumulo con il tuo capitale iniziale, il versamento mensile, il rendimento e la durata che scegli tu.</p>
        <span class="btn btn-pieno" style="margin-top:28px">Prova il calcolatore</span>
      </div>
      <svg viewBox="0 0 400 260" aria-hidden="true"><g stroke="#B8CFE3" stroke-dasharray="2 6"><line x1="0" x2="400" y1="65" y2="65"/><line x1="0" x2="400" y1="130" y2="130"/><line x1="0" x2="400" y1="195" y2="195"/></g><path d="M0 250 C120 240 220 205 300 150 S380 50 400 30 L400 260 L0 260Z" fill="#34739F" fill-opacity=".14"/><path d="M0 250 C120 240 220 205 300 150 S380 50 400 30" fill="none" stroke="#34739F" stroke-width="2.5"/><path d="M0 250 L400 135" fill="none" stroke="#00436C" stroke-opacity=".45" stroke-width="1.5" stroke-dasharray="5 5"/><circle cx="400" cy="30" r="6" fill="#00436C"/></svg>
    </a>
    <div class="in-arrivo compare"><b>Nuovi approfondimenti in arrivo</b>Presto qui troverai brevi articoli su risparmio, previdenza e pianificazione.</div>
  </div>
</section>`,
}));

/* ------------------------------------------------------------------ */
/* Contatti                                                            */
/* ------------------------------------------------------------------ */
generate.push(pagina({
  percorso: 'contatti/', attiva: 'contatti',
  titolo: 'Contatti · Rachele Stermieri, consulente finanziaria',
  descrizione: 'Contatta Rachele Stermieri, consulente finanziaria: raccontami la tua esigenza e inizia a pianificare il tuo futuro. Incontri in presenza e online.',
  script: ['contatti.js'],
  corpo: b => `
${testaPagina(b, { briciole: [['Contatti']], occhiello: 'Contatti', titolo: 'Parliamo dei <em>tuoi progetti.</em>', intro: 'Raccontami in poche righe la tua esigenza: ti ricontatterò per fissare un primo incontro, in ufficio oppure online.' })}

<section class="sezione">
  <div class="contenitore contatti-griglia">
    <div class="compare">
      <p class="occhiello">Recapiti</p>
      <h2>Come <em>contattarmi.</em></h2>
      <ul class="recapiti">
        <li><small>Telefono</small><a href="tel:${TELEFONO_LINK}">${TELEFONO}</a></li>
        <li><small>WhatsApp</small><a href="#" data-whatsapp>Scrivimi su WhatsApp</a></li>
        <li><small>Email</small><a href="mailto:rachele.stermieri@bancamediolanum.it" style="font-size:clamp(16px,4.4vw,21px);word-break:break-all">rachele.stermieri@bancamediolanum.it</a></li>
        <li><small>Incontri</small><span>In presenza e online</span></li>
      </ul>
    </div>
    <div class="compare d1">
      <noscript><p>Per richiedere un incontro, usa il telefono o l’email indicati nei recapiti.</p></noscript>
      <form class="modulo" id="modulo-contatti" hidden aria-labelledby="titolo-modulo">
        <h2 id="titolo-modulo">Richiedi un incontro</h2>
        <div class="campi">
          <div class="riga">
            <div class="campo"><label for="nome">Nome</label><input id="nome" name="nome" required autocomplete="given-name"></div>
            <div class="campo"><label for="cognome">Cognome</label><input id="cognome" name="cognome" required autocomplete="family-name"></div>
          </div>
          <div class="riga">
            <div class="campo"><label for="email">Email</label><input id="email" name="email" type="email" required autocomplete="email"></div>
            <div class="campo"><label for="telefono">Telefono <span>(facoltativo)</span></label><input id="telefono" name="telefono" type="tel" autocomplete="tel"></div>
          </div>
          <div class="campo"><label for="esigenza">Raccontami la tua esigenza</label><textarea id="esigenza" name="esigenza" required placeholder="Ad esempio: vorrei iniziare a risparmiare per l'acquisto di una casa…"></textarea></div>
          <label class="consenso"><input type="checkbox" id="privacy" name="privacy" required> <span>Ho letto l'<a href="${b}privacy/">informativa privacy</a> e acconsento al trattamento dei miei dati per essere ricontattata/o.</span></label>
          <p class="modulo-info" id="modulo-info">Il pulsante prepara un messaggio che potrai inviare da WhatsApp.</p>
          <button type="submit" class="btn btn-pieno" aria-describedby="modulo-info">Continua su WhatsApp</button>
          <p class="modulo-info" data-esito-whatsapp role="status"></p>
        </div>
        <div class="esito" role="status"><h3>Grazie!</h3><p>Ho ricevuto la tua richiesta. Ti ricontatterò al più presto.</p></div>
      </form>
    </div>
  </div>
  <div class="contenitore calendario" id="calendario">
    <p class="occhiello">Prenota un incontro</p>
    <h2>Scegli <em>il momento migliore.</em></h2>
    <div id="calendario-contenuto" style="margin-top:32px"></div>
  </div>
</section>`,
}));

/* ------------------------------------------------------------------ */
/* Pagine legali (bozze)                                               */
/* ------------------------------------------------------------------ */
const BOZZA = '<p class="avviso-bozza"><strong>Bozza da completare.</strong> Questo testo è un modello: va completato con i dati del titolare e verificato da un legale e dalla Compliance dell\'intermediario prima della pubblicazione.</p>';
const legali = [
  { percorso: 'privacy/', nome: 'Privacy policy', titolo: 'Informativa <em>privacy.</em>', intro: 'Come vengono trattati i dati personali raccolti attraverso questo sito.', testo: `${BOZZA}
<h2>Titolare del trattamento</h2><p>Rachele Stermieri · [indirizzo] · <a href="mailto:rachele.stermieri@bancamediolanum.it">rachele.stermieri@bancamediolanum.it</a> · P. IVA 04232100364.</p>
<h2>Dati raccolti</h2><p>Dati che invii volontariamente attraverso il modulo di contatto o i recapiti indicati (nome, cognome, email, telefono, contenuto del messaggio), e dati tecnici di navigazione necessari al funzionamento del sito.</p>
<h2>Finalità e base giuridica</h2><p>Rispondere alle tue richieste e ricontattarti (misure precontrattuali e consenso). I dati non vengono usati per finalità di marketing senza un tuo specifico consenso.</p>
<h2>Conservazione</h2><p>[Periodo di conservazione da definire.]</p>
<h2>Destinatari</h2><p>[Fornitori di servizi tecnici, ad esempio hosting e invio del modulo, da indicare.]</p>
<h2>I tuoi diritti</h2><p>Puoi chiedere accesso, rettifica, cancellazione, limitazione, portabilità e opposizione al trattamento, scrivendo a <a href="mailto:rachele.stermieri@bancamediolanum.it">rachele.stermieri@bancamediolanum.it</a>. Hai inoltre il diritto di proporre reclamo al Garante per la protezione dei dati personali.</p>` },
  { percorso: 'cookie/', nome: 'Cookie policy', titolo: 'Cookie <em>policy.</em>', intro: 'Quali cookie e servizi esterni utilizza questo sito.', testo: `${BOZZA}
<h2>Cookie tecnici</h2><p>Il sito non utilizza cookie di profilazione né strumenti di statistica. Eventuali cookie tecnici servono solo al corretto funzionamento delle pagine.</p>
<h2>Servizi esterni</h2><p>Per mostrare i caratteri tipografici il sito utilizza Google Fonts: il tuo browser si collega ai server di Google, che possono ricevere dati tecnici come l'indirizzo IP. [Valutare l'ospitalità dei caratteri direttamente sul sito.]</p><p>I pulsanti WhatsApp aprono il servizio di WhatsApp solo se scegli di utilizzarli.</p>
<h2>Come gestire i cookie</h2><p>Puoi gestire o eliminare i cookie dalle impostazioni del tuo browser.</p>` },
  { percorso: 'note-legali/', nome: 'Note legali', titolo: 'Note <em>legali.</em>', intro: 'Informazioni professionali e avvertenze sull\'uso dei contenuti del sito.', testo: `${BOZZA}
<h2>Informazioni professionali</h2><p>Rachele Stermieri · Banker Consultant di Banca Mediolanum S.p.A. · Consulente finanziaria abilitata all'offerta fuori sede, iscritta all'Albo unico dei consulenti finanziari (OCF), sezione consulenti finanziari abilitati all'offerta fuori sede, n° 2853 · P. IVA 04232100364 · <a href="mailto:rachele.stermieri@bancamediolanum.it">rachele.stermieri@bancamediolanum.it</a></p>
<h2>Avvertenze</h2><p>I contenuti di questo sito hanno finalità esclusivamente informative e non costituiscono consulenza personalizzata, raccomandazione, sollecitazione all'investimento né offerta di prodotti o servizi finanziari. Prima di qualsiasi decisione è necessario leggere la documentazione informativa dei prodotti.</p>
<h2>Simulazioni</h2><p>Le simulazioni presenti nel sito sono indicative, si basano sui valori inseriti dall'utente e non rappresentano una previsione né una garanzia di risultati futuri. Non considerano imposte, costi, inflazione e oscillazioni dei mercati.</p>
<h2>Proprietà dei contenuti</h2><p>Testi e immagini sono di proprietà di Rachele Stermieri e non possono essere riprodotti senza autorizzazione.</p>` },
];
legali.forEach(l => generate.push(pagina({
  percorso: l.percorso,
  titolo: `${l.nome} · Rachele Stermieri`,
  descrizione: l.intro,
  corpo: b => `
${testaPagina(b, { briciole: [[l.nome]], occhiello: l.nome, titolo: l.titolo, intro: l.intro })}
<section class="sezione"><div class="contenitore"><div class="testo-legale compare">${l.testo}</div></div></section>`,
})));

/* ------------------------------------------------------------------ */
/* Pagina 404, mappa del sito, robots                                  */
/* ------------------------------------------------------------------ */
{
  // La 404 usa percorsi assoluti dalla radice del dominio, perché può comparire a qualunque indirizzo.
  pagina({
    percorso: '404-tmp/', titolo: 'Pagina non trovata · Rachele Stermieri', descrizione: 'La pagina che cerchi non esiste.', indicizza: false,
    corpo: b => `
${testaPagina(b, { occhiello: 'Errore 404', titolo: 'Questa pagina <em>non esiste.</em>', intro: 'Forse l\'indirizzo è cambiato. Puoi tornare alla homepage o scoprire i servizi.' })}
<section class="sezione"><div class="contenitore azioni" style="margin-top:0"><a href="${b}" class="btn btn-pieno">Torna alla homepage</a><a href="${b}servizi/" class="collegamento">Vedi i servizi <span aria-hidden="true">→</span></a></div></section>`,
  });
  const { readFileSync, rmSync } = await import('node:fs');
  const temp = join(RADICE, '404-tmp', 'index.html');
  writeFileSync(join(RADICE, '404.html'), readFileSync(temp, 'utf8').replaceAll('"../', '"/'));
  rmSync(join(RADICE, '404-tmp'), { recursive: true });
}

const oggi = new Date().toISOString().slice(0, 10);
writeFileSync(join(RADICE, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${generate.map(p => `  <url><loc>${DOMINIO}/${p}</loc><lastmod>${oggi}</lastmod></url>`).join('\n')}
</urlset>
`);
writeFileSync(join(RADICE, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${DOMINIO}/sitemap.xml\n`);

console.log(`Pagine generate: ${generate.length} + 404`);
