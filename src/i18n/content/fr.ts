import type { SiteContent } from '../types';

export const fr: SiteContent = {
  meta: {
    homeTitle: 'JSON Diff Checker — Comparez deux fichiers JSON dans votre navigateur',
    homeDescription:
      'Collez, importez ou chargez deux documents JSON et voyez exactement ce qui a changé — clés ajoutées, clés supprimées et valeurs modifiées, mises en évidence dans un arbre repliable. Tout s\'exécute entièrement dans votre navigateur.',
  },
  nav: {
    brand: 'JSON Diff Checker',
    brandShort: 'JSON Diff',
    tool: 'Outil',
    features: 'Fonctionnalités',
    privacy: 'Confidentialité',
    faq: 'FAQ',
    about: 'À propos',
    openTool: "Ouvrir l'outil",
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    toggleTheme: 'Basculer le mode sombre',
    primaryNavLabel: 'Principal',
    secondaryNavLabel: 'Secondaire',
    languageLabel: 'Langue',
  },
  hero: {
    badge: '100 % côté client · vos données ne quittent jamais votre navigateur',
    titleLine1: 'Comparez du JSON.',
    titleLine2: 'Voyez chaque différence instantanément.',
    subtitle:
      'Collez, importez ou chargez deux documents JSON et obtenez une comparaison précise et codée par couleur — clés ajoutées, clés supprimées et valeurs modifiées — sans qu\'un seul octet ne quitte votre machine.',
    ctaPrimary: 'Commencer à comparer',
    ctaSecondary: 'Voir ce qui diffère',
    aboutUs: 'À propos de nous',
    contactUs: 'Nous contacter',
    privacyPolicy: 'Politique de confidentialité',
    terms: 'Conditions générales',
  },
  tool: {
    eyebrow: "L'outil",
    heading: 'Collez votre JSON des deux côtés pour comparer',
    note: "S'exécute entièrement dans cet onglet — rien n'est envoyé.",
  },
  features: {
    eyebrow: 'Fonctionnalités',
    heading: "Tout ce dont vous avez besoin, rien de superflu",
    items: [
      {
        title: "Messages d'erreur à la ligne près",
        body: 'JSON invalide ? Vous obtenez la ligne et la colonne exactes, pas un échec vague. Corrigez les erreurs en quelques secondes au lieu de fouiller dans du texte minifié.',
      },
      {
        title: 'Importez, collez ou chargez depuis une URL',
        body: "Déposez un fichier .json, collez du texte brut ou récupérez un document directement depuis un endpoint d'API — selon ce qui est le plus rapide pour votre flux de travail.",
      },
      {
        title: 'Résumé des différences et navigation au clavier',
        body: 'Consultez d\'un coup d\'œil le nombre de clés ajoutées, supprimées et modifiées, puis passez de l\'une à l\'autre avec Entrée / Maj+Entrée sans toucher la souris.',
      },
      {
        title: 'Profondément imbriqué, sans casser la mise en page',
        body: "Les nœuds d'arbre repliables gardent lisibles les charges utiles volumineuses et profondément imbriquées au lieu de produire une page interminable et illisible.",
      },
      {
        title: 'Copiez un chemin, pas seulement une valeur',
        body: "Cliquez sur n'importe quelle ligne de différence pour copier son chemin JSON Pointer — parfait pour le coller dans des rapports de bogues ou retrouver le champ dans votre code.",
      },
      {
        title: 'Exportez en JSON Patch ou en Markdown',
        body: 'Téléchargez la comparaison sous forme de JSON Patch standard RFC 6902 pour vos outils, ou de journal des modifications Markdown clair pour les pull requests et la documentation.',
      },
    ],
  },
  privacy: {
    eyebrow: 'Confidentialité dès la conception',
    heading: 'Vos données ne quittent jamais votre machine',
    intro:
      'De nombreux outils JSON « en ligne » envoient discrètement vos données à un serveur pour les traiter. Pas celui-ci — il n\'y a aucun backend où les envoyer. Tout se passe côté client, en mémoire, dans votre onglet.',
    points: [
      {
        label: 'Aucun aller-retour serveur',
        body: "L'analyse, la validation et la comparaison s'exécutent toutes dans votre navigateur en JavaScript pur. Votre JSON n'est jamais transmis nulle part.",
      },
      {
        label: 'Traitement côté client',
        body: "Vos comparaisons JSON sont traitées entièrement dans votre navigateur avec JavaScript — rien n'est envoyé à un serveur pour calculer la différence.",
      },
      {
        label: 'Sûr pour les données sensibles',
        body: "Réponses d'API, fichiers de configuration, jetons dans des fixtures de test — collez en toute confiance. Ce qui se passe dans votre navigateur reste dans votre navigateur.",
      },
    ],
  },
  about: {
    eyebrow: "À propos de l'outil",
    heading: 'Comment cet outil compare le JSON',
    paragraphs: [
      'JSON Diff Checker compare deux documents JSON clé par clé et valeur par valeur, et non ligne par ligne comme du texte brut. Cela signifie que réordonner les clés au sein d\'un objet — <code class="rounded-sm bg-hairline-soft px-1.5 py-0.5 font-mono text-[13px]">{"a":1,"b":2}</code> par rapport à <code class="rounded-sm bg-hairline-soft px-1.5 py-0.5 font-mono text-[13px]">{"b":2,"a":1}</code> — n\'apparaît jamais comme une fausse différence. Seuls les ajouts, les suppressions et les changements de valeur réels sont signalés.',
      'Par défaut, les tableaux sont comparés par position, car l\'ordre a souvent un sens (une liste triée, une file de priorité, une séquence d\'étapes). Activer « Ignorer l\'ordre des tableaux » bascule vers une correspondance basée sur l\'identité : si les éléments du tableau sont des objets qui partagent un champ stable <code class="rounded-sm bg-hairline-soft px-1.5 py-0.5 font-mono text-[13px]">id</code>, <code class="rounded-sm bg-hairline-soft px-1.5 py-0.5 font-mono text-[13px]">uuid</code> ou <code class="rounded-sm bg-hairline-soft px-1.5 py-0.5 font-mono text-[13px]">key</code>, ils sont mis en correspondance par ce champ quelle que soit leur position ; sinon, les éléments sont mis en correspondance par égalité profonde. Cela évite que des résultats d\'API ou des listes de configuration réordonnés ne génèrent des différences bruyantes et sans intérêt.',
      'Une entrée invalide est détectée immédiatement : l\'outil signale la ligne et la colonne exactes où l\'analyse du JSON a échoué, plutôt qu\'une erreur de syntaxe générique, de sorte que vous pouvez corriger une virgule manquante ou une clé sans guillemets en quelques secondes. Les documents profondément imbriqués ou volumineux s\'affichent sous forme d\'arbre repliable pour que la page reste lisible au lieu de se transformer en un mur de texte — et cliquer sur n\'importe quelle ligne copie son chemin JSON Pointer (RFC 6901) à coller dans un rapport de bogue ou un ticket.',
      'Tout ce qui précède s\'exécute avec du JavaScript pur dans l\'onglet de votre navigateur. Il n\'y a aucun backend qui reçoit le JSON que vous collez, importez ou chargez depuis une URL — vous pouvez le vérifier vous-même en ouvrant les outils de développement de votre navigateur, en passant à l\'onglet Réseau et en observant les requêtes pendant que vous comparez des données.',
    ],
  },
  guide: {
    eyebrow: 'Guide pratique',
    heading: 'Comment comparer deux fichiers JSON',
    intro: 'Une démonstration à partir d\'un vrai objet de configuration — les mêmes étapes fonctionnent pour les réponses d\'API, les fixtures ou tout JSON que vous devez comparer.',
    steps: [
      { title: '1. Collez, importez ou chargez votre premier JSON', body: 'Collez le document original dans l\'éditeur de gauche. Vous pouvez aussi cliquer sur « Importer » pour choisir un fichier .json, ou sur « URL » pour le récupérer directement depuis un endpoint d\'API ou l\'URL d\'un fichier brut.' },
      { title: '2. Collez la seconde version dans l\'éditeur de droite', body: 'Ajoutez le JSON mis à jour du côté droit de la même façon. La comparaison se met à jour automatiquement au fur et à mesure que vous tapez ou dès que les deux côtés contiennent du JSON valide — il n\'y a aucun bouton « Comparer » distinct à cliquer.' },
      { title: '3. Lisez l\'arbre mis en évidence', body: 'Les clés ajoutées sont marquées d\'un +, les clés supprimées d\'un −, et les valeurs modifiées affichent l\'ancienne valeur barrée à côté de la nouvelle. Utilisez « Suivant » / « Précédent » (ou Entrée / Maj+Entrée) pour passer d\'une différence à l\'autre sans faire défiler à la main.' },
      { title: '4. Ajustez la comparaison des tableaux si nécessaire', body: 'Si votre JSON contient des tableaux logiquement identiques mais dans un ordre différent — une liste de tags réordonnée, ou des résultats d\'API revenus dans une séquence différente — activez « Ignorer l\'ordre des tableaux » afin que les éléments permutés ne soient pas signalés comme des changements.' },
      { title: '5. Exportez ou partagez le résultat', body: 'Cliquez sur n\'importe quelle ligne pour copier son chemin JSON Pointer. Utilisez « Copier » ou le menu de téléchargement pour obtenir la comparaison sous forme de fichier JSON Patch RFC 6902, ou de journal des modifications Markdown que vous pouvez coller directement dans une pull request.' }
    ],
    exampleHeading: 'Un exemple concret',
    exampleIntro: 'Voici deux versions d\'une petite configuration de déploiement. L\'outil signale trois différences : une valeur modifiée, une clé supprimée et une entrée de tableau ajoutée.',
    exampleLeftLabel: 'Original (v1.2.0)',
    exampleRightLabel: 'Mis à jour (v1.3.0)',
    exampleLeftJson: '{\n  "service": "billing-api",\n  "version": "1.2.0",\n  "debug": true,\n  "replicas": 2,\n  "regions": ["us-east-1", "eu-west-1"]\n}',
    exampleRightJson: '{\n  "service": "billing-api",\n  "version": "1.3.0",\n  "replicas": 2,\n  "regions": ["us-east-1", "eu-west-1", "ap-south-1"]\n}',
    exampleRows: [
      { path: 'version', note: '"1.2.0" → "1.3.0" — signalé comme modifié.', type: 'changed' },
      { path: 'debug', note: 'présent dans l\'original, absent de la mise à jour — signalé comme supprimé.', type: 'removed' },
      { path: 'regions[2]', note: '"ap-south-1" n\'existe que du côté droit — signalé comme ajouté.', type: 'added' }
    ],
    exampleOutro: '« service » et « replicas » sont identiques des deux côtés, ils s\'affichent donc comme des lignes ordinaires, non mises en évidence — la comparaison n\'attire l\'attention que sur ce qui a réellement changé. Avec « Ignorer l\'ordre des tableaux » désactivé, la nouvelle région est traitée comme un élément de tableau ajouté plutôt qu\'un réordonnancement, puisqu\'elle a été ajoutée à la fin.'
  },
  useCases: {
    eyebrow: 'Cas d\'usage',
    heading: 'À quoi les développeurs l\'utilisent',
    intro: 'Quelques situations concrètes où une comparaison structurelle de JSON est plus rapide que la lecture de deux fichiers côte à côte.',
    items: [
      { title: 'Comparer des réponses d\'API', body: 'Chargez la réponse d\'un même endpoint depuis la préproduction et la production avec « URL », ou collez deux réponses enregistrées, pour vérifier si un changement de schéma ou un déploiement backend a modifié la forme ou les valeurs de la charge utile.' },
      { title: 'Examiner les changements de configuration', body: 'Collez la configuration avant et après une modification pour voir exactement quels paramètres ont changé avant de déployer — en repérant un changement de valeur accidentel ou une clé supprimée qui passerait autrement inaperçu lors d\'une revue de code.' },
      { title: 'Déboguer des fixtures de test', body: 'Lorsqu\'un test de snapshot ou de fixture échoue, collez le JSON attendu et le JSON réel pour voir précisément quel champ a divergé, au lieu de parcourir à l\'œil une grande différence d\'assertion.' },
      { title: 'Auditer les changements de déploiement ou d\'infrastructure', body: 'Comparez un état Terraform exporté, des manifestes Kubernetes exportés en JSON ou des configurations de fonctions serverless entre deux instants pour confirmer que seuls les champs prévus ont changé.' },
      { title: 'Traquer les bogues « ça devrait être identique »', body: 'Deux charges utiles censées correspondre mais qui produisent un comportement différent diffèrent presque toujours quelque part de façon minime — un null au lieu d\'une clé manquante, une chaîne au lieu d\'un nombre. La comparaison le fait apparaître immédiatement.' }
    ]
  },
  faq: {
    eyebrow: 'FAQ',
    heading: 'Questions fréquentes',
    items: [
      {
        q: 'Comment comparer deux fichiers JSON ?',
        a: 'Collez le contenu de chaque fichier dans les éditeurs de gauche et de droite, ou utilisez « Importer » pour choisir un fichier .json de chaque côté. La comparaison apparaît automatiquement dès que les deux côtés contiennent du JSON valide — aucun bouton à cliquer.',
      },
      {
        q: 'Puis-je comparer du JSON volumineux ou profondément imbriqué ?',
        a: 'Oui. La comparaison s\'affiche sous forme d\'arbre repliable, si bien que les nœuds sans changement restent repliés et que les documents énormes ou profondément imbriqués demeurent lisibles au lieu de produire une page interminable. Les performances réelles dépendent de votre navigateur et de votre appareil, puisque tout s\'exécute localement.',
      },
      {
        q: 'Comment les valeurs ajoutées, supprimées et modifiées sont-elles affichées ?',
        a: 'Les clés ou éléments de tableau ajoutés sont marqués d\'un + et d\'un fond vert. Ceux qui sont supprimés sont marqués d\'un − et barrés. Les valeurs modifiées affichent l\'ancienne valeur barrée à côté de la nouvelle, marquée d\'un ~.',
      },
      {
        q: 'L\'ordre des clés JSON a-t-il de l\'importance ?',
        a: 'Non. Les objets sont comparés par nom de clé, et non par position, de sorte que { "a": 1, "b": 2 } et { "b": 2, "a": 1 } sont traités comme identiques. Seul l\'ordre des tableaux est significatif, et uniquement lorsque « Ignorer l\'ordre des tableaux » est désactivé.',
      },
      {
        q: 'Comment les tableaux JSON sont-ils comparés ?',
        a: 'Par défaut, les tableaux sont comparés position par position, de sorte que réordonner des éléments est signalé comme un changement. Activez « Ignorer l\'ordre des tableaux » pour comparer plutôt par identité : les objets partageant un champ stable id, uuid ou key sont mis en correspondance par ce champ quelle que soit leur position, et tout le reste est mis en correspondance par valeur.',
      },
      {
        q: 'Que se passe-t-il lorsque le JSON est invalide ?',
        a: 'L\'éditeur indique la ligne et la colonne exactes où l\'analyse a échoué, accompagnées d\'un court message d\'erreur, de sorte que vous pouvez corriger immédiatement une virgule manquante, une clé sans guillemets ou une virgule finale au lieu de deviner.',
      },
      {
        q: 'Puis-je charger du JSON depuis une URL ?',
        a: 'Oui. Cliquez sur « URL » sur l\'un ou l\'autre éditeur, saisissez une adresse http(s), et l\'outil la récupère directement depuis votre navigateur. Cela ne fonctionne que si le serveur autorise les requêtes cross-origin (CORS) ; sinon, téléchargez le fichier et utilisez plutôt « Importer ».',
      },
      {
        q: 'Mon JSON est-il envoyé à un serveur ?',
        a: 'Non. L\'analyse, la validation et la comparaison se font toutes dans votre navigateur en JavaScript. Il n\'y a aucun backend qui reçoit ce que vous collez, importez ou chargez — ouvrez les outils de développement de votre navigateur, consultez l\'onglet Réseau et comparez des données pour confirmer que rien n\'est envoyé où que ce soit.',
      },
      {
        q: 'Comment fonctionne l\'export en JSON Patch ?',
        a: 'Cliquez sur « Copier » ou utilisez le menu de téléchargement pour obtenir la comparaison sous forme de JSON Patch conforme à la norme RFC 6902 : un tableau JSON d\'opérations add, remove et replace avec le chemin et la valeur exacts de chaque différence, prêt pour l\'outillage automatisé.',
      },
      {
        q: 'Comment exporter les différences en Markdown ?',
        a: 'Ouvrez le menu de téléchargement à côté de « Copier » et choisissez « Journal des modifications Markdown ». Vous obtenez un fichier Markdown listant chaque chemin ajouté, supprimé et modifié avec ses valeurs, prêt à être collé dans la description d\'une pull request ou un journal des modifications.',
      },
    ],
  },
  editor: {
    originalLabel: 'JSON original',
    updatedLabel: 'JSON mis à jour',
    chars: 'caractères',
    format: 'Formater',
    formatTitle: 'Mise en forme lisible',
    upload: 'Importer',
    uploadTitle: 'Importer un fichier .json',
    url: 'URL',
    urlTitle: 'Charger du JSON depuis une URL',
    clear: 'Effacer',
    clearTitle: 'Effacer',
    expandTitle: "Agrandir l'éditeur",
    urlPlaceholder: 'https://example.com/data.json',
    load: 'Charger',
    cancel: 'Annuler',
    editorPlaceholder: '{\n  "paste": "votre JSON ici"\n}',
  },
  diffPanel: {
    resultLabel: 'Résultat de la comparaison',
    added: 'ajouté',
    removed: 'supprimé',
    changed: 'modifié',
    ignoreArrayOrder: "Ignorer l'ordre des tableaux",
    ignoreArrayOrderShort: "Ignorer l'ordre",
    ignoreArrayOrderTitle: 'Mettre en correspondance les éléments du tableau par valeur/identité plutôt que par position',
    prev: 'Précédent',
    prevTitle: 'Différence précédente (Maj+Entrée)',
    next: 'Suivant',
    nextTitle: 'Différence suivante (Entrée)',
    copy: 'Copier',
    copyTitle: 'Copier la comparaison en JSON Patch',
    download: 'Télécharger',
    downloadTitle: 'Télécharger la comparaison',
    downloadPatch: 'JSON Patch (.json)',
    downloadMarkdown: 'Journal des modifications Markdown (.md)',
    emptyState: 'Collez ou chargez du JSON dans les deux panneaux ci-dessus pour voir la comparaison ici.',
  },
  footer: {
    tagline:
      "Un outil de comparaison de JSON gratuit, privé et entièrement dans le navigateur. Rien de ce que vous collez n'est jamais envoyé où que ce soit.",
    productHeading: 'Produit',
    resourcesHeading: 'Ressources',
    companyHeading: 'Entreprise',
    jsonDiffTool: 'Outil de diff JSON',
    features: 'Fonctionnalités',
    privacy: 'Confidentialité',
    faq: 'FAQ',
    jsonPointerSpec: 'Spécification JSON Pointer',
    jsonPatchSpec: 'Spécification JSON Patch',
    aboutUs: 'À propos de nous',
    contactUs: 'Nous contacter',
    privacyPolicy: 'Politique de confidentialité',
    terms: 'Conditions générales',
    copyright: '© {year} JSON Diff Checker. Tout le traitement se fait localement dans votre navigateur.',
  },
  about_us: {
    metaTitle: 'À propos de nous | JSON Diff Checker',
    metaDescription:
      'Découvrez JSON Diff Checker — un outil de comparaison de JSON gratuit et axé sur la confidentialité qui s\'exécute entièrement dans votre navigateur, sans envoi, sans inscription ni suivi.',
    eyebrow: 'À propos de nous',
    heading: 'À propos de JSON Diff Checker',
    lastUpdatedLabel: 'Dernière mise à jour :',
    sections: [
      {
        heading: 'Qui nous sommes',
        body: [
          'JSON Diff Checker est un outil web indépendant et gratuit conçu pour les développeurs, les ingénieurs QA et toute personne ayant besoin de comparer rapidement deux morceaux de JSON. Nous l\'avons créé parce que la plupart des outils de « diff JSON en ligne » envoient vos données à un serveur, cachent la comparaison derrière des publicités et des murs d\'inscription, ou peinent avec les documents volumineux et profondément imbriqués.',
        ],
      },
      {
        heading: 'Ce que nous faisons',
        body: [
          "Notre outil vous permet de coller, d'importer ou de charger du JSON depuis une URL et de voir instantanément une comparaison structurée et codée par couleur de ce qui a été ajouté, supprimé ou modifié — jusqu'à la clé ou l'élément de tableau exact. Les comparaisons sont sémantiques plutôt que textuelles, de sorte que les différences d'ordre des clés ou de formatage ne produisent jamais de faux positifs. Vous pouvez exporter les résultats sous forme de fichier JSON Patch (RFC 6902) ou de journal des modifications Markdown pour les pull requests et la documentation.",
        ],
      },
      {
        heading: 'Notre approche de la confidentialité',
        body: [
          "Chaque comparaison se fait entièrement côté client, dans votre navigateur. Nous n'exploitons aucun backend qui reçoit le JSON que vous collez, et le JSON que vous comparez n'est jamais envoyé à un tiers. Le Site est financé par la publicité Google AdSense et utilise Google Analytics pour des statistiques de trafic de base, comme décrit dans notre Politique de confidentialité. Vous pouvez vérifier que votre JSON reste local en ouvrant les outils de développement de votre navigateur, en allant dans l'onglet réseau et en observant les requêtes pendant que vous utilisez l'outil.",
        ],
      },
      {
        heading: 'Contact',
        body: [
          'Vous avez des commentaires, trouvé un bogue ou souhaitez suggérer une fonctionnalité ? Visitez notre page <a href="{contactUrl}">Nous contacter</a> pour prendre contact.',
        ],
      },
    ],
  },
  contact_us: {
    metaTitle: 'Nous contacter | JSON Diff Checker',
    metaDescription:
      'Contactez l\'équipe de JSON Diff Checker pour vos commentaires, rapports de bogues ou demandes de fonctionnalités.',
    eyebrow: 'Nous contacter',
    heading: 'Nous contacter',
    email: 'support@jsondiffchecker.com',
    lastUpdatedLabel: 'Dernière mise à jour :',
    sections: [
      {
        heading: '',
        body: [
          "Nous serions ravis d'avoir de vos nouvelles — qu'il s'agisse d'un rapport de bogue, d'une demande de fonctionnalité ou de commentaires généraux sur JSON Diff Checker.",
        ],
      },
      {
        heading: 'Courriel',
        body: [
          'Le moyen le plus rapide de nous joindre est par courriel à <a href="mailto:{email}">{email}</a>. Nous répondons généralement sous quelques jours ouvrables.',
        ],
      },
      {
        heading: 'Signaler un bogue',
        body: [
          "Si vous avez trouvé un bogue, il est utile d'inclure le JSON que vous compariez (ou un exemple minimal reproduisant le problème), le navigateur et le système d'exploitation que vous utilisez, ainsi qu'une description de ce à quoi vous vous attendiez par rapport à ce qui s'est réellement passé.",
        ],
      },
      {
        heading: 'Demandes de fonctionnalités',
        body: [
          "Vous avez une idée de fonctionnalité qui faciliterait la comparaison de JSON ? Envoyez-la-nous — nous lisons chaque suggestion, même si nous ne pouvons pas répondre à toutes ni les implémenter toutes.",
        ],
      },
    ],
  },
  privacy_policy: {
    metaTitle: 'Politique de confidentialité | JSON Diff Checker',
    metaDescription:
      'Politique de confidentialité de JSON Diff Checker. Toute la comparaison de JSON se fait localement dans votre navigateur — nous n\'envoyons, ne stockons ni ne transmettons les données que vous collez.',
    eyebrow: 'Politique de confidentialité',
    heading: 'Politique de confidentialité',
    updated: '23 octobre 2026',
    lastUpdatedLabel: 'Dernière mise à jour :',
    sections: [
      {
        heading: 'Aperçu',
        body: [
          'Cette Politique de confidentialité explique comment JSON Diff Checker (« nous », « notre », « l\'outil ») gère les informations lorsque vous utilisez jsondiffchecker.com (le « Site »). Nous avons conçu cet outil autour d\'un principe simple : les données JSON que vous comparez vous appartiennent et ne quittent jamais votre appareil.',
        ],
      },
      {
        heading: 'Données que vous collez ou importez',
        body: [
          "Toute l'analyse, la validation et la comparaison du JSON se font localement dans votre navigateur au moyen de JavaScript côté client. Nous n'avons pas de serveur backend qui reçoit, stocke, journalise ou traite le contenu que vous collez, importez ou chargez dans l'outil. Si vous chargez du JSON depuis une URL que vous fournissez, cette requête est effectuée directement depuis votre navigateur vers l'URL que vous spécifiez — nous ne la relayons ni ne l'interceptons.",
        ],
      },
      {
        heading: 'Cookies et stockage local',
        body: [
          "Nous utilisons le stockage local de votre navigateur pour mémoriser votre préférence de thème (mode clair ou sombre) ; cette information reste sur votre appareil. Nos partenaires publicitaires et d'analyse peuvent également déposer des cookies ou utiliser des identifiants similaires, comme décrit dans la section suivante.",
        ],
      },
      {
        heading: 'Analytique et publicité',
        body: [
          "Nous utilisons Google Analytics pour comprendre comment le Site est utilisé (par exemple, pages consultées, localisation approximative et type d'appareil) et Google AdSense pour afficher des publicités. Ces services Google peuvent utiliser des cookies et des identifiants similaires pour mesurer l'utilisation et diffuser des annonces.",
          "Des fournisseurs tiers, dont Google, utilisent des cookies pour diffuser des annonces en fonction de vos visites précédentes sur ce Site et sur d'autres sites web. L'utilisation de cookies publicitaires par Google lui permet, ainsi qu'à ses partenaires, de diffuser des annonces en fonction de votre visite sur ce Site et/ou sur d'autres sites Internet. Vous pouvez désactiver la publicité personnalisée dans les <a href=\"https://www.google.com/settings/ads\" rel=\"noopener noreferrer\" target=\"_blank\">Paramètres des annonces Google</a> ou sur <a href=\"https://www.aboutads.info/choices/\" rel=\"noopener noreferrer\" target=\"_blank\">aboutads.info</a>. Voir aussi <a href=\"https://policies.google.com/technologies/partner-sites\" rel=\"noopener noreferrer\" target=\"_blank\">comment Google utilise les informations provenant des sites qui utilisent ses services</a>.",
          "Le JSON que vous collez, importez ou chargez dans l'outil est traité uniquement dans votre navigateur et n'est jamais envoyé par nous à Google ni à aucun autre tiers.",
        ],
      },
      {
        heading: 'Liens vers des tiers',
        body: [
          "Le Site peut renvoyer vers des ressources tierces, telles que des spécifications RFC. Nous ne sommes pas responsables des pratiques de confidentialité des sites web externes, et nous vous encourageons à consulter leurs politiques de confidentialité respectives.",
        ],
      },
      {
        heading: 'Confidentialité des enfants',
        body: [
          "Le Site ne s'adresse pas aux enfants de moins de 13 ans, et nous ne recueillons pas sciemment d'informations personnelles auprès d'enfants.",
        ],
      },
      {
        heading: 'Modifications de cette politique',
        body: [
          'Nous pouvons mettre à jour cette Politique de confidentialité de temps à autre. Les modifications seront publiées sur cette page avec une date de « Dernière mise à jour » actualisée ci-dessus.',
        ],
      },
      {
        heading: 'Nous contacter',
        body: [
          'Si vous avez des questions sur cette Politique de confidentialité, veuillez consulter notre page <a href="{contactUrl}">Nous contacter</a>.',
        ],
      },
    ],
  },
  terms: {
    metaTitle: 'Conditions générales | JSON Diff Checker',
    metaDescription:
      'Conditions générales d\'utilisation de JSON Diff Checker, un outil de comparaison de JSON gratuit basé sur le navigateur, fourni tel quel et sans garantie.',
    eyebrow: 'Conditions générales',
    heading: 'Conditions générales',
    updated: '6 septembre 2026',
    lastUpdatedLabel: 'Dernière mise à jour :',
    sections: [
      {
        heading: 'Acceptation des conditions',
        body: [
          'En accédant à jsondiffchecker.com (le « Site ») ou en l\'utilisant, vous acceptez d\'être lié par ces Conditions générales. Si vous n\'êtes pas d\'accord, veuillez ne pas utiliser le Site.',
        ],
      },
      {
        heading: 'Description du service',
        body: [
          "JSON Diff Checker fournit un outil gratuit basé sur le navigateur pour comparer deux documents JSON et visualiser les différences entre eux. Tout le traitement se fait localement dans votre navigateur ; le Site ne nécessite ni compte ni abonnement.",
        ],
      },
      {
        heading: 'Utilisation du service',
        body: [
          "Vous acceptez d'utiliser le Site uniquement à des fins légales. Vous êtes seul responsable du contenu que vous collez, importez ou chargez dans l'outil, et de vous assurer que vous avez le droit d'utiliser et de comparer ce contenu.",
        ],
      },
      {
        heading: 'Absence de garantie',
        body: [
          "Le Site et son outil sont fournis « tels quels » et « selon disponibilité », sans garantie d'aucune sorte, expresse ou implicite, y compris, sans s'y limiter, les garanties de qualité marchande, d'adéquation à un usage particulier, d'exactitude ou de non-contrefaçon. Bien que nous nous efforcions de rendre la logique de comparaison correcte, nous ne garantissons pas que les résultats seront exempts d'erreurs ou ininterrompus.",
        ],
      },
      {
        heading: 'Limitation de responsabilité',
        body: [
          "Dans toute la mesure permise par la loi, JSON Diff Checker et ses exploitants ne sauraient être tenus responsables de tout dommage indirect, accessoire, spécial, consécutif ou punitif découlant de, ou lié à, votre utilisation ou votre incapacité à utiliser le Site.",
        ],
      },
      {
        heading: 'Propriété intellectuelle',
        body: [
          "La conception, la marque et le code sous-jacent du Site sont la propriété de JSON Diff Checker sauf indication contraire. Vous conservez la pleine propriété de toutes les données JSON que vous traitez à l'aide de l'outil.",
        ],
      },
      {
        heading: 'Références à des tiers',
        body: [
          "Le Site est un outil indépendant et n'est ni affilié, ni approuvé, ni sponsorisé par un autre service de comparaison ou de diff JSON.",
        ],
      },
      {
        heading: 'Modifications de ces conditions',
        body: [
          "Nous pouvons réviser ces Conditions générales à tout moment. L'utilisation continue du Site après la publication des modifications constitue l'acceptation des conditions révisées.",
        ],
      },
      {
        heading: 'Nous contacter',
        body: [
          'Les questions relatives à ces Conditions générales peuvent nous être envoyées via notre page <a href="{contactUrl}">Nous contacter</a>.',
        ],
      },
    ],
  },
};
