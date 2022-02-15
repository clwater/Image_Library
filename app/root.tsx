import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";

require('dotenv').config()

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export default function App() {
  return (
    <html lang="en">
      <body>
        {/* Hi */}
        <Outlet />
        {/* <ScrollRestoration /> */}
        {/* <Scripts /> */}
        {/* {process.env.NODE_ENV === "development" && <LiveReload />} */}
      </body>
    </html>
  );
}
