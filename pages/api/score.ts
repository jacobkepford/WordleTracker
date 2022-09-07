import prisma from "../../lib/prisma";
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const scoreData = req.body;
  const score = await prisma.score.create({
      data: {
        score_value: scoreData.scoreCount,
        score_date: scoreData.scoreDate,
        score_user: scoreData.scoreUser
      },
    })

  return res.status(200).json({ score });
}

export default handler;