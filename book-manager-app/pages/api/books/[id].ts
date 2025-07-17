import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const bookId = Number(req.query.id);
  if (req.method === 'PUT') {
    const { title, author } = req.body;
    const book = await prisma.book.update({
      where: { id: bookId },
      data: { title, author },
    });
    res.status(200).json(book);
  } else if (req.method === 'DELETE') {
    await prisma.book.delete({ where: { id: bookId } });
    res.status(204).end();
  }
}