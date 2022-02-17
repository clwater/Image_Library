import type { LoaderFunction } from "remix";
import { useLoaderData } from "remix";
import { Outlet } from "remix";

import {initClient, listDir} from "../utils/oss.server"

type OSSData = {
  ShowDir: string[]
  ShowFile: [{
    name: string
  }]
  // client: any
}


let OSS = require('ali-oss');



export let loader: LoaderFunction = async () => {
  initClient(process.env.accessKeyId as string, process.env.accessKeySecret as string, process.env.bucket as string)

  let ossListData = await listDir("")

  let data: OSSData = {
    // client : client,
    ShowDir: ossListData.prefixes,
    ShowFile: ossListData.objects,
  };

  return data;
};

function testClick(){
  console.log("testClick");
  
}



export default function List() {

  let data = useLoaderData<OSSData>();
  return (
    <div>

      <main>
        <div>
          <div>Posts</div>
          {
            data.ShowDir.map(subDir => (
              <li>{subDir}</li>
            ))
          }
          <div>------------</div>

          {
            data.ShowFile.map(file => (
              <li>{file.name}</li>
            ))
          }
        </div>
        <div onClick={testClick}>Test</div>
        <div>
          <Outlet/>
        </div>
      </main>


    </div>
  );
}