import type { NextApiRequest, NextApiResponse } from "next";
import { verifyJWT } from "@/utils/session";
import docker from "@/utils/docker";
import service_list from "@/utils/service_list";

export default async (req: NextApiRequest, res: NextApiResponse<{ code: number, message?: string }>) =>{
  if(!verifyJWT(req, "uid")) return res.status(403).json({ code: 403 });
  if(!req.query.slug) return res.status(400).json({ code: 400 });
  const slug = req.query.slug;
  const service = service_list.find((v) => v.slug === slug);
  if(!service) return res.status(400).json({ code: 400 });
  service.create(docker, service, req);
  return res.status(200).json({ code: 200 });
}
