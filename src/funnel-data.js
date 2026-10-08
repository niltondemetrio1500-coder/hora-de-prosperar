export const PORTALS = [
  {
    id: 'mult100',
    name: 'Multiplicação 100x',
    image: '/assets/portals/multiplicacao-100x.webp',
    description: 'hoje estou adicionando 100x mais na sua conta — você acredita?',
    cta: 'SIM! Eu recebo 100x mais!',
  },
  {
    id: 'future',
    name: 'Eu Escolho Meu Futuro',
    image: '/assets/portals/escolho-meu-futuro.webp',
    description: 'O poder de mudar sua vida está em suas mãos!',
    cta: 'Continuar Evolução',
  },
  {
    id: 'faith',
    name: 'Decisão de Fé',
    image: '/assets/portals/decisao-de-fe.webp',
    description: '🙏 Sua Fé Vai Mover Montanhas',
    cta: 'Continuar Evolução',
  },
  {
    id: 'health',
    name: 'Saúde Perfeita',
    image: '/assets/portals/saude-perfeita.webp',
    description: '❤️ A Sua Saúde Perfeita Foi Ativada',
    cta: 'Continuar Evolução',
  },
  {
    id: 'abundance',
    name: 'Abundância',
    image: '/assets/portals/abundancia.webp',
    description: '💸 Imagine… R$277.000 sendo depositados na sua conta agora mesmo!',
    cta: 'SIM! Eu creio, eu recebo!',
  },
  {
    id: 'boost',
    name: 'Impulso 100x',
    image: '/assets/portals/impulso-100x.webp',
    description: '⚡ Seu Poder de Manifestação Acabou de Multiplicar por 100x',
    cta: 'Continuar Evolução',
  },
  {
    id: 'blocks',
    name: 'Bloqueios Quebrados',
    image: '/assets/portals/bloqueios-quebrados.webp',
    description: '🔓 Todos os Bloqueios Mentais Foram Removidos',
    cta: 'Continuar Evolução',
  },
];

