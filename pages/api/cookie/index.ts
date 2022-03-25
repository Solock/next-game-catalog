import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
)
{
  const userMail = req.query.user;
  return res.status(200).json({ cookie: getCookies({ req, res }) });
}
function getCookies(arg0: { req: NextApiRequest; res: NextApiResponse<any>; }) {
  throw new Error("Function not implemented.");
}

