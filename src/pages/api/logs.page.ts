// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { api } from '../../config/axios';

type Data = {
  logs: any[];
};

type Error = {
  error: string;
};
export default function handler(req: NextApiRequest, res: NextApiResponse<Data | Error>) {
  return api
    .get(`/logs?offset=${req.query.offset}&size=${req.query.size}`)
    .then((response) => {
      res.status(200).json({ logs: response.data });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}
