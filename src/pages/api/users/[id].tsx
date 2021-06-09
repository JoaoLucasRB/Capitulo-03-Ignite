import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  const id = request.query.id;

  const users = [
    { id: 1, nome: 'joao' },
    { id: 2, nome: 'joao2' },
    { id: 3, nome: 'joao3' },
  ];

  return response.json(users);
}