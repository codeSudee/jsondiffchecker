import type { SiteContent } from '../types';

export const pt: SiteContent = {
  meta: {
    homeTitle: 'JSON Diff Checker — Compare Dois Arquivos JSON no Seu Navegador',
    homeDescription:
      'Cole, envie ou carregue dois documentos JSON e veja exatamente o que mudou — chaves adicionadas, chaves removidas e valores alterados, destacados em uma árvore recolhível. Executa inteiramente no seu navegador.',
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
        label: 'Processamento no navegador',
        body: 'Suas comparações de JSON são processadas inteiramente no seu navegador com JavaScript — nada é enviado a um servidor para calcular a diferença.',
      },
      {
        label: 'Seguro para dados sensíveis',
        body: 'Respostas de API, arquivos de configuração, tokens em fixtures de teste — cole com confiança. O que acontece no seu navegador fica no seu navegador.',
      },
    ],
  },
  about: {
    eyebrow: 'Sobre a ferramenta',
    heading: 'Como esta ferramenta compara JSON',
    paragraphs: [
      'O JSON Diff Checker compara dois documentos JSON chave por chave e valor por valor, e não linha por linha como texto simples. Isso significa que reordenar chaves dentro de um objeto — <code class="rounded-sm bg-hairline-soft px-1.5 py-0.5 font-mono text-[13px]">{"a":1,"b":2}</code> versus <code class="rounded-sm bg-hairline-soft px-1.5 py-0.5 font-mono text-[13px]">{"b":2,"a":1}</code> — nunca aparece como uma diferença falsa. Apenas adições, remoções e mudanças reais de valor são relatadas.',
      'Os arrays são comparados por posição por padrão, já que a ordem muitas vezes carrega significado (uma lista ordenada, uma fila de prioridades, uma sequência de passos). Ativar "Ignorar ordem dos arrays" muda para a correspondência baseada em identidade: se os elementos do array são objetos que compartilham um campo estável <code class="rounded-sm bg-hairline-soft px-1.5 py-0.5 font-mono text-[13px]">id</code>, <code class="rounded-sm bg-hairline-soft px-1.5 py-0.5 font-mono text-[13px]">uuid</code> ou <code class="rounded-sm bg-hairline-soft px-1.5 py-0.5 font-mono text-[13px]">key</code>, eles são correspondidos por esse campo independentemente da posição; caso contrário, os elementos são correspondidos por igualdade profunda. Isso evita que resultados de API reordenados ou listas de configuração gerem diffs ruidosos e sem sentido.',
      'Entradas inválidas são detectadas imediatamente: a ferramenta informa a linha e a coluna exatas onde a análise do JSON falhou, em vez de um erro de sintaxe genérico, para que você corrija uma vírgula ausente ou uma chave sem aspas em segundos. Documentos profundamente aninhados ou grandes são renderizados como uma árvore recolhível, mantendo a página legível em vez de virar um paredão de texto — e clicar em qualquer linha copia o caminho JSON Pointer (RFC 6901) dela para colar em um relatório de bug ou issue.',
      'Tudo o que foi descrito acima é executado com JavaScript puro na aba do seu navegador. Não há um backend que receba o JSON que você cola, envia ou carrega de uma URL — você pode confirmar isso por conta própria abrindo as ferramentas de desenvolvedor do seu navegador, acessando a aba Rede e observando as requisições enquanto compara dados.',
    ],
  },
  guide: {
    eyebrow: 'Como fazer',
    heading: 'Como comparar dois arquivos JSON',
    intro:
      'Um passo a passo usando um objeto de configuração real — os mesmos passos funcionam para respostas de API, fixtures ou qualquer JSON que você precise comparar.',
    steps: [
      {
        title: '1. Cole, envie ou carregue seu primeiro JSON',
        body: 'Cole o documento original no editor da esquerda. Você também pode clicar em "Enviar" para escolher um arquivo .json, ou em "URL" para buscá-lo diretamente de um endpoint de API ou de uma URL de arquivo bruto.',
      },
      {
        title: '2. Cole a segunda versão no editor da direita',
        body: 'Adicione o JSON atualizado no lado direito da mesma forma. O diff é atualizado automaticamente enquanto você digita ou assim que ambos os lados contêm JSON válido — não há um botão "Comparar" separado para clicar.',
      },
      {
        title: '3. Leia a árvore destacada',
        body: 'Chaves adicionadas são marcadas com +, chaves removidas com −, e valores alterados mostram o valor antigo riscado ao lado do novo. Use "Próxima" / "Anterior" (ou Enter / Shift+Enter) para pular entre as diferenças sem rolar a página à mão.',
      },
      {
        title: '4. Ajuste a comparação de arrays se necessário',
        body: 'Se o seu JSON contém arrays que são logicamente iguais, mas em uma ordem diferente — uma lista de tags reordenada, ou resultados de API que voltaram em uma sequência diferente — ative "Ignorar ordem dos arrays" para que itens embaralhados não sejam relatados como alterações.',
      },
      {
        title: '5. Exporte ou compartilhe o resultado',
        body: 'Clique em qualquer linha para copiar o caminho JSON Pointer dela. Use "Copiar" ou o menu de download para obter o diff como um arquivo JSON Patch RFC 6902, ou como um changelog Markdown que você pode colar direto em um pull request.',
      },
    ],
    exampleHeading: 'Um exemplo real',
    exampleIntro:
      'Aqui estão duas versões de uma pequena configuração de deploy. A ferramenta relata três diferenças: um valor alterado, uma chave removida e uma entrada de array adicionada.',
    exampleLeftLabel: 'Original (v1.2.0)',
    exampleRightLabel: 'Atualizado (v1.3.0)',
    exampleLeftJson: '{\n  "service": "billing-api",\n  "version": "1.2.0",\n  "debug": true,\n  "replicas": 2,\n  "regions": ["us-east-1", "eu-west-1"]\n}',
    exampleRightJson: '{\n  "service": "billing-api",\n  "version": "1.3.0",\n  "replicas": 2,\n  "regions": ["us-east-1", "eu-west-1", "ap-south-1"]\n}',
    exampleRows: [
      { path: 'version', note: '"1.2.0" → "1.3.0" — relatado como alterado.', type: 'changed' },
      { path: 'debug', note: 'presente no original, ausente na atualização — relatado como removido.', type: 'removed' },
      { path: 'regions[2]', note: '"ap-south-1" só existe à direita — relatado como adicionado.', type: 'added' },
    ],
    exampleOutro:
      '"service" e "replicas" são idênticos nos dois lados, então são renderizados como linhas simples, sem destaque — o diff só chama a atenção para o que realmente mudou. Com "Ignorar ordem dos arrays" desativado, a nova região é tratada como um elemento de array acrescentado ao final, e não como uma reordenação, já que foi adicionada no fim.',
  },
  useCases: {
    eyebrow: 'Casos de uso',
    heading: 'Para que os desenvolvedores usam',
    intro:
      'Algumas situações concretas em que um diff estrutural de JSON é mais rápido do que ler dois arquivos lado a lado.',
    items: [
      {
        title: 'Comparar respostas de API',
        body: 'Carregue a resposta do mesmo endpoint em staging e em produção com "URL", ou cole duas respostas salvas, para verificar se uma mudança de schema ou um deploy do backend alterou o formato ou os valores da carga.',
      },
      {
        title: 'Revisar alterações de configuração',
        body: 'Cole a configuração antes e depois de uma edição para ver exatamente quais ajustes mudaram antes de fazer o deploy — pegando uma mudança acidental de valor ou uma chave removida que de outra forma passaria despercebida na revisão de código.',
      },
      {
        title: 'Depurar fixtures de teste',
        body: 'Quando um teste de snapshot ou fixture falha, cole o JSON esperado e o obtido para ver exatamente qual campo divergiu, em vez de vasculhar a olho um diff de asserção grande.',
      },
      {
        title: 'Auditar mudanças de deploy ou infraestrutura',
        body: 'Compare estados do Terraform exportados, manifestos do Kubernetes exportados como JSON ou configurações de funções serverless entre dois momentos no tempo para confirmar que apenas os campos pretendidos mudaram.',
      },
      {
        title: 'Rastrear bugs de "deveriam ser idênticos"',
        body: 'Duas cargas que deveriam ser iguais, mas produzem comportamentos diferentes, quase sempre divergem em algo pequeno — um null versus uma chave ausente, uma string versus um número. O diff revela isso imediatamente.',
      },
    ],
  },
  faq: {
    eyebrow: 'Perguntas frequentes',
    heading: 'Perguntas comuns',
    items: [
      {
        q: 'Como comparo dois arquivos JSON?',
        a: 'Cole o conteúdo de cada arquivo nos editores da esquerda e da direita, ou use "Enviar" para escolher um arquivo .json para qualquer um dos lados. O diff aparece automaticamente assim que ambos os lados contêm JSON válido — nenhum botão para clicar.',
      },
      {
        q: 'Posso comparar JSON grande ou profundamente aninhado?',
        a: 'Sim. O diff é renderizado como uma árvore recolhível, então nós sem alterações permanecem recolhidos e documentos enormes ou profundamente aninhados continuam legíveis, em vez de gerar uma página quilométrica. O desempenho real depende do seu navegador e dispositivo, já que tudo é executado localmente.',
      },
      {
        q: 'Como os valores adicionados, removidos e alterados são exibidos?',
        a: 'Chaves ou itens de array adicionados são marcados com + e um fundo verde. Os removidos são marcados com − e riscados. Valores alterados mostram o valor antigo riscado ao lado do novo valor, marcado com ~.',
      },
      {
        q: 'A ordem das chaves do JSON importa?',
        a: 'Não. Os objetos são comparados pelo nome da chave, não pela posição, então { "a": 1, "b": 2 } e { "b": 2, "a": 1 } são tratados como idênticos. Apenas a ordem dos arrays é significativa, e somente quando "Ignorar ordem dos arrays" está desativado.',
      },
      {
        q: 'Como os arrays JSON são comparados?',
        a: 'Por padrão, os arrays são comparados posição por posição, então reordenar elementos é relatado como uma alteração. Ative "Ignorar ordem dos arrays" para comparar por identidade: objetos que compartilham um campo estável id, uuid ou key são correspondidos por esse campo independentemente da posição, e todo o restante é correspondido por valor.',
      },
      {
        q: 'O que acontece quando o JSON é inválido?',
        a: 'O editor mostra a linha e a coluna exatas onde a análise falhou, junto com uma mensagem de erro curta, para que você corrija uma vírgula ausente, uma chave sem aspas ou uma vírgula final imediatamente, em vez de adivinhar.',
      },
      {
        q: 'Posso carregar JSON de uma URL?',
        a: 'Sim. Clique em "URL" em qualquer um dos editores, informe um endereço http(s) e a ferramenta o busca diretamente do seu navegador. Isso só funciona se o servidor permitir requisições de origem cruzada (CORS); se não permitir, baixe o arquivo e use "Enviar" no lugar.',
      },
      {
        q: 'Meu JSON é enviado para um servidor?',
        a: 'Não. A análise, a validação e a comparação acontecem todas no seu navegador com JavaScript. Não há um backend que receba o que você cola, envia ou carrega — abra as ferramentas de desenvolvedor do seu navegador, acesse a aba Rede e compare dados para confirmar que nada é enviado a lugar nenhum.',
      },
      {
        q: 'Como funciona a exportação para JSON Patch?',
        a: 'Clique em "Copiar" ou use o menu de download para obter o diff como um JSON Patch compatível com o padrão RFC 6902: um array JSON de operações add, remove e replace com o caminho e o valor exatos de cada diferença, pronto para ferramentas automatizadas.',
      },
      {
        q: 'Como posso exportar as diferenças como Markdown?',
        a: 'Abra o menu de download ao lado de "Copiar" e escolha "Changelog Markdown". Você recebe um arquivo Markdown listando cada caminho adicionado, removido e alterado com seus valores, pronto para colar na descrição de um pull request ou em um changelog.',
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
          'O Site é uma ferramenta independente e não é afiliado, endossado nem patrocinado por qualquer outro serviço de comparação ou diff de JSON.',
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
