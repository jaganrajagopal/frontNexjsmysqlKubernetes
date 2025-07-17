import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { title, author } = req.body;
    const book = await prisma.book.create({ data: { title, author } });
    res.status(201).json(book);
  } else if (req.method === 'GET') {
    const books = await prisma.book.findMany();
    res.status(200).json(books);
  }
}