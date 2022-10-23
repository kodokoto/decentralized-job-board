import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    
    console.log(typeof req.body)
    console.log(`Connected with ${JSON.parse(req.body).name}`)
    res.status(200)
}
