import type { NextApiRequest, NextApiResponse } from "next";
import { readFileSync, existsSync } from "fs";
import getSession from "@/utils/session";
import pass from "@/utils/pass";

export default async (req: NextApiRequest, res: NextApiResponse<{ code: number, message?: string }>) =>{
  const { username, password } = JSON.parse(req.body);
  if(!username || !password) return res.status(401).json({ code: 401, message: "empty" });
  if(!existsSync(`./data/user.json`)) return res.status(401).json({ code: 401, message: "notfound" });
  const userdata: { username: string, password: string } = JSON.parse(readFileSync(`./data/user.json`).toString());
  const session = await getSession(req, res);
  if(username !== userdata.username) return res.status(403).json({ code: 403, message: "username" });
  if(!pass.passauth(password, userdata.password)) return res.status(403).json({ code: 403, message: "password" });
  session.username = username;
  return res.status(200).json({ code: 200 });
}
