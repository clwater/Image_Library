import type { LoaderFunction } from "remix";
import { useLoaderData } from "remix";
import { Outlet } from "remix";


type OSSData = {
  ShowDir: string[]
  ShowFile: [{
    name: string
  }]
}


let OSS = require('ali-oss');

let client = new OSS({
  // yourRegion填写Bucket所在地域。以华东1（杭州）为例，Region填写为oss-cn-hangzhou。
  region: 'oss-cn-beijing',
  // 阿里云账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM用户进行API访问或日常运维，请登录RAM控制台创建RAM用户。
  accessKeyId: process.env.accessKeyId,
  accessKeySecret: process.env.accessKeySecret,
  bucket: process.env.bucket

});


client.useBucket('Bucket');

async function listDir(dir: string) {
  const result = await client.list({
    prefix: dir,
    // 设置正斜线（/）为文件夹的分隔符。
    delimiter: '/'
  });

  // result.prefixes.forEach((subDir: any) => {
  // });
  // result.objects.forEach((obj: { name: any; }) => {
  // });

  return result
}



export let loader: LoaderFunction = async () => {
  let ossListData = await listDir("")
  console.log(ossListData.prefixes)

  let data: OSSData = {
    ShowDir: ossListData.prefixes,
    ShowFile: ossListData.objects
  };

  return data;
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

          {
            data.ShowFile.map(file => (
              <li>{file.name}</li>
            ))
          }
        </div>
        <div>
          <Outlet/>
        </div>
      </main>


    </div>
  );
}