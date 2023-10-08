import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json([
      {
        id: 1,
        name: 'Tecnologia',
        associate: [
          'tecnologia',
          'html',
          'css',
          'javascript',
          'node',
          'sql',
          'uml',
          'oop',
          'front-end',
          'back-end',
          'full-stack'
        ]
      },
      {
        id: 2,
        name: 'Marketing',
        associate: [
          'marketing',
          'tráfego pago',
          'seo',
          'copywriting',
          'social media',
          'crm',
          'google analytics',
          'negociação',
          'processo comercial'
        ]
      },
      {
        id: 3,
        name: 'Dados',
        associate: [
          'dados',
          'python fundamentals',
          'machine learning​',
          'sql',
          'data Science',
          'visualização de dados​',
          'big data',
          'estatística',
          'manipulação​',
          'limpeza de dados'
        ]
      },
      {
        id: 4,
        name: 'Projetos',
        associate: [
          'projetos',
          'lean six sigma',
          'scrum​',
          'green belt',
          'excel',
          'power bi​',
          'estatística',
          'dashboards',
          'processo'
        ]
      }
    ]);
  }
}
