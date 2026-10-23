import type { SiteContent } from '../types';

export const de: SiteContent = {
  meta: {
    homeTitle: 'JSON Diff Checker — Zwei JSON-Dateien im Browser vergleichen',
    homeDescription:
      'Füge zwei JSON-Dokumente ein, lade sie hoch oder rufe sie ab und sieh genau, was sich geändert hat — hinzugefügte Schlüssel, entfernte Schlüssel und geänderte Werte, hervorgehoben in einem einklappbaren Baum. Läuft vollständig in deinem Browser.',
  },
  nav: {
    brand: 'JSON Diff Checker',
    brandShort: 'JSON Diff',
    tool: 'Tool',
    features: 'Funktionen',
    privacy: 'Datenschutz',
    faq: 'FAQ',
    about: 'Über uns',
    openTool: 'Tool öffnen',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    toggleTheme: 'Dunkelmodus umschalten',
    primaryNavLabel: 'Primär',
    secondaryNavLabel: 'Sekundär',
    languageLabel: 'Sprache',
  },
  hero: {
    badge: '100 % clientseitig · deine Daten verlassen niemals deinen Browser',
    titleLine1: 'JSON vergleichen.',
    titleLine2: 'Jeden Unterschied sofort sehen.',
    subtitle:
      'Füge zwei JSON-Dokumente ein, lade sie hoch oder rufe sie ab und erhalte einen präzisen, farbcodierten Diff — hinzugefügte Schlüssel, entfernte Schlüssel und geänderte Werte — ohne dass ein einziges Byte deinen Rechner verlässt.',
    ctaPrimary: 'Vergleich starten',
    ctaSecondary: 'Zeig mir die Unterschiede',
    aboutUs: 'Über uns',
    contactUs: 'Kontakt',
    privacyPolicy: 'Datenschutzerklärung',
    terms: 'Allgemeine Geschäftsbedingungen',
  },
  tool: {
    eyebrow: 'Das Tool',
    heading: 'Füge dein JSON auf beiden Seiten ein, um zu vergleichen',
    note: 'Läuft vollständig in diesem Tab — nichts wird hochgeladen.',
  },
  features: {
    eyebrow: 'Funktionen',
    heading: 'Alles, was du brauchst, nichts, was du nicht brauchst',
    items: [
      {
        title: 'Zeilengenaue Fehlermeldungen',
        body: 'Ungültiges JSON? Du erhältst die exakte Zeile und Spalte statt eines vagen Fehlers. Behebe Fehler in Sekunden, anstatt durch minifizierten Text zu suchen.',
      },
      {
        title: 'Hochladen, einfügen oder von einer URL laden',
        body: 'Ziehe eine .json-Datei hinein, füge Rohtext ein oder rufe ein Dokument direkt von einem API-Endpunkt ab — je nachdem, was für deinen Workflow am schnellsten ist.',
      },
      {
        title: 'Diff-Zusammenfassung & Tastaturnavigation',
        body: 'Sieh auf einen Blick die Anzahl hinzugefügter, entfernter und geänderter Schlüssel und springe dann mit Enter / Shift+Enter zwischen ihnen, ohne die Maus zu berühren.',
      },
      {
        title: 'Tief verschachtelt, ohne das Layout zu sprengen',
        body: 'Einklappbare Baumknoten halten riesige, tief verschachtelte Payloads lesbar, statt eine kilometerlange, unlesbare Seite zu erzeugen.',
      },
      {
        title: 'Kopiere einen Pfad, nicht nur einen Wert',
        body: 'Klicke auf eine beliebige Diff-Zeile, um ihren JSON-Pointer-Pfad zu kopieren — perfekt zum Einfügen in Fehlerberichte oder zum Auffinden des Felds in deiner Codebasis.',
      },
      {
        title: 'Als JSON Patch oder Markdown exportieren',
        body: 'Lade den Diff als standardkonformen RFC 6902 JSON Patch für Tooling herunter oder als sauberes Markdown-Changelog für Pull Requests und Dokumentation.',
      },
    ],
  },
  privacy: {
    eyebrow: 'Datenschutz durch Design',
    heading: 'Deine Daten verlassen niemals deinen Rechner',
    intro:
      'Viele „Online"-JSON-Tools schicken deine Daten heimlich an einen Server, um sie zu verarbeiten. Dieses nicht — es gibt kein Backend, an das sie gesendet werden könnten. Alles passiert clientseitig, im Arbeitsspeicher, in deinem Tab.',
    points: [
      {
        label: 'Kein Server-Roundtrip',
        body: 'Parsing, Validierung und Diffing laufen alle in deinem Browser mit reinem JavaScript. Dein JSON wird niemals irgendwohin übertragen.',
      },
      {
        label: 'Clientseitige Verarbeitung',
        body: 'Deine JSON-Vergleiche werden vollständig in deinem Browser mit JavaScript verarbeitet — für die Berechnung des Diffs wird nichts an einen Server gesendet.',
      },
      {
        label: 'Sicher für sensible Daten',
        body: 'API-Antworten, Konfigurationsdateien, Tokens in Test-Fixtures — füge sie bedenkenlos ein. Was in deinem Browser passiert, bleibt in deinem Browser.',
      },
    ],
  },
  about: {
    eyebrow: 'Über das Tool',
    heading: 'Wie dieses Tool JSON vergleicht',
    paragraphs: [
      'JSON Diff Checker vergleicht zwei JSON-Dokumente Schlüssel für Schlüssel und Wert für Wert, nicht Zeile für Zeile wie reinen Text. Das bedeutet, dass das Umsortieren von Schlüsseln innerhalb eines Objekts — <code class="rounded-sm bg-hairline-soft px-1.5 py-0.5 font-mono text-[13px]">{"a":1,"b":2}</code> gegenüber <code class="rounded-sm bg-hairline-soft px-1.5 py-0.5 font-mono text-[13px]">{"b":2,"a":1}</code> — niemals als falscher Unterschied erscheint. Nur Hinzufügungen, Entfernungen und tatsächliche Wertänderungen werden gemeldet.',
      'Arrays werden standardmäßig nach Position verglichen, da die Reihenfolge oft eine Bedeutung trägt (eine sortierte Liste, eine Prioritätswarteschlange, eine Abfolge von Schritten). Das Aktivieren von „Array-Reihenfolge ignorieren" wechselt stattdessen zu einem identitätsbasierten Abgleich: Wenn Array-Elemente Objekte sind, die ein stabiles <code class="rounded-sm bg-hairline-soft px-1.5 py-0.5 font-mono text-[13px]">id</code>-, <code class="rounded-sm bg-hairline-soft px-1.5 py-0.5 font-mono text-[13px]">uuid</code>- oder <code class="rounded-sm bg-hairline-soft px-1.5 py-0.5 font-mono text-[13px]">key</code>-Feld teilen, werden sie unabhängig von der Position über dieses Feld abgeglichen; andernfalls werden Elemente über tiefe Gleichheit abgeglichen. So erzeugen umsortierte API-Ergebnisse oder Konfigurationslisten keine störenden, bedeutungslosen Diffs.',
      'Ungültige Eingaben werden sofort erkannt: Das Tool meldet die exakte Zeile und Spalte, an der das JSON-Parsing fehlgeschlagen ist, statt eines generischen Syntaxfehlers, sodass du ein fehlendes Komma oder einen nicht in Anführungszeichen gesetzten Schlüssel in Sekunden beheben kannst. Tief verschachtelte oder große Dokumente werden als einklappbarer Baum gerendert, damit die Seite lesbar bleibt, statt zu einer Textwand zu werden — und ein Klick auf eine beliebige Zeile kopiert ihren JSON-Pointer-Pfad (RFC 6901) zum Einfügen in einen Fehlerbericht oder ein Issue.',
      'Alles oben Genannte läuft mit reinem JavaScript in deinem Browser-Tab. Es gibt kein Backend, das das JSON empfängt, das du einfügst, hochlädst oder von einer URL lädst — du kannst dies selbst bestätigen, indem du die Entwicklertools deines Browsers öffnest, zum Netzwerk-Tab wechselst und beim Vergleichen von Daten auf Anfragen achtest.',
    ],
  },
  guide: {
    eyebrow: 'Anleitung',
    heading: 'So vergleichst du zwei JSON-Dateien',
    intro:
      'Eine Schritt-für-Schritt-Anleitung anhand eines echten Konfigurationsobjekts — dieselben Schritte funktionieren für API-Antworten, Fixtures oder jedes JSON, das du vergleichen musst.',
    steps: [
      {
        title: '1. Füge dein erstes JSON ein, lade es hoch oder lade es',
        body: 'Füge das Originaldokument in den linken Editor ein. Du kannst auch auf „Hochladen" klicken, um eine .json-Datei auszuwählen, oder auf „URL", um es direkt von einem API-Endpunkt oder einer Roh-Datei-URL abzurufen.',
      },
      {
        title: '2. Füge die zweite Version in den rechten Editor ein',
        body: 'Füge das aktualisierte JSON auf die gleiche Weise auf der rechten Seite hinzu. Der Diff aktualisiert sich automatisch während der Eingabe oder sobald beide Seiten gültiges JSON enthalten — es gibt keinen separaten „Vergleichen"-Button zum Klicken.',
      },
      {
        title: '3. Lies den hervorgehobenen Baum',
        body: 'Hinzugefügte Schlüssel sind mit + markiert, entfernte mit −, und geänderte Werte zeigen den alten Wert durchgestrichen neben dem neuen. Nutze „Weiter" / „Zurück" (oder Enter / Shift+Enter), um zwischen Unterschieden zu springen, ohne von Hand zu scrollen.',
      },
      {
        title: '4. Passe bei Bedarf den Array-Vergleich an',
        body: 'Wenn dein JSON Arrays enthält, die logisch gleich sind, aber in einer anderen Reihenfolge — eine umsortierte Liste von Tags oder API-Ergebnisse, die in einer anderen Reihenfolge zurückkamen — aktiviere „Array-Reihenfolge ignorieren", damit vertauschte Elemente nicht als Änderungen gemeldet werden.',
      },
      {
        title: '5. Exportiere oder teile das Ergebnis',
        body: 'Klicke auf eine beliebige Zeile, um ihren JSON-Pointer-Pfad zu kopieren. Nutze „Kopieren" oder das Download-Menü, um den Diff als RFC-6902-JSON-Patch-Datei oder als Markdown-Changelog zu erhalten, das du direkt in einen Pull Request einfügen kannst.',
      },
    ],
    exampleHeading: 'Ein echtes Beispiel',
    exampleIntro:
      'Hier sind zwei Versionen einer kleinen Deployment-Konfiguration. Das Tool meldet drei Unterschiede: einen geänderten Wert, einen entfernten Schlüssel und einen hinzugefügten Array-Eintrag.',
    exampleLeftLabel: 'Original (v1.2.0)',
    exampleRightLabel: 'Aktualisiert (v1.3.0)',
    exampleLeftJson:
      '{\n  "service": "billing-api",\n  "version": "1.2.0",\n  "debug": true,\n  "replicas": 2,\n  "regions": ["us-east-1", "eu-west-1"]\n}',
    exampleRightJson:
      '{\n  "service": "billing-api",\n  "version": "1.3.0",\n  "replicas": 2,\n  "regions": ["us-east-1", "eu-west-1", "ap-south-1"]\n}',
    exampleRows: [
      { path: 'version', note: '„1.2.0" → „1.3.0" — als geändert gemeldet.', type: 'changed' },
      { path: 'debug', note: 'im Original vorhanden, im Update fehlend — als entfernt gemeldet.', type: 'removed' },
      { path: 'regions[2]', note: '„ap-south-1" existiert nur rechts — als hinzugefügt gemeldet.', type: 'added' },
    ],
    exampleOutro:
      '„service" und „replicas" sind auf beiden Seiten identisch und werden daher als schlichte, nicht hervorgehobene Zeilen dargestellt — der Diff lenkt die Aufmerksamkeit nur auf das, was sich tatsächlich geändert hat. Bei deaktiviertem „Array-Reihenfolge ignorieren" wird die neue Region als angehängtes Array-Element und nicht als Umsortierung behandelt, da sie am Ende hinzugefügt wurde.',
  },
  useCases: {
    eyebrow: 'Anwendungsfälle',
    heading: 'Wofür Entwickler es nutzen',
    intro:
      'Ein paar konkrete Situationen, in denen ein struktureller JSON-Diff schneller ist als das Lesen zweier Dateien nebeneinander.',
    items: [
      {
        title: 'API-Antworten vergleichen',
        body: 'Lade die Antwort desselben Endpunkts aus Staging und Produktion mit „URL" oder füge zwei gespeicherte Antworten ein, um zu prüfen, ob eine Schemaänderung oder ein Backend-Deploy die Form oder die Werte der Payload verändert hat.',
      },
      {
        title: 'Konfigurationsänderungen überprüfen',
        body: 'Füge die Konfiguration vor und nach einer Änderung ein, um vor dem Deploy genau zu sehen, welche Einstellungen sich geändert haben — und um eine versehentliche Wertänderung oder einen entfernten Schlüssel zu erkennen, der sonst durch das Code-Review rutschen würde.',
      },
      {
        title: 'Test-Fixtures debuggen',
        body: 'Wenn ein Snapshot- oder Fixture-Test fehlschlägt, füge das erwartete und das tatsächliche JSON ein, um genau zu sehen, welches Feld abweicht, statt einen großen Assertion-Diff mit dem Auge zu durchsuchen.',
      },
      {
        title: 'Deployment- oder Infrastrukturänderungen prüfen',
        body: 'Vergleiche exportierten Terraform-State, als JSON exportierte Kubernetes-Manifeste oder Serverless-Function-Konfigurationen zwischen zwei Zeitpunkten, um zu bestätigen, dass sich nur die beabsichtigten Felder geändert haben.',
      },
      {
        title: '„Sollten identisch sein"-Bugs aufspüren',
        body: 'Zwei Payloads, die eigentlich übereinstimmen sollten, aber unterschiedliches Verhalten erzeugen, unterscheiden sich fast immer an einer kleinen Stelle — ein null gegenüber einem fehlenden Schlüssel, ein String gegenüber einer Zahl. Der Diff macht das sofort sichtbar.',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    heading: 'Häufige Fragen',
    items: [
      {
        q: 'Wie vergleiche ich zwei JSON-Dateien?',
        a: 'Füge den Inhalt jeder Datei in den linken und rechten Editor ein oder nutze „Hochladen", um für eine der beiden Seiten eine .json-Datei auszuwählen. Der Diff erscheint automatisch, sobald beide Seiten gültiges JSON enthalten — es gibt keinen Button zum Klicken.',
      },
      {
        q: 'Kann ich großes oder tief verschachteltes JSON vergleichen?',
        a: 'Ja. Der Diff wird als einklappbarer Baum gerendert, sodass Knoten ohne Änderungen eingeklappt bleiben und riesige oder tief verschachtelte Dokumente lesbar bleiben, statt eine kilometerlange Seite zu erzeugen. Die tatsächliche Leistung hängt von deinem Browser und Gerät ab, da alles lokal läuft.',
      },
      {
        q: 'Wie werden hinzugefügte, entfernte und geänderte Werte angezeigt?',
        a: 'Hinzugefügte Schlüssel oder Array-Elemente sind mit + und einem grünen Hintergrund markiert. Entfernte sind mit − markiert und durchgestrichen. Geänderte Werte zeigen den alten Wert durchgestrichen neben dem neuen Wert, markiert mit ~.',
      },
      {
        q: 'Spielt die JSON-Schlüsselreihenfolge eine Rolle?',
        a: 'Nein. Objekte werden nach Schlüsselnamen verglichen, nicht nach Position, sodass { "a": 1, "b": 2 } und { "b": 2, "a": 1 } als identisch behandelt werden. Nur die Array-Reihenfolge ist relevant, und auch nur, wenn „Array-Reihenfolge ignorieren" deaktiviert ist.',
      },
      {
        q: 'Wie werden JSON-Arrays verglichen?',
        a: 'Standardmäßig werden Arrays Position für Position verglichen, sodass das Umsortieren von Elementen als Änderung gemeldet wird. Aktiviere „Array-Reihenfolge ignorieren", um stattdessen nach Identität zu vergleichen: Objekte, die ein stabiles id-, uuid- oder key-Feld teilen, werden unabhängig von der Position über dieses Feld abgeglichen, und alles andere wird über den Wert abgeglichen.',
      },
      {
        q: 'Was passiert, wenn das JSON ungültig ist?',
        a: 'Der Editor zeigt die exakte Zeile und Spalte, an der das Parsing fehlgeschlagen ist, zusammen mit einer kurzen Fehlermeldung, sodass du ein fehlendes Komma, einen nicht in Anführungszeichen gesetzten Schlüssel oder ein nachgestelltes Komma sofort beheben kannst, statt zu raten.',
      },
      {
        q: 'Kann ich JSON von einer URL laden?',
        a: 'Ja. Klicke bei einem der beiden Editoren auf „URL", gib eine http(s)-Adresse ein, und das Tool ruft es direkt aus deinem Browser ab. Das funktioniert nur, wenn der Server Cross-Origin-Anfragen (CORS) erlaubt; ist das nicht der Fall, lade die Datei herunter und nutze stattdessen „Hochladen".',
      },
      {
        q: 'Wird mein JSON auf einen Server hochgeladen?',
        a: 'Nein. Parsing, Validierung und Vergleich finden alle in deinem Browser mit JavaScript statt. Es gibt kein Backend, das empfängt, was du einfügst, hochlädst oder lädst — öffne die Entwicklertools deines Browsers, prüfe den Netzwerk-Tab und vergleiche Daten, um zu bestätigen, dass nichts irgendwohin gesendet wird.',
      },
      {
        q: 'Wie funktioniert der JSON-Patch-Export?',
        a: 'Klicke auf „Kopieren" oder nutze das Download-Menü, um den Diff als standardkonformen RFC-6902-JSON-Patch zu erhalten: ein JSON-Array aus add-, remove- und replace-Operationen mit dem exakten Pfad und Wert für jeden Unterschied, bereit für automatisiertes Tooling.',
      },
      {
        q: 'Wie kann ich die Unterschiede als Markdown exportieren?',
        a: 'Öffne das Download-Menü neben „Kopieren" und wähle „Markdown-Changelog". Du erhältst eine Markdown-Datei, die jeden hinzugefügten, entfernten und geänderten Pfad mit seinen Werten auflistet, bereit zum Einfügen in eine Pull-Request-Beschreibung oder ein Changelog.',
      },
    ],
  },
  editor: {
    originalLabel: 'Original-JSON',
    updatedLabel: 'Aktualisiertes JSON',
    chars: 'Zeichen',
    format: 'Formatieren',
    formatTitle: 'Formatiert ausgeben',
    upload: 'Hochladen',
    uploadTitle: 'Eine .json-Datei hochladen',
    url: 'URL',
    urlTitle: 'JSON von einer URL laden',
    clear: 'Leeren',
    clearTitle: 'Leeren',
    expandTitle: 'Editor erweitern',
    urlPlaceholder: 'https://example.com/data.json',
    load: 'Laden',
    cancel: 'Abbrechen',
    editorPlaceholder: '{\n  "paste": "dein JSON hier"\n}',
  },
  diffPanel: {
    resultLabel: 'Diff-Ergebnis',
    added: 'hinzugefügt',
    removed: 'entfernt',
    changed: 'geändert',
    ignoreArrayOrder: 'Array-Reihenfolge ignorieren',
    ignoreArrayOrderShort: 'Reihenfolge ignorieren',
    ignoreArrayOrderTitle: 'Array-Elemente nach Wert/Identität statt nach Position abgleichen',
    prev: 'Zurück',
    prevTitle: 'Vorheriger Unterschied (Shift+Enter)',
    next: 'Weiter',
    nextTitle: 'Nächster Unterschied (Enter)',
    copy: 'Kopieren',
    copyTitle: 'Diff als JSON Patch kopieren',
    download: 'Herunterladen',
    downloadTitle: 'Diff herunterladen',
    downloadPatch: 'JSON Patch (.json)',
    downloadMarkdown: 'Markdown-Changelog (.md)',
    emptyState: 'Füge JSON in beide Felder oben ein oder lade es, um den Diff hier zu sehen.',
  },
  footer: {
    tagline:
      'Ein kostenloses, privates, rein browserbasiertes JSON-Vergleichstool. Nichts, was du einfügst, wird jemals irgendwohin gesendet.',
    productHeading: 'Produkt',
    resourcesHeading: 'Ressourcen',
    companyHeading: 'Unternehmen',
    jsonDiffTool: 'JSON Diff Tool',
    features: 'Funktionen',
    privacy: 'Datenschutz',
    faq: 'FAQ',
    jsonPointerSpec: 'JSON-Pointer-Spezifikation',
    jsonPatchSpec: 'JSON-Patch-Spezifikation',
    aboutUs: 'Über uns',
    contactUs: 'Kontakt',
    privacyPolicy: 'Datenschutzerklärung',
    terms: 'Allgemeine Geschäftsbedingungen',
    copyright: '© {year} JSON Diff Checker. Die gesamte Verarbeitung findet lokal in deinem Browser statt.',
  },
  about_us: {
    metaTitle: 'Über uns | JSON Diff Checker',
    metaDescription:
      'Erfahre mehr über JSON Diff Checker — ein kostenloses, datenschutzorientiertes JSON-Vergleichstool, das vollständig in deinem Browser läuft, ohne Uploads, Anmeldung oder Tracking.',
    eyebrow: 'Über uns',
    heading: 'Über JSON Diff Checker',
    lastUpdatedLabel: 'Zuletzt aktualisiert:',
    sections: [
      {
        heading: 'Wer wir sind',
        body: [
          'JSON Diff Checker ist ein unabhängiges, kostenlos nutzbares Web-Tool, das für Entwickler, QA-Ingenieure und alle gebaut wurde, die schnell zwei JSON-Teile vergleichen müssen. Wir haben es entwickelt, weil die meisten „Online-JSON-Diff"-Tools entweder deine Daten auf einen Server hochladen, den Vergleich hinter Werbung und Anmeldeschranken verbergen oder mit großen, tief verschachtelten Dokumenten Probleme haben.',
        ],
      },
      {
        heading: 'Was wir tun',
        body: [
          'Unser Tool lässt dich JSON einfügen, hochladen oder von einer URL laden und sofort einen strukturierten, farbcodierten Diff dessen sehen, was hinzugefügt, entfernt oder geändert wurde — bis hin zum exakten Schlüssel oder Array-Element. Vergleiche sind semantisch statt textuell, sodass Unterschiede in der Schlüsselreihenfolge oder Formatierung niemals Falschmeldungen erzeugen. Du kannst Ergebnisse als JSON-Patch-Datei (RFC 6902) oder Markdown-Changelog für Pull Requests und Dokumentation exportieren.',
        ],
      },
      {
        heading: 'Unser Ansatz beim Datenschutz',
        body: [
          'Jeder Vergleich findet vollständig clientseitig in deinem Browser statt. Wir betreiben kein Backend, das das von dir eingefügte JSON empfängt, und das von dir verglichene JSON wird nie an Dritte gesendet. Die Website wird durch Google-AdSense-Werbung finanziert und nutzt Google Analytics für grundlegende Besucherstatistiken, wie in unserer Datenschutzerklärung beschrieben. Dass dein JSON lokal bleibt, kannst du selbst prüfen, indem du die Entwicklertools deines Browsers öffnest, zum Netzwerk-Tab gehst und auf Anfragen achtest, während du das Tool verwendest.',
        ],
      },
      {
        heading: 'Kontakt',
        body: [
          'Hast du Feedback, einen Fehler gefunden oder möchtest eine Funktion vorschlagen? Besuche unsere <a href="{contactUrl}">Kontakt</a>-Seite, um mit uns in Kontakt zu treten.',
        ],
      },
    ],
  },
  contact_us: {
    metaTitle: 'Kontakt | JSON Diff Checker',
    metaDescription:
      'Nimm Kontakt mit dem JSON Diff Checker-Team auf für Feedback, Fehlerberichte oder Funktionswünsche.',
    eyebrow: 'Kontakt',
    heading: 'Kontakt',
    email: 'support@jsondiffchecker.com',
    lastUpdatedLabel: 'Zuletzt aktualisiert:',
    sections: [
      {
        heading: '',
        body: [
          'Wir würden gerne von dir hören — sei es ein Fehlerbericht, ein Funktionswunsch oder allgemeines Feedback zu JSON Diff Checker.',
        ],
      },
      {
        heading: 'E-Mail',
        body: [
          'Der schnellste Weg, uns zu erreichen, ist per E-Mail unter <a href="mailto:{email}">{email}</a>. Wir antworten in der Regel innerhalb weniger Werktage.',
        ],
      },
      {
        heading: 'Einen Fehler melden',
        body: [
          'Wenn du einen Fehler gefunden hast, hilft es, das JSON anzugeben, das du verglichen hast (oder ein minimales Beispiel, das das Problem reproduziert), den Browser und das Betriebssystem, das du verwendest, sowie eine Beschreibung dessen, was du erwartet hast, im Vergleich zu dem, was tatsächlich passiert ist.',
        ],
      },
      {
        heading: 'Funktionswünsche',
        body: [
          'Hast du eine Idee für eine Funktion, die das Vergleichen von JSON erleichtern würde? Schick sie uns — wir lesen jeden Vorschlag, auch wenn wir nicht auf alle antworten oder sie umsetzen können.',
        ],
      },
    ],
  },
  privacy_policy: {
    metaTitle: 'Datenschutzerklärung | JSON Diff Checker',
    metaDescription:
      'Datenschutzerklärung für JSON Diff Checker. Der gesamte JSON-Vergleich findet lokal in deinem Browser statt — wir laden, speichern oder übertragen die von dir eingefügten Daten nicht.',
    eyebrow: 'Datenschutzerklärung',
    heading: 'Datenschutzerklärung',
    updated: '23. Oktober 2026',
    lastUpdatedLabel: 'Zuletzt aktualisiert:',
    sections: [
      {
        heading: 'Überblick',
        body: [
          'Diese Datenschutzerklärung erläutert, wie JSON Diff Checker („wir", „unser", „das Tool") mit Informationen umgeht, wenn du jsondiffchecker.com (die „Website") verwendest. Wir haben dieses Tool um ein einfaches Prinzip herum gebaut: Die JSON-Daten, die du vergleichst, gehören dir, und sie verlassen niemals dein Gerät.',
        ],
      },
      {
        heading: 'Daten, die du einfügst oder hochlädst',
        body: [
          'Das gesamte Parsing, die Validierung und der Vergleich von JSON finden lokal in deinem Browser mit clientseitigem JavaScript statt. Wir haben keinen Backend-Server, der die von dir eingefügten, hochgeladenen oder in das Tool geladenen Inhalte empfängt, speichert, protokolliert oder verarbeitet. Wenn du JSON von einer von dir angegebenen URL lädst, wird diese Anfrage direkt von deinem Browser an die von dir angegebene URL gesendet — wir leiten sie weder weiter noch fangen wir sie ab.',
        ],
      },
      {
        heading: 'Cookies und lokaler Speicher',
        body: [
          'Wir verwenden den lokalen Speicher deines Browsers, um deine Design-Einstellung (heller oder dunkler Modus) zu speichern; diese Information bleibt auf deinem Gerät. Unsere Werbe- und Analysepartner können zudem Cookies setzen oder ähnliche Kennungen verwenden, wie im nächsten Abschnitt beschrieben.',
        ],
      },
      {
        heading: 'Analyse und Werbung',
        body: [
          'Wir verwenden Google Analytics, um zu verstehen, wie die Website genutzt wird (z. B. besuchte Seiten, ungefährer Standort und Gerätetyp), sowie Google AdSense, um Werbeanzeigen anzuzeigen. Diese Google-Dienste können Cookies und ähnliche Kennungen verwenden, um die Nutzung zu messen und Anzeigen auszuspielen.',
          'Drittanbieter, einschließlich Google, verwenden Cookies, um Anzeigen auf Basis deiner früheren Besuche dieser und anderer Websites auszuspielen. Durch die Verwendung von Werbe-Cookies können Google und seine Partner Anzeigen auf Basis deines Besuchs dieser Website und/oder anderer Websites im Internet ausspielen. Du kannst personalisierte Werbung in den <a href="https://www.google.com/settings/ads" rel="noopener noreferrer" target="_blank">Google-Anzeigeneinstellungen</a> oder unter <a href="https://www.aboutads.info/choices/" rel="noopener noreferrer" target="_blank">aboutads.info</a> deaktivieren. Siehe auch <a href="https://policies.google.com/technologies/partner-sites" rel="noopener noreferrer" target="_blank">wie Google Informationen von Websites verwendet, die seine Dienste nutzen</a>.',
          'Das JSON, das du in das Tool einfügst, hochlädst oder lädst, wird ausschließlich in deinem Browser verarbeitet und von uns niemals an Google oder andere Dritte gesendet.',
        ],
      },
      {
        heading: 'Links zu Drittanbietern',
        body: [
          'Die Website kann auf Ressourcen von Drittanbietern verlinken, etwa auf RFC-Spezifikationen. Wir sind nicht für die Datenschutzpraktiken externer Websites verantwortlich und empfehlen dir, deren jeweilige Datenschutzerklärungen zu prüfen.',
        ],
      },
      {
        heading: 'Datenschutz für Kinder',
        body: [
          'Die Website richtet sich nicht an Kinder unter 13 Jahren, und wir sammeln wissentlich keine personenbezogenen Daten von Kindern.',
        ],
      },
      {
        heading: 'Änderungen dieser Erklärung',
        body: [
          'Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Änderungen werden auf dieser Seite mit einem aktualisierten „Zuletzt aktualisiert"-Datum oben veröffentlicht.',
        ],
      },
      {
        heading: 'Kontaktiere uns',
        body: [
          'Wenn du Fragen zu dieser Datenschutzerklärung hast, besuche bitte unsere <a href="{contactUrl}">Kontakt</a>-Seite.',
        ],
      },
    ],
  },
  terms: {
    metaTitle: 'Allgemeine Geschäftsbedingungen | JSON Diff Checker',
    metaDescription:
      'Allgemeine Geschäftsbedingungen für die Nutzung von JSON Diff Checker, einem kostenlosen browserbasierten JSON-Vergleichstool, das ohne Gewährleistung „wie besehen" bereitgestellt wird.',
    eyebrow: 'Allgemeine Geschäftsbedingungen',
    heading: 'Allgemeine Geschäftsbedingungen',
    updated: '6. September 2026',
    lastUpdatedLabel: 'Zuletzt aktualisiert:',
    sections: [
      {
        heading: 'Annahme der Bedingungen',
        body: [
          'Durch den Zugriff auf oder die Nutzung von jsondiffchecker.com (die „Website") erklärst du dich damit einverstanden, an diese Allgemeinen Geschäftsbedingungen gebunden zu sein. Wenn du nicht einverstanden bist, nutze die Website bitte nicht.',
        ],
      },
      {
        heading: 'Beschreibung des Dienstes',
        body: [
          'JSON Diff Checker stellt ein kostenloses, browserbasiertes Tool zum Vergleichen zweier JSON-Dokumente und zum Anzeigen der Unterschiede zwischen ihnen bereit. Die gesamte Verarbeitung findet lokal in deinem Browser statt; die Website erfordert weder ein Konto noch ein Abonnement.',
        ],
      },
      {
        heading: 'Nutzung des Dienstes',
        body: [
          'Du erklärst dich damit einverstanden, die Website nur für rechtmäßige Zwecke zu nutzen. Du bist allein verantwortlich für die Inhalte, die du in das Tool einfügst, hochlädst oder lädst, und dafür sicherzustellen, dass du das Recht hast, diese Inhalte zu verwenden und zu vergleichen.',
        ],
      },
      {
        heading: 'Keine Gewährleistung',
        body: [
          'Die Website und ihr Tool werden „wie besehen" und „wie verfügbar" bereitgestellt, ohne jegliche ausdrückliche oder stillschweigende Gewährleistung, einschließlich, aber nicht beschränkt auf Gewährleistungen der Marktgängigkeit, der Eignung für einen bestimmten Zweck, der Genauigkeit oder der Nichtverletzung von Rechten. Obwohl wir bestrebt sind, dass die Vergleichslogik korrekt ist, garantieren wir nicht, dass die Ergebnisse fehlerfrei oder unterbrechungsfrei sind.',
        ],
      },
      {
        heading: 'Haftungsbeschränkung',
        body: [
          'Soweit gesetzlich zulässig, haften JSON Diff Checker und seine Betreiber nicht für indirekte, zufällige, besondere, Folge- oder Strafschäden, die sich aus deiner Nutzung oder Nichtnutzbarkeit der Website ergeben oder damit zusammenhängen.',
        ],
      },
      {
        heading: 'Geistiges Eigentum',
        body: [
          'Das Design, das Branding und der zugrunde liegende Code der Website sind Eigentum von JSON Diff Checker, sofern nicht anders angegeben. Du behältst das volle Eigentum an allen JSON-Daten, die du mit dem Tool verarbeitest.',
        ],
      },
      {
        heading: 'Verweise auf Dritte',
        body: [
          'Die Website ist ein unabhängiges Tool und ist mit keinem anderen JSON-Vergleichs- oder Diff-Dienst verbunden, wird von diesem nicht unterstützt oder gesponsert.',
        ],
      },
      {
        heading: 'Änderungen dieser Bedingungen',
        body: [
          'Wir können diese Allgemeinen Geschäftsbedingungen jederzeit überarbeiten. Die fortgesetzte Nutzung der Website nach Veröffentlichung von Änderungen gilt als Annahme der überarbeiteten Bedingungen.',
        ],
      },
      {
        heading: 'Kontaktiere uns',
        body: [
          'Fragen zu diesen Allgemeinen Geschäftsbedingungen können uns über unsere <a href="{contactUrl}">Kontakt</a>-Seite gesendet werden.',
        ],
      },
    ],
  },
};