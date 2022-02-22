import { LoaderFunction, ActionFunction, Link } from "remix";
import { useLoaderData, redirect } from "remix";
import { Outlet } from "remix";


type ShowData = {
  url: string
}



export let loader: LoaderFunction = async ({ params }) => {
  let data: ShowData = {
    url: params.path as string
  };

  return data;
};

export default function List() {

  let data = useLoaderData<ShowData>();
  return (
    <div>
      <img src={data.url}/>
    </div>
  );
}