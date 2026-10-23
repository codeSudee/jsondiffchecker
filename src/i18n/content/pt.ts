import type { SiteContent } from '../types';

export const pt: SiteContent = {
  meta: {
    homeTitle: 'JSON Diff Checker — Compare JSON Online Grátis | Ferramenta de Diff JSON',
    homeDescription:
      'Verificador de diff JSON gratuito para comparar dois arquivos ou objetos JSON online. Destaca chaves adicionadas, removidas e alteradas instantaneamente — sem upload, sem cadastro, 100% privado no seu navegador.',
  },
  nav: {
    brand: 'JSON Diff Checker',
    brandShort: 'JSON Diff',
    tool: 'Ferramenta',
    features: 'Recursos',
    privacy: 'Privacidade',
    faq: 'Perguntas frequentes',
    about: 'Sobre',
    openTool: 'Abrir a ferramenta',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    toggleTheme: 'Alternar modo escuro',
    primaryNavLabel: 'Principal',
    secondaryNavLabel: 'Secundária',
    languageLabel: 'Idioma',
  },
  hero: {
    badge: '100% no lado do cliente · nenhum dado sai do seu navegador',
    titleLine1: 'Compare JSON.',
    titleLine2: 'Veja cada diferença instantaneamente.',
    subtitle:
      'Cole, envie ou carregue dois documentos JSON e obtenha um diff preciso e colorido — chaves adicionadas, chaves removidas e valores alterados — sem que um único byte saia da sua máquina.',
    ctaPrimary: 'Começar a comparar',
    ctaSecondary: 'Veja o que é diferente',
    aboutUs: 'Sobre nós',
    contactUs: 'Fale conosco',
    privacyPolicy: 'Política de privacidade',
    terms: 'Termos e condições',
  },
  tool: {
    eyebrow: 'A ferramenta',
    heading: 'Cole seu JSON nos dois lados para comparar',
    note: 'Executa inteiramente nesta aba — nada é enviado.',
  },
  features: {
    eyebrow: 'Recursos',
    heading: 'Tudo o que você precisa, nada do que não precisa',
    items: [
      {
        title: 'Mensagens de erro precisas por linha',
        body: 'JSON inválido? Você recebe a linha e a coluna exatas, não uma falha genérica. Corrija erros em segundos em vez de vasculhar texto minificado.',
      },
      {
        title: 'Envie, cole ou carregue de uma URL',
        body: 'Solte um arquivo .json, cole texto bruto ou puxe um documento direto de um endpoint de API — o que for mais rápido para o seu fluxo de trabalho.',
      },
      {
        title: 'Resumo do diff e navegação por teclado',
        body: 'Veja de relance a contagem de chaves adicionadas, removidas e alteradas e navegue entre elas com Enter / Shift+Enter sem tocar no mouse.',
      },
      {
        title: 'Profundamente aninhado, sem quebrar o layout',
        body: 'Os nós da árvore recolhíveis mantêm cargas enormes e profundamente aninhadas legíveis, em vez de gerar uma página quilométrica e ilegível.',
      },
      {
        title: 'Copie um caminho, não apenas um valor',
        body: 'Clique em qualquer linha do diff para copiar o caminho JSON Pointer dela — perfeito para colar em relatórios de bugs ou localizar o campo na sua base de código.',
      },
      {
        title: 'Exporte como JSON Patch ou Markdown',
        body: 'Baixe o diff como um JSON Patch padrão RFC 6902 para automação, ou como um changelog Markdown limpo para pull requests e documentação.',
      },
    ],
  },
  privacy: {
    eyebrow: 'Privacidade por design',
    heading: 'Seus dados nunca saem da sua máquina',
    intro:
      'Muitas ferramentas JSON "online" enviam silenciosamente seus dados para um servidor para processá-los. Esta não faz isso — não há um backend para onde enviar. Tudo acontece no lado do cliente, na memória, na sua aba.',
    points: [
      {
        label: 'Sem ida e volta ao servidor',
        body: 'A análise, a validação e a comparação são executadas no seu navegador com JavaScript puro. Seu JSON nunca é transmitido a lugar nenhum.',
      },
      {
        label: 'Sem analytics, sem scripts de anúncios',
        body: 'Esta página não carrega rastreadores de terceiros nem tags de anúncios — verifique a aba de rede do seu navegador e você não verá nada além da própria página.',
      },
      {
        label: 'Seguro para dados sensíveis',
        body: 'Respostas de API, arquivos de configuração, tokens em fixtures de teste — cole com confiança. O que acontece no seu navegador fica no seu navegador.',
      },
    ],
  },
  about: {
    eyebrow: 'Sobre a ferramenta',
    heading: 'Um verificador de diff JSON gratuito, feito para velocidade e privacidade',
    paragraphs: [
      'O JSON Diff Checker é um <strong class="text-ink">verificador de diff JSON online</strong> gratuito que permite comparar dois arquivos ou objetos JSON e ver instantaneamente o que mudou. Cole seus dados, envie arquivos ou carregue JSON direto de uma URL, e esta <strong class="text-ink">ferramenta de diff JSON</strong> destaca cada chave adicionada, chave removida e valor alterado em uma árvore limpa e colorida — sem instalação, sem conta e sem que nenhum dado saia do seu navegador.',
      'A maioria das equipes precisa <strong class="text-ink">comparar JSON online</strong> em algum momento — verificar uma resposta de API contra uma fixture, revisar uma alteração de configuração antes de um deploy ou descobrir por que duas cargas que "deveriam" ser idênticas na verdade não são. Fazer isso a olho nu em um editor de texto é lento e propenso a erros, especialmente com objetos profundamente aninhados ou arrays grandes. Esta <strong class="text-ink">ferramenta de comparação de JSON</strong> faz a correspondência por você: as chaves são comparadas semanticamente, e não como texto bruto, então reordenar chaves dentro de um objeto nunca gera uma diferença falsa. Se você precisa <strong class="text-ink">comparar dois arquivos JSON</strong> que diferem apenas na formatação ou na ordem das chaves, o diff continua focado nas mudanças que realmente importam.',
      'Os arrays recebem o mesmo tratamento cuidadoso. Por padrão, a ordem importa — comparar <code class="rounded-sm bg-hairline-soft px-1.5 py-0.5 font-mono text-[13px]">["a","b"]</code> com <code class="rounded-sm bg-hairline-soft px-1.5 py-0.5 font-mono text-[13px]">["b","a"]</code> é relatado como uma alteração, já que a sequência muitas vezes carrega significado real. Mas quando você só precisa <strong class="text-ink">comparar objetos JSON online</strong> sem se importar com a ordem dos arrays, ative "Ignorar ordem dos arrays" e a ferramenta faz a correspondência dos elementos do array por um campo id/chave quando existe, ou por valor caso contrário — assim listas embaralhadas não aparecem mais como falsos positivos ruidosos. Isso torna este <strong class="text-ink">visualizador de diff JSON</strong> confiável para respostas de API do mundo real, onde a ordenação de arrays frequentemente é inconsistente entre requisições.',
      'Como um <strong class="text-ink">verificador de diff JSON gratuito</strong>, não há paywall, sem limite de uso e sem marca d\'água nos resultados exportados. Ao contrário de muitas ferramentas "gratuitas" online que enviam silenciosamente seus dados para um servidor para processamento, aqui tudo é executado no lado do cliente com JavaScript puro — abra as ferramentas de desenvolvedor do seu navegador e observe a aba Rede enquanto compara dados, e você não verá nada sair da página. Isso o torna seguro para usar como um <strong class="text-ink">verificador de diff JSON online grátis</strong> mesmo com cargas sensíveis: tokens de API em fixtures de teste, configurações internas ou dados de clientes que você nunca gostaria que tocassem em um servidor de terceiros.',
      'Além de uma simples <strong class="text-ink">ferramenta de comparação JSON</strong>, este aplicativo foi construído para lidar com casos de uso reais em produção. Uma entrada inválida não falha silenciosamente — você recebe a linha e a coluna exatas onde a análise quebrou, então corrigir uma vírgula ausente ou uma chave sem aspas leva segundos em vez de uma varredura manual por texto minificado. Quando você precisa <strong class="text-ink">comparar arquivos JSON online</strong> que são grandes ou profundamente aninhados, o diff é renderizado como uma árvore recolhível para que a página permaneça legível e responsiva em vez de virar um paredão de texto quilométrico. Atalhos de teclado permitem pular entre diferenças com Enter e Shift+Enter, e clicar em qualquer linha copia o caminho JSON Pointer dela para colar direto em um relatório de bug ou pull request.',
      'Este é também um <strong class="text-ink">gerador de diff JSON</strong> prático para fluxos de documentação e revisão de código. Depois de encontrar as diferenças, exporte-as em vez de apenas lê-las: copie o resultado como um JSON Patch compatível com o padrão (RFC 6902) para automação, ou baixe um changelog Markdown limpo, pronto para inserir na descrição de um pull request. Combinado com o suporte para carregar JSON diretamente de uma URL, ele funciona como uma <strong class="text-ink">comparação de JSON online</strong> leve e uma <strong class="text-ink">ferramenta de diff e merge de JSON</strong> para verificar dois endpoints ativos entre si sem precisar baixar nada primeiro.',
      'Quer você precise <strong class="text-ink">comparar dados JSON</strong> para uma sessão de depuração pontual ou recorra a um <strong class="text-ink">verificador de diferenças JSON</strong> regularmente como parte do seu fluxo de desenvolvimento, esta ferramenta foi projetada para abrir rápido, ser óbvia de usar e segura por padrão — cada comparação acontece localmente, sempre, de graça.',
    ],
  },
  faq: {
    eyebrow: 'Perguntas frequentes',
    heading: 'Perguntas comuns',
    items: [
      {
        q: 'Meus dados JSON são enviados para algum lugar?',
        a: 'Não. Toda a análise, validação e comparação acontece no seu navegador usando JavaScript. Não há backend que receba seu JSON — você pode verificar isso por conta própria abrindo as ferramentas de desenvolvedor do seu navegador, acessando a aba Rede e observando as requisições enquanto compara dados.',
      },
      {
        q: 'Faz diferença se a ordem das chaves for diferente?',
        a: 'Não. A comparação é semântica em vez de textual — as chaves são correspondidas pelo nome independentemente da ordem, então { "a": 1, "b": 2 } e { "b": 2, "a": 1 } são tratados como idênticos.',
      },
      {
        q: 'Posso comparar arquivos JSON com ordens de array diferentes?',
        a: 'Sim. Por padrão, a ordem do array importa — comparar ["a","b"] com ["b","a"] mostra ambas as entradas como alteradas, já que a ordem muitas vezes carrega significado (por exemplo, listas ordenadas). Ative "Ignorar ordem dos arrays" acima do resultado do diff para comparar arrays por valor: os elementos são correspondidos por um campo id/uuid/chave quando os objetos têm um, ou por valor caso contrário, então a reordenação sozinha deixa de ser relatada — apenas elementos que foram genuinamente adicionados, removidos ou realmente alterados.',
      },
      {
        q: 'O que acontece se meu JSON for inválido?',
        a: 'Você verá uma mensagem de erro clara com a linha e a coluna exatas onde a análise falhou, para que você possa corrigir erros de sintaxe como vírgulas ausentes, chaves sem aspas ou vírgulas finais imediatamente.',
      },
      {
        q: 'Qual o tamanho máximo de arquivo que posso comparar?',
        a: 'O desempenho depende do seu navegador e dispositivo, já que tudo é executado localmente. A ferramenta foi construída para permanecer responsiva com documentos grandes e profundamente aninhados, renderizando a árvore de diff com nós recolhíveis.',
      },
      {
        q: 'Posso baixar ou compartilhar o resultado?',
        a: 'Sim. Você pode copiar o diff como um JSON Patch (RFC 6902) ou baixá-lo como um arquivo JSON Patch ou um changelog Markdown legível — útil para pull requests, relatórios de bugs ou documentação.',
      },
      {
        q: 'Como verificar se o JSON está correto?',
        a: 'Cole seu JSON em qualquer um dos editores desta página — ele é validado enquanto você digita. Se o JSON for inválido, você verá uma mensagem de erro com a linha e a coluna exatas do problema (por exemplo, uma vírgula ausente, chave sem aspas ou vírgula final). Se ele for analisado sem problemas, é um JSON válido.',
      },
      {
        q: 'O Diffchecker é gratuito?',
        a: 'Este verificador de diff JSON é totalmente gratuito, sem cadastro, sem limites de uso e sem dados enviados para um servidor — as comparações são executadas inteiramente no seu navegador. (Diffchecker.com é um serviço separado, de terceiros; não temos afiliação com ele.)',
      },
      {
        q: 'Como verificar a diferença entre dois arquivos JSON?',
        a: 'Abra o conteúdo de cada arquivo e cole-o nos editores da esquerda e da direita acima, depois clique em Comparar (ou deixe fazer o diff automaticamente). Chaves adicionadas, removidas e alteradas são destacadas linha por linha, e você pode ativar "Ignorar ordem dos arrays" se a ordenação de arrays não deve contar como diferença.',
      },
      {
        q: 'Como uso o jsondiff em Python?',
        a: 'Em Python, a opção popular é o pacote `jsondiff`: instale-o com `pip install jsondiff`, depois chame `jsondiff.diff(a, b)` onde `a` e `b` são objetos JSON já analisados (dicts). Ele retorna um dict descrevendo o que mudou. Isso é útil para scripts ou verificações de CI — para comparações rápidas, visuais e pontuais sem escrever código, use a ferramenta desta página.',
      },
      {
        q: 'Como se chama a diferença entre dois arquivos JSON?',
        a: 'É comumente chamada de "diff de JSON" ou "delta de JSON" — uma descrição estruturada do que foi adicionado, removido ou alterado entre dois documentos JSON. Um formato padronizado para expressá-la é o JSON Patch (RFC 6902), que esta ferramenta pode gerar para você.',
      },
      {
        q: 'Como comparo dois objetos JSON?',
        a: 'Cole um objeto em cada editor acima. A comparação é feita chave por chave (não como texto simples), então os objetos são considerados iguais se tiverem as mesmas chaves e valores, independentemente da ordem das chaves, enquanto quaisquer valores adicionados, removidos ou alterados são destacados.',
      },
      {
        q: 'Você consegue fazer diff de arquivos JSON?',
        a: 'Sim — cole o conteúdo dos dois arquivos nos dois editores desta página e as diferenças são destacadas instantaneamente. Tudo é executado no lado do cliente, no seu navegador, então nenhum arquivo é enviado a lugar nenhum.',
      },
      {
        q: 'Como você verifica se dois objetos JSON são iguais?',
        a: 'Compare-os com esta ferramenta: se a visualização do diff não mostrar nenhuma entrada adicionada, removida ou alterada, os objetos são equivalentes. Dois objetos JSON são considerados iguais quando contêm as mesmas chaves e valores, mesmo que as chaves apareçam em ordem diferente — apenas a ordem dos arrays importa, a menos que você ative "Ignorar ordem dos arrays".',
      },
    ],
  },
  editor: {
    originalLabel: 'JSON original',
    updatedLabel: 'JSON atualizado',
    chars: 'caracteres',
    format: 'Formatar',
    formatTitle: 'Formatar (pretty-print)',
    upload: 'Enviar',
    uploadTitle: 'Enviar um arquivo .json',
    url: 'URL',
    urlTitle: 'Carregar JSON de uma URL',
    clear: 'Limpar',
    clearTitle: 'Limpar',
    expandTitle: 'Expandir editor',
    urlPlaceholder: 'https://example.com/data.json',
    load: 'Carregar',
    cancel: 'Cancelar',
    editorPlaceholder: '{\n  "paste": "seu JSON aqui"\n}',
  },
  diffPanel: {
    resultLabel: 'Resultado do diff',
    added: 'adicionado',
    removed: 'removido',
    changed: 'alterado',
    ignoreArrayOrder: 'Ignorar ordem dos arrays',
    ignoreArrayOrderShort: 'Ignorar ordem',
    ignoreArrayOrderTitle: 'Corresponder elementos do array por valor/identidade em vez de posição',
    prev: 'Anterior',
    prevTitle: 'Diferença anterior (Shift+Enter)',
    next: 'Próxima',
    nextTitle: 'Próxima diferença (Enter)',
    copy: 'Copiar',
    copyTitle: 'Copiar diff como JSON Patch',
    download: 'Baixar',
    downloadTitle: 'Baixar diff',
    downloadPatch: 'JSON Patch (.json)',
    downloadMarkdown: 'Changelog Markdown (.md)',
    emptyState: 'Cole ou carregue JSON nos dois painéis acima para ver o diff aqui.',
  },
  footer: {
    tagline:
      'Uma ferramenta de comparação de JSON gratuita, privada e apenas no navegador. Nada do que você cola é enviado a lugar nenhum.',
    productHeading: 'Produto',
    resourcesHeading: 'Recursos',
    companyHeading: 'Empresa',
    jsonDiffTool: 'Ferramenta de diff JSON',
    features: 'Recursos',
    privacy: 'Privacidade',
    faq: 'Perguntas frequentes',
    jsonPointerSpec: 'Especificação JSON Pointer',
    jsonPatchSpec: 'Especificação JSON Patch',
    aboutUs: 'Sobre nós',
    contactUs: 'Fale conosco',
    privacyPolicy: 'Política de privacidade',
    terms: 'Termos e condições',
    copyright: '© {year} JSON Diff Checker. Todo o processamento acontece localmente no seu navegador.',
    notAffiliated: 'Não afiliado ao json-diff.com.',
  },
  about_us: {
    metaTitle: 'Sobre nós | JSON Diff Checker',
    metaDescription:
      'Conheça o JSON Diff Checker — uma ferramenta de comparação de JSON gratuita e que prioriza a privacidade, executada inteiramente no seu navegador, sem uploads, cadastro ou rastreamento.',
    eyebrow: 'Sobre nós',
    heading: 'Sobre o JSON Diff Checker',
    lastUpdatedLabel: 'Última atualização:',
    sections: [
      {
        heading: 'Quem somos',
        body: [
          'O JSON Diff Checker é uma ferramenta web independente e gratuita, criada para desenvolvedores, engenheiros de QA e qualquer pessoa que precise comparar rapidamente dois trechos de JSON. Nós a criamos porque a maioria das ferramentas de "diff JSON online" ou envia seus dados para um servidor, esconde a comparação atrás de anúncios e barreiras de cadastro, ou tem dificuldades com documentos grandes e profundamente aninhados.',
        ],
      },
      {
        heading: 'O que fazemos',
        body: [
          'Nossa ferramenta permite colar, enviar ou carregar JSON de uma URL e ver instantaneamente um diff estruturado e colorido do que foi adicionado, removido ou alterado — até a chave exata ou elemento do array. As comparações são semânticas em vez de textuais, então diferenças na ordem das chaves ou na formatação nunca geram falsos positivos. Você pode exportar os resultados como um arquivo JSON Patch (RFC 6902) ou um changelog Markdown para pull requests e documentação.',
        ],
      },
      {
        heading: 'Nossa abordagem à privacidade',
        body: [
          'Cada comparação acontece inteiramente no lado do cliente, no seu navegador. Nós não operamos um backend que receba o JSON que você cola, e não usamos scripts de rastreamento nem tags de anúncios. Você pode verificar isso por conta própria abrindo as ferramentas de desenvolvedor do seu navegador, acessando a aba Rede e observando as requisições enquanto usa a ferramenta.',
        ],
      },
      {
        heading: 'Contato',
        body: [
          'Tem feedback, encontrou um bug ou quer sugerir um recurso? Visite nossa página <a href="{contactUrl}">Fale conosco</a> para entrar em contato.',
        ],
      },
    ],
  },
  contact_us: {
    metaTitle: 'Fale conosco | JSON Diff Checker',
    metaDescription:
      'Entre em contato com a equipe do JSON Diff Checker para feedback, relatórios de bugs ou solicitações de recursos.',
    eyebrow: 'Fale conosco',
    heading: 'Fale conosco',
    email: 'support@jsondiffchecker.com',
    lastUpdatedLabel: 'Última atualização:',
    sections: [
      {
        heading: '',
        body: [
          'Adoraríamos ouvir você — seja um relatório de bug, uma solicitação de recurso ou um feedback geral sobre o JSON Diff Checker.',
        ],
      },
      {
        heading: 'E-mail',
        body: [
          'A maneira mais rápida de nos contatar é por e-mail em <a href="mailto:{email}">{email}</a>. Geralmente respondemos em alguns dias úteis.',
        ],
      },
      {
        heading: 'Relatar um bug',
        body: [
          'Se você encontrou um bug, ajuda incluir o JSON que estava comparando (ou um exemplo mínimo que reproduza o problema), o navegador e o sistema operacional que está usando e uma descrição do que você esperava que acontecesse versus o que de fato aconteceu.',
        ],
      },
      {
        heading: 'Solicitações de recursos',
        body: [
          'Tem uma ideia para um recurso que tornaria a comparação de JSON mais fácil? Envie para nós — lemos todas as sugestões, mesmo que não possamos responder ou implementar todas elas.',
        ],
      },
    ],
  },
  privacy_policy: {
    metaTitle: 'Política de privacidade | JSON Diff Checker',
    metaDescription:
      'Política de Privacidade do JSON Diff Checker. Toda a comparação de JSON acontece localmente no seu navegador — não fazemos upload, armazenamento nem transmissão dos dados que você cola.',
    eyebrow: 'Política de privacidade',
    heading: 'Política de Privacidade',
    updated: '6 de setembro de 2026',
    lastUpdatedLabel: 'Última atualização:',
    sections: [
      {
        heading: 'Visão geral',
        body: [
          'Esta Política de Privacidade explica como o JSON Diff Checker ("nós", "nosso", "a ferramenta") lida com informações quando você usa o jsondiffchecker.com (o "Site"). Construímos esta ferramenta em torno de um princípio simples: os dados JSON que você compara são seus e nunca saem do seu dispositivo.',
        ],
      },
      {
        heading: 'Dados que você cola ou envia',
        body: [
          'Toda a análise, validação e comparação de JSON acontece localmente no seu navegador usando JavaScript no lado do cliente. Não temos um servidor backend que receba, armazene, registre ou processe o conteúdo que você cola, envia ou carrega na ferramenta. Se você carregar JSON de uma URL que fornecer, essa requisição é feita diretamente do seu navegador para a URL que você especificar — nós não a intermediamos nem interceptamos.',
        ],
      },
      {
        heading: 'Cookies e armazenamento local',
        body: [
          'Usamos o armazenamento local do seu navegador apenas para lembrar sua preferência de tema (modo claro ou escuro). Essa informação permanece no seu dispositivo e não é transmitida a nós nem a terceiros.',
        ],
      },
      {
        heading: 'Analytics e publicidade',
        body: [
          'O Site não carrega scripts de analytics de terceiros, tags de publicidade nem pixels de rastreamento. Você pode verificar isso abrindo as ferramentas de desenvolvedor do seu navegador e inspecionando a aba Rede enquanto usa a ferramenta.',
        ],
      },
      {
        heading: 'Links de terceiros',
        body: [
          'O Site pode conter links para recursos de terceiros, como especificações RFC. Não somos responsáveis pelas práticas de privacidade de sites externos, e recomendamos que você revise suas respectivas políticas de privacidade.',
        ],
      },
      {
        heading: 'Privacidade de crianças',
        body: [
          'O Site não é direcionado a crianças menores de 13 anos, e não coletamos intencionalmente informações pessoais de crianças.',
        ],
      },
      {
        heading: 'Alterações nesta política',
        body: [
          'Podemos atualizar esta Política de Privacidade de tempos em tempos. As alterações serão publicadas nesta página com uma data de "Última atualização" atualizada acima.',
        ],
      },
      {
        heading: 'Fale conosco',
        body: [
          'Se você tiver dúvidas sobre esta Política de Privacidade, visite nossa página <a href="{contactUrl}">Fale conosco</a>.',
        ],
      },
    ],
  },
  terms: {
    metaTitle: 'Termos e condições | JSON Diff Checker',
    metaDescription:
      'Termos e Condições para uso do JSON Diff Checker, uma ferramenta gratuita de comparação de JSON baseada no navegador, fornecida no estado em que se encontra, sem garantias.',
    eyebrow: 'Termos e condições',
    heading: 'Termos e Condições',
    updated: '6 de setembro de 2026',
    lastUpdatedLabel: 'Última atualização:',
    sections: [
      {
        heading: 'Aceitação dos termos',
        body: [
          'Ao acessar ou usar o jsondiffchecker.com (o "Site"), você concorda em ficar vinculado a estes Termos e Condições. Se você não concordar, não use o Site.',
        ],
      },
      {
        heading: 'Descrição do serviço',
        body: [
          'O JSON Diff Checker fornece uma ferramenta gratuita, baseada no navegador, para comparar dois documentos JSON e visualizar as diferenças entre eles. Todo o processamento ocorre localmente no seu navegador; o Site não exige conta nem assinatura.',
        ],
      },
      {
        heading: 'Uso do serviço',
        body: [
          'Você concorda em usar o Site apenas para fins lícitos. Você é o único responsável pelo conteúdo que cola, envia ou carrega na ferramenta e por garantir que tem o direito de usar e comparar esse conteúdo.',
        ],
      },
      {
        heading: 'Sem garantia',
        body: [
          'O Site e sua ferramenta são fornecidos "no estado em que se encontram" e "conforme disponíveis", sem garantias de qualquer tipo, expressas ou implícitas, incluindo, entre outras, garantias de comercialização, adequação a uma finalidade específica, exatidão ou não violação. Embora busquemos que a lógica de comparação esteja correta, não garantimos que os resultados sejam livres de erros ou ininterruptos.',
        ],
      },
      {
        heading: 'Limitação de responsabilidade',
        body: [
          'Na extensão máxima permitida por lei, o JSON Diff Checker e seus operadores não serão responsáveis por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos decorrentes de ou relacionados ao seu uso, ou à impossibilidade de uso, do Site.',
        ],
      },
      {
        heading: 'Propriedade intelectual',
        body: [
          'O design, a marca e o código subjacente do Site são propriedade do JSON Diff Checker, salvo indicação em contrário. Você mantém a propriedade integral de quaisquer dados JSON que processar usando a ferramenta.',
        ],
      },
      {
        heading: 'Referências a terceiros',
        body: [
          'O Site não é afiliado, endossado nem patrocinado por qualquer serviço de terceiros, incluindo ferramentas de nome semelhante como Diffchecker.com ou json-diff.com.',
        ],
      },
      {
        heading: 'Alterações nestes termos',
        body: [
          'Podemos revisar estes Termos e Condições a qualquer momento. O uso contínuo do Site após a publicação das alterações constitui aceitação dos termos revisados.',
        ],
      },
      {
        heading: 'Fale conosco',
        body: [
          'Dúvidas sobre estes Termos e Condições podem ser enviadas a nós por meio da nossa página <a href="{contactUrl}">Fale conosco</a>.',
        ],
      },
    ],
  },
};
