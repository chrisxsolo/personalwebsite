
import prisma from '../../lib/prisma';

export default async function handle(req, res) {
    const resentMessage = await prisma.contactMessage.findFirst({
        orderBy: {
          id: 'desc',
        },
      })
      res.json(resentMessage)
    }