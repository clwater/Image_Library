let OSS = require('ali-oss');

const fs = require("fs");
const urllib = require("urllib");
const crypto = require('crypto');

let client: any = null

export function getClient(accessKeyId: string, accessKeySecret: string, bucket: string,) {
    return new OSS({
        // yourRegion填写Bucket所在地域。以华东1（杭州）为例，Region填写为oss-cn-hangzhou。
        region: 'oss-cn-beijing',
        // 阿里云账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM用户进行API访问或日常运维，请登录RAM控制台创建RAM用户。
        accessKeyId: accessKeyId,
        accessKeySecret: accessKeySecret,
        bucket: bucket
    });
}

export function listDir(accessKeyId: string, accessKeySecret: string, bucket: string, dir: string) {

    let client = getClient(accessKeyId, accessKeySecret, bucket)
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



export function upImageUrl(accessKeyId: string, accessKeySecret: string, bucket: string, url: string, path: string) {
    let client = getClient(accessKeyId, accessKeySecret, bucket)
    const Duplex = require("stream").Duplex;
    console.log("upImageUrl: " + url)
    console.log("path: " + path)
    // // 实例化双工流。
    let stream = new Duplex();

    let extName = getFileExtendingName(url)

    urllib.request(url, (err: any, data: any, res: any) => {
        if (!err) {
            // 通过双工流接收数据。
            stream.push(data);
            stream.push(null);
            // 填写Object完整路径，例如exampledir/exampleobject.txt。Object完整路径中不能包含Bucket名称。
            let hashName = getHash(data, 'utf8', 'md5')
            
            let _path = "" + path + hashName + extName
            // console.log("============");
            // console.log("_path: " + _path);
            // console.log("path: " + path);
            // console.log("hashName: " + hashName);
            // console.log("extName: " + extName);
            
            
            client.putStream(_path, stream).then((r: any) => console.log(r)).catch((e: any) => console.log(e));
        }
    });
}

    // 文件扩展名匹配正则
function getFileExtendingName(filename: string) {
    var reg = /\.[^\.]+$/;
    var matches = reg.exec(filename);
    if (matches) {
        if(matches[0].length >=6 ){
            return '';
        }
      return matches[0];
    }
    return '';
  }
  


/**
 * 获得内容的hash值
 * 
 * @param {String} content 文件内容
 * @param {String} encoding 文件的编码，例如：'utf8' 等
 * @param {String} type hash算法，例如：'md5'、'sha1'、'sha256'、'sha512' 等
 * @returns {String}
 */

 function getHash(content :string, encoding :string, type :string) {
    return crypto.createHash(type).update(content, encoding).digest('hex');
}