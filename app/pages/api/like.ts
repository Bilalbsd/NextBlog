import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { postId, userId } = req.body;
    const like = await prisma.like.create({
      data: {
        postId,
        userId,
      },
    });
    res.status(201).json(like);
  } else {
    res.status(405).end();
  }
};
