// pages/api/submit-expenses.js
import prisma from '../../lib/prisma';




export default async function handle(req, res) {
  const {name, email, message } = req.body;
  const result = await prisma.contactMessage.create({
    data: {
      name: name,
      email: email,
      message: message,
    },
  });
  res.json(result);
}
