import type { NextApiRequest, NextApiResponse } from "next";
import { verifyJWT } from "@/utils/session";
import docker from "@/utils/docker";

export default async (req: NextApiRequest, res: NextApiResponse<{ code: number, message?: string }>) =>{
  if(!verifyJWT(req, "uid")) return res.status(403).json({ code: 403 });
  const containers = await docker.listContainers();
  console.log(containers);
  return res.status(200).json({ code: 200 });
}
