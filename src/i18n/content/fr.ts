import type { SiteContent } from '../types';

export const fr: SiteContent = {
  meta: {
    homeTitle: 'JSON Diff Checker — Comparer du JSON en ligne gratuitement | Outil de diff JSON',
    homeDescription:
      'Comparateur de JSON gratuit pour comparer deux fichiers ou objets JSON en ligne. Met en évidence instantanément les clés ajoutées, supprimées et modifiées — sans envoi, sans inscription, 100 % privé dans votre navigateur.',
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
        label: 'Aucune analytique, aucun script publicitaire',
        body: "Cette page ne charge aucun traceur ni balise publicitaire tiers — consultez l'onglet réseau de votre navigateur et vous ne verrez rien au-delà de la page elle-même.",
      },
      {
        label: 'Sûr pour les données sensibles',
        body: "Réponses d'API, fichiers de configuration, jetons dans des fixtures de test — collez en toute confiance. Ce qui se passe dans votre navigateur reste dans votre navigateur.",
      },
    ],
  },
  about: {
    eyebrow: "À propos de l'outil",
    heading: 'Un comparateur de JSON gratuit conçu pour la rapidité et la confidentialité',
    paragraphs: [
      'JSON Diff Checker est un <strong class="text-ink">comparateur de JSON en ligne</strong> gratuit qui vous permet de comparer deux fichiers ou objets JSON et de voir instantanément ce qui a changé. Collez vos données, importez des fichiers ou chargez du JSON directement depuis une URL, et cet <strong class="text-ink">outil de diff JSON</strong> met en évidence chaque clé ajoutée, clé supprimée et valeur modifiée dans un arbre clair et codé par couleur — sans installation, sans compte, et sans qu\'aucune donnée ne quitte jamais votre navigateur.',
      'La plupart des équipes ont besoin de <strong class="text-ink">comparer du JSON en ligne</strong> à un moment donné — vérifier une réponse d\'API par rapport à une fixture, examiner un changement de configuration avant un déploiement, ou comprendre pourquoi deux charges utiles qui « devraient » être identiques ne le sont pas en réalité. Le faire à l\'œil dans un éditeur de texte est lent et source d\'erreurs, surtout avec des objets profondément imbriqués ou de grands tableaux. Cet <strong class="text-ink">outil de comparaison de JSON</strong> fait la correspondance à votre place : les clés sont comparées sémantiquement plutôt que comme du texte brut, si bien que réordonner les clés au sein d\'un objet ne produit jamais de fausse différence. Si vous devez <strong class="text-ink">comparer deux fichiers JSON</strong> qui ne diffèrent que par le formatage ou l\'ordre des clés, la comparaison reste centrée sur les changements qui comptent vraiment.',
      'Les tableaux bénéficient du même traitement soigné. Par défaut, l\'ordre compte — comparer <code class="rounded-sm bg-hairline-soft px-1.5 py-0.5 font-mono text-[13px]">["a","b"]</code> à <code class="rounded-sm bg-hairline-soft px-1.5 py-0.5 font-mono text-[13px]">["b","a"]</code> est signalé comme un changement, car la séquence a souvent un sens réel. Mais lorsque vous avez simplement besoin de <strong class="text-ink">comparer des objets JSON en ligne</strong> sans vous soucier de l\'ordre des tableaux, activez « Ignorer l\'ordre des tableaux » et l\'outil fait correspondre les éléments du tableau par un champ id/clé lorsqu\'il en existe un, ou par valeur sinon — de sorte que les listes mélangées n\'apparaissent plus comme de faux positifs bruyants. Cela rend ce <strong class="text-ink">visualiseur de diff JSON</strong> fiable pour les réponses d\'API du monde réel, où l\'ordre des tableaux est fréquemment incohérent d\'une requête à l\'autre.',
      'En tant que <strong class="text-ink">comparateur de JSON gratuit</strong>, il n\'y a aucun paywall, aucune limite d\'utilisation et aucun filigrane sur les résultats exportés. Contrairement à de nombreux outils « gratuits » en ligne qui envoient discrètement vos données à un serveur pour les traiter, tout ici s\'exécute côté client en JavaScript pur — ouvrez les outils de développement de votre navigateur et observez l\'onglet réseau pendant que vous comparez des données, et vous ne verrez rien quitter la page. Cela permet de l\'utiliser en toute sécurité comme <strong class="text-ink">comparateur de JSON en ligne gratuit</strong> même avec des charges utiles sensibles : jetons d\'API dans des fixtures de test, configuration interne ou données clients que vous ne voudriez jamais voir toucher un serveur tiers.',
      'Au-delà d\'un simple <strong class="text-ink">outil de comparaison JSON</strong>, cette application est conçue pour gérer de vrais cas d\'usage en production. Une entrée invalide n\'échoue pas silencieusement — vous obtenez la ligne et la colonne exactes où l\'analyse a échoué, si bien que corriger une virgule manquante ou une clé sans guillemets prend quelques secondes plutôt qu\'une inspection manuelle de texte minifié. Lorsque vous devez <strong class="text-ink">comparer des fichiers JSON en ligne</strong> volumineux ou profondément imbriqués, la comparaison s\'affiche sous forme d\'arbre repliable pour que la page reste lisible et réactive au lieu de se transformer en un mur de texte interminable. Les raccourcis clavier vous permettent de passer d\'une différence à l\'autre avec Entrée et Maj+Entrée, et cliquer sur n\'importe quelle ligne copie son chemin JSON Pointer pour le coller directement dans un rapport de bogue ou une pull request.',
      'C\'est aussi un <strong class="text-ink">générateur de diff JSON</strong> pratique pour les flux de travail de documentation et de revue de code. Une fois les différences trouvées, exportez-les au lieu de simplement les lire : copiez le résultat sous forme de JSON Patch conforme à la norme (RFC 6902) pour l\'outillage automatisé, ou téléchargez un journal des modifications Markdown clair, prêt à être inséré dans la description d\'une pull request. Combiné à la prise en charge du chargement de JSON directement depuis une URL, il fonctionne comme une <strong class="text-ink">comparaison JSON en ligne</strong> légère et un <strong class="text-ink">outil de diff et de fusion JSON</strong> pour comparer deux endpoints en direct l\'un à l\'autre sans rien télécharger au préalable.',
      'Que vous ayez besoin de <strong class="text-ink">comparer des données JSON</strong> pour une session de débogage ponctuelle ou que vous recouriez régulièrement à un <strong class="text-ink">vérificateur de différences JSON</strong> dans le cadre de votre flux de travail de développement, cet outil est conçu pour être rapide à ouvrir, évident à utiliser et sûr par défaut — chaque comparaison se fait localement, à chaque fois, gratuitement.',
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    heading: 'Questions fréquentes',
    items: [
      {
        q: 'Mes données JSON sont-elles envoyées quelque part ?',
        a: "Non. Toute l'analyse, la validation et la comparaison se font dans votre navigateur en JavaScript. Il n'y a aucun backend qui reçoit votre JSON — vous pouvez le vérifier vous-même en ouvrant les outils de développement de votre navigateur, en allant dans l'onglet réseau et en observant les requêtes pendant que vous comparez des données.",
      },
      {
        q: "Est-ce important si l'ordre des clés est différent ?",
        a: 'Non. La comparaison est sémantique plutôt que textuelle — les clés sont mises en correspondance par nom quel que soit l\'ordre, de sorte que { "a": 1, "b": 2 } et { "b": 2, "a": 1 } sont traités comme identiques.',
      },
      {
        q: 'Puis-je comparer des fichiers JSON avec des ordres de tableaux différents ?',
        a: 'Oui. Par défaut, l\'ordre des tableaux compte — comparer ["a","b"] avec ["b","a"] affiche les deux entrées comme modifiées, car l\'ordre a souvent un sens (p. ex. des listes triées). Activez « Ignorer l\'ordre des tableaux » au-dessus du résultat de la comparaison pour comparer les tableaux par valeur : les éléments sont mis en correspondance par un champ id/uuid/clé lorsque les objets en possèdent un, ou par valeur sinon, de sorte que le simple réordonnancement n\'est plus signalé — seuls les éléments réellement ajoutés, supprimés ou modifiés le sont.',
      },
      {
        q: 'Que se passe-t-il si mon JSON est invalide ?',
        a: "Vous verrez un message d'erreur clair indiquant la ligne et la colonne exactes où l'analyse a échoué, afin que vous puissiez corriger immédiatement les erreurs de syntaxe telles que les virgules manquantes, les clés sans guillemets ou les virgules finales.",
      },
      {
        q: 'Quelle taille de fichier puis-je comparer ?',
        a: "Les performances dépendent de votre navigateur et de votre appareil, puisque tout s'exécute localement. L'outil est conçu pour rester réactif avec des documents volumineux et profondément imbriqués en affichant l'arbre de comparaison avec des nœuds repliables.",
      },
      {
        q: 'Puis-je télécharger ou partager le résultat ?',
        a: 'Oui. Vous pouvez copier la comparaison sous forme de JSON Patch (RFC 6902) ou la télécharger sous forme de fichier JSON Patch ou de journal des modifications Markdown lisible — utile pour les pull requests, les rapports de bogues ou la documentation.',
      },
      {
        q: 'Comment vérifier si un JSON est correct ?',
        a: "Collez votre JSON dans l'un ou l'autre des éditeurs de cette page — il est validé au fur et à mesure que vous tapez. Si le JSON est invalide, vous verrez un message d'erreur indiquant la ligne et la colonne exactes du problème (p. ex. une virgule manquante, une clé sans guillemets ou une virgule finale). S'il s'analyse correctement, c'est du JSON valide.",
      },
      {
        q: 'Diffchecker est-il gratuit ?',
        a: "Ce comparateur de JSON est entièrement gratuit, sans inscription, sans limite d'utilisation et sans données envoyées à un serveur — les comparaisons s'exécutent entièrement dans votre navigateur. (Diffchecker.com est un service tiers distinct ; nous n'y sommes pas affiliés.)",
      },
      {
        q: 'Comment vérifier la différence entre deux fichiers JSON ?',
        a: 'Ouvrez le contenu de chaque fichier et collez-le dans les éditeurs de gauche et de droite ci-dessus, puis cliquez sur Comparer (ou laissez la comparaison se faire automatiquement). Les clés ajoutées, supprimées et modifiées sont mises en évidence ligne par ligne, et vous pouvez activer « Ignorer l\'ordre des tableaux » si l\'ordre des tableaux ne doit pas compter comme une différence.',
      },
      {
        q: 'Comment utiliser jsondiff en Python ?',
        a: "En Python, l'option populaire est le paquet `jsondiff` : installez-le avec `pip install jsondiff`, puis appelez `jsondiff.diff(a, b)` où `a` et `b` sont des objets JSON analysés (dicts). Il renvoie un dict décrivant ce qui a changé. C'est utile pour le scripting ou les contrôles CI — pour des comparaisons visuelles, rapides et ponctuelles sans écrire de code, utilisez plutôt l'outil de cette page.",
      },
      {
        q: 'Comment appelle-t-on la différence entre deux fichiers JSON ?',
        a: 'On l\'appelle couramment un « diff JSON » ou un « delta JSON » — une description structurée de ce qui a été ajouté, supprimé ou modifié entre deux documents JSON. Un format normalisé pour l\'exprimer est JSON Patch (RFC 6902), que cet outil peut générer pour vous.',
      },
      {
        q: 'Comment comparer deux objets JSON ?',
        a: "Collez un objet dans chaque éditeur ci-dessus. La comparaison se fait clé par clé (et non comme du texte brut), de sorte que les objets sont considérés comme égaux s'ils ont les mêmes clés et valeurs quel que soit l'ordre des clés, tandis que toute valeur ajoutée, supprimée ou modifiée est mise en évidence.",
      },
      {
        q: 'Peut-on faire un diff de fichiers JSON ?',
        a: "Oui — collez le contenu des deux fichiers dans les deux éditeurs de cette page et les différences sont mises en évidence instantanément. Tout s'exécute côté client dans votre navigateur, donc aucun fichier n'est envoyé nulle part.",
      },
      {
        q: 'Comment vérifier si deux objets JSON sont identiques ?',
        a: 'Comparez-les avec cet outil : si la vue des différences n\'affiche aucune entrée ajoutée, supprimée ou modifiée, les objets sont équivalents. Deux objets JSON sont considérés comme identiques lorsqu\'ils contiennent les mêmes clés et valeurs, même si les clés apparaissent dans un ordre différent — seul l\'ordre des tableaux compte, sauf si vous activez « Ignorer l\'ordre des tableaux ».',
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
    notAffiliated: 'Non affilié à json-diff.com.',
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
          "Chaque comparaison se fait entièrement côté client, dans votre navigateur. Nous n'exploitons aucun backend qui reçoit le JSON que vous collez, et nous n'utilisons ni scripts de suivi ni balises publicitaires. Vous pouvez le vérifier vous-même en ouvrant les outils de développement de votre navigateur, en allant dans l'onglet réseau et en observant les requêtes pendant que vous utilisez l'outil.",
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
    updated: '6 septembre 2026',
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
          "Nous utilisons le stockage local de votre navigateur uniquement pour mémoriser votre préférence de thème (mode clair ou sombre). Cette information reste sur votre appareil et n'est transmise ni à nous ni à un tiers.",
        ],
      },
      {
        heading: 'Analytique et publicité',
        body: [
          "Le Site ne charge aucun script d'analytique tiers, balise publicitaire ni pixel de suivi. Vous pouvez le vérifier en ouvrant les outils de développement de votre navigateur et en inspectant l'onglet réseau pendant que vous utilisez l'outil.",
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
          "Le Site n'est ni affilié, ni approuvé, ni sponsorisé par un quelconque service tiers, y compris des outils au nom similaire tels que Diffchecker.com ou json-diff.com.",
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
