import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { userId, projectId, hours, date } = req.body;

    try {
      const worklog = await prisma.worklog.create({
        data: {
          hours,
          date: new Date(date),
          user: { connect: { id: userId } },
          project: { connect: { id: projectId } }
        }
      });
      res.status(201).json(worklog);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
