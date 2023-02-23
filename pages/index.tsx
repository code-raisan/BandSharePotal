import { useState } from "react";
import { useRouter } from "next/router";
import { ButtonSuccess } from "@/components/Button";
import { Input } from "@/components/Input";
import { Spinner } from "@/components/Spinner";

const Login = () =>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errormsg, setErrormsg] = useState("");
    const router = useRouter();

    const create_user = () =>{
      setLoading(true);
      fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({
          username: username,
          password: password
        })
      })
      .then((resp) => resp.json())
      .then((response) =>{
        if(response.code !== 200){
          if(response.message === "empty"){
            setErrormsg("Please fill in all fields");
          }else if(response.message === "notfound"){
            setErrormsg("Please set the initial settings.");
          }else if(response.message === "password"){
            setErrormsg("Password is incorrect.");
          }else if(response.message === "username"){
            setErrormsg("Username is incorrect.");
          }
          return;
        }
        router.push("/home");
      }).catch((e) => alert(e));
    };

    return (
      <>
        <main className="container mx-auto max-w-md px-4 pt-4">
            <h1 className="mb-1 text-3xl">Login</h1>
            <p className="mb-4 text-yellow-300">To reset your password, see [HTTP]</p>
            <div className="mb-5">
                <label htmlFor="username" className="mb-1">Name</label>
                <Input type="text" id="username" placeholder="e.g. username" value={username} onChange={(e) =>{if(e.target instanceof HTMLInputElement) setUsername(e.target.value);}}/>
            </div>
            <div className="mb-5">
                <label htmlFor="password" className="mb-1">Password</label>
                <Input type="password" id="password" value={password} onChange={(e) =>{if(e.target instanceof HTMLInputElement) setPassword(e.target.value);}}/>
            </div>
            <ButtonSuccess onClick={create_user} disabled={loading}>{loading?<span><Spinner/></span>:null} Login</ButtonSuccess>
            <p className="text-red-500 text-xl">{errormsg}</p>
        </main>
      </>
    );
};

export default Login;
