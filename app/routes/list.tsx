import type { LoaderFunction, ActionFunction } from "remix";
import { useLoaderData, redirect } from "remix";
import { Outlet } from "remix";

import {listDir, upImageUrl} from "../utils/oss.server"

type OSSData = {
  ShowDir: string[]
  ShowFile: [{
    name: string
  }]
  // client: any
  url: string
  accessKeyId: string
  accessKeySecret: string
  bucket: string
}



export let loader: LoaderFunction = async () => {
  let ossListData = await listDir(
    process.env.accessKeyId as string, 
    process.env.accessKeySecret as string, 
    process.env.bucket as string,
     "")

  let data: OSSData = {
    ShowDir: ossListData.prefixes,
    ShowFile: ossListData.objects,
    url: "",
    accessKeyId: process.env.accessKeyId as string,
    accessKeySecret: process.env.accessKeySecret as string,
    bucket: process.env.bucket as string
  };

  return data;
};

export let action: ActionFunction = async ({
  request,
  params
}) => {
  let form = await request.formData();
  let url = form.get("url")  as string
  let accessKeyId = form.get("_accessKeyId") as string
  let accessKeySecret = form.get("_accessKeySecret") as string
  let bucket = form.get("_bucket") as string
  upImageUrl(accessKeyId, accessKeySecret, bucket, url);

  return redirect("/list");
};

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
        <form method="post">
        <input
          type="hidden"
          name="_accessKeyId"
          value={data.accessKeyId}
        />
                <input
          type="hidden"
          name="_accessKeySecret"
          value={data.accessKeySecret}
        />
                <input
          type="hidden"
          name="_bucket"
          value={data.bucket}
        />
        <label>
            Url:{" "}
            <input
              type="text"
              defaultValue={data?.url}
              name="url"
            />
          </label>
        <button type="submit" className="button">
            Add
          </button>
        </form>
        <div>
          <Outlet/>
        </div>
      </main>


    </div>
  );
}