import type { SiteContent } from '../types';

export const it: SiteContent = {
  meta: {
    homeTitle: 'JSON Diff Checker — Confronta due file JSON nel tuo browser',
    homeDescription:
      'Incolla, carica o importa due documenti JSON e vedi esattamente cosa è cambiato — chiavi aggiunte, chiavi rimosse e valori modificati, evidenziati in un albero comprimibile. Funziona interamente nel tuo browser.',
  },
  nav: {
    brand: 'JSON Diff Checker',
    brandShort: 'JSON Diff',
    tool: 'Strumento',
    features: 'Funzionalità',
    privacy: 'Privacy',
    faq: 'FAQ',
    about: 'Chi siamo',
    openTool: 'Apri lo strumento',
    openMenu: 'Apri il menu',
    closeMenu: 'Chiudi il menu',
    toggleTheme: 'Attiva/disattiva la modalità scura',
    primaryNavLabel: 'Primaria',
    secondaryNavLabel: 'Secondaria',
    languageLabel: 'Lingua',
  },
  hero: {
    badge: '100% lato client · i tuoi dati non lasciano mai il tuo browser',
    titleLine1: 'Confronta JSON.',
    titleLine2: 'Vedi ogni differenza all\'istante.',
    subtitle:
      'Incolla, carica o importa due documenti JSON e ottieni un diff preciso e con codifica a colori — chiavi aggiunte, chiavi rimosse e valori modificati — senza che un solo byte lasci la tua macchina.',
    ctaPrimary: 'Inizia a confrontare',
    ctaSecondary: 'Guarda cosa è diverso',
    aboutUs: 'Chi siamo',
    contactUs: 'Contattaci',
    privacyPolicy: 'Informativa sulla privacy',
    terms: 'Termini e condizioni',
  },
  tool: {
    eyebrow: 'Lo strumento',
    heading: 'Incolla il tuo JSON su entrambi i lati per confrontare',
    note: 'Funziona interamente in questa scheda — nulla viene caricato.',
  },
  features: {
    eyebrow: 'Funzionalità',
    heading: 'Tutto ciò di cui hai bisogno, niente di superfluo',
    items: [
      {
        title: 'Messaggi di errore precisi alla riga',
        body: 'JSON non valido? Ottieni la riga e la colonna esatte, non un errore vago. Correggi gli errori in pochi secondi invece di cercare in un testo minificato.',
      },
      {
        title: 'Carica, incolla o importa da un URL',
        body: 'Trascina un file .json, incolla testo grezzo o recupera un documento direttamente da un endpoint API — a seconda di ciò che è più veloce per il tuo flusso di lavoro.',
      },
      {
        title: 'Riepilogo del diff e navigazione da tastiera',
        body: 'Vedi a colpo d\'occhio il conteggio delle chiavi aggiunte, rimosse e modificate, poi spostati tra di esse con Invio / Shift+Invio senza toccare il mouse.',
      },
      {
        title: 'Profondamente annidato, senza rompere il layout',
        body: 'I nodi ad albero comprimibili mantengono leggibili payload enormi e profondamente annidati invece di produrre una pagina illeggibile lunga chilometri.',
      },
      {
        title: 'Copia un percorso, non solo un valore',
        body: 'Clicca su una qualsiasi riga del diff per copiare il suo percorso JSON Pointer — perfetto da incollare nelle segnalazioni di bug o per rintracciare il campo nella tua codebase.',
      },
      {
        title: 'Esporta come JSON Patch o Markdown',
        body: 'Scarica il diff come JSON Patch standard RFC 6902 per il tooling, oppure come pulito changelog Markdown per pull request e documentazione.',
      },
    ],
  },
  privacy: {
    eyebrow: 'Privacy fin dalla progettazione',
    heading: 'I tuoi dati non lasciano mai la tua macchina',
    intro:
      'Molti strumenti JSON "online" inviano silenziosamente i tuoi dati a un server per elaborarli. Questo no — non c\'è alcun backend a cui inviarli. Tutto avviene lato client, in memoria, nella tua scheda.',
    points: [
      {
        label: 'Nessun round-trip al server',
        body: 'Il parsing, la validazione e il diffing avvengono tutti nel tuo browser con puro JavaScript. Il tuo JSON non viene mai trasmesso da nessuna parte.',
      },
      {
        label: 'Elaborazione lato client',
        body: 'Il confronto dei tuoi JSON avviene interamente nel tuo browser tramite JavaScript — nulla viene inviato a un server per calcolare il diff.',
      },
      {
        label: 'Sicuro per i dati sensibili',
        body: 'Risposte API, file di configurazione, token nelle fixture di test — incolla con fiducia. Ciò che accade nel tuo browser resta nel tuo browser.',
      },
    ],
  },
  about: {
    eyebrow: 'Informazioni sullo strumento',
    heading: 'Come questo strumento confronta il JSON',
    paragraphs: [
      'JSON Diff Checker confronta due documenti JSON chiave per chiave e valore per valore, non riga per riga come testo semplice. Questo significa che riordinare le chiavi all\'interno di un oggetto — <code class="rounded-sm bg-hairline-soft px-1.5 py-0.5 font-mono text-[13px]">{"a":1,"b":2}</code> rispetto a <code class="rounded-sm bg-hairline-soft px-1.5 py-0.5 font-mono text-[13px]">{"b":2,"a":1}</code> — non appare mai come una falsa differenza. Vengono segnalate solo le aggiunte, le rimozioni e le effettive modifiche dei valori.',
      'Gli array vengono confrontati per posizione per impostazione predefinita, poiché l\'ordine spesso ha un significato (una lista ordinata, una coda di priorità, una sequenza di passaggi). Attivare "Ignora l\'ordine degli array" passa invece a un abbinamento basato sull\'identità: se gli elementi dell\'array sono oggetti che condividono un campo stabile <code class="rounded-sm bg-hairline-soft px-1.5 py-0.5 font-mono text-[13px]">id</code>, <code class="rounded-sm bg-hairline-soft px-1.5 py-0.5 font-mono text-[13px]">uuid</code> o <code class="rounded-sm bg-hairline-soft px-1.5 py-0.5 font-mono text-[13px]">key</code>, vengono abbinati tramite quel campo indipendentemente dalla posizione; altrimenti gli elementi vengono abbinati per uguaglianza profonda. Questo evita che risposte API o liste di configurazione riordinate generino diff rumorosi e privi di significato.',
      'L\'input non valido viene rilevato immediatamente: lo strumento indica la riga e la colonna esatte in cui il parsing del JSON è fallito, invece di un errore di sintassi generico, così puoi correggere una virgola mancante o una chiave senza virgolette in pochi secondi. I documenti profondamente annidati o di grandi dimensioni vengono renderizzati come un albero comprimibile, così la pagina resta leggibile invece di trasformarsi in un muro di testo — e cliccando una qualsiasi riga si copia il suo percorso JSON Pointer (RFC 6901) da incollare in una segnalazione di bug o issue.',
      'Tutto quanto sopra funziona con puro JavaScript nella scheda del tuo browser. Non esiste alcun backend che riceve il JSON che incolli, carichi o importi da un URL — puoi verificarlo tu stesso aprendo gli strumenti per sviluppatori del tuo browser, passando alla scheda Rete e osservando le richieste mentre confronti i dati.',
    ],
  },
  guide: {
    eyebrow: 'Come fare',
    heading: 'Come confrontare due file JSON',
    intro:
      'Una guida pratica che usa un vero oggetto di configurazione — gli stessi passaggi funzionano per risposte API, fixture o qualsiasi JSON tu debba confrontare.',
    steps: [
      {
        title: '1. Incolla, carica o importa il tuo primo JSON',
        body: 'Incolla il documento originale nell\'editor di sinistra. Puoi anche cliccare su "Carica" per scegliere un file .json, oppure su "URL" per recuperarlo direttamente da un endpoint API o dall\'URL di un file grezzo.',
      },
      {
        title: '2. Incolla la seconda versione nell\'editor di destra',
        body: 'Aggiungi il JSON aggiornato sul lato destro allo stesso modo. Il diff si aggiorna automaticamente mentre digiti o non appena entrambi i lati contengono JSON valido — non c\'è un pulsante "Confronta" separato da premere.',
      },
      {
        title: '3. Leggi l\'albero evidenziato',
        body: 'Le chiavi aggiunte sono contrassegnate con +, quelle rimosse con −, e i valori modificati mostrano il vecchio valore barrato accanto a quello nuovo. Usa "Successiva" / "Precedente" (o Invio / Shift+Invio) per saltare tra le differenze senza scorrere a mano.',
      },
      {
        title: '4. Regola il confronto degli array se necessario',
        body: 'Se il tuo JSON contiene array logicamente uguali ma in un ordine diverso — una lista di tag riordinata, o risultati API restituiti in una sequenza diversa — abilita "Ignora l\'ordine degli array" così gli elementi mescolati non vengono segnalati come modifiche.',
      },
      {
        title: '5. Esporta o condividi il risultato',
        body: 'Clicca su una qualsiasi riga per copiare il suo percorso JSON Pointer. Usa "Copia" o il menu di download per ottenere il diff come file JSON Patch RFC 6902, oppure come changelog Markdown da incollare direttamente in una pull request.',
      },
    ],
    exampleHeading: 'Un esempio reale',
    exampleIntro:
      'Ecco due versioni di una piccola configurazione di deploy. Lo strumento segnala tre differenze: un valore modificato, una chiave rimossa e una voce di array aggiunta.',
    exampleLeftLabel: 'Originale (v1.2.0)',
    exampleRightLabel: 'Aggiornato (v1.3.0)',
    exampleLeftJson: '{\n  "service": "billing-api",\n  "version": "1.2.0",\n  "debug": true,\n  "replicas": 2,\n  "regions": ["us-east-1", "eu-west-1"]\n}',
    exampleRightJson: '{\n  "service": "billing-api",\n  "version": "1.3.0",\n  "replicas": 2,\n  "regions": ["us-east-1", "eu-west-1", "ap-south-1"]\n}',
    exampleRows: [
      { path: 'version', note: '"1.2.0" → "1.3.0" — segnalato come modificato.', type: 'changed' },
      { path: 'debug', note: 'presente nell\'originale, assente nell\'aggiornamento — segnalato come rimosso.', type: 'removed' },
      { path: 'regions[2]', note: '"ap-south-1" esiste solo a destra — segnalato come aggiunto.', type: 'added' },
    ],
    exampleOutro:
      '"service" e "replicas" sono identici su entrambi i lati, quindi vengono renderizzati come righe semplici, senza evidenziazione — il diff attira l\'attenzione solo su ciò che è effettivamente cambiato. Con "Ignora l\'ordine degli array" disattivato, la nuova regione viene trattata come un elemento di array aggiunto in coda anziché come un riordino, poiché è stata aggiunta alla fine.',
  },
  useCases: {
    eyebrow: 'Casi d\'uso',
    heading: 'A cosa lo usano gli sviluppatori',
    intro:
      'Alcune situazioni concrete in cui un diff JSON strutturale è più veloce che leggere due file affiancati.',
    items: [
      {
        title: 'Confrontare risposte API',
        body: 'Carica la risposta dello stesso endpoint da staging e produzione con "URL", o incolla due risposte salvate, per verificare se una modifica dello schema o un deploy del backend ha alterato la forma o i valori del payload.',
      },
      {
        title: 'Rivedere modifiche alla configurazione',
        body: 'Incolla la configurazione prima e dopo una modifica per vedere esattamente quali impostazioni sono cambiate prima di distribuire — cogliendo un cambiamento di valore accidentale o una chiave rimossa che altrimenti sfuggirebbe alla code review.',
      },
      {
        title: 'Debug delle fixture di test',
        body: 'Quando un test di snapshot o fixture fallisce, incolla il JSON atteso e quello effettivo per vedere con precisione quale campo è divergente invece di scorrere a occhio un grande diff di asserzione.',
      },
      {
        title: 'Verificare modifiche a deploy o infrastruttura',
        body: 'Confronta lo stato Terraform esportato, i manifest Kubernetes esportati come JSON o le configurazioni di funzioni serverless tra due momenti nel tempo per confermare che solo i campi previsti siano cambiati.',
      },
      {
        title: 'Individuare bug "dovrebbero essere identici"',
        body: 'Due payload che dovrebbero corrispondere ma producono comportamenti diversi quasi sempre differiscono in qualcosa di piccolo — un null anziché una chiave mancante, una stringa anziché un numero. Il diff lo evidenzia immediatamente.',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    heading: 'Domande frequenti',
    items: [
      {
        q: 'Come confronto due file JSON?',
        a: 'Incolla il contenuto di ciascun file negli editor di sinistra e di destra, oppure usa "Carica" per scegliere un file .json per entrambi i lati. Il diff appare automaticamente non appena entrambi i lati contengono JSON valido — nessun pulsante da premere.',
      },
      {
        q: 'Posso confrontare JSON di grandi dimensioni o profondamente annidati?',
        a: 'Sì. Il diff viene renderizzato come un albero comprimibile, così i nodi senza modifiche restano compressi e i documenti enormi o profondamente annidati rimangono leggibili invece di produrre una pagina lunga chilometri. Le prestazioni effettive dipendono dal tuo browser e dispositivo, poiché tutto funziona localmente.',
      },
      {
        q: 'Come vengono mostrati i valori aggiunti, rimossi e modificati?',
        a: 'Le chiavi o gli elementi di array aggiunti sono contrassegnati con + e uno sfondo verde. Quelli rimossi sono contrassegnati con − e barrati. I valori modificati mostrano il vecchio valore barrato accanto al nuovo valore, contrassegnato con ~.',
      },
      {
        q: 'Importa l\'ordine delle chiavi JSON?',
        a: 'No. Gli oggetti vengono confrontati per nome della chiave, non per posizione, quindi { "a": 1, "b": 2 } e { "b": 2, "a": 1 } sono considerati identici. Solo l\'ordine degli array è significativo, e solo quando "Ignora l\'ordine degli array" è disattivato.',
      },
      {
        q: 'Come vengono confrontati gli array JSON?',
        a: 'Per impostazione predefinita, gli array vengono confrontati posizione per posizione, quindi il riordino degli elementi viene segnalato come una modifica. Attiva "Ignora l\'ordine degli array" per confrontare invece per identità: gli oggetti che condividono un campo stabile id, uuid o key vengono abbinati tramite quel campo indipendentemente dalla posizione, e tutto il resto viene abbinato per valore.',
      },
      {
        q: 'Cosa succede quando il JSON non è valido?',
        a: 'L\'editor mostra la riga e la colonna esatte in cui il parsing è fallito, insieme a un breve messaggio di errore, così puoi correggere immediatamente una virgola mancante, una chiave senza virgolette o una virgola finale invece di tirare a indovinare.',
      },
      {
        q: 'Posso caricare JSON da un URL?',
        a: 'Sì. Clicca su "URL" in uno dei due editor, inserisci un indirizzo http(s) e lo strumento lo recupera direttamente dal tuo browser. Funziona solo se il server consente le richieste cross-origin (CORS); in caso contrario, scarica il file e usa invece "Carica".',
      },
      {
        q: 'Il mio JSON viene caricato su un server?',
        a: 'No. Il parsing, la validazione e il confronto avvengono tutti nel tuo browser con JavaScript. Non esiste alcun backend che riceve ciò che incolli, carichi o importi — apri gli strumenti per sviluppatori del tuo browser, controlla la scheda Rete e confronta i dati per verificare che nulla venga inviato da nessuna parte.',
      },
      {
        q: 'Come funziona l\'esportazione in JSON Patch?',
        a: 'Clicca su "Copia" o usa il menu di download per ottenere il diff come JSON Patch conforme allo standard RFC 6902: un array JSON di operazioni add, remove e replace con il percorso e il valore esatti per ogni differenza, pronto per il tooling automatizzato.',
      },
      {
        q: 'Come posso esportare le differenze come Markdown?',
        a: 'Apri il menu di download accanto a "Copia" e scegli "Changelog Markdown". Ottieni un file Markdown che elenca ogni percorso aggiunto, rimosso e modificato con i relativi valori, pronto da incollare nella descrizione di una pull request o in un changelog.',
      },
    ],
  },
  editor: {
    originalLabel: 'JSON originale',
    updatedLabel: 'JSON aggiornato',
    chars: 'caratteri',
    format: 'Formatta',
    formatTitle: 'Formatta in modo leggibile',
    upload: 'Carica',
    uploadTitle: 'Carica un file .json',
    url: 'URL',
    urlTitle: 'Carica JSON da un URL',
    clear: 'Cancella',
    clearTitle: 'Cancella',
    expandTitle: 'Espandi editor',
    urlPlaceholder: 'https://example.com/data.json',
    load: 'Carica',
    cancel: 'Annulla',
    editorPlaceholder: '{\n  "paste": "il tuo JSON qui"\n}',
  },
  diffPanel: {
    resultLabel: 'Risultato del diff',
    added: 'aggiunte',
    removed: 'rimosse',
    changed: 'modificate',
    ignoreArrayOrder: 'Ignora l\'ordine degli array',
    ignoreArrayOrderShort: 'Ignora l\'ordine',
    ignoreArrayOrderTitle: 'Abbina gli elementi degli array per valore/identità anziché per posizione',
    prev: 'Precedente',
    prevTitle: 'Differenza precedente (Shift+Invio)',
    next: 'Successiva',
    nextTitle: 'Differenza successiva (Invio)',
    copy: 'Copia',
    copyTitle: 'Copia il diff come JSON Patch',
    download: 'Scarica',
    downloadTitle: 'Scarica il diff',
    downloadPatch: 'JSON Patch (.json)',
    downloadMarkdown: 'Changelog Markdown (.md)',
    emptyState: 'Incolla o carica JSON in entrambi i riquadri qui sopra per vedere il diff qui.',
  },
  footer: {
    tagline:
      'Uno strumento di confronto JSON gratuito, privato e solo per browser. Nulla di ciò che incolli viene mai inviato da nessuna parte.',
    productHeading: 'Prodotto',
    resourcesHeading: 'Risorse',
    companyHeading: 'Azienda',
    jsonDiffTool: 'Strumento JSON diff',
    features: 'Funzionalità',
    privacy: 'Privacy',
    faq: 'FAQ',
    jsonPointerSpec: 'Specifica JSON Pointer',
    jsonPatchSpec: 'Specifica JSON Patch',
    aboutUs: 'Chi siamo',
    contactUs: 'Contattaci',
    privacyPolicy: 'Informativa sulla privacy',
    terms: 'Termini e condizioni',
    copyright: '© {year} JSON Diff Checker. Tutta l\'elaborazione avviene localmente nel tuo browser.',
  },
  about_us: {
    metaTitle: 'Chi siamo | JSON Diff Checker',
    metaDescription:
      'Scopri di più su JSON Diff Checker — uno strumento di confronto JSON gratuito e orientato alla privacy che funziona interamente nel tuo browser senza upload, registrazione o tracciamento.',
    eyebrow: 'Chi siamo',
    heading: 'Informazioni su JSON Diff Checker',
    lastUpdatedLabel: 'Ultimo aggiornamento:',
    sections: [
      {
        heading: 'Chi siamo',
        body: [
          'JSON Diff Checker è uno strumento web indipendente e gratuito costruito per sviluppatori, ingegneri QA e chiunque abbia bisogno di confrontare rapidamente due porzioni di JSON. L\'abbiamo creato perché la maggior parte degli strumenti di "diff JSON online" o carica i tuoi dati su un server, o nasconde il confronto dietro pubblicità e barriere di registrazione, o fatica con documenti grandi e profondamente annidati.',
        ],
      },
      {
        heading: 'Cosa facciamo',
        body: [
          'Il nostro strumento ti permette di incollare, caricare o importare JSON da un URL e vedere all\'istante un diff strutturato e con codifica a colori di ciò che è stato aggiunto, rimosso o modificato — fino alla chiave o all\'elemento dell\'array esatti. I confronti sono semantici anziché testuali, quindi le differenze nell\'ordine delle chiavi o nella formattazione non producono mai falsi positivi. Puoi esportare i risultati come file JSON Patch (RFC 6902) o come changelog Markdown per pull request e documentazione.',
        ],
      },
      {
        heading: 'Il nostro approccio alla privacy',
        body: [
          'Ogni confronto avviene interamente lato client, nel tuo browser. Non gestiamo alcun backend che riceve il JSON che incolli, e il JSON che confronti non viene mai inviato a terzi. Il Sito è sostenuto dalla pubblicità di Google AdSense e usa Google Analytics per statistiche di traffico di base, come descritto nella nostra Informativa sulla privacy. Puoi verificare che il tuo JSON resti locale aprendo gli strumenti per sviluppatori del tuo browser, andando alla scheda Rete e osservando le richieste mentre usi lo strumento.',
        ],
      },
      {
        heading: 'Contatti',
        body: [
          'Hai un feedback, hai trovato un bug o vuoi suggerire una funzionalità? Visita la nostra pagina <a href="{contactUrl}">Contattaci</a> per metterti in contatto.',
        ],
      },
    ],
  },
  contact_us: {
    metaTitle: 'Contattaci | JSON Diff Checker',
    metaDescription:
      'Mettiti in contatto con il team di JSON Diff Checker per feedback, segnalazioni di bug o richieste di funzionalità.',
    eyebrow: 'Contattaci',
    heading: 'Contattaci',
    email: 'support@jsondiffchecker.com',
    lastUpdatedLabel: 'Ultimo aggiornamento:',
    sections: [
      {
        heading: '',
        body: [
          'Ci farebbe piacere sentirti — che si tratti di una segnalazione di bug, di una richiesta di funzionalità o di un feedback generale su JSON Diff Checker.',
        ],
      },
      {
        heading: 'E-mail',
        body: [
          'Il modo più rapido per raggiungerci è via e-mail all\'indirizzo <a href="mailto:{email}">{email}</a>. In genere rispondiamo entro pochi giorni lavorativi.',
        ],
      },
      {
        heading: 'Segnalare un bug',
        body: [
          'Se hai trovato un bug, è utile includere il JSON che stavi confrontando (o un esempio minimo che riproduca il problema), il browser e il sistema operativo che stai usando, e una descrizione di ciò che ti aspettavi accadesse rispetto a ciò che è effettivamente accaduto.',
        ],
      },
      {
        heading: 'Richieste di funzionalità',
        body: [
          'Hai un\'idea per una funzionalità che renderebbe più facile confrontare JSON? Inviacela — leggiamo ogni suggerimento, anche se non possiamo rispondere a tutti o implementarli tutti.',
        ],
      },
    ],
  },
  privacy_policy: {
    metaTitle: 'Informativa sulla privacy | JSON Diff Checker',
    metaDescription:
      'Informativa sulla privacy di JSON Diff Checker. Tutto il confronto JSON avviene localmente nel tuo browser — non carichiamo, memorizziamo o trasmettiamo i dati che incolli.',
    eyebrow: 'Informativa sulla privacy',
    heading: 'Informativa sulla privacy',
    updated: '23 ottobre 2026',
    lastUpdatedLabel: 'Ultimo aggiornamento:',
    sections: [
      {
        heading: 'Panoramica',
        body: [
          'Questa Informativa sulla privacy spiega come JSON Diff Checker ("noi", "nostro", "lo strumento") gestisce le informazioni quando usi jsondiffchecker.com (il "Sito"). Abbiamo costruito questo strumento attorno a un principio semplice: i dati JSON che confronti sono tuoi, e non lasciano mai il tuo dispositivo.',
        ],
      },
      {
        heading: 'Dati che incolli o carichi',
        body: [
          'Tutto il parsing, la validazione e il confronto del JSON avvengono localmente nel tuo browser usando JavaScript lato client. Non disponiamo di un server backend che riceve, memorizza, registra o elabora il contenuto che incolli, carichi o importi nello strumento. Se importi JSON da un URL che fornisci, quella richiesta viene effettuata direttamente dal tuo browser all\'URL che specifichi — non la intermediamo né la intercettiamo.',
        ],
      },
      {
        heading: 'Cookie e archiviazione locale',
        body: [
          'Utilizziamo l\'archiviazione locale del tuo browser per ricordare la tua preferenza di tema (modalità chiara o scura); questa informazione rimane sul tuo dispositivo. I nostri partner pubblicitari e di analisi possono inoltre impostare cookie o usare identificatori simili, come descritto nella sezione successiva.',
        ],
      },
      {
        heading: 'Analisi e pubblicità',
        body: [
          'Utilizziamo Google Analytics per capire come viene usato il Sito (ad esempio pagine visitate, posizione approssimativa e tipo di dispositivo) e Google AdSense per mostrare annunci. Questi servizi Google possono usare cookie e identificatori simili per misurare l\'utilizzo e mostrare annunci.',
          'Fornitori terzi, tra cui Google, utilizzano i cookie per mostrare annunci in base alle tue visite precedenti a questo Sito e ad altri siti web. L\'uso dei cookie pubblicitari da parte di Google consente a Google e ai suoi partner di mostrare annunci in base alla tua visita a questo Sito e/o ad altri siti su Internet. Puoi disattivare la pubblicità personalizzata nelle <a href="https://www.google.com/settings/ads" rel="noopener noreferrer" target="_blank">Impostazioni annunci di Google</a> o su <a href="https://www.aboutads.info/choices/" rel="noopener noreferrer" target="_blank">aboutads.info</a>. Vedi anche <a href="https://policies.google.com/technologies/partner-sites" rel="noopener noreferrer" target="_blank">come Google utilizza le informazioni dei siti che usano i suoi servizi</a>.',
          'Il JSON che incolli, carichi o importi nello strumento viene elaborato solo nel tuo browser e non viene mai inviato da noi a Google o ad altri terzi.',
        ],
      },
      {
        heading: 'Link di terze parti',
        body: [
          'Il Sito può rimandare a risorse di terze parti, come le specifiche RFC. Non siamo responsabili delle pratiche sulla privacy dei siti web esterni e ti incoraggiamo a consultare le loro rispettive informative sulla privacy.',
        ],
      },
      {
        heading: 'Privacy dei minori',
        body: [
          'Il Sito non è rivolto a bambini di età inferiore ai 13 anni e non raccogliamo consapevolmente informazioni personali dai bambini.',
        ],
      },
      {
        heading: 'Modifiche a questa informativa',
        body: [
          'Potremmo aggiornare questa Informativa sulla privacy di tanto in tanto. Le modifiche saranno pubblicate su questa pagina con una data di "Ultimo aggiornamento" aggiornata in alto.',
        ],
      },
      {
        heading: 'Contattaci',
        body: [
          'Se hai domande su questa Informativa sulla privacy, visita la nostra pagina <a href="{contactUrl}">Contattaci</a>.',
        ],
      },
    ],
  },
  terms: {
    metaTitle: 'Termini e condizioni | JSON Diff Checker',
    metaDescription:
      'Termini e condizioni per l\'utilizzo di JSON Diff Checker, uno strumento di confronto JSON gratuito basato su browser fornito così com\'è senza garanzie.',
    eyebrow: 'Termini e condizioni',
    heading: 'Termini e condizioni',
    updated: '6 settembre 2026',
    lastUpdatedLabel: 'Ultimo aggiornamento:',
    sections: [
      {
        heading: 'Accettazione dei termini',
        body: [
          'Accedendo o utilizzando jsondiffchecker.com (il "Sito"), accetti di essere vincolato da questi Termini e condizioni. Se non sei d\'accordo, ti preghiamo di non utilizzare il Sito.',
        ],
      },
      {
        heading: 'Descrizione del servizio',
        body: [
          'JSON Diff Checker fornisce uno strumento gratuito, basato su browser, per confrontare due documenti JSON e visualizzare le differenze tra di essi. Tutta l\'elaborazione avviene localmente nel tuo browser; il Sito non richiede un account o un abbonamento.',
        ],
      },
      {
        heading: 'Utilizzo del servizio',
        body: [
          'Accetti di utilizzare il Sito solo per scopi leciti. Sei l\'unico responsabile del contenuto che incolli, carichi o importi nello strumento, e di assicurarti di avere il diritto di utilizzare e confrontare tale contenuto.',
        ],
      },
      {
        heading: 'Nessuna garanzia',
        body: [
          'Il Sito e il suo strumento sono forniti "così com\'è" e "come disponibili", senza garanzie di alcun tipo, esplicite o implicite, incluse ma non limitate alle garanzie di commerciabilità, idoneità a uno scopo particolare, accuratezza o non violazione. Sebbene puntiamo a rendere corretta la logica di confronto, non garantiamo che i risultati siano privi di errori o ininterrotti.',
        ],
      },
      {
        heading: 'Limitazione di responsabilità',
        body: [
          'Nella misura massima consentita dalla legge, JSON Diff Checker e i suoi operatori non saranno responsabili per eventuali danni indiretti, incidentali, speciali, consequenziali o punitivi derivanti da o correlati al tuo utilizzo, o all\'impossibilità di utilizzo, del Sito.',
        ],
      },
      {
        heading: 'Proprietà intellettuale',
        body: [
          'Il design, il branding e il codice sottostante del Sito sono di proprietà di JSON Diff Checker, salvo diversa indicazione. Mantieni la piena proprietà di qualsiasi dato JSON che elabori utilizzando lo strumento.',
        ],
      },
      {
        heading: 'Riferimenti a terze parti',
        body: [
          'Il Sito è uno strumento indipendente e non è affiliato, approvato o sponsorizzato da alcun altro servizio di confronto o diff JSON.',
        ],
      },
      {
        heading: 'Modifiche a questi termini',
        body: [
          'Potremmo rivedere questi Termini e condizioni in qualsiasi momento. L\'uso continuato del Sito dopo la pubblicazione delle modifiche costituisce accettazione dei termini revisionati.',
        ],
      },
      {
        heading: 'Contattaci',
        body: [
          'Le domande su questi Termini e condizioni possono esserci inviate tramite la nostra pagina <a href="{contactUrl}">Contattaci</a>.',
        ],
      },
    ],
  },
};