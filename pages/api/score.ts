import prisma from "../../lib/prisma";
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "POST"){
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
  else{
    if(req.query.id){
      const userID: number = parseInt(req.query.id.toString());
      const score = await prisma.score.findMany({
        where: {
          score_user: userID
        }
      })
      
      return res.status(200).json({ score });
    }

    return res.status(404);
    

  }
}

export default handler;