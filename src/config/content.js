// Todo o texto do site vive aqui — nenhuma copy fica presa dentro de componente.
// Tom: humano e acolhedor. O público inclui famílias em momento de estresse,
// então clareza e empatia vêm antes de qualquer linguagem de venda.

export const HOME = {
  hero: {
    titulo: 'Alguém de confiança para cuidar de quem você ama',
    texto: 'A ELO conecta famílias em todo o estado de São Paulo a cuidadores, técnicos de enfermagem e acompanhantes hospitalares. A gente escuta a sua necessidade, seleciona o profissional certo e acompanha o cuidado do começo ao fim.',
    ctaFamilia: 'Preciso de um cuidador',
    ctaCuidador: 'Quero ser um cuidador ELO',
  },
  comoFunciona: {
    olho: 'Como funciona',
    titulo: 'Do primeiro contato ao primeiro dia de cuidado',
    texto: 'Sem formulário longo, sem burocracia. Três passos e uma conversa.',
    passos: [
      {
        icone: 'mdi-phone-in-talk-outline',
        titulo: 'Você conta o que precisa',
        texto: 'Pelo formulário ou direto no WhatsApp. Quem é a pessoa, que tipo de cuidado ela precisa, quantas horas por dia e em que região.',
      },
      {
        icone: 'mdi-account-search-outline',
        titulo: 'A gente seleciona o profissional',
        texto: 'Buscamos na nossa rede quem tem a formação, a experiência e a disponibilidade compatíveis — e que atenda perto de você.',
      },
      {
        icone: 'mdi-home-heart',
        titulo: 'O cuidado começa',
        texto: 'Apresentamos o profissional, combinamos os horários e acompanhamos o atendimento. Se algo não funcionar, a gente ajusta.',
      },
    ],
  },
  diferenciais: {
    olho: 'Por que a ELO',
    titulo: 'O que a gente faz antes de indicar alguém',
    itens: [
      {
        icone: 'mdi-clipboard-check-outline',
        titulo: 'Triagem cuidadosa',
        texto: 'Conferimos formação, certificações, experiência e referências de cada profissional antes de ele entrar na nossa rede.',
      },
      {
        icone: 'mdi-account-switch-outline',
        titulo: 'Substituição garantida',
        texto: 'Falta, atestado, férias: a cobertura é responsabilidade nossa, não sua. Ninguém fica sem cuidado por causa de imprevisto.',
      },
      {
        icone: 'mdi-calendar-heart',
        titulo: 'Acompanhamento contínuo',
        texto: 'A gente não some depois do primeiro dia. Mantemos contato com a família e com o profissional para ajustar o que for preciso.',
      },
      {
        icone: 'mdi-map-marker-radius-outline',
        titulo: 'Cobertura em todo o estado',
        texto: 'Atendemos famílias em todo o estado de São Paulo, alocando sempre o profissional disponível mais próximo do endereço.',
      },
    ],
  },
  faixaCuidador: {
    olho: 'Para profissionais',
    titulo: 'Você cuida. A ELO cuida do resto.',
    texto: 'Cuidadores, técnicos de enfermagem e acompanhantes que fazem parte da rede ELO têm agenda organizada, suporte administrativo e cobertura quando precisam faltar.',
    cta: 'Quero fazer parte da rede',
  },
}

export const FAMILIA = {
  hero: {
    olho: 'Para famílias',
    titulo: 'Cuidado em casa, com quem você pode confiar',
    texto: 'Conte o que está acontecendo. A gente entende a situação, encontra o profissional certo e acompanha para que dê certo.',
  },
  processo: {
    titulo: 'Como funciona a solicitação',
    passos: [
      {
        titulo: 'Você relata a necessidade',
        texto: 'Preencha o formulário abaixo ou fale direto no WhatsApp. Quanto mais detalhe você der sobre a rotina e a condição da pessoa, melhor a nossa escolha.',
      },
      {
        titulo: 'A ELO seleciona o profissional compatível',
        texto: 'Cruzamos o tipo de cuidado, a carga horária, a região e o perfil da família com a disponibilidade da nossa rede. Você recebe o perfil de quem vai atender.',
      },
      {
        titulo: 'O atendimento começa e continua acompanhado',
        texto: 'Combinamos início, horários e valores. Depois disso, seguimos por perto — e cobrimos qualquer falta com um substituto da rede.',
      },
    ],
  },
  // Os tipos de cuidado e os formatos de carga horária NÃO viram seção: eles já
  // são os campos "Tipo de cuidado" e "Carga horária" do próprio formulário.
  // Repetir em bloco de conteúdo só empurrava o formulário para baixo.
  formulario: {
    olho: 'Solicitação',
    titulo: 'Conte o que você precisa',
    texto: 'São oito campos. Ao enviar, a sua solicitação abre no WhatsApp da ELO já organizada — é só apertar enviar.',
  },
}

