var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:D:\code\my\Image_Library\app\root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
init_react();
var import_remix2 = __toModule(require_remix());
var meta = () => {
  return { title: "New Remix App" };
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null)));
}

// route-module:D:\code\my\Image_Library\app\routes\$list\$path.tsx
var path_exports = {};
__export(path_exports, {
  action: () => action,
  default: () => List,
  loader: () => loader
});
init_react();
var import_remix3 = __toModule(require_remix());
var import_remix4 = __toModule(require_remix());
var import_remix5 = __toModule(require_remix());

// app/utils/oss.server.ts
init_react();
var OSS = require("ali-oss");
var fs = require("fs");
var urllib = require("urllib");
var crypto = require("crypto");
function getClient(accessKeyId, accessKeySecret, bucket) {
  return new OSS({
    region: "oss-cn-beijing",
    accessKeyId,
    accessKeySecret,
    bucket
  });
}
function listDir(accessKeyId, accessKeySecret, bucket, dir) {
  let client = getClient(accessKeyId, accessKeySecret, bucket);
  return client.list({
    prefix: dir,
    delimiter: "/"
  });
}
function upImageUrl(accessKeyId, accessKeySecret, bucket, url, path) {
  let client = getClient(accessKeyId, accessKeySecret, bucket);
  const Duplex = require("stream").Duplex;
  console.log("upImageUrl: " + url);
  console.log("path: " + path);
  let stream = new Duplex();
  let extName = getFileExtendingName(url);
  urllib.request(url, (err, data, res) => {
    if (!err) {
      stream.push(data);
      stream.push(null);
      let hashName = getHash(data, "utf8", "md5");
      let _path = "" + path + hashName + extName;
      client.putStream(_path, stream).then((r) => console.log(r)).catch((e) => console.log(e));
    }
  });
}
function getFileExtendingName(filename) {
  var reg = /\.[^\.]+$/;
  var matches = reg.exec(filename);
  if (matches) {
    if (matches[0].length >= 6) {
      return "";
    }
    return matches[0];
  }
  return "";
}
function getHash(content, encoding, type) {
  return crypto.createHash(type).update(content, encoding).digest("hex");
}

// route-module:D:\code\my\Image_Library\app\routes\$list\$path.tsx
var loader = async ({ params }) => {
  let ossListData = await listDir(process.env.accessKeyId, process.env.accessKeySecret, process.env.bucket, params.path);
  let dirs = new Array();
  if (ossListData.prefixes != null) {
    ossListData.prefixes.map((subDir) => {
      let path = subDir.replace(new RegExp("/", "g"), () => "%2f");
      console.log("1==============");
      console.log(subDir);
      console.log(path);
      path = process.env.libraryPath + "/" + path;
      dirs.push({ name: subDir.split("/").slice(-2), path });
    });
  }
  let data = {
    ShowFile: ossListData.objects == null ? [] : ossListData.objects,
    ShowDir: dirs,
    url: "",
    accessKeyId: process.env.accessKeyId,
    accessKeySecret: process.env.accessKeySecret,
    bucket: process.env.bucket,
    path: params.path
  };
  return data;
};
var action = async ({
  request,
  params
}) => {
  let form = await request.formData();
  let url = form.get("url");
  let accessKeyId = form.get("_accessKeyId");
  let accessKeySecret = form.get("_accessKeySecret");
  let bucket = form.get("_bucket");
  let path = form.get("_path");
  await upImageUrl(accessKeyId, accessKeySecret, bucket, url, path);
  return null;
};
function List() {
  let data = (0, import_remix4.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, "Posts"), data.ShowDir.map((subDir) => /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/" + subDir.path
  }, subDir.name))), /* @__PURE__ */ React.createElement("div", null, "------------"), data.ShowFile.map((file) => /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/show/" + file.url.replace(new RegExp("/", "g"), () => "%2f"),
    style: {
      display: file.size == "0" ? "none" : ""
    }
  }, /* @__PURE__ */ React.createElement("img", {
    src: file.url,
    alt: file.name.split("/").pop(),
    style: { width: "200px", height: "200px" }
  }))))), /* @__PURE__ */ React.createElement("form", {
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "_accessKeyId",
    value: data.accessKeyId
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "_accessKeySecret",
    value: data.accessKeySecret
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "_bucket",
    value: data.bucket
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "_path",
    value: data.path
  }), /* @__PURE__ */ React.createElement("label", null, "Url:", " ", /* @__PURE__ */ React.createElement("input", {
    type: "text",
    defaultValue: data == null ? void 0 : data.url,
    name: "url"
  })), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "button"
  }, "Add")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_remix5.Outlet, null))));
}

