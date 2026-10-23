import type { SiteContent } from '../types';

export const de: SiteContent = {
  meta: {
    homeTitle: 'JSON Diff Checker — JSON online kostenlos vergleichen | JSON Diff Tool',
    homeDescription:
      'Kostenloser JSON Diff Checker zum Vergleichen zweier JSON-Dateien oder -Objekte online. Hebt hinzugefügte, entfernte und geänderte Schlüssel sofort hervor — kein Upload, keine Anmeldung, 100 % privat in deinem Browser.',
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
        label: 'Keine Analyse, keine Werbe-Skripte',
        body: 'Diese Seite lädt keine Tracker von Drittanbietern oder Werbe-Tags — sieh im Netzwerk-Tab deines Browsers nach, und du wirst nichts außer der Seite selbst finden.',
      },
      {
        label: 'Sicher für sensible Daten',
        body: 'API-Antworten, Konfigurationsdateien, Tokens in Test-Fixtures — füge sie bedenkenlos ein. Was in deinem Browser passiert, bleibt in deinem Browser.',
      },
    ],
  },
  about: {
    eyebrow: 'Über das Tool',
    heading: 'Ein kostenloser JSON Diff Checker, entwickelt für Geschwindigkeit und Datenschutz',
    paragraphs: [
      'JSON Diff Checker ist ein kostenloser <strong class="text-ink">JSON Diff Checker online</strong>, mit dem du zwei JSON-Dateien oder -Objekte vergleichen und sofort sehen kannst, was sich geändert hat. Füge deine Daten ein, lade Dateien hoch oder lade JSON direkt von einer URL, und dieses <strong class="text-ink">JSON Diff Tool</strong> hebt jeden hinzugefügten Schlüssel, entfernten Schlüssel und geänderten Wert in einem übersichtlichen, farbcodierten Baum hervor — ohne Installation, ohne Konto und ohne dass jemals Daten deinen Browser verlassen.',
      'Die meisten Teams müssen irgendwann <strong class="text-ink">JSON online vergleichen</strong> — eine API-Antwort mit einer Fixture prüfen, eine Konfigurationsänderung vor einem Deploy überprüfen oder herausfinden, warum zwei Payloads, die „identisch" sein sollten, es tatsächlich nicht sind. Das mit bloßem Auge in einem Texteditor zu tun, ist langsam und fehleranfällig, besonders bei tief verschachtelten Objekten oder großen Arrays. Dieses <strong class="text-ink">JSON-Vergleichstool</strong> übernimmt den Abgleich für dich: Schlüssel werden semantisch statt als reiner Text verglichen, sodass das Umsortieren von Schlüsseln innerhalb eines Objekts niemals einen falschen Unterschied erzeugt. Wenn du <strong class="text-ink">zwei JSON-Dateien vergleichen</strong> musst, die sich nur in der Formatierung oder Schlüsselreihenfolge unterscheiden, bleibt der Diff auf die Änderungen fokussiert, die wirklich zählen.',
      'Arrays erhalten die gleiche sorgfältige Behandlung. Standardmäßig ist die Reihenfolge relevant — der Vergleich von <code class="rounded-sm bg-hairline-soft px-1.5 py-0.5 font-mono text-[13px]">["a","b"]</code> mit <code class="rounded-sm bg-hairline-soft px-1.5 py-0.5 font-mono text-[13px]">["b","a"]</code> wird als Änderung gemeldet, da die Reihenfolge oft eine echte Bedeutung trägt. Aber wenn du einfach nur <strong class="text-ink">JSON-Objekte online vergleichen</strong> möchtest, ohne dich um die Array-Reihenfolge zu kümmern, aktiviere „Array-Reihenfolge ignorieren", und das Tool gleicht Array-Elemente über ein id/key-Feld ab, wenn eines vorhanden ist, andernfalls über den Wert — sodass durcheinandergewürfelte Listen nicht länger als störende Falschmeldungen erscheinen. Das macht diesen <strong class="text-ink">JSON Diff Viewer</strong> zuverlässig für reale API-Antworten, bei denen die Array-Reihenfolge zwischen Anfragen häufig inkonsistent ist.',
      'Als <strong class="text-ink">kostenloser JSON Diff Checker</strong> gibt es keine Bezahlschranke, kein Nutzungslimit und kein Wasserzeichen auf exportierten Ergebnissen. Anders als viele „kostenlose" Online-Tools, die deine Daten heimlich zur Verarbeitung an einen Server senden, läuft hier alles clientseitig mit reinem JavaScript — öffne die Entwicklertools deines Browsers und beobachte den Netzwerk-Tab, während du Daten vergleichst, und du wirst sehen, dass nichts die Seite verlässt. Das macht es sicher, ihn als <strong class="text-ink">JSON Diff Checker online kostenlos</strong> zu nutzen, selbst mit sensiblen Payloads: API-Tokens in Test-Fixtures, interne Konfigurationen oder Kundendaten, die du niemals einem Drittanbieter-Server überlassen möchtest.',
      'Über ein einfaches <strong class="text-ink">JSON Compare Tool</strong> hinaus ist diese App darauf ausgelegt, reale Produktionsszenarien zu bewältigen. Ungültige Eingaben schlagen nicht einfach still fehl — du erhältst die exakte Zeile und Spalte, an der das Parsing fehlgeschlagen ist, sodass das Beheben eines fehlenden Kommas oder eines nicht in Anführungszeichen gesetzten Schlüssels Sekunden statt eines manuellen Durchsuchens von minifiziertem Text dauert. Wenn du große oder tief verschachtelte <strong class="text-ink">JSON-Dateien online vergleichen</strong> musst, wird der Diff als einklappbarer Baum gerendert, sodass die Seite lesbar und reaktionsschnell bleibt, statt zu einer kilometerlangen Textwand zu werden. Tastenkürzel lassen dich mit Enter und Shift+Enter zwischen Unterschieden springen, und ein Klick auf eine beliebige Zeile kopiert ihren JSON-Pointer-Pfad zum direkten Einfügen in einen Fehlerbericht oder Pull Request.',
      'Dies ist auch ein praktischer <strong class="text-ink">JSON Diff Generator</strong> für Dokumentations- und Code-Review-Workflows. Sobald du die Unterschiede gefunden hast, exportiere sie, statt sie nur zu lesen: Kopiere das Ergebnis als standardkonformen JSON Patch (RFC 6902) für automatisiertes Tooling oder lade ein sauberes Markdown-Changelog herunter, das bereit ist, in eine Pull-Request-Beschreibung eingefügt zu werden. Kombiniert mit der Unterstützung zum Laden von JSON direkt von einer URL funktioniert es als leichtgewichtiger <strong class="text-ink">Online-JSON-Vergleich</strong> und <strong class="text-ink">JSON Diff- und Merge-Tool</strong>, um zwei Live-Endpunkte miteinander zu vergleichen, ohne vorher etwas herunterladen zu müssen.',
      'Ganz gleich, ob du für eine einmalige Debugging-Sitzung <strong class="text-ink">JSON-Daten vergleichen</strong> möchtest oder regelmäßig als Teil deines Entwicklungs-Workflows zu einem <strong class="text-ink">JSON-Unterschieds-Checker</strong> greifst — dieses Tool ist darauf ausgelegt, schnell zu öffnen, intuitiv zu bedienen und standardmäßig sicher zu sein — jeder Vergleich findet lokal statt, jedes Mal, kostenlos.',
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    heading: 'Häufige Fragen',
    items: [
      {
        q: 'Werden meine JSON-Daten irgendwohin hochgeladen?',
        a: 'Nein. Das gesamte Parsing, die Validierung und der Vergleich finden in deinem Browser mit JavaScript statt. Es gibt kein Backend, das dein JSON empfängt — du kannst dies selbst überprüfen, indem du die Entwicklertools deines Browsers öffnest, zum Netzwerk-Tab gehst und auf Anfragen achtest, während du Daten vergleichst.',
      },
      {
        q: 'Spielt es eine Rolle, wenn die Schlüsselreihenfolge unterschiedlich ist?',
        a: 'Nein. Der Vergleich ist semantisch statt textuell — Schlüssel werden unabhängig von der Reihenfolge nach Namen abgeglichen, sodass { "a": 1, "b": 2 } und { "b": 2, "a": 1 } als identisch behandelt werden.',
      },
      {
        q: 'Kann ich JSON-Dateien mit unterschiedlicher Array-Reihenfolge vergleichen?',
        a: 'Ja. Standardmäßig ist die Array-Reihenfolge relevant — der Vergleich von ["a","b"] mit ["b","a"] zeigt beide Einträge als geändert an, da die Reihenfolge oft eine Bedeutung trägt (z. B. sortierte Listen). Aktiviere „Array-Reihenfolge ignorieren" über dem Diff-Ergebnis, um Arrays stattdessen nach Wert zu vergleichen: Elemente werden über ein id/uuid/key-Feld abgeglichen, wenn Objekte eines haben, andernfalls über den Wert, sodass allein das Umsortieren nicht mehr gemeldet wird — nur Elemente, die tatsächlich hinzugefügt, entfernt oder wirklich geändert wurden.',
      },
      {
        q: 'Was passiert, wenn mein JSON ungültig ist?',
        a: 'Du siehst eine klare Fehlermeldung mit der exakten Zeile und Spalte, an der das Parsing fehlgeschlagen ist, sodass du Syntaxfehler wie fehlende Kommas, nicht in Anführungszeichen gesetzte Schlüssel oder nachgestellte Kommas sofort beheben kannst.',
      },
      {
        q: 'Wie große Dateien kann ich vergleichen?',
        a: 'Die Leistung hängt von deinem Browser und Gerät ab, da alles lokal läuft. Das Tool ist darauf ausgelegt, auch bei tief verschachtelten und großen Dokumenten reaktionsschnell zu bleiben, indem es den Diff-Baum mit einklappbaren Knoten rendert.',
      },
      {
        q: 'Kann ich das Ergebnis herunterladen oder teilen?',
        a: 'Ja. Du kannst den Diff als JSON Patch (RFC 6902) kopieren oder ihn als JSON-Patch-Datei oder als menschenlesbares Markdown-Changelog herunterladen — nützlich für Pull Requests, Fehlerberichte oder Dokumentation.',
      },
      {
        q: 'Wie prüfe ich, ob JSON korrekt ist?',
        a: 'Füge dein JSON in einen der beiden Editoren auf dieser Seite ein — es wird während der Eingabe validiert. Wenn das JSON ungültig ist, siehst du eine Fehlermeldung mit der exakten Zeile und Spalte des Problems (z. B. ein fehlendes Komma, ein nicht in Anführungszeichen gesetzter Schlüssel oder ein nachgestelltes Komma). Wenn es sauber geparst wird, ist es gültiges JSON.',
      },
      {
        q: 'Ist Diffchecker kostenlos nutzbar?',
        a: 'Dieser JSON Diff Checker ist völlig kostenlos nutzbar, ohne Anmeldung, ohne Nutzungslimits und ohne dass Daten an einen Server hochgeladen werden — die Vergleiche laufen vollständig in deinem Browser. (Diffchecker.com ist ein separater Drittanbieterdienst; wir sind nicht mit ihm verbunden.)',
      },
      {
        q: 'Wie prüfe ich den Unterschied zwischen zwei JSON-Dateien?',
        a: 'Öffne den Inhalt jeder Datei und füge ihn in den linken und rechten Editor oben ein, dann klicke auf Vergleichen (oder lass es automatisch diffen). Hinzugefügte, entfernte und geänderte Schlüssel werden Zeile für Zeile hervorgehoben, und du kannst „Array-Reihenfolge ignorieren" aktivieren, wenn die Array-Reihenfolge nicht als Unterschied zählen soll.',
      },
      {
        q: 'Wie verwende ich jsondiff in Python?',
        a: 'In Python ist die beliebte Option das Paket `jsondiff`: Installiere es mit `pip install jsondiff` und rufe dann `jsondiff.diff(a, b)` auf, wobei `a` und `b` geparste JSON-Objekte (Dicts) sind. Es gibt ein Dict zurück, das beschreibt, was sich geändert hat. Das ist nützlich für Skripte oder CI-Prüfungen — für schnelle, visuelle, einmalige Vergleiche ohne Code zu schreiben, verwende stattdessen das Tool auf dieser Seite.',
      },
      {
        q: 'Wie nennt man den Unterschied zwischen zwei JSON-Dateien?',
        a: 'Er wird üblicherweise „JSON Diff" oder „JSON Delta" genannt — eine strukturierte Beschreibung dessen, was zwischen zwei JSON-Dokumenten hinzugefügt, entfernt oder geändert wurde. Ein standardisiertes Format, um ihn auszudrücken, ist JSON Patch (RFC 6902), das dieses Tool für dich generieren kann.',
      },
      {
        q: 'Wie vergleiche ich zwei JSON-Objekte?',
        a: 'Füge jeweils ein Objekt in jeden Editor oben ein. Der Vergleich erfolgt Schlüssel für Schlüssel (nicht als reiner Text), sodass Objekte als gleich gelten, wenn sie dieselben Schlüssel und Werte haben, unabhängig von der Schlüsselreihenfolge, während alle hinzugefügten, entfernten oder geänderten Werte hervorgehoben werden.',
      },
      {
        q: 'Kannst du JSON-Dateien diffen?',
        a: 'Ja — füge den Inhalt beider Dateien in die zwei Editoren auf dieser Seite ein, und die Unterschiede werden sofort hervorgehoben. Alles läuft clientseitig in deinem Browser, sodass keine Datei irgendwohin hochgeladen wird.',
      },
      {
        q: 'Wie prüfst du, ob zwei JSON-Objekte gleich sind?',
        a: 'Vergleiche sie mit diesem Tool: Wenn die Diff-Ansicht keine hinzugefügten, entfernten oder geänderten Einträge zeigt, sind die Objekte äquivalent. Zwei JSON-Objekte gelten als gleich, wenn sie dieselben Schlüssel und Werte enthalten, auch wenn die Schlüssel in einer anderen Reihenfolge erscheinen — nur die Array-Reihenfolge zählt, es sei denn, du aktivierst „Array-Reihenfolge ignorieren".',
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
    notAffiliated: 'Nicht mit json-diff.com verbunden.',
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
          'Jeder Vergleich findet vollständig clientseitig in deinem Browser statt. Wir betreiben kein Backend, das das von dir eingefügte JSON empfängt, und wir verwenden keine Tracking-Skripte oder Werbe-Tags. Du kannst dies selbst überprüfen, indem du die Entwicklertools deines Browsers öffnest, zum Netzwerk-Tab gehst und auf Anfragen achtest, während du das Tool verwendest.',
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
    updated: '6. September 2026',
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
          'Wir verwenden den lokalen Speicher deines Browsers nur, um deine Design-Einstellung (heller oder dunkler Modus) zu speichern. Diese Information bleibt auf deinem Gerät und wird nicht an uns oder Dritte übertragen.',
        ],
      },
      {
        heading: 'Analyse und Werbung',
        body: [
          'Die Website lädt keine Analyse-Skripte von Drittanbietern, keine Werbe-Tags und keine Tracking-Pixel. Du kannst dies überprüfen, indem du die Entwicklertools deines Browsers öffnest und den Netzwerk-Tab inspizierst, während du das Tool verwendest.',
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
          'Die Website ist nicht mit einem Drittanbieterdienst verbunden, wird von diesem nicht unterstützt oder gesponsert, einschließlich ähnlich benannter Tools wie Diffchecker.com oder json-diff.com.',
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