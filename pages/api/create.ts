import type { NextApiRequest, NextApiResponse } from "next";
import getSession from "@/utils/session";
import docker from "@/utils/docker";
import service_list from "@/utils/service_list";

export default async (req: NextApiRequest, res: NextApiResponse<{ code: number, message?: string }>) =>{
  const session = await getSession(req, res);
  if(!session.username) return res.status(403).json({ code: 403, message: "unauthrized" });
  if(!req.query.slug) return res.status(400).json({ code: 400 });
  const slug = req.query.slug;
  const service = service_list.find((v) => v.slug === slug);
  if(!service) return res.status(500).json({ code: 500 });
  service.create(docker, service, req);
  return res.status(200).json({ code: 200 });
}
