import type { NextApiResponse } from "next";
import { serialize } from "cookie";
import jwt from "jsonwebtoken";

const SECRET_KEY = "secret_key";

export const verifyJWT = (req: any, key: string) =>{
  if(!req.cookies.JWT) return false;
  try{
    const token: any = jwt.verify(req.cookies.JWT, SECRET_KEY);
    if(Date.now() > token.exp * 1000) return false;
    return true;
  }catch(e){
    return false;
  }
}

export const rmJWT = (req: any, res: any) =>{
  if(!req.cookies.JWT) return false;
  try{
    const token: any = jwt.verify(req.cookies.JWT, SECRET_KEY);
    if(Date.now() > token.exp * 1000) return false;
    res.setHeader("Set-Cookie", serialize("JWT", "", {
      httpOnly: true,
      maxAge: -1
    }));
    return true;
  }catch(e){
    return false;
  }
}

export const setJWT = (res: NextApiResponse, username: string) =>{
  const token = jwt.sign({ uid: username, iss: "BandSharePotalAPP" }, SECRET_KEY, { expiresIn: "1h" });
  res.setHeader("Set-Cookie", serialize("JWT", token, {
    httpOnly: true
  }));
}
