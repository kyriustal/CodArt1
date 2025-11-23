import { Globe, Smartphone, BrainCircuit, Palette, Layers, Rocket, Server, ShieldCheck, Users, GraduationCap, Database, Lightbulb, Network, BarChart, Landmark, Truck, Heart, Code2, Cloud, Blocks } from 'lucide-react';
import { Service, Project, JobPosition, Industry, Technology, FeaturedItem } from './types';

export const services: Service[] = [
  {
    id: 'web-dev',
    title: 'Desenvolvimento Web',
    description: 'Sites de alta performance construídos com Next.js e React. Otimizados para SEO e escaláveis.',
    icon: Globe,
    color: 'text-blue-400',
    fullDescription: 'Transformamos sua visão em experiências web robustas e ultrarrápidas. Nossa equipe domina o ecossistema moderno de JavaScript para entregar aplicações que não apenas funcionam, mas encantam. Focamos em arquitetura limpa, acessibilidade e performance core web vitals.',
    features: ['Single Page Applications (SPA)', 'Progressive Web Apps (PWA)', 'E-commerce Headless', 'Sistemas de Gerenciamento de Conteúdo (CMS)', 'Integração de APIs Complexas'],
    process: [
      { title: 'Arquitetura', description: 'Definição da stack tecnológica ideal e estrutura de dados.' },
      { title: 'Desenvolvimento', description: 'Codificação com React, Next.js e TypeScript seguindo padrões SOLID.' },
      { title: 'Otimização', description: 'Ajustes finos de performance, SEO técnico e acessibilidade.' }
    ]
  },
  {
    id: 'ui-ux',
    title: 'Design UI/UX',
    description: 'Interfaces centradas no usuário que geram engajamento. Pesquisa profunda e design systems.',
    icon: Palette,
    color: 'text-purple-400',
    fullDescription: 'O design não é apenas como parece, é como funciona. Criamos interfaces intuitivas baseadas em dados comportamentais e psicologia do usuário. Do wireframe ao protótipo de alta fidelidade, garantimos que cada interação seja intencional.',
    features: ['Pesquisa de Usuário (UX Research)', 'Design de Interface (UI)', 'Prototipagem Interativa', 'Design Systems', 'Testes de Usabilidade'],
    process: [
      { title: 'Descoberta', description: 'Workshops de imersão e análise de personas.' },
      { title: 'Ideação', description: 'Wireframing e fluxos de usuário.' },
      { title: 'Refinamento', description: 'Design visual pixel-perfect e micro-interações.' }
    ]
  },
  {
    id: 'ai-solutions',
    title: 'Soluções de IA',
    description: 'Integração de LLMs customizados, chatbots inteligentes e automação com Gemini e OpenAI.',
    icon: BrainCircuit,
    color: 'text-pink-400',
    fullDescription: 'A Inteligência Artificial é o novo motor dos negócios. Desenvolvemos soluções que utilizam o poder dos modelos generativos (GenAI) para automatizar processos, personalizar atendimento e gerar insights preditivos.',
    features: ['Chatbots Inteligentes', 'Análise de Sentimento', 'Geração de Conteúdo Automatizada', 'Fine-tuning de Modelos', 'Integração com Gemini e GPT-4'],
    process: [
      { title: 'Análise de Dados', description: 'Avaliação da infraestrutura de dados existente.' },
      { title: 'Treinamento', description: 'Engenharia de prompt e ajuste fino de modelos.' },
      { title: 'Implementação', description: 'Deploy seguro e monitoramento de alucinações.' }
    ]
  },
  {
    id: 'mobile',
    title: 'Apps Móveis',
    description: 'Aplicativos multiplataforma usando React Native e Flutter com performance nativa.',
    icon: Smartphone,
    color: 'text-cyan-400',
    fullDescription: 'Esteja no bolso do seu cliente. Desenvolvemos aplicativos móveis que oferecem experiência nativa tanto em iOS quanto em Android, utilizando uma única base de código eficiente.',
    features: ['Desenvolvimento React Native / Flutter', 'Apps Nativos (Swift/Kotlin)', 'Integração com Hardware', 'Publicação nas Lojas', 'Manutenção Contínua'],
    process: [
      { title: 'Prototipagem', description: 'Design específico para interfaces touch.' },
      { title: 'Desenvolvimento Híbrido', description: 'Código compartilhado para agilidade.' },
      { title: 'QA Mobile', description: 'Testes em múltiplos dispositivos e cenários de rede.' }
    ]
  },
  {
    id: 'branding',
    title: 'Estratégia de Marca',
    description: 'Definição de identidade digital com pesquisa de mercado e posicionamento visual.',
    icon: Layers,
    color: 'text-yellow-400',
    fullDescription: 'Uma marca forte é o ativo mais valioso de uma empresa. Ajudamos a definir sua voz, seu visual e seu propósito no mundo digital, garantindo consistência em todos os pontos de contato.',
    features: ['Identidade Visual', 'Tom de Voz', 'Guia de Estilo', 'Rebranding Digital', 'Posicionamento de Mercado'],
    process: [
      { title: 'Diagnóstico', description: 'Análise da percepção atual da marca.' },
      { title: 'Criação', description: 'Desenvolvimento de logotipos e elementos visuais.' },
      { title: 'Aplicação', description: 'Implementação da marca nos canais digitais.' }
    ]
  },
  {
    id: 'growth',
    title: 'Growth Hacking',
    description: 'Marketing técnico, otimização de conversão (CRO) e analytics para escalar rapidamente.',
    icon: Rocket,
    color: 'text-green-400',
    fullDescription: 'Não basta construir, é preciso crescer. Utilizamos uma abordagem científica para o marketing, focada em experimentos rápidos e análise de dados para maximizar o ROI e a aquisição de usuários.',
    features: ['SEO Técnico', 'Otimização de Conversão (CRO)', 'Automação de Marketing', 'Análise de Dados', 'Estratégia de Funil'],
    process: [
      { title: 'Setup', description: 'Configuração de ferramentas de tracking e analytics.' },
      { title: 'Experimentação', description: 'Ciclos rápidos de testes A/B.' },
      { title: 'Escala', description: 'Investimento nos canais de maior retorno.' }
    ]
  },
  {
    id: 'intelligent-enterprise',
    title: 'Intelligent Enterprise',
    description: 'Transformação digital corporativa com ERPs inteligentes e automação de processos.',
    icon: BrainCircuit,
    color: 'text-indigo-400',
    fullDescription: 'Tornamos sua empresa mais inteligente. Implementamos sistemas de gestão (ERP) integrados com IA para otimizar recursos, prever tendências e unificar dados de todos os departamentos.',
    features: ['Implementação de SAP S/4HANA', 'Automação de Processos (RPA)', 'Business Intelligence (BI)', 'Gestão da Cadeia de Suprimentos'],
    process: [
      { title: 'Mapeamento', description: 'Levantamento de todos os processos atuais.' },
      { title: 'Implementação', description: 'Configuração e personalização do ERP.' },
      { title: 'Treinamento', description: 'Capacitação das equipes para uso das novas ferramentas.' }
    ]
  },
  {
    id: 'infra-security',
    title: 'Infraestruturas e Segurança',
    description: 'Arquitetura de redes segura, cibersegurança avançada e gestão de data centers.',
    icon: ShieldCheck,
    color: 'text-red-400',
    fullDescription: 'Proteja seu ativo mais valioso: seus dados. Oferecemos soluções completas de infraestrutura, desde cabeamento estruturado até firewalls de última geração e monitoramento de ameaças 24/7 (SOC).',
    features: ['Auditoria de Segurança', 'Firewalls e VPNs', 'Gestão de Identidade', 'Recuperação de Desastres', 'Cloud Híbrida'],
    process: [
      { title: 'Vulnerability Scan', description: 'Identificação de brechas de segurança.' },
      { title: 'Hardening', description: 'Fortalecimento dos servidores e redes.' },
      { title: 'Monitoramento', description: 'Vigilância contínua contra ataques.' }
    ]
  },
  {
    id: 'network-structure',
    title: 'Estrutura de Redes',
    description: 'Cabeamento estruturado, fibra óptica e redes wireless corporativas de alta densidade.',
    icon: Network,
    color: 'text-blue-500',
    fullDescription: 'A espinha dorsal da sua comunicação. Projetamos e implementamos redes físicas e lógicas que garantem velocidade, estabilidade e cobertura total para o seu ambiente corporativo ou industrial.',
    features: ['Cabeamento Estruturado (Cat6/7)', 'Fusão de Fibra Óptica', 'Redes Wi-Fi 6 Enterprise', 'Certificação de Redes'],
    process: [
      { title: 'Site Survey', description: 'Análise física do ambiente e espectro de rádio.' },
      { title: 'Projeto', description: 'Desenho da topologia de rede ideal.' },
      { title: 'Execução', description: 'Instalação e configuração dos equipamentos.' }
    ]
  },
  {
    id: 'consulting',
    title: 'Consultoria e Suporte',
    description: 'Aconselhamento estratégico em TI e suporte técnico especializado.',
    icon: Users,
    color: 'text-orange-400',
    fullDescription: 'Nossa equipe de especialistas atua como uma extensão do seu departamento de TI. Oferecemos consultoria para tomadas de decisão tecnológicas e suporte técnico para garantir a continuidade do negócio.',
    features: ['Consultoria Estratégica de TI', 'Service Desk 24/7', 'Governança de TI (COBIT/ITIL)', 'Gestão de Projetos'],
    process: [
      { title: 'Diagnóstico', description: 'Entendimento dos desafios do negócio.' },
      { title: 'Planejamento', description: 'Definição do roadmap tecnológico.' },
      { title: 'Acompanhamento', description: 'Suporte proativo e relatórios mensais.' }
    ]
  },
  {
    id: 'software-solutions',
    title: 'Soluções de Software',
    description: 'Fábrica de software sob medida para desafios específicos do seu negócio.',
    icon: Database,
    color: 'text-teal-400',
    fullDescription: 'Quando o software de prateleira não atende, nós construímos. Desenvolvemos sistemas corporativos complexos, intranets e portais de clientes com as tecnologias mais modernas do mercado.',
    features: ['Desenvolvimento Sob Medida', 'Integração de Sistemas Legados', 'Migração para Nuvem', 'Microsserviços'],
    process: [
      { title: 'Espec', description: 'Levantamento detalhado de requisitos.' },
      { title: 'Desenvolvimento Ágil', description: 'Sprints quinzenais com entregas contínuas.' },
      { title: 'Homologação', description: 'Testes rigorosos antes do go-live.' }
    ]
  },
  {
    id: 'innovation',
    title: 'Inovação e Desenvolvimento',
    description: 'Laboratório de inovação para prototipagem rápida e validação de novas ideias.',
    icon: Lightbulb,
    color: 'text-yellow-300',
    fullDescription: 'Acelere a inovação na sua empresa. Criamos MVPs (Produto Mínimo Viável) rápidos para testar novos modelos de negócio, produtos ou serviços digitais com menor risco.',
    features: ['Design Thinking', 'Prototipagem Rápida', 'Validação de Mercado', 'Hackathons Corporativos'],
    process: [
      { title: 'Ideação', description: 'Brainstorming focado em solução de problemas.' },
      { title: 'Prototipagem', description: 'Criação de modelos funcionais em baixa/alta fidelidade.' },
      { title: 'Validação', description: 'Testes com usuários reais.' }
    ]
  },
  {
    id: 'training',
    title: 'Formação',
    description: 'Capacitação técnica e corporativa em tecnologias emergentes.',
    icon: GraduationCap,
    color: 'text-emerald-400',
    fullDescription: 'O conhecimento é a chave para a transformação digital. Oferecemos treinamentos in-company e workshops práticos sobre as ferramentas e metodologias que utilizamos.',
    features: ['Treinamento em IA Generativa', 'Workshops de Metodologias Ágeis', 'Cursos de Programação', 'Palestras de Tendências'],
    process: [
      { title: 'Levantamento', description: 'Identificação de gaps de competência.' },
      { title: 'Conteúdo', description: 'Criação de material didático personalizado.' },
      { title: 'Aplicação', description: 'Aulas práticas e dinâmicas.' }
    ]
  }
];

