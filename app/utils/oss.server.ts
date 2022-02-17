let OSS = require('ali-oss');

let client :any

// client.useBucket('Bucket');


export function initClient(accessKeyId: string, accessKeySecret: string, bucket: string) {
    client = new OSS({
        // yourRegion填写Bucket所在地域。以华东1（杭州）为例，Region填写为oss-cn-hangzhou。
        region: 'oss-cn-beijing',
        // 阿里云账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM用户进行API访问或日常运维，请登录RAM控制台创建RAM用户。
        accessKeyId: accessKeyId,
        accessKeySecret: accessKeySecret,
        bucket: bucket
      
      });
}

export function listDir(dir: string){
    // const result = await 
    
      // result.prefixes.forEach((subDir: any) => {
      // });
      // result.objects.forEach((obj: { name: any; }) => {
      // });
    
      return client.list({
        prefix: dir,
        // 设置正斜线（/）为文件夹的分隔符。
        delimiter: '/'
      });
}