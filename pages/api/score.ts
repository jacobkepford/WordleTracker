import prisma from "../../lib/prisma";
import { ScoreData } from "../../api/CreateScore";
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
  // const score = await prisma.score.findFirst();
  // return res.status(200).json({ score });
}

// const Read = async (req: NextApiRequest, res: NextApiResponse) => {
  
// }

export default handler;