export const projects: Project[] = [
  {
    title: 'Nexus Corporate',
    category: 'Template de Site',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80',
    description: 'Estrutura institucional moderna para empresas de consultoria e tecnologia, focada em conversão B2B.'
  },
  {
    title: 'Vogue E-Shop',
    category: 'Loja On-line',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    description: 'Template de e-commerce minimalista para marcas de moda, com carrinho interativo e checkout otimizado.'
  },
  {
    title: 'Food Delivery X',
    category: 'Aplicativo Mobile',
    image: 'https://images.unsplash.com/photo-1526509867162-5b0c0d1b4b33?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    description: 'Interface de app nativa para delivery, com rastreamento em tempo real e integração de pagamentos.'
  },
  {
    title: 'TechGear Store',
    category: 'Loja On-line',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    description: 'Loja virtual especializada em eletrônicos com tema escuro (Dark Mode) e comparador de produtos.'
  },
  {
    title: 'Restaurante Aura',
    category: 'Template de Site',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    description: 'Landing page imersiva para restaurantes de luxo, com sistema de reservas e cardápio digital integrado.'
  },
  {
    title: 'FinWallet App',
    category: 'Aplicativo Mobile',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    description: 'Aplicativo fintech seguro para gestão financeira, transferências instantâneas e análise de gastos.'
  },
  {
    title: 'Imobiliária Prime',
    category: 'Template de Site',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    description: 'Portal imobiliário completo com filtros avançados de busca, mapas interativos e tour virtual 3D.'
  },
  {
    title: 'Gym Trainer',
    category: 'Aplicativo Mobile',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    description: 'App para personal trainers e academias gerenciarem treinos, dietas e progresso dos alunos.'
  }
];

