export interface PolicyContent {
  title: string;
  lastUpdated: string;
  sections: { subtitle: string; content: string }[];
}

export const POLICIES: Record<'privacidade' | 'termos' | 'etica' | 'cookies', PolicyContent> = {
  privacidade: {
    title: 'Política de Privacidade e Proteção de Dados (LGPD)',
    lastUpdated: '15 de setembro de 2026',
    sections: [
      {
        subtitle: '1. Compromisso com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018)',
        content: 'A OdontoCotia, estabelecida na Rua Welcome, 265 - Jardim Leonor, Cotia - SP, valoriza a privacidade de seus pacientes, visitantes e colaboradores. Este documento estabelece diretrizes transparentes sobre coleta, armazenamento, tratamento e descarte de dados pessoais e dados pessoais sensíveis de saúde.'
      },
      {
        subtitle: '2. Dados Coletados no Formulário e Agendamento WhatsApp',
        content: 'Ao utilizar nossos canais de agendamento online, coletamos estritamente informações necessárias para a triagem e contato pré-clínico: nome completo, telefone celular/WhatsApp, procedimento odontológico de interesse e eventuais preferências de data. Ao iniciar o atendimento presencial, anamnese e histórico médico odontológico são registrados em prontuário seguro conforme exigência legal do CFO/CROSP.'
      },
      {
        subtitle: '3. Sigilo Profissional e Prontuários Médicos',
        content: 'Dados de saúde e exames de imagem (radiografias, tomografias, escaneamentos 3D) gozam de proteção especial pelo sigilo profissional médico-odontológico. Jamais compartilhamos, comercializamos ou cedemos prontuários a terceiros não autorizados sem consentimento expresso, exceto por ordem judicial ou determinação legal estrita.'
      },
      {
        subtitle: '4. Seus Direitos como Titular de Dados',
        content: 'Você tem o direito de solicitar confirmação de tratamento, acesso, retificação de dados incorretos ou eliminação de informações cadastrais secundárias. Prontuários odontológicos respeitam o período legal de guarda obrigatória estabelecido pelo Conselho Federal de Odontologia.'
      },
      {
        subtitle: '5. Contato do Encarregado de Dados (DPO)',
        content: 'Para exercer seus direitos ou esclarecer dúvidas de privacidade, envie mensagem para contato@odontocotia.com.br com o assunto "Privacidade de Dados LGPD".'
      }
    ]
  },
  termos: {
    title: 'Termos de Uso do Site e Condições de Agendamento',
    lastUpdated: '15 de setembro de 2026',
    sections: [
      {
        subtitle: '1. Objeto do Portal',
        content: 'Este site destina-se a fornecer informações institucionais sobre procedimentos odontológicos, infraestrutura da clínica na Rua Welcome 265, Jardim Leonor em Cotia/SP, e disponibilizar canal direto de agendamento de consultas via WhatsApp.'
      },
      {
        subtitle: '2. Natureza Informativa e Não Vinculante de Diagnóstico',
        content: 'O conteúdo publicado neste portal possui caráter puramente educativo e informativo. Nenhuma informação substitui o exame clínico presencial, diagnóstico radiológico ou plano de tratamento formulado individualmente pelo cirurgião-dentista responsável.'
      },
      {
        subtitle: '3. Agendamento Online e Comparecimento',
        content: 'O envio do formulário online constitui uma pré-reserva. A confirmação do dia e horário exato dar-se-á por contato telefônico ou mensagem via WhatsApp pela nossa recepção. Solicitamos a gentileza de avisar com pelo menos 24 horas de antecedência em caso de necessidade de reagendamento.'
      },
      {
        subtitle: '4. Propriedade Intelectual',
        content: 'Fotografias, textos, logotipos e ilustrações exibidos no portal são de titularidade da OdontoCotia ou licenciados para uso, sendo vedada a reprodução comercial sem prévia autorização por escrito.'
      }
    ]
  },
  etica: {
    title: 'Código de Ética Odontológica e Regulamentação CFO / CROSP',
    lastUpdated: '15 de setembro de 2026',
    sections: [
      {
        subtitle: '1. Responsabilidade Técnica e Registros Profissionais',
        content: 'A clínica OdontoCotia opera em estrita conformidade com as normas do Conselho Federal de Odontologia (CFO) e do Conselho Regional de Odontologia de São Paulo (CROSP). Responsável Técnico: Dr. Lucas Mendes - CROSP 104.892. Equipe clínica: Dra. Camila Siqueira - CROSP 112.430.'
      },
      {
        subtitle: '2. Publicidade e Comunicação Ética em Saúde',
        content: 'Nossa comunicação atende integralmente à Resolução CFO-196/2019 e ao Código de Ética Odontológica (Resolução CFO-118/2012). Não prometemos resultados milagrosos ou garantias estéticas universais, respeitando as variações biológicas individuais de cada paciente.'
      },
      {
        subtitle: '3. Prontuário e Biossegurança Hospitalar',
        content: 'Seguimos rigorosos protocolos de controle de infecção cruzada, esterilização por autoclave monitorada com testes biológicos periódicos e descarte ecológico de resíduos de saúde conforme diretrizes da ANVISA e Vigilância Sanitária de Cotia.'
      },
      {
        subtitle: '4. Vedação à Mercantilização da Odontologia',
        content: 'A odontologia é uma profissão a serviço da saúde humana. Não praticamos leilão de preços nem mercantilização desmedida de atos cirúrgicos ou tratamentos de saúde bucal.'
      }
    ]
  },
  cookies: {
    title: 'Política de Cookies e Tecnologias de Navegação',
    lastUpdated: '15 de setembro de 2026',
    sections: [
      {
        subtitle: '1. O que são Cookies?',
        content: 'Cookies são pequenos arquivos de texto armazenados no navegador do seu dispositivo para lembrar preferências, aprimorar a velocidade de navegação e coletar métricas anônimas de visitação.'
      },
      {
        subtitle: '2. Cookies Utilizados',
        content: 'Utilizamos cookies estritamente necessários para o funcionamento das abas do site, armazenamento da preferência de consentimento da LGPD e cookies de desempenho para avaliar a interação com o mapa e formulários.'
      },
      {
        subtitle: '3. Como Gerenciar ou Desativar',
        content: 'Você pode alterar ou revogar seu consentimento a qualquer instante no banner de cookies do site ou diretamente nas configurações de privacidade do seu navegador web.'
      }
    ]
  }
};
