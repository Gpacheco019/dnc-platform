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
        ]
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
        ]
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
        ]
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
        ]
      });
      break;
    default:
      res.status(404).json({ message: 'Curso não encontrado!' });
      break;
  }
}