export const jobPositions: JobPosition[] = [
  {
    id: 'senior-frontend',
    title: 'Engenheiro Frontend Sênior',
    type: 'Remoto',
    location: 'Luanda, Angola / Híbrido',
    department: 'Engenharia',
    description: 'Procuramos um mestre em React e animações CSS para criar interfaces premiadas.'
  },
  {
    id: 'ux-designer',
    title: 'Designer de Produto (UX/UI)',
    type: 'Híbrido',
    location: 'Talatona, Luanda',
    department: 'Design',
    description: 'Você é obcecado por tipografia e grids? Junte-se ao nosso time de design.'
  },
  {
    id: 'ai-engineer',
    title: 'Engenheiro de IA',
    type: 'Remoto',
    location: 'Global',
    department: 'P&D',
    description: 'Desenvolva agentes autônomos e integrações com LLMs para nossos clientes enterprise.'
  }
];

export const industries: Industry[] = [
  {
    id: 'fintech',
    title: 'Banca e Finanças',
    heroTitle: 'A Revolução Digital no Sector Financeiro',
    heroSubtitle: 'Soluções Inteligentes e Confiáveis para uma Gestão Financeira Eficiente',
    introText: 'Soluções inovadoras para o sector financeiro, visando optimizar a gestão bancária, os seguros e os serviços de suporte.',
    solutionTitle: 'A SOLUÇÃO',
    solutionText: [
      'No sector financeiro, a segurança dos dados, a compatibilidade com a legislação e a eficiência operacional são cruciais. Com um mercado cada vez mais digitalizado e clientes que exigem respostas rápidas e personalizadas, as instituições financeiras enfrentam desafios constantes na gestão de dados e no atendimento ao cliente.',
      'A CodArt responde a estas necessidades com soluções que proporcionam uma gestão integrada e segura, permitindo que as instituições financeiras se concentrem no crescimento sustentável e na satisfação dos clientes.'
    ],
    benefits: [
      {
        title: 'Eficiência operacional',
        description: 'Automatização de processos financeiros para reduzir erros e aumentar a produtividade.',
        iconName: 'BarChart3'
      },
      {
        title: 'Tomada de decisões',
        description: 'Análise de grandes volumes de dados em tempo real para decisões estratégicas.',
        iconName: 'BrainCircuit'
      },
      {
        title: 'Segurança avançada',
        description: 'Utilização de blockchain e outras tecnologias para garantir a segurança das transacções.',
        iconName: 'ShieldCheck'
      },
      {
        title: 'Personalização',
        description: 'Adaptação dos serviços financeiros às necessidades específicas dos clientes.',
        iconName: 'Users'
      },
      {
        title: 'Redução de custos',
        description: 'Soluções que reduzem os custos operacionais e melhoram a gestão de recursos.',
        iconName: 'TrendingDown'
      }
    ],
    products: [
      {
        name: 'Unig4Bank',
        description: 'Uma visão global e em tempo real da gestão de todas as operações bancárias. Uma solução de gestão integrada para o sector bancário que oferece planeamento de recursos, otimização de custos e controlo total das operações.',
        iconName: 'Landmark'
      },
      {
        name: 'Unig4Insurance',
        description: 'Uma visão global única e em tempo real, sobre a gestão de todas as suas operações. Solução de gestão integrada para o sector dos seguros, que oferece planeamento de recursos.',
        iconName: 'Umbrella'
      },
      {
        name: 'ID4Service',
        description: 'Plataforma de Gestão dos Pedidos e Serviços. Agrupe e monitorize todas as comunicações relacionadas com o suporte de diversos canais numa única plataforma.',
        iconName: 'Headset'
      },
      {
        name: 'Kontact',
        description: 'Solução de Comunicações Unificadas. Plataforma de voz e Contact Center Municipal em arquitectura IP. Faça toda a gestão da comunicação dos seus serviços bancários e financeiros.',
        iconName: 'Phone'
      }
    ]
  },
  {
    id: 'logistics',
    title: 'Cargo e Logística',
    heroTitle: 'Soluções de Gestão para Terminais de Carga e Logística',
    heroSubtitle: 'Gestão Eficiente Global de todas as Operações',
    introText: 'A CodArt oferece soluções inovadoras para o sector de Cargo e Logística, concebidas para optimizar as operações em portos marítimos, terminais de contentores e carga ferroviária.',
    solutionTitle: 'A SOLUÇÃO',
    solutionText: [
      'O sector de Cargo e Logística enfrenta desafios complexos, nomeadamente a necessidade de optimizar as operações para reduzir custos, melhorar a eficiência e garantir o cumprimento de prazos.',
      'Nossa suite de produtos foi desenvolvida para responder a estas questões, disponibilizando uma plataforma robusta com várias soluções que integram todas as fases do processo logístico. Desde as cargas e descargas até à gestão de parques e terminais.'
    ],
    benefits: [
      {
        title: 'Redução de custos',
        description: 'A otimização das operações logísticas reduz significativamente os custos associados ao transporte.',
        iconName: 'Coins'
      },
      {
        title: 'Aumento da Eficiência',
        description: 'A integração de todos os processos logísticos numa única plataforma melhora a eficiência operacional.',
        iconName: 'Zap'
      },
      {
        title: 'Visibilidade em tempo real',
        description: 'Disponibiliza informação em tempo real sobre todas as operações, facilitando a tomada de decisões.',
        iconName: 'Eye'
      },
      {
        title: 'Sustentabilidade',
        description: 'Promove operações logísticas mais sustentáveis, reduzindo o consumo de energia e as emissões.',
        iconName: 'Leaf'
      },
      {
        title: 'Gestão Integrada',
        description: 'Centralização da gestão das operações multimodais num único sistema, promovendo coordenação.',
        iconName: 'Layers'
      }
    ],
    products: [
      {
        name: 'Bee2Cargo',
        description: 'Gestão de Terminais de Carga e Logísticos. Solução Logística Global Integrada de Gestão. Uma plataforma integrada para gestão de contentores e outros tipos de carga, disponíveis em três edições.',
        iconName: 'Container'
      },
      {
        name: 'Unig4Logistics',
        description: 'Centralize todo o seu trabalho diário numa única plataforma. Solução Logística Multimodal que permite uma gestão integrada das operações de transporte em diferentes modos.',
        iconName: 'Truck'
      }
    ]
  },
  {
    id: 'health',
    title: 'Saúde e Bem-estar',
    heroTitle: 'Transformação Digital no Cuidado ao Paciente',
    heroSubtitle: 'Tecnologia que Salva Vidas e Otimiza Processos Clínicos',
    introText: 'Sistemas avançados para hospitais, clínicas e laboratórios, focados na jornada do paciente e na eficiência administrativa.',
    solutionTitle: 'A SOLUÇÃO',
    solutionText: [
      'O setor de saúde demanda precisão absoluta e agilidade. A fragmentação de dados clínicos e administrativos é um obstáculo para o atendimento de excelência.',
      'Nossas plataformas unificam o histórico do paciente, a gestão de estoques hospitalares e o agendamento, garantindo conformidade com normas internacionais e segurança de dados sensíveis.'
    ],
    benefits: [
      {
        title: 'Prontuário Unificado',
        description: 'Acesso imediato ao histórico completo do paciente para diagnósticos precisos.',
        iconName: 'FileHeart'
      },
      {
        title: 'Telemedicina',
        description: 'Plataformas seguras para consultas remotas e monitoramento contínuo.',
        iconName: 'Video'
      },
      {
        title: 'Gestão de Recursos',
        description: 'Controle inteligente de leitos, equipamentos e escalas médicas.',
        iconName: 'Activity'
      }
    ],
    products: [
      {
        name: 'KHIS',
        description: 'Gestão de Clínicas e Hospitais. Um ERP completo para administração hospitalar, desde a recepção até o centro cirúrgico.',
        iconName: 'Building2'
      },
      {
        name: 'KLIMS',
        description: 'Gestão de Laboratórios Clínicos. Automação do fluxo de exames, integração com máquinas e disponibilização de resultados online.',
        iconName: 'Microscope'
      }
    ]
  },
  {
    id: 'retail',
    title: 'E-commerce & Varejo',
    heroTitle: 'O Futuro do Varejo é Omnichannel',
    heroSubtitle: 'Conectando Lojas Físicas e Digitais em Uma Só Experiência',
    introText: 'Soluções que rompem as barreiras entre o online e o offline, criando jornadas de compra fluidas e personalizadas.',
    solutionTitle: 'A SOLUÇÃO',
    solutionText: [
      'Consumidores modernos esperam consistência. Eles pesquisam online, compram na loja ou vice-versa. Sistemas legados não conseguem acompanhar essa dinâmica.',
      'A CodArt implementa ecossistemas de varejo unificado, onde estoque, CRM e pagamentos operam em tempo real em todos os canais.'
    ],
    benefits: [
      {
        title: 'Venda Unificada',
        description: 'Estoque único para e-commerce, marketplace e lojas físicas.',
        iconName: 'ShoppingBag'
      },
      {
        title: 'Fidelização',
        description: 'Programas de loyalty integrados que reconhecem o cliente em qualquer canal.',
        iconName: 'Heart'
      },
      {
        title: 'Analytics de Varejo',
        description: 'Insights sobre comportamento de compra e performance de produtos.',
        iconName: 'BarChart'
      }
    ],
    products: [
      {
        name: 'OmniShop Core',
        description: 'Plataforma central de comércio que orquestra pedidos, clientes e inventário em tempo real.',
        iconName: 'Store'
      },
      {
        name: 'SmartPOS',
        description: 'Ponto de venda móvel que permite checkout em qualquer lugar da loja, integrado ao e-commerce.',
        iconName: 'CreditCard'
      }
    ]
  },
  {
    id: 'education',
    title: 'Educação (EdTech)',
    heroTitle: 'Reinventando a Aprendizagem',
    heroSubtitle: 'Ferramentas Digitais para Instituições de Ensino do Futuro',
    introText: 'Plataformas que facilitam a gestão acadêmica e enriquecem a experiência de ensino-aprendizagem.',
    solutionTitle: 'A SOLUÇÃO',
    solutionText: [
      'A educação híbrida veio para ficar. Instituições precisam gerir não apenas notas e frequências, mas engajamento digital e conteúdos multimídia.',
      'Oferecemos ambientes virtuais de aprendizagem (LMS) integrados a sistemas de gestão acadêmica (SIS) robustos.'
    ],
    benefits: [
      {
        title: 'Ensino Híbrido',
        description: 'Suporte nativo para aulas presenciais e remotas simultâneas.',
        iconName: 'Laptop'
      },
      {
        title: 'Gestão Acadêmica',
        description: 'Automação de matrículas, financeiro e secretaria.',
        iconName: 'BookOpen'
      }
    ],
    products: [
      {
        name: 'EduManager',
        description: 'Sistema de Gestão Escolar completo. Controle financeiro, pedagógico e comunicação com pais.',
        iconName: 'GraduationCap'
      },
      {
        name: 'LearnX',
        description: 'Plataforma de experiência de aprendizagem (LXP) com gamificação e trilhas adaptativas.',
        iconName: 'Brain'
      }
    ]
  }
];

