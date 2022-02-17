import { LoaderFunction, ActionFunction, redirect, Outlet } from "remix";

export let loader: LoaderFunction = async ({params}) => {
  if(params.list  != process.env.libraryPath){
    return redirect("/")
  }
  
  return redirect( "/" + process.env.libraryPath + "/" + process.env.baseFile);
}

export default function JokeRoute() {
    return (
      <div>
        <p>Here's your hilarious joke:</p>
      </div>
    );
  }