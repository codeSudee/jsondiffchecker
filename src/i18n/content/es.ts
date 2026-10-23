import type { SiteContent } from '../types';

export const es: SiteContent = {
  meta: {
    homeTitle: 'JSON Diff Checker — Comparar JSON en línea gratis | Herramienta de diff JSON',
    homeDescription:
      'Comparador de JSON gratuito para comparar dos archivos u objetos JSON en línea. Resalta al instante las claves añadidas, eliminadas y modificadas — sin subidas, sin registro, 100 % privado en tu navegador.',
  },
  nav: {
    brand: 'JSON Diff Checker',
    brandShort: 'JSON Diff',
    tool: 'Herramienta',
    features: 'Funciones',
    privacy: 'Privacidad',
    faq: 'Preguntas frecuentes',
    about: 'Acerca de',
    openTool: 'Abrir la herramienta',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    toggleTheme: 'Alternar modo oscuro',
    primaryNavLabel: 'Principal',
    secondaryNavLabel: 'Secundario',
    languageLabel: 'Idioma',
  },
  hero: {
    badge: '100 % del lado del cliente · tus datos nunca salen de tu navegador',
    titleLine1: 'Compara JSON.',
    titleLine2: 'Ve cada diferencia al instante.',
    subtitle:
      'Pega, sube o carga dos documentos JSON y obtén una comparación precisa y codificada por colores — claves añadidas, claves eliminadas y valores modificados — sin que un solo byte salga de tu equipo.',
    ctaPrimary: 'Empezar a comparar',
    ctaSecondary: 'Ver qué es diferente',
    aboutUs: 'Acerca de nosotros',
    contactUs: 'Contáctanos',
    privacyPolicy: 'Política de privacidad',
    terms: 'Términos y condiciones',
  },
  tool: {
    eyebrow: 'La herramienta',
    heading: 'Pega tu JSON en ambos lados para comparar',
    note: 'Se ejecuta íntegramente en esta pestaña — no se sube nada.',
  },
  features: {
    eyebrow: 'Funciones',
    heading: 'Todo lo que necesitas, nada que no necesites',
    items: [
      {
        title: 'Mensajes de error con línea exacta',
        body: '¿JSON no válido? Obtienes la línea y la columna exactas, no un fallo impreciso. Corrige los errores en segundos en lugar de rastrear texto minificado.',
      },
      {
        title: 'Sube, pega o carga desde una URL',
        body: 'Suelta un archivo .json, pega texto sin formato o extrae un documento directamente desde un endpoint de API — lo que sea más rápido para tu flujo de trabajo.',
      },
      {
        title: 'Resumen de diferencias y navegación con teclado',
        body: 'Consulta de un vistazo el recuento de claves añadidas, eliminadas y modificadas, y luego salta entre ellas con Enter / Shift+Enter sin tocar el ratón.',
      },
      {
        title: 'Profundamente anidado, sin romper el diseño',
        body: 'Los nodos de árbol plegables mantienen legibles las cargas útiles enormes y profundamente anidadas en lugar de generar una página interminable e ilegible.',
      },
      {
        title: 'Copia una ruta, no solo un valor',
        body: 'Haz clic en cualquier fila de diferencia para copiar su ruta JSON Pointer — perfecto para pegarla en informes de errores o localizar el campo en tu código.',
      },
      {
        title: 'Exporta como JSON Patch o Markdown',
        body: 'Descarga la comparación como un JSON Patch estándar RFC 6902 para herramientas, o como un limpio registro de cambios en Markdown para pull requests y documentación.',
      },
    ],
  },
  privacy: {
    eyebrow: 'Privacidad por diseño',
    heading: 'Tus datos nunca salen de tu equipo',
    intro:
      'Muchas herramientas JSON "en línea" envían discretamente tus datos a un servidor para procesarlos. Esta no lo hace — no hay ningún backend al que enviarlos. Todo ocurre del lado del cliente, en memoria, en tu pestaña.',
    points: [
      {
        label: 'Sin ida y vuelta al servidor',
        body: 'El análisis, la validación y la comparación se ejecutan todos en tu navegador con JavaScript puro. Tu JSON nunca se transmite a ningún sitio.',
      },
      {
        label: 'Sin analíticas, sin scripts de anuncios',
        body: 'Esta página no carga rastreadores ni etiquetas publicitarias de terceros — revisa la pestaña de red de tu navegador y no verás nada más allá de la propia página.',
      },
      {
        label: 'Seguro para datos sensibles',
        body: 'Respuestas de API, archivos de configuración, tokens en fixtures de pruebas — pega con confianza. Lo que ocurre en tu navegador se queda en tu navegador.',
      },
    ],
  },
  about: {
    eyebrow: 'Acerca de la herramienta',
    heading: 'Un comparador de JSON gratuito creado para la velocidad y la privacidad',
    paragraphs: [
      'JSON Diff Checker es un <strong class="text-ink">comparador de JSON en línea</strong> gratuito que te permite comparar dos archivos u objetos JSON y ver al instante qué ha cambiado. Pega tus datos, sube archivos o carga JSON directamente desde una URL, y esta <strong class="text-ink">herramienta de diff JSON</strong> resalta cada clave añadida, clave eliminada y valor modificado en un árbol limpio y codificado por colores — sin instalación, sin cuenta y sin que ningún dato salga jamás de tu navegador.',
      'La mayoría de los equipos necesitan <strong class="text-ink">comparar JSON en línea</strong> en algún momento — comprobar una respuesta de API contra un fixture, revisar un cambio de configuración antes de un despliegue o averiguar por qué dos cargas útiles que "deberían" ser idénticas en realidad no lo son. Hacerlo a ojo en un editor de texto es lento y propenso a errores, especialmente con objetos profundamente anidados o arrays grandes. Esta <strong class="text-ink">herramienta de comparación de JSON</strong> hace la correspondencia por ti: las claves se comparan semánticamente en lugar de como texto sin procesar, de modo que reordenar las claves dentro de un objeto nunca produce una diferencia falsa. Si necesitas <strong class="text-ink">comparar dos archivos JSON</strong> que solo difieren en el formato o el orden de las claves, la comparación se mantiene centrada en los cambios que realmente importan.',
      'Los arrays reciben el mismo trato cuidadoso. De forma predeterminada, el orden importa — comparar <code class="rounded-sm bg-hairline-soft px-1.5 py-0.5 font-mono text-[13px]">["a","b"]</code> con <code class="rounded-sm bg-hairline-soft px-1.5 py-0.5 font-mono text-[13px]">["b","a"]</code> se reporta como un cambio, ya que la secuencia a menudo tiene un significado real. Pero cuando solo necesitas <strong class="text-ink">comparar objetos JSON en línea</strong> sin preocuparte por el orden de los arrays, activa "Ignorar el orden de los arrays" y la herramienta empareja los elementos del array por un campo id/clave cuando existe, o por valor en caso contrario — de modo que las listas desordenadas ya no aparecen como falsos positivos ruidosos. Eso hace que este <strong class="text-ink">visor de diff JSON</strong> sea fiable para respuestas de API del mundo real, donde el orden de los arrays suele ser inconsistente entre solicitudes.',
      'Como <strong class="text-ink">comparador de JSON gratuito</strong>, no hay muro de pago, ni límite de uso, ni marca de agua en los resultados exportados. A diferencia de muchas herramientas "gratuitas" en línea que envían discretamente tus datos a un servidor para procesarlos, aquí todo se ejecuta del lado del cliente con JavaScript puro — abre las herramientas de desarrollo de tu navegador y observa la pestaña de red mientras comparas datos, y no verás nada salir de la página. Eso hace que sea seguro usarlo como <strong class="text-ink">comparador de JSON en línea gratis</strong> incluso con cargas útiles sensibles: tokens de API en fixtures de pruebas, configuración interna o datos de clientes que nunca querrías que tocaran un servidor de terceros.',
      'Más allá de una simple <strong class="text-ink">herramienta de comparación de JSON</strong>, esta aplicación está creada para gestionar casos de uso reales de producción. La entrada no válida no falla silenciosamente — obtienes la línea y la columna exactas donde se rompió el análisis, de modo que corregir una coma que falta o una clave sin comillas lleva segundos en lugar de un escaneo manual a través de texto minificado. Cuando necesitas <strong class="text-ink">comparar archivos JSON en línea</strong> que son grandes o están profundamente anidados, la comparación se renderiza como un árbol plegable para que la página se mantenga legible y ágil en lugar de convertirse en un muro de texto interminable. Los atajos de teclado te permiten saltar entre diferencias con Enter y Shift+Enter, y al hacer clic en cualquier fila se copia su ruta JSON Pointer para pegarla directamente en un informe de error o un pull request.',
      'Esto también es un práctico <strong class="text-ink">generador de diff JSON</strong> para flujos de trabajo de documentación y revisión de código. Una vez que hayas encontrado las diferencias, expórtalas en lugar de solo leerlas: copia el resultado como un JSON Patch conforme al estándar (RFC 6902) para herramientas automatizadas, o descarga un limpio registro de cambios en Markdown listo para insertar en la descripción de un pull request. Combinado con la compatibilidad para cargar JSON directamente desde una URL, funciona como una ligera <strong class="text-ink">comparación de JSON en línea</strong> y <strong class="text-ink">herramienta de diff y fusión de JSON</strong> para comparar dos endpoints en vivo entre sí sin descargar nada primero.',
      'Ya sea que necesites <strong class="text-ink">comparar datos JSON</strong> para una sesión puntual de depuración o recurras a un <strong class="text-ink">verificador de diferencias JSON</strong> con regularidad como parte de tu flujo de trabajo de desarrollo, esta herramienta está diseñada para ser rápida de abrir, evidente de usar y segura por defecto — cada comparación ocurre localmente, cada vez, gratis.',
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    heading: 'Preguntas comunes',
    items: [
      {
        q: '¿Se sube mi JSON a algún sitio?',
        a: 'No. Todo el análisis, la validación y la comparación ocurren en tu navegador usando JavaScript. No hay ningún backend que reciba tu JSON — puedes verificarlo tú mismo abriendo las herramientas de desarrollo de tu navegador, yendo a la pestaña de red y observando las solicitudes mientras comparas datos.',
      },
      {
        q: '¿Importa si el orden de las claves es diferente?',
        a: 'No. La comparación es semántica en lugar de textual — las claves se emparejan por nombre sin importar el orden, así que { "a": 1, "b": 2 } y { "b": 2, "a": 1 } se tratan como idénticos.',
      },
      {
        q: '¿Puedo comparar archivos JSON con distinto orden de arrays?',
        a: 'Sí. De forma predeterminada, el orden de los arrays importa — comparar ["a","b"] con ["b","a"] muestra ambas entradas como modificadas, ya que el orden a menudo tiene significado (p. ej. listas ordenadas). Activa "Ignorar el orden de los arrays" encima del resultado de la comparación para comparar los arrays por valor en su lugar: los elementos se emparejan por un campo id/uuid/clave cuando los objetos lo tienen, o por valor en caso contrario, de modo que el reordenamiento por sí solo ya no se reporta — solo los elementos que se añadieron, eliminaron o cambiaron realmente.',
      },
      {
        q: '¿Qué ocurre si mi JSON no es válido?',
        a: 'Verás un mensaje de error claro con la línea y la columna exactas donde falló el análisis, para que puedas corregir de inmediato errores de sintaxis como comas faltantes, claves sin comillas o comas finales.',
      },
      {
        q: '¿Qué tamaño de archivo puedo comparar?',
        a: 'El rendimiento depende de tu navegador y dispositivo, ya que todo se ejecuta localmente. La herramienta está creada para mantenerse ágil con documentos grandes y profundamente anidados renderizando el árbol de diferencias con nodos plegables.',
      },
      {
        q: '¿Puedo descargar o compartir el resultado?',
        a: 'Sí. Puedes copiar la comparación como un JSON Patch (RFC 6902) o descargarla como un archivo JSON Patch o un registro de cambios en Markdown legible por humanos — útil para pull requests, informes de errores o documentación.',
      },
      {
        q: '¿Cómo comprobar si un JSON es correcto?',
        a: 'Pega tu JSON en cualquiera de los editores de esta página — se valida a medida que escribes. Si el JSON no es válido, verás un mensaje de error con la línea y la columna exactas del problema (p. ej. una coma faltante, una clave sin comillas o una coma final). Si se analiza correctamente, es JSON válido.',
      },
      {
        q: '¿Es Diffchecker gratuito?',
        a: 'Este comparador de JSON es completamente gratuito, sin registro, sin límites de uso y sin datos subidos a un servidor — las comparaciones se ejecutan íntegramente en tu navegador. (Diffchecker.com es un servicio de terceros distinto; no estamos afiliados a él.)',
      },
      {
        q: '¿Cómo comprobar la diferencia entre dos archivos JSON?',
        a: 'Abre el contenido de cada archivo y pégalo en los editores izquierdo y derecho de arriba, luego haz clic en Comparar (o deja que se compare automáticamente). Las claves añadidas, eliminadas y modificadas se resaltan línea por línea, y puedes activar "Ignorar el orden de los arrays" si el orden de los arrays no debería contar como una diferencia.',
      },
      {
        q: '¿Cómo uso jsondiff en Python?',
        a: 'En Python, la opción popular es el paquete `jsondiff`: instálalo con `pip install jsondiff`, luego llama a `jsondiff.diff(a, b)` donde `a` y `b` son objetos JSON analizados (dicts). Devuelve un dict que describe lo que cambió. Esto es útil para scripts o comprobaciones de CI — para comparaciones visuales, rápidas y puntuales sin escribir código, usa la herramienta de esta página en su lugar.',
      },
      {
        q: '¿Cómo se llama la diferencia entre dos archivos JSON?',
        a: 'Comúnmente se llama "diff de JSON" o "delta de JSON" — una descripción estructurada de lo que se añadió, eliminó o cambió entre dos documentos JSON. Un formato estandarizado para expresarlo es JSON Patch (RFC 6902), que esta herramienta puede generar por ti.',
      },
      {
        q: '¿Cómo comparo dos objetos JSON?',
        a: 'Pega un objeto en cada editor de arriba. La comparación se hace clave por clave (no como texto plano), así que los objetos se consideran iguales si tienen las mismas claves y valores sin importar el orden de las claves, mientras que cualquier valor añadido, eliminado o modificado se resalta.',
      },
      {
        q: '¿Se puede hacer diff de archivos JSON?',
        a: 'Sí — pega el contenido de ambos archivos en los dos editores de esta página y las diferencias se resaltan al instante. Todo se ejecuta del lado del cliente en tu navegador, así que ningún archivo se sube a ningún sitio.',
      },
      {
        q: '¿Cómo se comprueba si dos objetos JSON son iguales?',
        a: 'Compáralos con esta herramienta: si la vista de diferencias no muestra ninguna entrada añadida, eliminada o modificada, los objetos son equivalentes. Dos objetos JSON se consideran iguales cuando contienen las mismas claves y valores, incluso si las claves aparecen en un orden diferente — solo el orden de los arrays importa salvo que actives "Ignorar el orden de los arrays".',
      },
    ],
  },
  editor: {
    originalLabel: 'JSON original',
    updatedLabel: 'JSON actualizado',
    chars: 'caracteres',
    format: 'Formatear',
    formatTitle: 'Formato legible',
    upload: 'Subir',
    uploadTitle: 'Subir un archivo .json',
    url: 'URL',
    urlTitle: 'Cargar JSON desde una URL',
    clear: 'Borrar',
    clearTitle: 'Borrar',
    expandTitle: 'Ampliar editor',
    urlPlaceholder: 'https://example.com/data.json',
    load: 'Cargar',
    cancel: 'Cancelar',
    editorPlaceholder: '{\n  "paste": "tu JSON aquí"\n}',
  },
  diffPanel: {
    resultLabel: 'Resultado de la comparación',
    added: 'añadido',
    removed: 'eliminado',
    changed: 'modificado',
    ignoreArrayOrder: 'Ignorar el orden de los arrays',
    ignoreArrayOrderShort: 'Ignorar orden',
    ignoreArrayOrderTitle: 'Emparejar elementos del array por valor/identidad en lugar de por posición',
    prev: 'Anterior',
    prevTitle: 'Diferencia anterior (Shift+Enter)',
    next: 'Siguiente',
    nextTitle: 'Diferencia siguiente (Enter)',
    copy: 'Copiar',
    copyTitle: 'Copiar comparación como JSON Patch',
    download: 'Descargar',
    downloadTitle: 'Descargar comparación',
    downloadPatch: 'JSON Patch (.json)',
    downloadMarkdown: 'Registro de cambios Markdown (.md)',
    emptyState: 'Pega o carga JSON en ambos paneles de arriba para ver la comparación aquí.',
  },
  footer: {
    tagline:
      'Una herramienta de comparación de JSON gratuita, privada y exclusiva del navegador. Nada de lo que pegues se envía jamás a ningún sitio.',
    productHeading: 'Producto',
    resourcesHeading: 'Recursos',
    companyHeading: 'Empresa',
    jsonDiffTool: 'Herramienta de diff JSON',
    features: 'Funciones',
    privacy: 'Privacidad',
    faq: 'Preguntas frecuentes',
    jsonPointerSpec: 'Especificación JSON Pointer',
    jsonPatchSpec: 'Especificación JSON Patch',
    aboutUs: 'Acerca de nosotros',
    contactUs: 'Contáctanos',
    privacyPolicy: 'Política de privacidad',
    terms: 'Términos y condiciones',
    copyright: '© {year} JSON Diff Checker. Todo el procesamiento ocurre localmente en tu navegador.',
    notAffiliated: 'No afiliado con json-diff.com.',
  },
  about_us: {
    metaTitle: 'Acerca de nosotros | JSON Diff Checker',
    metaDescription:
      'Conoce JSON Diff Checker — una herramienta de comparación de JSON gratuita y centrada en la privacidad que se ejecuta íntegramente en tu navegador sin subidas, registro ni rastreo.',
    eyebrow: 'Acerca de nosotros',
    heading: 'Acerca de JSON Diff Checker',
    lastUpdatedLabel: 'Última actualización:',
    sections: [
      {
        heading: 'Quiénes somos',
        body: [
          'JSON Diff Checker es una herramienta web independiente y gratuita creada para desarrolladores, ingenieros de QA y cualquiera que necesite comparar rápidamente dos fragmentos de JSON. La creamos porque la mayoría de las herramientas de "diff de JSON en línea" o suben tus datos a un servidor, entierran la comparación tras anuncios y muros de registro, o tienen dificultades con documentos grandes y profundamente anidados.',
        ],
      },
      {
        heading: 'Qué hacemos',
        body: [
          'Nuestra herramienta te permite pegar, subir o cargar JSON desde una URL y ver al instante una comparación estructurada y codificada por colores de lo que se añadió, eliminó o cambió — hasta la clave o el elemento de array exacto. Las comparaciones son semánticas en lugar de textuales, así que las diferencias en el orden de las claves o el formato nunca producen falsos positivos. Puedes exportar los resultados como un archivo JSON Patch (RFC 6902) o un registro de cambios en Markdown para pull requests y documentación.',
        ],
      },
      {
        heading: 'Nuestro enfoque de la privacidad',
        body: [
          'Cada comparación ocurre íntegramente del lado del cliente, en tu navegador. No operamos un backend que reciba el JSON que pegas, y no usamos scripts de rastreo ni etiquetas publicitarias. Puedes verificarlo tú mismo abriendo las herramientas de desarrollo de tu navegador, yendo a la pestaña de red y observando las solicitudes mientras usas la herramienta.',
        ],
      },
      {
        heading: 'Contacto',
        body: [
          '¿Tienes comentarios, encontraste un error o quieres sugerir una función? Visita nuestra página de <a href="{contactUrl}">Contáctanos</a> para ponerte en contacto.',
        ],
      },
    ],
  },
  contact_us: {
    metaTitle: 'Contáctanos | JSON Diff Checker',
    metaDescription:
      'Ponte en contacto con el equipo de JSON Diff Checker para comentarios, informes de errores o solicitudes de funciones.',
    eyebrow: 'Contáctanos',
    heading: 'Contáctanos',
    email: 'support@jsondiffchecker.com',
    lastUpdatedLabel: 'Última actualización:',
    sections: [
      {
        heading: '',
        body: [
          'Nos encantaría saber de ti — ya sea un informe de error, una solicitud de función o comentarios generales sobre JSON Diff Checker.',
        ],
      },
      {
        heading: 'Correo electrónico',
        body: [
          'La forma más rápida de contactarnos es por correo electrónico en <a href="mailto:{email}">{email}</a>. Por lo general respondemos en unos pocos días hábiles.',
        ],
      },
      {
        heading: 'Reportar un error',
        body: [
          'Si has encontrado un error, ayuda incluir el JSON que estabas comparando (o un ejemplo mínimo que reproduzca el problema), el navegador y el sistema operativo que usas, y una descripción de lo que esperabas que ocurriera frente a lo que realmente ocurrió.',
        ],
      },
      {
        heading: 'Solicitudes de funciones',
        body: [
          '¿Tienes una idea para una función que facilitaría la comparación de JSON? Envíanosla — leemos cada sugerencia, aunque no podamos responder a todas ni implementarlas todas.',
        ],
      },
    ],
  },
  privacy_policy: {
    metaTitle: 'Política de privacidad | JSON Diff Checker',
    metaDescription:
      'Política de privacidad de JSON Diff Checker. Toda la comparación de JSON ocurre localmente en tu navegador — no subimos, almacenamos ni transmitimos los datos que pegas.',
    eyebrow: 'Política de privacidad',
    heading: 'Política de privacidad',
    updated: '6 de septiembre de 2026',
    lastUpdatedLabel: 'Última actualización:',
    sections: [
      {
        heading: 'Descripción general',
        body: [
          'Esta Política de privacidad explica cómo JSON Diff Checker ("nosotros", "nuestro", "la herramienta") gestiona la información cuando usas jsondiffchecker.com (el "Sitio"). Construimos esta herramienta en torno a un principio sencillo: los datos JSON que comparas son tuyos y nunca salen de tu dispositivo.',
        ],
      },
      {
        heading: 'Datos que pegas o subes',
        body: [
          'Todo el análisis, la validación y la comparación de JSON ocurren localmente en tu navegador mediante JavaScript del lado del cliente. No tenemos un servidor backend que reciba, almacene, registre o procese el contenido que pegas, subes o cargas en la herramienta. Si cargas JSON desde una URL que proporcionas, esa solicitud se realiza directamente desde tu navegador a la URL que especificas — no la intermediamos ni la interceptamos.',
        ],
      },
      {
        heading: 'Cookies y almacenamiento local',
        body: [
          'Usamos el almacenamiento local de tu navegador únicamente para recordar tu preferencia de tema (modo claro u oscuro). Esta información permanece en tu dispositivo y no se transmite a nosotros ni a ningún tercero.',
        ],
      },
      {
        heading: 'Analíticas y publicidad',
        body: [
          'El Sitio no carga scripts de analíticas de terceros, etiquetas publicitarias ni píxeles de rastreo. Puedes verificarlo abriendo las herramientas de desarrollo de tu navegador e inspeccionando la pestaña de red mientras usas la herramienta.',
        ],
      },
      {
        heading: 'Enlaces de terceros',
        body: [
          'El Sitio puede enlazar a recursos de terceros, como especificaciones RFC. No somos responsables de las prácticas de privacidad de sitios web externos, y te animamos a revisar sus respectivas políticas de privacidad.',
        ],
      },
      {
        heading: 'Privacidad de los menores',
        body: [
          'El Sitio no está dirigido a menores de 13 años, y no recopilamos conscientemente información personal de menores.',
        ],
      },
      {
        heading: 'Cambios en esta política',
        body: [
          'Podemos actualizar esta Política de privacidad de vez en cuando. Los cambios se publicarán en esta página con una fecha de "Última actualización" actualizada arriba.',
        ],
      },
      {
        heading: 'Contáctanos',
        body: [
          'Si tienes preguntas sobre esta Política de privacidad, visita nuestra página de <a href="{contactUrl}">Contáctanos</a>.',
        ],
      },
    ],
  },
  terms: {
    metaTitle: 'Términos y condiciones | JSON Diff Checker',
    metaDescription:
      'Términos y condiciones para el uso de JSON Diff Checker, una herramienta gratuita de comparación de JSON basada en el navegador y proporcionada tal cual, sin garantía.',
    eyebrow: 'Términos y condiciones',
    heading: 'Términos y condiciones',
    updated: '6 de septiembre de 2026',
    lastUpdatedLabel: 'Última actualización:',
    sections: [
      {
        heading: 'Aceptación de los términos',
        body: [
          'Al acceder o usar jsondiffchecker.com (el "Sitio"), aceptas quedar vinculado por estos Términos y condiciones. Si no estás de acuerdo, por favor no uses el Sitio.',
        ],
      },
      {
        heading: 'Descripción del servicio',
        body: [
          'JSON Diff Checker proporciona una herramienta gratuita basada en el navegador para comparar dos documentos JSON y ver las diferencias entre ellos. Todo el procesamiento ocurre localmente en tu navegador; el Sitio no requiere cuenta ni suscripción.',
        ],
      },
      {
        heading: 'Uso del servicio',
        body: [
          'Aceptas usar el Sitio únicamente con fines lícitos. Eres el único responsable del contenido que pegas, subes o cargas en la herramienta, y de asegurarte de que tienes derecho a usar y comparar ese contenido.',
        ],
      },
      {
        heading: 'Sin garantía',
        body: [
          'El Sitio y su herramienta se proporcionan "tal cual" y "según disponibilidad", sin garantías de ningún tipo, ya sean expresas o implícitas, incluidas, entre otras, las garantías de comerciabilidad, idoneidad para un propósito particular, exactitud o no infracción. Aunque nos esforzamos por que la lógica de comparación sea correcta, no garantizamos que los resultados estén libres de errores ni sean ininterrumpidos.',
        ],
      },
      {
        heading: 'Limitación de responsabilidad',
        body: [
          'En la máxima medida permitida por la ley, JSON Diff Checker y sus operadores no serán responsables de ningún daño indirecto, incidental, especial, consecuente o punitivo que surja de, o esté relacionado con, tu uso o la imposibilidad de usar el Sitio.',
        ],
      },
      {
        heading: 'Propiedad intelectual',
        body: [
          'El diseño, la marca y el código subyacente del Sitio son propiedad de JSON Diff Checker salvo que se indique lo contrario. Conservas la propiedad total de cualquier dato JSON que proceses con la herramienta.',
        ],
      },
      {
        heading: 'Referencias a terceros',
        body: [
          'El Sitio no está afiliado, respaldado ni patrocinado por ningún servicio de terceros, incluidas herramientas con nombres similares como Diffchecker.com o json-diff.com.',
        ],
      },
      {
        heading: 'Cambios en estos términos',
        body: [
          'Podemos revisar estos Términos y condiciones en cualquier momento. El uso continuado del Sitio después de que se publiquen los cambios constituye la aceptación de los términos revisados.',
        ],
      },
      {
        heading: 'Contáctanos',
        body: [
          'Las preguntas sobre estos Términos y condiciones pueden enviarse a través de nuestra página de <a href="{contactUrl}">Contáctanos</a>.',
        ],
      },
    ],
  },
};