export const technologies: Technology[] = [
  {
    id: 'react',
    title: 'React & Next.js',
    subtitle: 'O Padrão Ouro do Desenvolvimento Web Moderno',
    heroImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    description: 'Construímos interfaces de usuário rápidas, interativas e escaláveis. Utilizando a arquitetura baseada em componentes do React e as capacidades de renderização híbrida do Next.js (SSR/SSG), entregamos aplicações web que performam como nativas.',
    iconName: 'Code2',
    features: [
      { title: 'Alta Performance', description: 'Virtual DOM e Server Components para carregamento instantâneo.' },
      { title: 'SEO Friendly', description: 'Renderização no servidor garante indexação perfeita no Google.' },
      { title: 'Escalabilidade', description: 'Arquitetura modular que cresce com seu negócio.' }
    ],
    useCases: ['SaaS Dashboards', 'E-commerce de Grande Porte', 'Portais Corporativos', 'Landing Pages Dinâmicas'],
    technicalSpecs: ['TypeScript', 'Server Actions', 'Tailwind CSS', 'Vercel Edge Network']
  },
  {
    id: 'backend',
    title: 'Node.js & Python',
    subtitle: 'Arquitetura de Servidor Robusta e Escalável',
    heroImage: 'https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    description: 'O motor por trás das aplicações. Usamos Node.js para sistemas de alta concorrência e tempo real, e Python para processamento de dados pesados e integrações de Inteligência Artificial.',
    iconName: 'Server',
    features: [
      { title: 'Processamento em Tempo Real', description: 'Websockets e I/O não bloqueante para chats e notificações.' },
      { title: 'Microsserviços', description: 'Arquitetura distribuída para maior resiliência.' },
      { title: 'Segurança Enterprise', description: 'Criptografia avançada e conformidade com OWASP.' }
    ],
    useCases: ['APIs RESTful/GraphQL', 'Streaming de Dados', 'Processamento de Pagamentos', 'Automação de Workflow'],
    technicalSpecs: ['Express/NestJS', 'Django/FastAPI', 'PostgreSQL/MongoDB', 'Redis Caching']
  },
  {
    id: 'mobile-stack',
    title: 'Flutter & React Native',
    subtitle: 'Apps Nativos para iOS e Android com Código Único',
    heroImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    description: 'Desenvolvimento multiplataforma sem comprometer a performance. Criamos aplicativos que parecem e funcionam nativamente em ambos os sistemas operacionais, reduzindo o tempo de desenvolvimento e custos de manutenção.',
    iconName: 'Smartphone',
    features: [
      { title: 'UI Expressiva', description: 'Interfaces fluidas com animações a 60fps.' },
      { title: 'Hot Reload', description: 'Ciclos de desenvolvimento e ajustes visuais rápidos.' },
      { title: 'Acesso Nativo', description: 'Integração total com câmera, GPS e sensores do dispositivo.' }
    ],
    useCases: ['Apps de Delivery', 'Fintech & Banking', 'Redes Sociais', 'Ferramentas de Campo'],
    technicalSpecs: ['Dart/JavaScript', 'Material Design', 'Cupertino Widgets', 'SQLite/Realm']
  },
  {
    id: 'cloud',
    title: 'AWS & Cloud Infrastructure',
    subtitle: 'Hospedagem, Escalabilidade e DevOps',
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80',
    description: 'Não apenas escrevemos código, nós o operamos. Nossa expertise em Cloud garante que sua aplicação esteja sempre online, segura e pronta para receber milhões de usuários.',
    iconName: 'Cloud',
    features: [
      { title: 'Serverless', description: 'Pague apenas pelo uso com AWS Lambda.' },
      { title: 'Alta Disponibilidade', description: 'Redundância geográfica e balanceamento de carga.' },
      { title: 'CI/CD', description: 'Deploy automatizado com testes de segurança integrados.' }
    ],
    useCases: ['Hospedagem Web', 'Armazenamento de Dados', 'Backup & Disaster Recovery', 'CDN Global'],
    technicalSpecs: ['EC2/S3', 'Kubernetes (EKS)', 'Terraform', 'Docker']
  },
  {
    id: 'ai',
    title: 'Google Gemini & OpenAI',
    subtitle: 'A Nova Fronteira da Inteligência Artificial',
    heroImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    description: 'Integramos os modelos de linguagem mais avançados do mundo diretamente no seu negócio. De assistentes virtuais que entendem contexto a sistemas de análise preditiva.',
    iconName: 'BrainCircuit',
    features: [
      { title: 'RAG (Retrieval-Augmented Generation)', description: 'IA que responde baseada nos dados da sua empresa.' },
      { title: 'Multimodalidade', description: 'Processamento de texto, imagem e áudio simultaneamente.' },
      { title: 'Agentes Autônomos', description: 'Sistemas que executam tarefas complexas sem supervisão.' }
    ],
    useCases: ['Atendimento ao Cliente 24/7', 'Geração de Relatórios', 'Análise Jurídica', 'Personalização de Marketing'],
    technicalSpecs: ['Gemini 1.5 Pro', 'GPT-4o', 'LangChain', 'Vector Databases']
  },
  {
    id: 'web3',
    title: 'Blockchain & Web3',
    subtitle: 'Descentralização e Segurança Imutável',
    heroImage: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    description: 'Preparamos sua empresa para a internet do valor. Desenvolvemos contratos inteligentes, tokens e soluções de rastreabilidade baseadas em blockchain para garantir transparência total.',
    iconName: 'Blocks',
    features: [
      { title: 'Smart Contracts', description: 'Automação de acordos digitais seguros e auditáveis.' },
      { title: 'Tokenização', description: 'Representação digital de ativos reais.' },
      { title: 'Identidade Soberana', description: 'Autenticação segura sem intermediários.' }
    ],
    useCases: ['Supply Chain', 'DeFi (Finanças Descentralizadas)', 'Certificação Digital', 'NFTs Corporativos'],
    technicalSpecs: ['Solidity', 'Ethereum/Polygon', 'Hardhat', 'IPFS']
  }
];

