import type {
  LoaderFunction,
  ActionFunction,
  MetaFunction
} from "remix";

type LoaderData = {
  user: string;
};

// export let loader: LoaderFunction = async ({ params }) => {
//   // console.log(process.env.accessKeyId)
//   let a = process.env.accessKeyId
//   let data: LoaderData = {
//    accessKeyId = a
//   };
//   return data;
// };


export let loader: LoaderFunction = async () => {
  console.log("==================");
  
  console.log(process.env.accessKeyId)
  let aa = process.env.accessKeyId as string
  let data: LoaderData = { user : aa};
  return data;
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
      <div onClick={aaa}>11111</div>
    </div>
  );
}

function aaa(){
  console.log("================");
  console.log(process.env.accessKeyId)
}