// route-module:D:\code\my\Image_Library\app\routes\$list\index.tsx
var list_exports = {};
__export(list_exports, {
  default: () => JokeRoute,
  loader: () => loader2
});
init_react();
var import_remix6 = __toModule(require_remix());
var loader2 = async ({ params }) => {
  if (params.list == process.env.libraryPath) {
    return (0, import_remix6.redirect)("/" + process.env.libraryPath + "/" + process.env.baseFile + "%2f");
  }
  return (0, import_remix6.redirect)("/");
};
function JokeRoute() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Here's your hilarious joke:"));
}

// route-module:D:\code\my\Image_Library\app\routes\show\$path.tsx
var path_exports2 = {};
__export(path_exports2, {
  default: () => List2,
  loader: () => loader3
});
init_react();
var import_remix7 = __toModule(require_remix());
var loader3 = async ({ params }) => {
  let data = {
    url: params.path
  };
  return data;
};
function List2() {
  let data = (0, import_remix7.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    src: data.url
  }));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/$list/$path": {
    id: "routes/$list/$path",
    parentId: "root",
    path: ":list/:path",
    index: void 0,
    caseSensitive: void 0,
    module: path_exports
  },
  "routes/$list/index": {
    id: "routes/$list/index",
    parentId: "root",
    path: ":list",
    index: true,
    caseSensitive: void 0,
    module: list_exports
  },
  "routes/show/$path": {
    id: "routes/show/$path",
    parentId: "root",
    path: "show/:path",
    index: void 0,
    caseSensitive: void 0,
    module: path_exports2
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOkQ6XFxjb2RlXFxteVxcSW1hZ2VfTGlicmFyeVxcYXBwXFxyb290LnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXGNvZGVcXG15XFxJbWFnZV9MaWJyYXJ5XFxhcHBcXHJvdXRlc1xcJGxpc3RcXCRwYXRoLnRzeCIsICIuLi8uLi9hcHAvdXRpbHMvb3NzLnNlcnZlci50cyIsICJyb3V0ZS1tb2R1bGU6RDpcXGNvZGVcXG15XFxJbWFnZV9MaWJyYXJ5XFxhcHBcXHJvdXRlc1xcJGxpc3RcXGluZGV4LnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXGNvZGVcXG15XFxJbWFnZV9MaWJyYXJ5XFxhcHBcXHJvdXRlc1xcc2hvd1xcJHBhdGgudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG4iLCAiLyoqXG4gKiByZW1peCB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY2xpZW50ID0gcmVxdWlyZSgnLi9jbGllbnQnKTtcbnZhciBzZXJ2ZXIgPSByZXF1aXJlKCcuL3NlcnZlcicpO1xudmFyIHBsYXRmb3JtID0gcmVxdWlyZSgnLi9wbGF0Zm9ybScpO1xuXG5cblxuT2JqZWN0LmtleXMoY2xpZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsaWVudFtrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMoc2VydmVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlcltrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMocGxhdGZvcm0pLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcGxhdGZvcm1ba107IH1cblx0fSk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCJEOlxcXFxjb2RlXFxcXG15XFxcXEltYWdlX0xpYnJhcnlcXFxcYXBwXFxcXGVudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiRDpcXFxcY29kZVxcXFxteVxcXFxJbWFnZV9MaWJyYXJ5XFxcXGFwcFxcXFxyb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCJEOlxcXFxjb2RlXFxcXG15XFxcXEltYWdlX0xpYnJhcnlcXFxcYXBwXFxcXHJvdXRlc1xcXFwkbGlzdFxcXFwkcGF0aC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiRDpcXFxcY29kZVxcXFxteVxcXFxJbWFnZV9MaWJyYXJ5XFxcXGFwcFxcXFxyb3V0ZXNcXFxcJGxpc3RcXFxcaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIkQ6XFxcXGNvZGVcXFxcbXlcXFxcSW1hZ2VfTGlicmFyeVxcXFxhcHBcXFxccm91dGVzXFxcXHNob3dcXFxcJHBhdGgudHN4XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCIuL2Fzc2V0cy5qc29uXCI7XG5leHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gIFwicm9vdFwiOiB7XG4gICAgaWQ6IFwicm9vdFwiLFxuICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgcGF0aDogXCJcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMFxuICB9LFxuICBcInJvdXRlcy8kbGlzdC8kcGF0aFwiOiB7XG4gICAgaWQ6IFwicm91dGVzLyRsaXN0LyRwYXRoXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiOmxpc3QvOnBhdGhcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMVxuICB9LFxuICBcInJvdXRlcy8kbGlzdC9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzLyRsaXN0L2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiOmxpc3RcIixcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTJcbiAgfSxcbiAgXCJyb3V0ZXMvc2hvdy8kcGF0aFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3Nob3cvJHBhdGhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJzaG93LzpwYXRoXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTNcbiAgfVxufTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVyc1xuICB9KTtcbn1cbiIsICJpbXBvcnQge1xyXG4gIExpbmtzLFxyXG4gIExpdmVSZWxvYWQsXHJcbiAgTWV0YSxcclxuICBPdXRsZXQsXHJcbiAgU2NyaXB0cyxcclxuICBTY3JvbGxSZXN0b3JhdGlvblxyXG59IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xyXG5cclxuLy8gcmVxdWlyZSgnZG90ZW52JykuY29uZmlnKClcclxuXHJcbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdGl0bGU6IFwiTmV3IFJlbWl4IEFwcFwiIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxyXG4gICAgICA8aGVhZD48L2hlYWQ+XHJcbiAgICAgIDxib2R5PlxyXG4gICAgICAgIDxPdXRsZXQgLz5cclxuICAgICAgICA8U2NyaXB0cyAvPlxyXG4gICAgICA8L2JvZHk+XHJcbiAgICA8L2h0bWw+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24sIEFjdGlvbkZ1bmN0aW9uLCBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEsIHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IE91dGxldCB9IGZyb20gXCJyZW1peFwiO1xyXG5cclxuaW1wb3J0IHtsaXN0RGlyLCB1cEltYWdlVXJsfSBmcm9tIFwiLi4vLi4vdXRpbHMvb3NzLnNlcnZlclwiXHJcblxyXG5cclxudHlwZSBPc3NEaXIgPSB7XHJcbiAgcGF0aDogc3RyaW5nXHJcbiAgbmFtZTogc3RyaW5nXHJcbn1cclxuXHJcbnR5cGUgT1NTRGF0YSA9IHtcclxuICBTaG93RGlyOiBPc3NEaXJbXVxyXG4gIFNob3dGaWxlOiBbe1xyXG4gICAgbmFtZTogc3RyaW5nXHJcbiAgICBzaXplOiBzdHJpbmdcclxuICAgIHVybDogc3RyaW5nXHJcbiAgfV1cclxuICAvLyBjbGllbnQ6IGFueVxyXG4gIHVybDogc3RyaW5nXHJcbiAgYWNjZXNzS2V5SWQ6IHN0cmluZ1xyXG4gIGFjY2Vzc0tleVNlY3JldDogc3RyaW5nXHJcbiAgYnVja2V0OiBzdHJpbmdcclxuICBwYXRoOiBzdHJpbmdcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xyXG5cclxuICAvL1x1NTIyNFx1NjVBRFx1NjYyRlx1NTQyNlx1NjcwOVx1Njc0M1xyXG4gIC8vIGlmKHBhcmFtcy5saXN0ICAhPSBwcm9jZXNzLmVudi5saWJyYXJ5UGF0aCl7XHJcbiAgICAvLyByZXR1cm4gcmVkaXJlY3QoXCIvXCIpXHJcbiAgLy8gfVxyXG4gIC8vIGNvbnNvbGUubG9nKHBhcmFtcyk7XHJcbiAgLy8gY29uc29sZS5sb2cocGFyYW1zLnBhdGgpO1xyXG5cclxuXHJcbiAgbGV0IG9zc0xpc3REYXRhID0gYXdhaXQgbGlzdERpcihcclxuICAgIHByb2Nlc3MuZW52LmFjY2Vzc0tleUlkIGFzIHN0cmluZywgXHJcbiAgICBwcm9jZXNzLmVudi5hY2Nlc3NLZXlTZWNyZXQgYXMgc3RyaW5nLCBcclxuICAgIHByb2Nlc3MuZW52LmJ1Y2tldCBhcyBzdHJpbmcsXHJcbiAgICBwYXJhbXMucGF0aCBhcyBzdHJpbmcpXHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coXCIxPT09PT09PT09PT09PVwiKTtcclxuICAgIFxyXG4gICAgLy8gY29uc29sZS5sb2cob3NzTGlzdERhdGEpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCIyPT09PT09PT09PT09PVwiKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHBhcmFtcyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIjM9PT09PT09PT09PT09XCIpO1xyXG5cclxuICAgIFxyXG4gICAgbGV0IGRpcnMgPSBuZXcgQXJyYXkoKTtcclxuICAgIGlmKG9zc0xpc3REYXRhLnByZWZpeGVzICE9IG51bGwpe1xyXG4gICAgICBvc3NMaXN0RGF0YS5wcmVmaXhlcy5tYXAoKHN1YkRpcjogc3RyaW5nKSA9PiB7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBwYXRoID0gc3ViRGlyLnJlcGxhY2UobmV3IFJlZ0V4cChcIi9cIiwgJ2cnKSwgKCkgPT4gXCIlMmZcIilcclxuICAgICAgICBjb25zb2xlLmxvZyhcIjE9PT09PT09PT09PT09PVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzdWJEaXIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBhdGgpO1xyXG5cclxuICAgICAgICBwYXRoID0gIHByb2Nlc3MuZW52LmxpYnJhcnlQYXRoICsgXCIvXCIgKyBwYXRoXHJcblxyXG5cclxuICAgICAgICBcclxuICAgICAgICBkaXJzLnB1c2goe25hbWU6IHN1YkRpci5zcGxpdCgnLycpLnNsaWNlKC0yKSwgcGF0aDogcGF0aH0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gIGxldCBkYXRhOiBPU1NEYXRhID0ge1xyXG4gICAgLy8gU2hvd0Rpcjogb3NzTGlzdERhdGEucHJlZml4ZXMgPT0gbnVsbCA/IFtdIDogb3NzTGlzdERhdGEucHJlZml4ZXMsXHJcbiAgICBTaG93RmlsZTogb3NzTGlzdERhdGEub2JqZWN0cyA9PSBudWxsID8gW10gOiBvc3NMaXN0RGF0YS5vYmplY3RzLFxyXG4gICAgU2hvd0RpcjogZGlycyxcclxuICAgIC8vIFNob3dGaWxlOiBmaWxlcyxcclxuICAgIHVybDogXCJcIixcclxuICAgIGFjY2Vzc0tleUlkOiBwcm9jZXNzLmVudi5hY2Nlc3NLZXlJZCBhcyBzdHJpbmcsXHJcbiAgICBhY2Nlc3NLZXlTZWNyZXQ6IHByb2Nlc3MuZW52LmFjY2Vzc0tleVNlY3JldCBhcyBzdHJpbmcsXHJcbiAgICBidWNrZXQ6IHByb2Nlc3MuZW52LmJ1Y2tldCBhcyBzdHJpbmcsXHJcbiAgICBwYXRoOiBwYXJhbXMucGF0aCBhcyBzdHJpbmdcclxuICB9O1xyXG5cclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7XHJcbiAgcmVxdWVzdCxcclxuICBwYXJhbXNcclxufSkgPT4ge1xyXG4gIGxldCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG4gIGxldCB1cmwgPSBmb3JtLmdldChcInVybFwiKSAgYXMgc3RyaW5nXHJcbiAgbGV0IGFjY2Vzc0tleUlkID0gZm9ybS5nZXQoXCJfYWNjZXNzS2V5SWRcIikgYXMgc3RyaW5nXHJcbiAgbGV0IGFjY2Vzc0tleVNlY3JldCA9IGZvcm0uZ2V0KFwiX2FjY2Vzc0tleVNlY3JldFwiKSBhcyBzdHJpbmdcclxuICBsZXQgYnVja2V0ID0gZm9ybS5nZXQoXCJfYnVja2V0XCIpIGFzIHN0cmluZ1xyXG4gIGxldCBwYXRoID0gZm9ybS5nZXQoXCJfcGF0aFwiKSBhcyBzdHJpbmdcclxuICBhd2FpdCB1cEltYWdlVXJsKGFjY2Vzc0tleUlkLCBhY2Nlc3NLZXlTZWNyZXQsIGJ1Y2tldCwgdXJsLCBwYXRoKTtcclxuXHJcbiAgcmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0KCkge1xyXG5cclxuICBsZXQgZGF0YSA9IHVzZUxvYWRlckRhdGE8T1NTRGF0YT4oKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuXHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2PlBvc3RzPC9kaXY+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGRhdGEuU2hvd0Rpci5tYXAoc3ViRGlyID0+IChcclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89e1wiL1wiICsgc3ViRGlyLnBhdGh9PntzdWJEaXIubmFtZX08L0xpbms+XHJcbiAgICAgICAgICAgICAgICB7LyogPGxpPjwvbGk+ICovfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgPGRpdj4tLS0tLS0tLS0tLS08L2Rpdj5cclxuXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGRhdGEuU2hvd0ZpbGUubWFwKGZpbGUgPT4gKFxyXG4gICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89e1wiL3Nob3cvXCIgKyBmaWxlLnVybC5yZXBsYWNlKG5ldyBSZWdFeHAoXCIvXCIsICdnJyksICgpID0+IFwiJTJmXCIpfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZpbGUuc2l6ZSA9PSAnMCcgPyAnbm9uZSc6ICcnLFxyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2ZpbGUudXJsfSBhbHQ9e2ZpbGUubmFtZS5zcGxpdCgnLycpLnBvcCgpfSBzdHlsZT17e3dpZHRoOiAnMjAwcHgnLCBoZWlnaHQ6JzIwMHB4J319Lz5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgbmFtZT1cIl9hY2Nlc3NLZXlJZFwiXHJcbiAgICAgICAgICB2YWx1ZT17ZGF0YS5hY2Nlc3NLZXlJZH1cclxuICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcclxuICAgICAgICAgIG5hbWU9XCJfYWNjZXNzS2V5U2VjcmV0XCJcclxuICAgICAgICAgIHZhbHVlPXtkYXRhLmFjY2Vzc0tleVNlY3JldH1cclxuICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcclxuICAgICAgICAgIG5hbWU9XCJfYnVja2V0XCJcclxuICAgICAgICAgIHZhbHVlPXtkYXRhLmJ1Y2tldH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImhpZGRlblwiXHJcbiAgICAgICAgICBuYW1lPVwiX3BhdGhcIlxyXG4gICAgICAgICAgdmFsdWU9e2RhdGEucGF0aH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgVXJsOntcIiBcIn1cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGF0YT8udXJsfVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ1cmxcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgQWRkXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxPdXRsZXQvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcblxyXG5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iLCAibGV0IE9TUyA9IHJlcXVpcmUoJ2FsaS1vc3MnKTtcclxuXHJcbmNvbnN0IGZzID0gcmVxdWlyZShcImZzXCIpO1xyXG5jb25zdCB1cmxsaWIgPSByZXF1aXJlKFwidXJsbGliXCIpO1xyXG5jb25zdCBjcnlwdG8gPSByZXF1aXJlKCdjcnlwdG8nKTtcclxuXHJcbmxldCBjbGllbnQ6IGFueSA9IG51bGxcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnQoYWNjZXNzS2V5SWQ6IHN0cmluZywgYWNjZXNzS2V5U2VjcmV0OiBzdHJpbmcsIGJ1Y2tldDogc3RyaW5nLCkge1xyXG4gICAgcmV0dXJuIG5ldyBPU1Moe1xyXG4gICAgICAgIC8vIHlvdXJSZWdpb25cdTU4NkJcdTUxOTlCdWNrZXRcdTYyNDBcdTU3MjhcdTU3MzBcdTU3REZcdTMwMDJcdTRFRTVcdTUzNEVcdTRFMUMxXHVGRjA4XHU2NzZEXHU1RERFXHVGRjA5XHU0RTNBXHU0RjhCXHVGRjBDUmVnaW9uXHU1ODZCXHU1MTk5XHU0RTNBb3NzLWNuLWhhbmd6aG91XHUzMDAyXHJcbiAgICAgICAgcmVnaW9uOiAnb3NzLWNuLWJlaWppbmcnLFxyXG4gICAgICAgIC8vIFx1OTYzRlx1OTFDQ1x1NEU5MVx1OEQyNlx1NTNGN0FjY2Vzc0tleVx1NjJFNVx1NjcwOVx1NjI0MFx1NjcwOUFQSVx1NzY4NFx1OEJCRlx1OTVFRVx1Njc0M1x1OTY1MFx1RkYwQ1x1OThDRVx1OTY2OVx1NUY4OFx1OUFEOFx1MzAwMlx1NUYzQVx1NzBDOFx1NUVGQVx1OEJBRVx1NjBBOFx1NTIxQlx1NUVGQVx1NUU3Nlx1NEY3Rlx1NzUyOFJBTVx1NzUyOFx1NjIzN1x1OEZEQlx1ODg0Q0FQSVx1OEJCRlx1OTVFRVx1NjIxNlx1NjVFNVx1NUUzOFx1OEZEMFx1N0VGNFx1RkYwQ1x1OEJGN1x1NzY3Qlx1NUY1NVJBTVx1NjNBN1x1NTIzNlx1NTNGMFx1NTIxQlx1NUVGQVJBTVx1NzUyOFx1NjIzN1x1MzAwMlxyXG4gICAgICAgIGFjY2Vzc0tleUlkOiBhY2Nlc3NLZXlJZCxcclxuICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGFjY2Vzc0tleVNlY3JldCxcclxuICAgICAgICBidWNrZXQ6IGJ1Y2tldFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsaXN0RGlyKGFjY2Vzc0tleUlkOiBzdHJpbmcsIGFjY2Vzc0tleVNlY3JldDogc3RyaW5nLCBidWNrZXQ6IHN0cmluZywgZGlyOiBzdHJpbmcpIHtcclxuXHJcbiAgICBsZXQgY2xpZW50ID0gZ2V0Q2xpZW50KGFjY2Vzc0tleUlkLCBhY2Nlc3NLZXlTZWNyZXQsIGJ1Y2tldClcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFxyXG5cclxuICAgIC8vIHJlc3VsdC5wcmVmaXhlcy5mb3JFYWNoKChzdWJEaXI6IGFueSkgPT4ge1xyXG4gICAgLy8gfSk7XHJcbiAgICAvLyByZXN1bHQub2JqZWN0cy5mb3JFYWNoKChvYmo6IHsgbmFtZTogYW55OyB9KSA9PiB7XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICByZXR1cm4gY2xpZW50Lmxpc3Qoe1xyXG4gICAgICAgIHByZWZpeDogZGlyLFxyXG4gICAgICAgIC8vIFx1OEJCRVx1N0Y2RVx1NkI2M1x1NjU5Q1x1N0VCRlx1RkYwOC9cdUZGMDlcdTRFM0FcdTY1ODdcdTRFRjZcdTU5MzlcdTc2ODRcdTUyMDZcdTk2OTRcdTdCMjZcdTMwMDJcclxuICAgICAgICBkZWxpbWl0ZXI6ICcvJ1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwSW1hZ2VVcmwoYWNjZXNzS2V5SWQ6IHN0cmluZywgYWNjZXNzS2V5U2VjcmV0OiBzdHJpbmcsIGJ1Y2tldDogc3RyaW5nLCB1cmw6IHN0cmluZywgcGF0aDogc3RyaW5nKSB7XHJcbiAgICBsZXQgY2xpZW50ID0gZ2V0Q2xpZW50KGFjY2Vzc0tleUlkLCBhY2Nlc3NLZXlTZWNyZXQsIGJ1Y2tldClcclxuICAgIGNvbnN0IER1cGxleCA9IHJlcXVpcmUoXCJzdHJlYW1cIikuRHVwbGV4O1xyXG4gICAgY29uc29sZS5sb2coXCJ1cEltYWdlVXJsOiBcIiArIHVybClcclxuICAgIGNvbnNvbGUubG9nKFwicGF0aDogXCIgKyBwYXRoKVxyXG4gICAgLy8gLy8gXHU1QjlFXHU0RjhCXHU1MzE2XHU1M0NDXHU1REU1XHU2RDQxXHUzMDAyXHJcbiAgICBsZXQgc3RyZWFtID0gbmV3IER1cGxleCgpO1xyXG5cclxuICAgIGxldCBleHROYW1lID0gZ2V0RmlsZUV4dGVuZGluZ05hbWUodXJsKVxyXG5cclxuICAgIHVybGxpYi5yZXF1ZXN0KHVybCwgKGVycjogYW55LCBkYXRhOiBhbnksIHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKCFlcnIpIHtcclxuICAgICAgICAgICAgLy8gXHU5MDFBXHU4RkM3XHU1M0NDXHU1REU1XHU2RDQxXHU2M0E1XHU2NTM2XHU2NTcwXHU2MzZFXHUzMDAyXHJcbiAgICAgICAgICAgIHN0cmVhbS5wdXNoKGRhdGEpO1xyXG4gICAgICAgICAgICBzdHJlYW0ucHVzaChudWxsKTtcclxuICAgICAgICAgICAgLy8gXHU1ODZCXHU1MTk5T2JqZWN0XHU1QjhDXHU2NTc0XHU4REVGXHU1Rjg0XHVGRjBDXHU0RjhCXHU1OTgyZXhhbXBsZWRpci9leGFtcGxlb2JqZWN0LnR4dFx1MzAwMk9iamVjdFx1NUI4Q1x1NjU3NFx1OERFRlx1NUY4NFx1NEUyRFx1NEUwRFx1ODBGRFx1NTMwNVx1NTQyQkJ1Y2tldFx1NTQwRFx1NzlGMFx1MzAwMlxyXG4gICAgICAgICAgICBsZXQgaGFzaE5hbWUgPSBnZXRIYXNoKGRhdGEsICd1dGY4JywgJ21kNScpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgX3BhdGggPSBcIlwiICsgcGF0aCArIGhhc2hOYW1lICsgZXh0TmFtZVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PVwiKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJfcGF0aDogXCIgKyBfcGF0aCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicGF0aDogXCIgKyBwYXRoKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJoYXNoTmFtZTogXCIgKyBoYXNoTmFtZSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZXh0TmFtZTogXCIgKyBleHROYW1lKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjbGllbnQucHV0U3RyZWFtKF9wYXRoLCBzdHJlYW0pLnRoZW4oKHI6IGFueSkgPT4gY29uc29sZS5sb2cocikpLmNhdGNoKChlOiBhbnkpID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuICAgIC8vIFx1NjU4N1x1NEVGNlx1NjI2OVx1NUM1NVx1NTQwRFx1NTMzOVx1OTE0RFx1NkI2M1x1NTIxOVxyXG5mdW5jdGlvbiBnZXRGaWxlRXh0ZW5kaW5nTmFtZShmaWxlbmFtZTogc3RyaW5nKSB7XHJcbiAgICB2YXIgcmVnID0gL1xcLlteXFwuXSskLztcclxuICAgIHZhciBtYXRjaGVzID0gcmVnLmV4ZWMoZmlsZW5hbWUpO1xyXG4gICAgaWYgKG1hdGNoZXMpIHtcclxuICAgICAgICBpZihtYXRjaGVzWzBdLmxlbmd0aCA+PTYgKXtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgcmV0dXJuIG1hdGNoZXNbMF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG4gIFxyXG5cclxuXHJcbi8qKlxyXG4gKiBcdTgzQjdcdTVGOTdcdTUxODVcdTVCQjlcdTc2ODRoYXNoXHU1MDNDXHJcbiAqIFxyXG4gKiBAcGFyYW0ge1N0cmluZ30gY29udGVudCBcdTY1ODdcdTRFRjZcdTUxODVcdTVCQjlcclxuICogQHBhcmFtIHtTdHJpbmd9IGVuY29kaW5nIFx1NjU4N1x1NEVGNlx1NzY4NFx1N0YxNlx1NzgwMVx1RkYwQ1x1NEY4Qlx1NTk4Mlx1RkYxQSd1dGY4JyBcdTdCNDlcclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgaGFzaFx1N0I5N1x1NkNENVx1RkYwQ1x1NEY4Qlx1NTk4Mlx1RkYxQSdtZDUnXHUzMDAxJ3NoYTEnXHUzMDAxJ3NoYTI1NidcdTMwMDEnc2hhNTEyJyBcdTdCNDlcclxuICogQHJldHVybnMge1N0cmluZ31cclxuICovXHJcblxyXG4gZnVuY3Rpb24gZ2V0SGFzaChjb250ZW50IDpzdHJpbmcsIGVuY29kaW5nIDpzdHJpbmcsIHR5cGUgOnN0cmluZykge1xyXG4gICAgcmV0dXJuIGNyeXB0by5jcmVhdGVIYXNoKHR5cGUpLnVwZGF0ZShjb250ZW50LCBlbmNvZGluZykuZGlnZXN0KCdoZXgnKTtcclxufSIsICJpbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiwgQWN0aW9uRnVuY3Rpb24sIHJlZGlyZWN0LCBPdXRsZXQgfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7cGFyYW1zfSkgPT4ge1xyXG4gIGlmKHBhcmFtcy5saXN0ICA9PSBwcm9jZXNzLmVudi5saWJyYXJ5UGF0aCl7XHJcbiAgICByZXR1cm4gcmVkaXJlY3QoIFwiL1wiICsgcHJvY2Vzcy5lbnYubGlicmFyeVBhdGggKyBcIi9cIiArIHByb2Nlc3MuZW52LmJhc2VGaWxlICsgXCIlMmZcIik7XHJcbiAgfVxyXG4gICAgcmV0dXJuIHJlZGlyZWN0KFwiL1wiKVxyXG4gIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBKb2tlUm91dGUoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxwPkhlcmUncyB5b3VyIGhpbGFyaW91cyBqb2tlOjwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH0iLCAiaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24sIEFjdGlvbkZ1bmN0aW9uLCBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEsIHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IE91dGxldCB9IGZyb20gXCJyZW1peFwiO1xyXG5cclxuXHJcbnR5cGUgU2hvd0RhdGEgPSB7XHJcbiAgdXJsOiBzdHJpbmdcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xyXG4gIGxldCBkYXRhOiBTaG93RGF0YSA9IHtcclxuICAgIHVybDogcGFyYW1zLnBhdGggYXMgc3RyaW5nXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0KCkge1xyXG5cclxuICBsZXQgZGF0YSA9IHVzZUxvYWRlckRhdGE8U2hvd0RhdGE+KCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxpbWcgc3JjPXtkYXRhLnVybH0vPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFNBQVM7QUFBQSxNQUN0QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFdBQVc7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFVBQVU7QUFBQSxNQUN2QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1B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