export const CUIDADOR = {
  hero: {
    olho: 'Para profissionais',
    titulo: 'Faça parte da rede ELO',
    texto: 'A gente cuida da parte que tira o seu tempo: encontrar família, combinar horário, organizar agenda e cobrir falta. Você foca no cuidado.',
  },
  beneficios: {
    olho: 'O que muda para você',
    titulo: 'O que a ELO faz pelo profissional',
    itens: [
      {
        icone: 'mdi-calendar-check-outline',
        titulo: 'Agenda organizada',
        texto: 'Você define a sua disponibilidade e recebe atendimentos compatíveis com ela e com a sua região.',
      },
      {
        icone: 'mdi-headset',
        titulo: 'Suporte administrativo',
        texto: 'Combinamos valores, horários e condições com a família. Você não precisa negociar sozinho.',
      },
      {
        icone: 'mdi-account-switch-outline',
        titulo: 'Substituição coberta',
        texto: 'Precisou faltar ou tirar férias? A rede cobre. Você não perde o vínculo nem deixa a família na mão.',
      },
      {
        icone: 'mdi-shield-account-outline',
        titulo: 'Encaminhamento com contexto',
        texto: 'Você chega sabendo quem vai cuidar, qual a rotina e o que a família espera — sem surpresa no primeiro dia.',
      },
    ],
  },
  requisitos: {
    olho: 'Requisitos',
    titulo: 'O que pedimos de quem entra na rede',
    itens: [
      'Formação de cuidador de idosos, técnico de enfermagem ou área correlata',
      'Experiência comprovável em atendimento domiciliar ou hospitalar',
      'Documentação em dia: RG, CPF, comprovante de residência e certificado da formação',
      'Referências de atendimentos anteriores que a gente possa consultar',
      'Disponibilidade clara de horários e região de atendimento dentro de São Paulo',
    ],
    nota: 'A documentação completa e a triagem são feitas depois, pelo WhatsApp — aqui no site você só deixa os dados básicos.',
  },
  formulario: {
    olho: 'Cadastro',
    titulo: 'Deixe os seus dados',
    texto: 'São seis campos. Ao enviar, o seu cadastro abre no WhatsApp da ELO e a gente continua por lá para conferir documentação e experiência.',
  },
}

export const SOBRE = {
  hero: {
    olho: 'Sobre a ELO',
    titulo: 'Um elo entre quem precisa de cuidado e quem sabe cuidar',
    texto: 'A ELO nasceu de uma constatação simples: encontrar um cuidador de confiança, às pressas, é uma das decisões mais difíceis que uma família toma — e quase sempre acontece no pior momento possível.',
  },
  missao: {
    titulo: 'O que fazemos',
    texto: 'Somos uma central de cuidadores e assistência domiciliar. Mantemos uma rede de cuidadores, técnicos de enfermagem e acompanhantes hospitalares triados por nós, e conectamos essa rede a famílias em todo o estado de São Paulo. Nossa parte é a que ninguém vê: entender o caso, escolher o profissional certo, organizar a escala e garantir que o cuidado não pare.',
  },
  valores: {
    olho: 'Valores',
    titulo: 'O que orienta cada indicação',
    itens: [
      {
        icone: 'mdi-eye-check-outline',
        titulo: 'Transparência',
        texto: 'Você sabe quem vai entrar na sua casa, qual a formação e o que esperar. Nada de perfil genérico.',
      },
      {
        icone: 'mdi-hand-heart-outline',
        titulo: 'Cuidado antes de venda',
        texto: 'Se a nossa rede não tem o profissional certo para o seu caso, a gente diz isso em vez de empurrar qualquer um.',
      },
      {
        icone: 'mdi-account-group-outline',
        titulo: 'Respeito aos dois lados',
        texto: 'Família bem atendida e profissional bem tratado são a mesma coisa. Um não existe sem o outro.',
      },
      {
        icone: 'mdi-clock-check-outline',
        titulo: 'Continuidade',
        texto: 'Cuidado bom é cuidado que não falha. Por isso a cobertura de substituição é parte do serviço, não um extra.',
      },
    ],
  },
}

export const CONTATO_PAGE = {
  hero: {
    olho: 'Contato',
    titulo: 'Fale com a ELO',
    texto: 'Se preferir conversar antes de preencher qualquer formulário, é só chamar. Respondemos no WhatsApp.',
  },
}
