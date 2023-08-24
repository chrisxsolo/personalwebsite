
import prisma from '../../lib/prisma';

export default async function handle(req, res) {
  if (req.method === 'GET') {
    try {
      // Find the most recent message
      const recentMessage = await prisma.contactMessage.findFirst({
        orderBy: {
            id: 'desc'
        },
      });

      // Send the name from the most recent message
      res.json({ name: recentMessage.name });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while retrieving the name' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
