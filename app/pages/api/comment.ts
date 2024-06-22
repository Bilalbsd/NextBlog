import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { content, postId, userId } = req.body;
    const comment = await prisma.comment.create({
      data: {
        content,
        postId,
        authorId: userId,
      },
    });
    res.status(201).json(comment);
  } else {
    res.status(405).end();
  }
};
