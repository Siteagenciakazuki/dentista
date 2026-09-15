import { Dentist, FaqItem, Testimonial } from '../types';

export const CLINIC_INFO = {
  name: 'OdontoCotia - Clínica Odontológica',
  shortName: 'OdontoCotia',
  slogan: 'Odontologia de Excelência e Cuidado Humanizado em Cotia',
  address: {
    street: 'Rua Welcome, 265',
    neighborhood: 'Jardim Leonor',
    city: 'Cotia',
    state: 'SP',
    zip: '06703-230',
    full: 'Rua Welcome, 265 - Jardim Leonor, Cotia - SP, CEP 06703-230',
    landmarks: 'Próximo à Av. Prof. Manoel José Pedroso e fácil acesso pela Rodovia Raposo Tavares (Km 33).'
  },
  phoneDisplay: '(11) 4614-2390',
  phoneRaw: '+551146142390',
  whatsappDisplay: '(11) 97152-8822',
  whatsappRaw: '5511971528822',
  email: 'contato@odontocotia.com.br',
  hours: [
    { days: 'Segunda a Sexta-feira', time: '08:00 às 19:00' },
    { days: 'Sábados', time: '08:00 às 13:00' },
    { days: 'Domingos e Feriados', time: 'Plantão para urgências agendadas' }
  ],
  googleMapsEmbedUrl: 'https://maps.google.com/maps?q=Rua+Welcome+265+Jardim+Leonor+Cotia+SP&t=&z=16&ie=UTF8&iwloc=&output=embed',
  googleMapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Rua+Welcome+265+Jardim+Leonor+Cotia+SP',
  wazeUrl: 'https://waze.com/ul?q=Rua%20Welcome%20265%20Jardim%20Leonor%20Cotia'
};

export const DENTISTS: Dentist[] = [
  {
    name: 'Dr. Lucas Mendes',
    cro: 'CROSP 104.892',
    role: 'Responsável Técnico & Especialista em Implantodontia',
    specialties: ['Implantodontia', 'Cirurgia Bucomaxilofacial', 'Prótese Fixa e Carga Imediata'],
    bio: 'Graduado pela USP com mais de 14 anos de experiência em reabilitação oral e cirurgias guiadas por computador. Dedica-se a devolver a função mastigatória e a autoestima de pacientes da região de Cotia com tecnologia de ponta e anestesia sem dor.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Dr. Lucas Mendes, cirurgião-dentista especialista em implantes em Cotia SP',
    imageCaption: 'Dr. Lucas Mendes (CROSP 104.892) no consultório cirúrgico da OdontoCotia - Rua Welcome 265, Jardim Leonor.'
  },
  {
    name: 'Dra. Camila Siqueira',
    cro: 'CROSP 112.430',
    role: 'Especialista em Ortodontia & Estética Dental',
    specialties: ['Ortodontia Digital', 'Alinhadores Invisíveis', 'Facetas e Lentes de Cerâmica'],
    bio: 'Pós-graduada em Ortodontia com certificação internacional em alinhadores transparentes. Apaixonada por desenhar sorrisos harmônicos e naturais, aliando escaneamento tridimensional a protocolos estéticos minimamente invasivos.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Dra. Camila Siqueira, dentista especialista em alinhadores e estética dental em Cotia SP',
    imageCaption: 'Dra. Camila Siqueira (CROSP 112.430) atuando no planejamento digital de sorrisos em Cotia.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Mariana Silveira',
    neighborhood: 'Jardim Leonor, Cotia',
    text: 'Moro aqui bem perto no Jardim Leonor e fiz meus alinhadores invisíveis com a Dra. Camila. O atendimento foi impecável, ambiente super limpo e pontualidade britânica. Melhor clínica de Cotia!',
    treatment: 'Alinhadores Invisíveis',
    rating: 5
  },
  {
    name: 'Carlos Eduardo Ramos',
    neighborhood: 'Centro, Cotia',
    text: 'Tinha muito receio de fazer implante dentário, mas o Dr. Lucas explicou tudo no computador antes. Não senti dor nenhuma no pós-operatório. Recomendo de olhos fechados!',
    treatment: 'Implante Dentário',
    rating: 5
  },
  {
    name: 'Patrícia Albuquerque',
    neighborhood: 'Granja Viana, Cotia',
    text: 'Fiz clareamento e restaurações estéticas. A clínica na Rua Welcome tem estacionamento próprio bem na porta, o que facilita muito pra quem vem de carro. Equipe nota 10!',
    treatment: 'Clareamento Dental',
    rating: 5
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: 'Localização & Acesso',
    question: 'Onde a clínica fica localizada exatamente em Cotia?',
    answer: 'Nossa clínica fica na Rua Welcome, 265, no bairro Jardim Leonor, em Cotia - SP (CEP 06703-230). O local possui fácil acesso tanto pelo Centro de Cotia quanto pela Rodovia Raposo Tavares (saída Km 33). Dispomos de vagas de estacionamento próprio e gratuito para nossos pacientes.'
  },
  {
    category: 'Agendamento & WhatsApp',
    question: 'Como funciona o agendamento online integrado com o WhatsApp?',
    answer: 'Basta preencher o formulário na aba de agendamento selecionando o procedimento, data e turno de sua preferência. Ao clicar em enviar, uma mensagem organizada é gerada instantaneamente e enviada direto para o WhatsApp de atendimento da clínica, onde nossa recepcionista confirmará seu horário em poucos minutos.'
  },
  {
    category: 'Implantes Dentários',
    question: 'O procedimento de implante dentário dói?',
    answer: 'Não. O procedimento é realizado sob anestesia local eficaz e moderna, garantindo total conforto durante toda a sessão. Para pacientes ansiosos, também oferecemos suporte para sedação consciente. A medicação pós-operatória orientada pela nossa equipe previne qualquer desconforto.'
  },
  {
    category: 'Ortodontia & Alinhadores',
    question: 'Qual a vantagem dos alinhadores invisíveis em relação ao aparelho fixo?',
    answer: 'Os alinhadores são praticamente imperceptíveis socialmente, não machucam as mucosas bucais, são removíveis na hora de comer e escovar os dentes, e reduzem o número de consultas de emergência (como bráquetes soltos).'
  },
  {
    category: 'Formas de Pagamento',
    question: 'Quais são as formas de pagamento aceitas pela OdontoCotia?',
    answer: 'Facilitamos o tratamento através de cartão de crédito parcelado, PIX com condições especiais, boleto bancário (sob análise clínica) e emitimos nota fiscal completa para dedução no Imposto de Renda ou reembolso de convênios odontológicos.'
  },
  {
    category: 'Urgências Odontológicas',
    question: 'A clínica atende casos de urgência dentária em Cotia?',
    answer: 'Sim! Casos de dor aguda de dente, trauma dental ou restaurações quebradas recebem atendimento prioritário de encaixe durante nosso expediente de segunda a sábado. Chame diretamente em nosso WhatsApp para triagem rápida.'
  }
];
