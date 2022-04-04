// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import svgGenerator from '../../components/svg';

export default async function makeup(req: NextApiRequest, res: NextApiResponse) {
  const code = req.query.code as string;
  const color = (req.query.color) ? req.query.color as string : "2ca9e1";

  if (code) {
    const svg: string = svgGenerator(String(code), String(color));
    res.statusCode = 200;
    res.setHeader("Content-Type", "image/svg+xml");
    res.setHeader(
      "Cache-Control",
      "no-cache"
    );

    return res.end(svg);
  }
  else {
    res.status(404).json({ message: `404` })
  }
}
