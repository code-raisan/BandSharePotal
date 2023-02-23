import type { NextApiRequest } from "next";
import Dockerode from "dockerode";

export default [
  {
    name: "Peer2Profit",
    slug: "peer2profit",
    image: "peer2profit/peer2profit_linux:latest",
    create: async (docker: Dockerode, service: any, req: NextApiRequest) =>{
      await docker.pull(service.image);
      await docker.createContainer({
        Image: service.image,
        name: service.name,
        Env: [ `P2P_EMAIL=${req.query.mail}` ]
      });
    }
  }
];
