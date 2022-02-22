import { LoaderFunction, ActionFunction, Link } from "remix";
import { useLoaderData, redirect } from "remix";
import { Outlet } from "remix";

import {listDir, upImageUrl} from "../../utils/oss.server"


type OssDir = {
  path: string
  name: string
}

type OSSData = {
  ShowDir: OssDir[]
  ShowFile: [{
    name: string
    size: string
    url: string
  }]
  // client: any
  url: string
  accessKeyId: string
  accessKeySecret: string
  bucket: string
  path: string
}



export let loader: LoaderFunction = async ({ params }) => {

  //判断是否有权
  // if(params.list  != process.env.libraryPath){
    // return redirect("/")
  // }
  // console.log(params);
  // console.log(params.path);


  let ossListData = await listDir(
    process.env.accessKeyId as string, 
    process.env.accessKeySecret as string, 
    process.env.bucket as string,
    params.path as string)

    // console.log("1=============");
    
    // console.log(ossListData);
    // console.log("2=============");
    // console.log(params);
    // console.log("3=============");

    
    let dirs = new Array();
    if(ossListData.prefixes != null){
      ossListData.prefixes.map((subDir: string) => {
        
        
        let path = subDir.replaceAll("/", "%2f")

        path =  process.env.libraryPath + "/" + path

        
        dirs.push({name: subDir.split('/').slice(-2), path: path})
      })
    }

    

  let data: OSSData = {
    // ShowDir: ossListData.prefixes == null ? [] : ossListData.prefixes,
    ShowFile: ossListData.objects == null ? [] : ossListData.objects,
    ShowDir: dirs,
    // ShowFile: files,
    url: "",
    accessKeyId: process.env.accessKeyId as string,
    accessKeySecret: process.env.accessKeySecret as string,
    bucket: process.env.bucket as string,
    path: params.path as string
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
  let path = form.get("_path") as string
  await upImageUrl(accessKeyId, accessKeySecret, bucket, url, path);

  return null;
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
              <div>
                <Link to={"/" + subDir.path}>{subDir.name}</Link>
                {/* <li></li> */}
              </div>
            ))
          }
          <div>------------</div>

          {
            data.ShowFile.map(file => (
              <span>
                <Link to={"/show/" + file.url.replaceAll("/", "%2f")}
                style={{
                display: file.size == '0' ? 'none': '',
                }}>
              <img src={file.url} alt={file.name.split('/').pop()} style={{width: '200px', height:'200px'}}/>
              </Link>
              </span>
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
        <input
          type="hidden"
          name="_path"
          value={data.path}
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