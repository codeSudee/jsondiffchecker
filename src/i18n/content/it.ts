import type { SiteContent } from '../types';

export const it: SiteContent = {
  meta: {
    homeTitle: 'JSON Diff Checker — Confronta JSON online gratis | Strumento JSON Diff',
    homeDescription:
      'JSON diff checker gratuito per confrontare due file o oggetti JSON online. Evidenzia istantaneamente le chiavi aggiunte, rimosse e modificate — nessun upload, nessuna registrazione, 100% privato nel tuo browser.',
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
        label: 'Nessuna analisi, nessuno script pubblicitario',
        body: 'Questa pagina non carica tracker di terze parti o tag pubblicitari — controlla la scheda di rete del tuo browser e non vedrai nulla oltre alla pagina stessa.',
      },
      {
        label: 'Sicuro per i dati sensibili',
        body: 'Risposte API, file di configurazione, token nelle fixture di test — incolla con fiducia. Ciò che accade nel tuo browser resta nel tuo browser.',
      },
    ],
  },
  about: {
    eyebrow: 'Informazioni sullo strumento',
    heading: 'Un JSON diff checker gratuito costruito per velocità e privacy',
    paragraphs: [
      'JSON Diff Checker è un <strong class="text-ink">JSON diff checker online</strong> gratuito che ti permette di confrontare due file o oggetti JSON e vedere all\'istante cosa è cambiato. Incolla i tuoi dati, carica file o importa JSON direttamente da un URL, e questo <strong class="text-ink">strumento json diff</strong> evidenzia ogni chiave aggiunta, chiave rimossa e valore modificato in un albero pulito e con codifica a colori — nessuna installazione, nessun account e nessun dato che lascia mai il tuo browser.',
      'La maggior parte dei team ha bisogno prima o poi di <strong class="text-ink">confrontare json online</strong> — verificare una risposta API rispetto a una fixture, rivedere una modifica di configurazione prima di un deploy o scoprire perché due payload che "dovrebbero" essere identici in realtà non lo sono. Farlo a occhio in un editor di testo è lento e soggetto a errori, specialmente con oggetti profondamente annidati o array di grandi dimensioni. Questo <strong class="text-ink">strumento di confronto json</strong> esegue l\'abbinamento per te: le chiavi vengono confrontate semanticamente anziché come testo grezzo, così il riordino delle chiavi all\'interno di un oggetto non produce mai una falsa differenza. Se hai bisogno di <strong class="text-ink">confrontare due file json</strong> che differiscono solo nella formattazione o nell\'ordine delle chiavi, il diff resta focalizzato sulle modifiche che contano davvero.',
      'Gli array ricevono lo stesso trattamento accurato. Per impostazione predefinita, l\'ordine è importante — confrontare <code class="rounded-sm bg-hairline-soft px-1.5 py-0.5 font-mono text-[13px]">["a","b"]</code> con <code class="rounded-sm bg-hairline-soft px-1.5 py-0.5 font-mono text-[13px]">["b","a"]</code> viene segnalato come una modifica, poiché la sequenza spesso ha un significato reale. Ma quando hai semplicemente bisogno di <strong class="text-ink">confrontare oggetti json online</strong> senza preoccuparti dell\'ordine degli array, attiva "Ignora l\'ordine degli array" e lo strumento abbina gli elementi degli array tramite un campo id/key quando ne esiste uno, oppure per valore altrimenti — così le liste mescolate non appaiono più come fastidiosi falsi positivi. Questo rende questo <strong class="text-ink">visualizzatore di diff json</strong> affidabile per le risposte API del mondo reale, dove l\'ordine degli array è spesso incoerente tra una richiesta e l\'altra.',
      'Come <strong class="text-ink">json diff checker gratuito</strong>, non c\'è alcun paywall, nessun limite di utilizzo e nessuna filigrana sui risultati esportati. A differenza di molti strumenti "gratuiti" online che inviano silenziosamente i tuoi dati a un server per l\'elaborazione, qui tutto funziona lato client con puro JavaScript — apri gli strumenti per sviluppatori del tuo browser e osserva la scheda Rete mentre confronti i dati, e non vedrai nulla lasciare la pagina. Questo lo rende sicuro da usare come <strong class="text-ink">json diff checker online gratuito</strong> anche con payload sensibili: token API nelle fixture di test, configurazioni interne o dati dei clienti che non vorresti mai far toccare a un server di terze parti.',
      'Oltre a essere un semplice <strong class="text-ink">strumento di confronto json</strong>, questa app è costruita per gestire casi d\'uso di produzione reali. Un input non valido non fallisce silenziosamente — ottieni la riga e la colonna esatte in cui il parsing si è interrotto, così correggere una virgola mancante o una chiave senza virgolette richiede secondi invece di una scansione manuale attraverso testo minificato. Quando hai bisogno di <strong class="text-ink">confrontare file json online</strong> di grandi dimensioni o profondamente annidati, il diff viene renderizzato come un albero comprimibile così la pagina resta leggibile e reattiva invece di trasformarsi in un muro di testo lungo chilometri. Le scorciatoie da tastiera ti permettono di spostarti tra le differenze con Invio e Shift+Invio, e cliccando una qualsiasi riga si copia il suo percorso JSON Pointer da incollare direttamente in una segnalazione di bug o pull request.',
      'Questo è anche un pratico <strong class="text-ink">generatore di diff json</strong> per i flussi di lavoro di documentazione e code review. Una volta trovate le differenze, esportale invece di limitarti a leggerle: copia il risultato come JSON Patch conforme allo standard (RFC 6902) per il tooling automatizzato, oppure scarica un pulito changelog Markdown pronto da inserire in una descrizione di pull request. Combinato con il supporto per il caricamento di JSON direttamente da un URL, funziona come un leggero strumento di <strong class="text-ink">confronto json online</strong> e <strong class="text-ink">strumento json diff e merge</strong> per verificare due endpoint live l\'uno rispetto all\'altro senza dover scaricare nulla prima.',
      'Che tu abbia bisogno di <strong class="text-ink">confrontare dati json</strong> per una singola sessione di debug o che ricorra regolarmente a un <strong class="text-ink">verificatore di differenze json</strong> come parte del tuo flusso di lavoro di sviluppo, questo strumento è progettato per essere veloce da aprire, ovvio da usare e sicuro per impostazione predefinita — ogni confronto avviene localmente, ogni volta, gratuitamente.',
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    heading: 'Domande frequenti',
    items: [
      {
        q: 'I miei dati JSON vengono caricati da qualche parte?',
        a: 'No. Tutto il parsing, la validazione e il confronto avvengono nel tuo browser usando JavaScript. Non esiste alcun backend che riceve il tuo JSON — puoi verificarlo tu stesso aprendo gli strumenti per sviluppatori del tuo browser, andando alla scheda Rete e osservando le richieste mentre confronti i dati.',
      },
      {
        q: 'Importa se l\'ordine delle chiavi è diverso?',
        a: 'No. Il confronto è semantico anziché testuale — le chiavi vengono abbinate per nome indipendentemente dall\'ordine, quindi { "a": 1, "b": 2 } e { "b": 2, "a": 1 } vengono trattati come identici.',
      },
      {
        q: 'Posso confrontare file JSON con ordini di array diversi?',
        a: 'Sì. Per impostazione predefinita, l\'ordine degli array è importante — confrontare ["a","b"] con ["b","a"] mostra entrambe le voci come modificate, poiché l\'ordine spesso ha un significato (ad es. liste ordinate). Attiva "Ignora l\'ordine degli array" sopra il risultato del diff per confrontare invece gli array per valore: gli elementi vengono abbinati tramite un campo id/uuid/key quando gli oggetti ne hanno uno, o per valore altrimenti, così il solo riordino non viene più segnalato — solo gli elementi che sono stati genuinamente aggiunti, rimossi o effettivamente modificati.',
      },
      {
        q: 'Cosa succede se il mio JSON non è valido?',
        a: 'Vedrai un messaggio di errore chiaro con la riga e la colonna esatte in cui il parsing è fallito, così puoi correggere immediatamente errori di sintassi come virgole mancanti, chiavi senza virgolette o virgole finali.',
      },
      {
        q: 'Quanto può essere grande un file da confrontare?',
        a: 'Le prestazioni dipendono dal tuo browser e dispositivo, poiché tutto funziona localmente. Lo strumento è costruito per restare reattivo con documenti profondamente annidati e di grandi dimensioni, renderizzando l\'albero del diff con nodi comprimibili.',
      },
      {
        q: 'Posso scaricare o condividere il risultato?',
        a: 'Sì. Puoi copiare il diff come JSON Patch (RFC 6902) o scaricarlo come file JSON Patch o come changelog Markdown leggibile — utile per pull request, segnalazioni di bug o documentazione.',
      },
      {
        q: 'Come verificare se un JSON è corretto?',
        a: 'Incolla il tuo JSON in uno dei due editor di questa pagina — viene validato mentre digiti. Se il JSON non è valido, vedrai un messaggio di errore con la riga e la colonna esatte del problema (ad es. una virgola mancante, una chiave senza virgolette o una virgola finale). Se viene analizzato correttamente, è JSON valido.',
      },
      {
        q: 'Diffchecker è gratuito da usare?',
        a: 'Questo JSON diff checker è completamente gratuito da usare, senza registrazione, senza limiti di utilizzo e senza dati caricati su un server — i confronti avvengono interamente nel tuo browser. (Diffchecker.com è un servizio separato di terze parti; non siamo affiliati con esso.)',
      },
      {
        q: 'Come verificare la differenza tra due file JSON?',
        a: 'Apri il contenuto di ciascun file e incollalo negli editor di sinistra e di destra qui sopra, poi clicca su Confronta (o lascia che esegua il diff automaticamente). Le chiavi aggiunte, rimosse e modificate vengono evidenziate riga per riga, e puoi abilitare "Ignora l\'ordine degli array" se l\'ordine degli array non dovrebbe contare come differenza.',
      },
      {
        q: 'Come uso jsondiff in Python?',
        a: 'In Python, l\'opzione più diffusa è il pacchetto `jsondiff`: installalo con `pip install jsondiff`, poi chiama `jsondiff.diff(a, b)` dove `a` e `b` sono oggetti JSON analizzati (dict). Restituisce un dict che descrive cosa è cambiato. È utile per lo scripting o i controlli CI — per confronti rapidi, visivi e occasionali senza scrivere codice, usa invece lo strumento in questa pagina.',
      },
      {
        q: 'Come si chiama la differenza tra due file JSON?',
        a: 'Viene comunemente chiamata "JSON diff" o "JSON delta" — una descrizione strutturata di ciò che è stato aggiunto, rimosso o modificato tra due documenti JSON. Un formato standardizzato per esprimerla è JSON Patch (RFC 6902), che questo strumento può generare per te.',
      },
      {
        q: 'Come confronto due oggetti JSON?',
        a: 'Incolla un oggetto in ciascun editor qui sopra. Il confronto viene eseguito chiave per chiave (non come testo semplice), quindi gli oggetti sono considerati uguali se hanno le stesse chiavi e valori indipendentemente dall\'ordine delle chiavi, mentre qualsiasi valore aggiunto, rimosso o modificato viene evidenziato.',
      },
      {
        q: 'Puoi fare il diff di file JSON?',
        a: 'Sì — incolla il contenuto di entrambi i file nei due editor di questa pagina e le differenze vengono evidenziate all\'istante. Tutto funziona lato client nel tuo browser, quindi nessun file viene caricato da nessuna parte.',
      },
      {
        q: 'Come verifichi se due oggetti JSON sono uguali?',
        a: 'Confrontali con questo strumento: se la vista del diff non mostra voci aggiunte, rimosse o modificate, gli oggetti sono equivalenti. Due oggetti JSON sono considerati uguali quando contengono le stesse chiavi e valori, anche se le chiavi appaiono in un ordine diverso — solo l\'ordine degli array conta, a meno che non abiliti "Ignora l\'ordine degli array".',
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
    notAffiliated: 'Non affiliato con json-diff.com.',
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
          'Ogni confronto avviene interamente lato client, nel tuo browser. Non gestiamo alcun backend che riceve il JSON che incolli, e non usiamo script di tracciamento o tag pubblicitari. Puoi verificarlo tu stesso aprendo gli strumenti per sviluppatori del tuo browser, andando alla scheda Rete e osservando le richieste mentre usi lo strumento.',
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
    updated: '6 settembre 2026',
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
          'Utilizziamo l\'archiviazione locale del tuo browser solo per ricordare la tua preferenza di tema (modalità chiara o scura). Questa informazione rimane sul tuo dispositivo e non viene trasmessa a noi o a terze parti.',
        ],
      },
      {
        heading: 'Analisi e pubblicità',
        body: [
          'Il Sito non carica script di analisi di terze parti, tag pubblicitari o pixel di tracciamento. Puoi verificarlo aprendo gli strumenti per sviluppatori del tuo browser e ispezionando la scheda Rete mentre usi lo strumento.',
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
          'Il Sito non è affiliato, approvato o sponsorizzato da alcun servizio di terze parti, inclusi strumenti dai nomi simili come Diffchecker.com o json-diff.com.',
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