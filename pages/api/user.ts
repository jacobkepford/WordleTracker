import prisma from "../../lib/prisma";
import { NextApiRequest, NextApiResponse } from 'next'

export type User = {
  "FirstName": string,
  "LastName": string
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "GET"){
    const requestBody = req.body;
    const userData = await prisma.user.findFirst({
      where: { 
        user_id: requestBody.id
      }
    })

    if (userData){
      const user: User = {FirstName: userData.user_first_name, LastName: userData.user_last_name}

      return res.status(200).json({ user });
    }

    else return res.status(404);
    
  }
  
}

export default handler;