export const featuredItems: FeaturedItem[] = [
  {
    id: 'digital-transformation',
    title: 'Transformação Digital',
    subtitle: 'Reinventando Negócios para a Era Conectada',
    description: 'A transformação digital não é apenas sobre tecnologia; é sobre cultura, processos e adaptação. Na CodArt, guiamos sua empresa através da modernização de sistemas legados, automação inteligente e criação de novos modelos de receita digital.',
    heroImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    ctaText: 'Iniciar Transformação',
    stats: [
      { label: 'Eficiência Operacional', value: '+45%' },
      { label: 'Redução de Custos', value: '-30%' },
      { label: 'Tempo de Mercado', value: '2x' }
    ],
    sections: [
      {
        title: 'Digitalização de Processos',
        content: 'Elimine o papel e as planilhas. Criamos fluxos de trabalho digitais que integram todos os departamentos da sua empresa em tempo real.',
        iconName: 'Layers'
      },
      {
        title: 'Data-Driven Decision',
        content: 'Transforme dados brutos em insights acionáveis. Implementamos dashboards de BI e Analytics que mostram a saúde do seu negócio.',
        iconName: 'BarChart'
      },
      {
        title: 'Experiência do Cliente (CX)',
        content: 'Redesenhe a jornada do seu cliente com pontos de contato digitais fluidos, desde o primeiro clique até o suporte pós-venda.',
        iconName: 'Users'
      }
    ]
  },
  {
    id: 'sector-solutions',
    title: 'Soluções por Setor',
    subtitle: 'Expertise Vertical Profunda',
    description: 'Entendemos que cada indústria tem desafios únicos. Seja na complexidade regulatória das Finanças, na logística do Varejo ou na segurança da Saúde, temos frameworks comprovados para acelerar o desenvolvimento.',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    ctaText: 'Ver Cases do Setor',
    stats: [
      { label: 'Indústrias Atendidas', value: '12+' },
      { label: 'Compliance', value: '100%' },
      { label: 'Soluções Custom', value: '50+' }
    ],
    sections: [
      {
        title: 'Banca & Fintech',
        content: 'Sistemas de core banking, carteiras digitais e onboarding seguro (KYC/AML) em conformidade com o BNA.',
        iconName: 'Landmark'
      },
      {
        title: 'Logística & Supply',
        content: 'Rastreamento em tempo real, gestão de frota IoT e otimização de rotas com algoritmos preditivos.',
        iconName: 'Truck'
      },
      {
        title: 'Saúde & MedTech',
        content: 'Prontuários eletrônicos, telemedicina e interoperabilidade de dados clínicos com segurança máxima.',
        iconName: 'Heart'
      }
    ]
  },
  {
    id: 'tech-stack',
    title: 'Tech Stack Moderna',
    subtitle: 'O Poder por Trás da Performance',
    description: 'Não somos apenas usuários de ferramentas; somos arquitetos de tecnologia. Selecionamos rigorosamente nossa stack para garantir que seu projeto seja escalável, seguro e à prova de futuro.',
    heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    ctaText: 'Consultar Arquitetura',
    stats: [
      { label: 'Uptime Médio', value: '99.9%' },
      { label: 'Load Speed', value: '<1s' },
      { label: 'Tecnologias Core', value: '20+' }
    ],
    sections: [
      {
        title: 'Frontend de Elite',
        content: 'React, Next.js e Tailwind CSS para interfaces que respondem instantaneamente e encantam visualmente.',
        iconName: 'Code2'
      },
      {
        title: 'Cloud Native',
        content: 'Arquiteturas serverless em AWS e Google Cloud que escalam automaticamente do zero a milhões de usuários.',
        iconName: 'Cloud'
      },
      {
        title: 'IA Integrada',
        content: 'LangChain, OpenAI e Google Gemini integrados nativamente para funcionalidades inteligentes.',
        iconName: 'BrainCircuit'
      }
    ]
  }
];