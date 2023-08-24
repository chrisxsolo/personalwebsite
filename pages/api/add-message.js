// pages/api/submit-expenses.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();



export default async function handle(req, res) {
  const {name, email, message } = req.body;

  if (req.method === 'POST') {
  const result = await prisma.contactMessage.create({
    data: {
      name: name,
      email: email,
      message: message,
    },
  });

  res.json(result);
}
}