export const QUESTIONS = [
  {
    section: 'Despertar Financeiro',
    question: '{nome}, se você olhasse para a sua conta bancária hoje, quanto teria disponível?',
    type: 'number',
    placeholder: 'Digite apenas números (ex.: 1500)',
    unlocks: 'mult100',
  },
  {
    section: 'Despertar Financeiro',
    question: '{nome}, você sente que está vivendo a vida que Deus sonhou para você?',
    options: ['Sim, mas sei que posso viver mais', 'Não, sinto que estou longe disso', 'Às vezes me pergunto sobre isso...'],
  },
  {
    section: 'Despertar Financeiro',
    question: 'Com que frequência você sente um vazio no peito... como se algo estivesse faltando?',
    options: ['Todos os dias', 'Algumas vezes por semana', 'Raramente'],
  },
  {
    section: 'Despertar Financeiro',
    question: 'Você se sente preso nos mesmos ciclos negativos há anos?',
    options: ['Sim, parece um ciclo sem fim', 'Às vezes sinto isso', 'Não tenho certeza'],
  },
  {
    section: 'Despertar Financeiro',
    question: 'Se a vida que você vive hoje fosse o resultado direto das suas próprias escolhas... você estaria satisfeito?',
    options: ['Não, eu quero mudar', 'Mais ou menos', 'Sim, mas quero mais'],
    unlocks: 'future',
  },
  {
    section: 'Fé & Propósito Espiritual',
    question: 'Quantas vezes você pediu a Deus um sinal para mudar sua vida?',
    options: ['Muitas vezes', 'Algumas vezes', 'Normalmente não peço sinais', 'Esta é a minha primeira vez'],
  },
  {
    section: 'Fé & Propósito Espiritual',
    question: '{nome}, se hoje fosse o seu teste final de fé… o que você faria agora?',
    options: ['Eu agiria como alguém que acredita em milagres', 'Daria um passo pequeno e com medo... mas ainda assim um passo', 'Ficaria paralisado... mais uma vez... como nas outras vezes em que desisti'],
  },
  {
    section: 'Fé & Propósito Espiritual',
    question: 'Você acredita que Deus pode transformar sua vida com uma única decisão sua?',
    options: ['Sim, com certeza', 'Tenho dúvidas', 'Não sei'],
  },
  {
    section: 'Fé & Propósito Espiritual',
    question: 'Você está disposto a fazer de HOJE o seu dia de fé e responsabilidade pela sua nova vida?',
    options: ['Sim, estou pronto', 'Preciso de um sinal mais claro', 'Não'],
    unlocks: 'faith',
  },
  {
    section: 'Visualização do Futuro',
    question: 'Se Deus lhe desse a chance de conquistar a casa dos seus sonhos… como ela seria?',
    options: ['Grande, com vários quartos', 'Um apartamento moderno', 'Uma casa simples, mas cheia de paz', 'Não penso muito nisso'],
  },
  {
    section: 'Visualização do Futuro',
    question: 'Que carro você imagina estacionado na frente da sua casa ideal?',
    options: ['Um SUV de luxo', 'Um sedan confortável', 'Um carro simples, mas confiável', 'Não ligo muito para carros'],
  },
  {
    section: 'Visualização do Futuro',
    question: 'Como é a sua vida em família hoje?',
    options: ['Sinto que falta união', 'Sinto falta de alguém especial', 'Tenho uma boa família, mas podemos ser mais felizes', 'Não penso muito nisso'],
  },
  {
    section: 'Visualização do Futuro',
    question: 'Se você pudesse acordar amanhã com saúde perfeita… o que seria diferente?',
    options: ['Mais energia para correr atrás dos meus sonhos', 'Poder praticar esportes sem dor', 'Me sentir bem com o meu corpo', 'Minha saúde é boa, mas quero mais vitalidade'],
    unlocks: 'health',
  },
  {
    section: 'Visualização do Futuro',
    question: 'Se você recebesse uma grande quantia em dinheiro hoje… o que faria primeiro?',
    options: ['Quitar minhas dívidas', 'Comprar uma casa', 'Realizar o sonho da minha família', 'Investir no meu futuro'],
    unlocks: 'abundance',
    interstitial: {
      text: 'Seu potencial de manifestação depende da sua escolha. Pense grande para manifestar coisas grandes — você é do tamanho da sua coragem.',
      cta: 'Continuar Jornada',
    },
  },
  {
    section: 'Visualização do Futuro',
    question: 'Imagine que daqui a 30 dias a sua vida esteja 100% transformada. Qual destas imagens representa o seu futuro?',
    options: ['Casa de luxo e liberdade financeira', 'Saúde perfeita e vitalidade', 'Família feliz e amor', 'Viagens e novas experiências'],
    unlocks: 'boost',
  },
  {
    section: 'Quebrando Bloqueios',
    question: 'Você sente que há algo espiritual ou emocional te bloqueando?',
    options: ['Sim, um peso que não consigo explicar', 'Às vezes sinto isso', 'Não'],
  },
  {
    section: 'Quebrando Bloqueios',
    question: 'Qual destas frases melhor descreve você?',
    options: ['Me sinto amaldiçoado, nada nunca dá certo para mim', 'Minha vida nunca foi fácil', 'Não me sinto digno', 'Me falta energia e motivação'],
    unlocks: 'blocks',
  },
  {
    section: 'Escolha Final',
    question: 'Você aceita fazer parte de um grupo de pessoas que decidiram criar a vida dos seus sonhos através do poder da fé?',
    options: ['Sim, eu aceito', 'Não tenho certeza', 'Preciso pensar a respeito'],
  },
  {
    section: 'Escolha Final',
    question: 'Se você pudesse mudar apenas uma coisa agora... o que seria?',
    options: ['Minha situação financeira', 'Meus relacionamentos', 'Minha saúde', 'Meu propósito de vida'],
  },
  {
    section: 'Escolha Final',
    question: 'Se Deus lhe desse a chance de recomeçar hoje… você aceitaria?',
    options: ['Sim, sem hesitar', 'Sim, mas com um pouco de medo', 'Não estou pronto'],
  },
  {
    section: 'Escolha Final',
    question: 'Para finalizar… complete esta frase: "De hoje em diante..."',
    options: ['Eu escolho viver em abundância', 'Eu aceito o destino que Deus reservou para mim', 'Eu me liberto de tudo que estava me bloqueando'],
  },
];

export const PREPARATION_MESSAGES = [
  'Lendo suas respostas com precisão divina...',
  'Alinhando sua energia com o propósito...',
  'Quebrando bloqueios espirituais...',
  'Ativando os portais desbloqueados...',
  'Selando o seu Script de Manifestação Divina...',
];

export const OFFERS = [
  {
    image: '/assets/seeds/semente-100.webp',
    label: 'Eu escolho a bênção completa – R$100',
    href: 'https://pay.kirvano.com/a23049f5-f279-4390-9249-f810e66c14c4',
    badge: '★ A mais abençoada',
  },
  {
    image: '/assets/seeds/semente-77.webp',
    label: 'Eu escolho prosperar – R$77',
    href: 'https://pay.kirvano.com/73bd58a6-933c-4a58-9385-f3f08759647b',
  },
  {
    image: '/assets/seeds/semente-47.webp',
    label: 'Eu escolho crescer – R$47',
    href: 'https://pay.kirvano.com/679f1e3a-e4e4-43a7-9156-9eaa01e84034',
  },
  {
    image: '/assets/seeds/semente-27.webp',
    label: 'Eu escolho começar – R$27',
    href: 'https://pay.kirvano.com/adf95e7f-45f3-441d-9fb8-f2999bf65a17',
  },
];

export const PREPARATION_DELAY_MS = 160;
export const PREPARATION_REDIRECT_DELAY_MS = 1200;
export const OFFER_REVEAL_SECONDS = 493;
export const OFFER_RESERVATION_SECONDS = 600;
export const VIDEO_PLAYER_SRC = 'https://scripts.converteai.net/51189488-3186-411b-bd75-718a9f29c643/players/6a9b067de1081835cc08f226/v4/player.js';
export const VIDEO_PLAYER_ID = 'vid-6a9b067de1081835cc08f226';
