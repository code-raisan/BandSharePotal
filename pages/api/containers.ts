import type { NextApiRequest, NextApiResponse } from "next";
import getSession from "@/utils/session";
import docker from "@/utils/docker";

export default async (req: NextApiRequest, res: NextApiResponse<{ code: number, message?: string }>) =>{
  const session = await getSession(req, res);
  if(!session.username) return res.status(403).json({ code: 403, message: "unauthrized" });

  const containers = docker.listContainers();

  return res.status(200).json({ code: 200 });
}
