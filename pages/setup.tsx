import { useState } from "react";
import { useRouter } from "next/router";
import { ButtonSuccess } from "@/components/Button";
import { Input } from "@/components/Input";
import { Spinner } from "@/components/Spinner";

const Setup = () =>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errormsg, setErrormsg] = useState("");
    const router = useRouter();

    const create_user = () =>{
      setLoading(true);
      fetch("/api/usercreate", {
        method: "POST",
        body: JSON.stringify({
          username: username,
          password: password
        })
      })
      .then((resp) => resp.json())
      .then((response) =>{
        if(response.code !== 200){
          if(response.message === "noinput"){
            setErrormsg("Please fill in all fields");
          }else if(response.message === "alredy"){
            setErrormsg("Already set up.");
          }
          return;
        }
        router.push("/");
      }).catch((e) => alert(e));
    };

    return (
      <>
        <main className="container mx-auto max-w-md px-4 pt-4">
            <h1 className="mb-1 text-3xl">Setup</h1>
            <p>Welcome. First of all, please create a user.</p>
            <p className="mb-4 text-yellow-300">Attention: Multiple users cannot be created.</p>
            <div className="mb-5">
                <label htmlFor="username" className="mb-1">Name</label>
                <Input type="text" id="username" placeholder="e.g. username" value={username} onChange={(e) =>{if(e.target instanceof HTMLInputElement) setUsername(e.target.value);}}/>
            </div>
            <div className="mb-5">
                <label htmlFor="password" className="mb-1">Password</label>
                <Input type="password" id="password" value={password} onChange={(e) =>{if(e.target instanceof HTMLInputElement) setPassword(e.target.value);}}/>
            </div>
            <ButtonSuccess onClick={create_user} disabled={loading}>{loading?<span><Spinner/></span>:null} Create</ButtonSuccess>
            <p className="text-red-500 text-xl">{errormsg}</p>
        </main>
      </>
    );
};

export default Setup;
