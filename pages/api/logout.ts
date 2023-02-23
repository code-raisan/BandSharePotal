import type { NextApiRequest, NextApiResponse } from "next";
import { rmJWT } from "@/utils/session";

export default async (req: NextApiRequest, res: NextApiResponse<{ code: number, message?: string }>) =>{
  rmJWT(req, res);
  return res.status(200).json({ code: 200 });
}
