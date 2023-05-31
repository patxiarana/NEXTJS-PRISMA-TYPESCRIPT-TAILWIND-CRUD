import { prisma } from "../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req:NextApiRequest, res:NextApiResponse){
 
    const {title, content} = req.body 
      console.log(title, content)
    try {
        await prisma.note.create({
          data: {
            title , 
            content 
        }
        })
        res.status(200).json({message:'Note Created'})
    } catch(error) {
     console.log('failure')
    }
}
