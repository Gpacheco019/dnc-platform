import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { course }
  } = req;
  switch (course) {
    case 'tecnologia':
      res.status(200).json({
        id: 1,
        name: 'Tecnologia',
        description:
          'Nesta formação você irá aprender a construir uma aplicação de ponta a ponta, desde modelagem de banco de dados, a criação de regras de negócios no back-end e  interfaces incríveis e responsivas no front-end',
        imageUrl: '/img/programmer.png',
        duration: '150',
        rate: 9.4,
        required: ['Acesso a internet'],
        teacher: {
          name: 'Gabriel Pacheco',
          img: 'https://avatars.githubusercontent.com/u/59854471?s=400&u=2a14800f693a3f7b5ec894e62f9ba3584549cbf6&v=4'
        },
        topics: [
          'Modelagem de banco de dados',
          'Diferença entre bancos relacionais e não relacionais',
          'primeiros passos com PostgreSQL',
          'Back-end com node.js e express',
          'Métodos HTTP',
          'Autenticação com JWT',
          'HTML semântico',
          'CSS',
          'Javascript',
          'React',
          'Typescript'
        ],
        content: {
          video: 'https://www.youtube.com/embed/74K9cU99WWg',
          doc: 'O back-end é responsável por conter a lógica de negócios de uma aplicação. Isso significa que ele controla como os dados são processados, armazenados e apresentados aos usuários. Ele lida com regras de negócios complexas e operações que são invisíveis aos usuários finais.gerencia a persistência de dados, armazenando informações em bancos de dados ou outros sistemas de armazenamento. Ele garante a integridade e a segurança dos dados, permitindo que eles sejam acessados e recuperados quando necessário.',
          quiz: [
            'Na sua opinião, qual é o aspecto mais importante do back-end no desenvolvimento de software, e por quê?',
            'Como você vê o impacto do back-end na segurança e na escalabilidade de uma aplicação ou sistema de software?'
          ]
        }
      });
      break;
    case 'marketing':
      res.status(200).json({
        id: 2,
        name: 'Marketing',
        description:
          'Curso de marketing te ensina as habilidades fundamentais que um Growth Hacker utiliza para desenvolver estratégias de marketing que maximizem ROI, aumentem taxa de conversão e receita.',
        imageUrl: '/img/marketing.png',
        duration: '90',
        rate: 8.9,
        required: ['Conhecimentos básicos em marketing'],
        teacher: {
          name: 'Vanessa Froes',
          img: '/img/vanessa.jpg'
        },
        topics: [
          'Tráfego pago',
          'SEO',
          'Copywriting',
          'Social Media',
          'CRM',
          'Google Analytics',
          'Negociação',
          'Processo comercial'
        ],
        content: {
          video: 'https://www.youtube.com/embed/_6WXvzRXXtk',
          doc: 'O CRM ajuda as empresas a melhorar suas interações com os clientes, permitindo que elas entendam melhor as necessidades e preferências dos clientes. Isso leva a relacionamentos mais fortes e duradouros. Coleta e Análise de Dados: O CRM permite que as empresas coletem e armazenem dados valiosos sobre seus clientes, como histórico de compras, preferências, comportamentos e informações de contato. Esses dados podem ser usados para análises profundas e para tomar decisões informadas.',
          quiz: [
            'Como o uso eficaz do CRM pode melhorar a satisfação do cliente e a fidelização à marca em uma empresa?',
            'Quais são os principais desafios que as empresas enfrentam ao implementar um sistema de CRM e como eles podem ser superados para obter os benefícios máximos?'
          ]
        }
      });
      break;
    case 'produto':
      res.status(200).json({
        id: 3,
        name: 'Produto',
        description:
          'Curso de gestão de produtos te ensina as habilidades fundamentais que todos os Gerentes de Produto usam para desenvolver e entregar produtos digitais lucrativos para o mercado.',
        imageUrl: '/img/product.png',
        duration: '120',
        rate: 9.1,
        required: ['Conhecimentos básicos em gestão de produtos'],
        teacher: {
          name: 'João Oliveira',
          img: '/img/joao.jpg'
        },
        topics: [
          'Desenvolvimento de produtos',
          'Estratégia de produto',
          'UX/UI Design',
          'Teste de usabilidade',
          'Ciclo de vida do produto'
        ],
        content: {
          video: 'https://www.youtube.com/embed/jLuaD605ENA',
          doc: 'O PO está principalmente focado no produto ou no serviço que está sendo desenvolvido. Ele representa os interesses dos stakeholders e dos usuários finais para garantir que o produto atenda às suas necessidades e expectativas. O PM está focado na gestão geral do projeto. Ele é responsável por garantir que o projeto seja concluído dentro do escopo, prazo e orçamento definidos, enquanto atende aos objetivos de qualidade.',
          quiz: [
            'Como você descreveria as principais diferenças de responsabilidades entre um Product Owner (PO) e um Project Manager (PM) em um projeto de desenvolvimento de software e como essas diferenças contribuem para o sucesso do projeto?',
            'Qual é o papel do Product Owner (PO) na priorização e tomada de decisões sobre o que deve ser desenvolvido, e como essa função se diferencia das responsabilidades de um Project Manager (PM) em relação ao escopo, prazo e orçamento do projeto?'
          ]
        }
      });
      break;
    case 'dados':
      res.status(200).json({
        id: 4,
        name: 'Dados',
        description:
          'Curso de análise de dados te ensina as habilidades fundamentais que todos os Cientistas de Dados utilizam para auxiliar na criação de estratégias para aumentar vendas, personalizar produtos e serviços de acordo com o perfil dos clientes, monitoramento de engajamento ou melhoria de processos.',
        imageUrl: '/img/data.png',
        duration: '180',
        rate: 9.3,
        required: ['Conhecimentos em análise de dados'],
        teacher: {
          name: 'Ana Rodrigues',
          img: '/img/ana.jpg'
        },
        topics: [
          'Python Fundamentals',
          'Machine Learning',
          'SQL',
          'Data Science',
          'Visualização de dados',
          'Big Data',
          'Estatística',
          'Manipulação de dados',
          'Limpeza de dados'
        ],
        content: {
          video: 'https://www.youtube.com/embed/9jWsS6gxecA',
          doc: ' Um engenheiro de dados é responsável por coletar dados de várias fontes, incluindo bancos de dados, sistemas de registro, feeds de streaming, APIs e muito mais. Isso pode envolver a criação de scripts de coleta de dados e a configuração de conexões com fontes de dados externas.',
          quiz: [
            'Como a evolução das tecnologias de armazenamento e processamento de dados impactou as responsabilidades e as habilidades necessárias para um engenheiro de dados ao longo do tempo?',
            'Qual é o papel de um engenheiro de dados na garantia da qualidade dos dados e na conformidade com regulamentações de privacidade, como o GDPR (Regulamento Geral de Proteção de Dados), em um ambiente de análise de dados?'
          ]
        }
      });
      break;
    default:
      res.status(404).json({ message: 'Curso não encontrado!' });
      break;
  }
}
