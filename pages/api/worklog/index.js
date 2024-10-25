import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { userId } = req.query;

    try {
      const worklogs = await prisma.worklog.findMany({
        where: { userId: parseInt(userId) },
        include: { project: true }
      });
      res.status(200).json(worklogs);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
