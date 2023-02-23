import Link from "next/link";
import { Children, ReactElement } from "react";

export default ({ children, link }: { children: any, link: string }) =>{
  return (
    <Link href={link} className="text-center text-lg" >{children}</Link>
  );
}
