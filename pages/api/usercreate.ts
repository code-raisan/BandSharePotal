import type { NextApiRequest, NextApiResponse } from "next";
import { writeFileSync, existsSync } from "fs";
import pass from "@/utils/pass";

export default (req: NextApiRequest, res: NextApiResponse<{
  code: number,
  message?: string
}>) =>{
  const { username, password } = JSON.parse(req.body);
  if(!username || !password) return res.status(400).json({ code: 401, message: "noinput" });
  if(existsSync("./data/user.json")) return res.status(403).json({ code: 403, message: "alredy" });
  const hashed_password = pass.hash(password);
  writeFileSync("./data/user.json", JSON.stringify({
    username: username,
    password: hashed_password
  }));
  return res.status(200).json({ code: 200 });
}
