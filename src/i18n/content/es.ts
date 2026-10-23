import type { SiteContent } from '../types';

export const es: SiteContent = {
  meta: {
    homeTitle: 'JSON Diff Checker — Compara dos archivos JSON en tu navegador',
    homeDescription:
      'Pega, sube o carga dos documentos JSON y ve exactamente qué cambió: claves añadidas, claves eliminadas y valores modificados, resaltados en un árbol plegable. Se ejecuta íntegramente en tu navegador.',
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
        label: 'Procesamiento en el navegador',
        body: 'Tus comparaciones de JSON se procesan por completo en tu navegador con JavaScript — no se envía nada a un servidor para calcular la diferencia.',
      },
      {
        label: 'Seguro para datos sensibles',
        body: 'Respuestas de API, archivos de configuración, tokens en fixtures de pruebas — pega con confianza. Lo que ocurre en tu navegador se queda en tu navegador.',
      },
    ],
  },
  about: {
    eyebrow: 'Acerca de la herramienta',
    heading: 'Cómo compara JSON esta herramienta',
    paragraphs: [
      'JSON Diff Checker compara dos documentos JSON clave por clave y valor por valor, no línea por línea como texto sin formato. Eso significa que reordenar las claves dentro de un objeto — <code class="rounded-sm bg-hairline-soft px-1.5 py-0.5 font-mono text-[13px]">{"a":1,"b":2}</code> frente a <code class="rounded-sm bg-hairline-soft px-1.5 py-0.5 font-mono text-[13px]">{"b":2,"a":1}</code> — nunca aparece como una diferencia falsa. Solo se reportan las adiciones, las eliminaciones y los cambios reales de valor.',
      'Los arrays se comparan por posición de forma predeterminada, ya que el orden a menudo tiene significado (una lista ordenada, una cola de prioridad, una secuencia de pasos). Al activar "Ignorar el orden de los arrays" se cambia a un emparejamiento basado en la identidad: si los elementos del array son objetos que comparten un campo estable <code class="rounded-sm bg-hairline-soft px-1.5 py-0.5 font-mono text-[13px]">id</code>, <code class="rounded-sm bg-hairline-soft px-1.5 py-0.5 font-mono text-[13px]">uuid</code> o <code class="rounded-sm bg-hairline-soft px-1.5 py-0.5 font-mono text-[13px]">key</code>, se emparejan por ese campo sin importar la posición; en caso contrario, los elementos se emparejan por igualdad profunda. Esto evita que las respuestas de API o las listas de configuración reordenadas generen diferencias ruidosas y sin sentido.',
      'La entrada no válida se detecta de inmediato: la herramienta indica la línea y la columna exactas donde falló el análisis del JSON, en lugar de un error de sintaxis genérico, para que puedas corregir una coma faltante o una clave sin comillas en segundos. Los documentos profundamente anidados o grandes se renderizan como un árbol plegable para que la página se mantenga legible en lugar de convertirse en un muro de texto — y al hacer clic en cualquier fila se copia su ruta JSON Pointer (RFC 6901) para pegarla en un informe de error o una incidencia.',
      'Todo lo anterior se ejecuta con JavaScript puro en la pestaña de tu navegador. No hay ningún backend que reciba el JSON que pegas, subes o cargas desde una URL — puedes confirmarlo tú mismo abriendo las herramientas de desarrollo de tu navegador, cambiando a la pestaña de red y observando las solicitudes mientras comparas datos.',
    ],
  },
  guide: {
    eyebrow: 'Cómo hacerlo',
    heading: 'Cómo comparar dos archivos JSON',
    intro:
      'Un recorrido usando un objeto de configuración real — los mismos pasos funcionan para respuestas de API, fixtures o cualquier JSON que necesites comparar.',
    steps: [
      {
        title: '1. Pega, sube o carga tu primer JSON',
        body: 'Pega el documento original en el editor de la izquierda. También puedes hacer clic en "Subir" para elegir un archivo .json, o en "URL" para obtenerlo directamente desde un endpoint de API o una URL de archivo sin procesar.',
      },
      {
        title: '2. Pega la segunda versión en el editor de la derecha',
        body: 'Añade el JSON actualizado en el lado derecho de la misma manera. La comparación se actualiza automáticamente a medida que escribes o en cuanto ambos lados contienen JSON válido — no hay un botón "Comparar" aparte que pulsar.',
      },
      {
        title: '3. Lee el árbol resaltado',
        body: 'Las claves añadidas se marcan con +, las eliminadas con − y los valores modificados muestran el valor antiguo tachado junto al nuevo. Usa "Siguiente" / "Anterior" (o Enter / Shift+Enter) para saltar entre diferencias sin desplazarte a mano.',
      },
      {
        title: '4. Ajusta la comparación de arrays si es necesario',
        body: 'Si tu JSON contiene arrays que son lógicamente iguales pero en un orden diferente — una lista de etiquetas reordenada, o resultados de API que llegaron en otra secuencia — activa "Ignorar el orden de los arrays" para que los elementos desordenados no se reporten como cambios.',
      },
      {
        title: '5. Exporta o comparte el resultado',
        body: 'Haz clic en cualquier fila para copiar su ruta JSON Pointer. Usa "Copiar" o el menú de descarga para obtener la comparación como un archivo JSON Patch (RFC 6902), o como un registro de cambios en Markdown que puedes pegar directamente en un pull request.',
      },
    ],
    exampleHeading: 'Un ejemplo real',
    exampleIntro:
      'Aquí tienes dos versiones de una pequeña configuración de despliegue. La herramienta reporta tres diferencias: un valor modificado, una clave eliminada y una entrada de array añadida.',
    exampleLeftLabel: 'Original (v1.2.0)',
    exampleRightLabel: 'Actualizado (v1.3.0)',
    exampleLeftJson: '{\n  "service": "billing-api",\n  "version": "1.2.0",\n  "debug": true,\n  "replicas": 2,\n  "regions": ["us-east-1", "eu-west-1"]\n}',
    exampleRightJson: '{\n  "service": "billing-api",\n  "version": "1.3.0",\n  "replicas": 2,\n  "regions": ["us-east-1", "eu-west-1", "ap-south-1"]\n}',
    exampleRows: [
      { path: 'version', note: '"1.2.0" → "1.3.0" — se reporta como modificado.', type: 'changed' },
      { path: 'debug', note: 'presente en el original, ausente en la actualización — se reporta como eliminado.', type: 'removed' },
      { path: 'regions[2]', note: '"ap-south-1" solo existe en el lado derecho — se reporta como añadido.', type: 'added' },
    ],
    exampleOutro:
      '"service" y "replicas" son idénticos en ambos lados, así que se renderizan como filas simples y sin resaltar — la comparación solo llama la atención sobre lo que realmente cambió. Con "Ignorar el orden de los arrays" desactivado, la nueva región se trata como un elemento de array añadido al final en lugar de un reordenamiento, ya que se agregó al final.',
  },
  useCases: {
    eyebrow: 'Casos de uso',
    heading: 'Para qué lo usan los desarrolladores',
    intro:
      'Algunas situaciones concretas en las que una comparación estructural de JSON es más rápida que leer dos archivos uno al lado del otro.',
    items: [
      {
        title: 'Comparar respuestas de API',
        body: 'Carga la respuesta del mismo endpoint desde staging y producción con "URL", o pega dos respuestas guardadas, para comprobar si un cambio de esquema o un despliegue del backend alteró la forma o los valores de la carga útil.',
      },
      {
        title: 'Revisar cambios de configuración',
        body: 'Pega la configuración antes y después de una edición para ver exactamente qué ajustes cambiaron antes de desplegar — detectando un cambio de valor accidental o una clave eliminada que de otro modo se colaría en la revisión de código.',
      },
      {
        title: 'Depurar fixtures de pruebas',
        body: 'Cuando una prueba de snapshot o de fixture falla, pega el JSON esperado y el real para ver con precisión qué campo divergió en lugar de escanear a ojo una gran comparación de aserciones.',
      },
      {
        title: 'Auditar cambios de despliegue o infraestructura',
        body: 'Compara el estado de Terraform exportado, manifiestos de Kubernetes exportados como JSON, o configuraciones de funciones serverless entre dos momentos en el tiempo para confirmar que solo cambiaron los campos previstos.',
      },
      {
        title: 'Rastrear errores de "deberían ser idénticos"',
        body: 'Dos cargas útiles que se supone que coinciden pero producen un comportamiento diferente casi siempre difieren en algo pequeño — un null frente a una clave ausente, un string frente a un número. La comparación lo saca a la luz de inmediato.',
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    heading: 'Preguntas comunes',
    items: [
      {
        q: '¿Cómo comparo dos archivos JSON?',
        a: 'Pega el contenido de cada archivo en los editores izquierdo y derecho, o usa "Subir" para elegir un archivo .json en cualquiera de los lados. La comparación aparece automáticamente en cuanto ambos lados contienen JSON válido — no hay ningún botón que pulsar.',
      },
      {
        q: '¿Puedo comparar JSON grande o profundamente anidado?',
        a: 'Sí. La comparación se renderiza como un árbol plegable, así que los nodos sin cambios permanecen contraídos y los documentos enormes o profundamente anidados siguen siendo legibles en lugar de producir una página kilométrica. El rendimiento real depende de tu navegador y dispositivo, ya que todo se ejecuta localmente.',
      },
      {
        q: '¿Cómo se muestran los valores añadidos, eliminados y modificados?',
        a: 'Las claves o elementos de array añadidos se marcan con + y un fondo verde. Los eliminados se marcan con − y aparecen tachados. Los valores modificados muestran el valor antiguo tachado junto al valor nuevo, marcados con ~.',
      },
      {
        q: '¿Importa el orden de las claves del JSON?',
        a: 'No. Los objetos se comparan por nombre de clave, no por posición, así que { "a": 1, "b": 2 } y { "b": 2, "a": 1 } se tratan como idénticos. Solo el orden de los arrays es significativo, y únicamente cuando "Ignorar el orden de los arrays" está desactivado.',
      },
      {
        q: '¿Cómo se comparan los arrays JSON?',
        a: 'De forma predeterminada, los arrays se comparan posición por posición, así que reordenar elementos se reporta como un cambio. Activa "Ignorar el orden de los arrays" para comparar por identidad en su lugar: los objetos que comparten un campo estable id, uuid o key se emparejan por ese campo sin importar la posición, y todo lo demás se empareja por valor.',
      },
      {
        q: '¿Qué ocurre cuando el JSON no es válido?',
        a: 'El editor muestra la línea y la columna exactas donde falló el análisis, junto con un breve mensaje de error, para que puedas corregir de inmediato una coma faltante, una clave sin comillas o una coma final en lugar de adivinar.',
      },
      {
        q: '¿Puedo cargar JSON desde una URL?',
        a: 'Sí. Haz clic en "URL" en cualquiera de los editores, introduce una dirección http(s) y la herramienta la obtiene directamente desde tu navegador. Esto solo funciona si el servidor permite solicitudes de origen cruzado (CORS); si no lo permite, descarga el archivo y usa "Subir" en su lugar.',
      },
      {
        q: '¿Se sube mi JSON a un servidor?',
        a: 'No. El análisis, la validación y la comparación ocurren todos en tu navegador con JavaScript. No hay ningún backend que reciba lo que pegas, subes o cargas — abre las herramientas de desarrollo de tu navegador, revisa la pestaña de red y compara datos para confirmar que no se envía nada a ningún sitio.',
      },
      {
        q: '¿Cómo funciona la exportación a JSON Patch?',
        a: 'Haz clic en "Copiar" o usa el menú de descarga para obtener la comparación como un JSON Patch conforme al estándar RFC 6902: un array JSON de operaciones add, remove y replace con la ruta y el valor exactos de cada diferencia, listo para herramientas automatizadas.',
      },
      {
        q: '¿Cómo puedo exportar las diferencias como Markdown?',
        a: 'Abre el menú de descarga junto a "Copiar" y elige "Registro de cambios Markdown". Obtienes un archivo Markdown que lista cada ruta añadida, eliminada y modificada con sus valores, listo para pegar en la descripción de un pull request o en un registro de cambios.',
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
          'Cada comparación ocurre íntegramente del lado del cliente, en tu navegador. No operamos un backend que reciba el JSON que pegas, y el JSON que comparas nunca se envía a terceros. El Sitio se financia con publicidad de Google AdSense y usa Google Analytics para estadísticas básicas de tráfico, como se describe en nuestra Política de privacidad. Puedes verificar que tu JSON permanece local abriendo las herramientas de desarrollo de tu navegador, yendo a la pestaña de red y observando las solicitudes mientras usas la herramienta.',
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
    updated: '23 de octubre de 2026',
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
          'Usamos el almacenamiento local de tu navegador para recordar tu preferencia de tema (modo claro u oscuro); esta información permanece en tu dispositivo. Nuestros socios de publicidad y analítica también pueden establecer cookies o usar identificadores similares, como se describe en la sección siguiente.',
        ],
      },
      {
        heading: 'Analíticas y publicidad',
        body: [
          'Usamos Google Analytics para entender cómo se utiliza el Sitio (por ejemplo, páginas visitadas, ubicación aproximada y tipo de dispositivo) y Google AdSense para mostrar anuncios. Estos servicios de Google pueden usar cookies e identificadores similares para medir el uso y mostrar anuncios.',
          'Terceros proveedores, incluido Google, usan cookies para mostrar anuncios basados en tus visitas anteriores a este Sitio y a otros sitios web. El uso de cookies publicitarias por parte de Google permite que él y sus socios muestren anuncios basados en tu visita a este Sitio y/o a otros sitios de Internet. Puedes desactivar la publicidad personalizada en <a href="https://www.google.com/settings/ads" rel="noopener noreferrer" target="_blank">Configuración de anuncios de Google</a> o en <a href="https://www.aboutads.info/choices/" rel="noopener noreferrer" target="_blank">aboutads.info</a>. Consulta también <a href="https://policies.google.com/technologies/partner-sites" rel="noopener noreferrer" target="_blank">cómo usa Google la información de los sitios que utilizan sus servicios</a>.',
          'El JSON que pegas, subes o cargas en la herramienta se procesa únicamente en tu navegador y nosotros nunca lo enviamos a Google ni a ningún otro tercero.',
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
          'El Sitio es una herramienta independiente y no está afiliado, respaldado ni patrocinado por ningún otro servicio de comparación o diff de JSON.',
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
