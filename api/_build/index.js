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
      let path = subDir.replaceAll("/", "%2f");
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
    to: "/show/" + file.url.replaceAll("/", "%2f"),
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOkQ6XFxjb2RlXFxteVxcSW1hZ2VfTGlicmFyeVxcYXBwXFxyb290LnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXGNvZGVcXG15XFxJbWFnZV9MaWJyYXJ5XFxhcHBcXHJvdXRlc1xcJGxpc3RcXCRwYXRoLnRzeCIsICIuLi8uLi9hcHAvdXRpbHMvb3NzLnNlcnZlci50cyIsICJyb3V0ZS1tb2R1bGU6RDpcXGNvZGVcXG15XFxJbWFnZV9MaWJyYXJ5XFxhcHBcXHJvdXRlc1xcJGxpc3RcXGluZGV4LnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXGNvZGVcXG15XFxJbWFnZV9MaWJyYXJ5XFxhcHBcXHJvdXRlc1xcc2hvd1xcJHBhdGgudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG4iLCAiLyoqXG4gKiByZW1peCB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY2xpZW50ID0gcmVxdWlyZSgnLi9jbGllbnQnKTtcbnZhciBzZXJ2ZXIgPSByZXF1aXJlKCcuL3NlcnZlcicpO1xudmFyIHBsYXRmb3JtID0gcmVxdWlyZSgnLi9wbGF0Zm9ybScpO1xuXG5cblxuT2JqZWN0LmtleXMoY2xpZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsaWVudFtrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMoc2VydmVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlcltrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMocGxhdGZvcm0pLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcGxhdGZvcm1ba107IH1cblx0fSk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCJEOlxcXFxjb2RlXFxcXG15XFxcXEltYWdlX0xpYnJhcnlcXFxcYXBwXFxcXGVudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiRDpcXFxcY29kZVxcXFxteVxcXFxJbWFnZV9MaWJyYXJ5XFxcXGFwcFxcXFxyb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCJEOlxcXFxjb2RlXFxcXG15XFxcXEltYWdlX0xpYnJhcnlcXFxcYXBwXFxcXHJvdXRlc1xcXFwkbGlzdFxcXFwkcGF0aC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiRDpcXFxcY29kZVxcXFxteVxcXFxJbWFnZV9MaWJyYXJ5XFxcXGFwcFxcXFxyb3V0ZXNcXFxcJGxpc3RcXFxcaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIkQ6XFxcXGNvZGVcXFxcbXlcXFxcSW1hZ2VfTGlicmFyeVxcXFxhcHBcXFxccm91dGVzXFxcXHNob3dcXFxcJHBhdGgudHN4XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCIuL2Fzc2V0cy5qc29uXCI7XG5leHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gIFwicm9vdFwiOiB7XG4gICAgaWQ6IFwicm9vdFwiLFxuICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgcGF0aDogXCJcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMFxuICB9LFxuICBcInJvdXRlcy8kbGlzdC8kcGF0aFwiOiB7XG4gICAgaWQ6IFwicm91dGVzLyRsaXN0LyRwYXRoXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiOmxpc3QvOnBhdGhcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMVxuICB9LFxuICBcInJvdXRlcy8kbGlzdC9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzLyRsaXN0L2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiOmxpc3RcIixcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTJcbiAgfSxcbiAgXCJyb3V0ZXMvc2hvdy8kcGF0aFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3Nob3cvJHBhdGhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJzaG93LzpwYXRoXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTNcbiAgfVxufTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVyc1xuICB9KTtcbn1cbiIsICJpbXBvcnQge1xyXG4gIExpbmtzLFxyXG4gIExpdmVSZWxvYWQsXHJcbiAgTWV0YSxcclxuICBPdXRsZXQsXHJcbiAgU2NyaXB0cyxcclxuICBTY3JvbGxSZXN0b3JhdGlvblxyXG59IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xyXG5cclxuLy8gcmVxdWlyZSgnZG90ZW52JykuY29uZmlnKClcclxuXHJcbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdGl0bGU6IFwiTmV3IFJlbWl4IEFwcFwiIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxyXG4gICAgICA8aGVhZD48L2hlYWQ+XHJcbiAgICAgIDxib2R5PlxyXG4gICAgICAgIDxPdXRsZXQgLz5cclxuICAgICAgICA8U2NyaXB0cyAvPlxyXG4gICAgICA8L2JvZHk+XHJcbiAgICA8L2h0bWw+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24sIEFjdGlvbkZ1bmN0aW9uLCBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEsIHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IE91dGxldCB9IGZyb20gXCJyZW1peFwiO1xyXG5cclxuaW1wb3J0IHtsaXN0RGlyLCB1cEltYWdlVXJsfSBmcm9tIFwiLi4vLi4vdXRpbHMvb3NzLnNlcnZlclwiXHJcblxyXG5cclxudHlwZSBPc3NEaXIgPSB7XHJcbiAgcGF0aDogc3RyaW5nXHJcbiAgbmFtZTogc3RyaW5nXHJcbn1cclxuXHJcbnR5cGUgT1NTRGF0YSA9IHtcclxuICBTaG93RGlyOiBPc3NEaXJbXVxyXG4gIFNob3dGaWxlOiBbe1xyXG4gICAgbmFtZTogc3RyaW5nXHJcbiAgICBzaXplOiBzdHJpbmdcclxuICAgIHVybDogc3RyaW5nXHJcbiAgfV1cclxuICAvLyBjbGllbnQ6IGFueVxyXG4gIHVybDogc3RyaW5nXHJcbiAgYWNjZXNzS2V5SWQ6IHN0cmluZ1xyXG4gIGFjY2Vzc0tleVNlY3JldDogc3RyaW5nXHJcbiAgYnVja2V0OiBzdHJpbmdcclxuICBwYXRoOiBzdHJpbmdcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xyXG5cclxuICAvL1x1NTIyNFx1NjVBRFx1NjYyRlx1NTQyNlx1NjcwOVx1Njc0M1xyXG4gIC8vIGlmKHBhcmFtcy5saXN0ICAhPSBwcm9jZXNzLmVudi5saWJyYXJ5UGF0aCl7XHJcbiAgICAvLyByZXR1cm4gcmVkaXJlY3QoXCIvXCIpXHJcbiAgLy8gfVxyXG4gIC8vIGNvbnNvbGUubG9nKHBhcmFtcyk7XHJcbiAgLy8gY29uc29sZS5sb2cocGFyYW1zLnBhdGgpO1xyXG5cclxuXHJcbiAgbGV0IG9zc0xpc3REYXRhID0gYXdhaXQgbGlzdERpcihcclxuICAgIHByb2Nlc3MuZW52LmFjY2Vzc0tleUlkIGFzIHN0cmluZywgXHJcbiAgICBwcm9jZXNzLmVudi5hY2Nlc3NLZXlTZWNyZXQgYXMgc3RyaW5nLCBcclxuICAgIHByb2Nlc3MuZW52LmJ1Y2tldCBhcyBzdHJpbmcsXHJcbiAgICBwYXJhbXMucGF0aCBhcyBzdHJpbmcpXHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coXCIxPT09PT09PT09PT09PVwiKTtcclxuICAgIFxyXG4gICAgLy8gY29uc29sZS5sb2cob3NzTGlzdERhdGEpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCIyPT09PT09PT09PT09PVwiKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHBhcmFtcyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIjM9PT09PT09PT09PT09XCIpO1xyXG5cclxuICAgIFxyXG4gICAgbGV0IGRpcnMgPSBuZXcgQXJyYXkoKTtcclxuICAgIGlmKG9zc0xpc3REYXRhLnByZWZpeGVzICE9IG51bGwpe1xyXG4gICAgICBvc3NMaXN0RGF0YS5wcmVmaXhlcy5tYXAoKHN1YkRpcjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHBhdGggPSBzdWJEaXIucmVwbGFjZUFsbChcIi9cIiwgXCIlMmZcIilcclxuXHJcbiAgICAgICAgcGF0aCA9ICBwcm9jZXNzLmVudi5saWJyYXJ5UGF0aCArIFwiL1wiICsgcGF0aFxyXG5cclxuICAgICAgICBcclxuICAgICAgICBkaXJzLnB1c2goe25hbWU6IHN1YkRpci5zcGxpdCgnLycpLnNsaWNlKC0yKSwgcGF0aDogcGF0aH0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gIGxldCBkYXRhOiBPU1NEYXRhID0ge1xyXG4gICAgLy8gU2hvd0Rpcjogb3NzTGlzdERhdGEucHJlZml4ZXMgPT0gbnVsbCA/IFtdIDogb3NzTGlzdERhdGEucHJlZml4ZXMsXHJcbiAgICBTaG93RmlsZTogb3NzTGlzdERhdGEub2JqZWN0cyA9PSBudWxsID8gW10gOiBvc3NMaXN0RGF0YS5vYmplY3RzLFxyXG4gICAgU2hvd0RpcjogZGlycyxcclxuICAgIC8vIFNob3dGaWxlOiBmaWxlcyxcclxuICAgIHVybDogXCJcIixcclxuICAgIGFjY2Vzc0tleUlkOiBwcm9jZXNzLmVudi5hY2Nlc3NLZXlJZCBhcyBzdHJpbmcsXHJcbiAgICBhY2Nlc3NLZXlTZWNyZXQ6IHByb2Nlc3MuZW52LmFjY2Vzc0tleVNlY3JldCBhcyBzdHJpbmcsXHJcbiAgICBidWNrZXQ6IHByb2Nlc3MuZW52LmJ1Y2tldCBhcyBzdHJpbmcsXHJcbiAgICBwYXRoOiBwYXJhbXMucGF0aCBhcyBzdHJpbmdcclxuICB9O1xyXG5cclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7XHJcbiAgcmVxdWVzdCxcclxuICBwYXJhbXNcclxufSkgPT4ge1xyXG4gIGxldCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG4gIGxldCB1cmwgPSBmb3JtLmdldChcInVybFwiKSAgYXMgc3RyaW5nXHJcbiAgbGV0IGFjY2Vzc0tleUlkID0gZm9ybS5nZXQoXCJfYWNjZXNzS2V5SWRcIikgYXMgc3RyaW5nXHJcbiAgbGV0IGFjY2Vzc0tleVNlY3JldCA9IGZvcm0uZ2V0KFwiX2FjY2Vzc0tleVNlY3JldFwiKSBhcyBzdHJpbmdcclxuICBsZXQgYnVja2V0ID0gZm9ybS5nZXQoXCJfYnVja2V0XCIpIGFzIHN0cmluZ1xyXG4gIGxldCBwYXRoID0gZm9ybS5nZXQoXCJfcGF0aFwiKSBhcyBzdHJpbmdcclxuICBhd2FpdCB1cEltYWdlVXJsKGFjY2Vzc0tleUlkLCBhY2Nlc3NLZXlTZWNyZXQsIGJ1Y2tldCwgdXJsLCBwYXRoKTtcclxuXHJcbiAgcmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0KCkge1xyXG5cclxuICBsZXQgZGF0YSA9IHVzZUxvYWRlckRhdGE8T1NTRGF0YT4oKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuXHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2PlBvc3RzPC9kaXY+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGRhdGEuU2hvd0Rpci5tYXAoc3ViRGlyID0+IChcclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89e1wiL1wiICsgc3ViRGlyLnBhdGh9PntzdWJEaXIubmFtZX08L0xpbms+XHJcbiAgICAgICAgICAgICAgICB7LyogPGxpPjwvbGk+ICovfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgPGRpdj4tLS0tLS0tLS0tLS08L2Rpdj5cclxuXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGRhdGEuU2hvd0ZpbGUubWFwKGZpbGUgPT4gKFxyXG4gICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89e1wiL3Nob3cvXCIgKyBmaWxlLnVybC5yZXBsYWNlQWxsKFwiL1wiLCBcIiUyZlwiKX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmaWxlLnNpemUgPT0gJzAnID8gJ25vbmUnOiAnJyxcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtmaWxlLnVybH0gYWx0PXtmaWxlLm5hbWUuc3BsaXQoJy8nKS5wb3AoKX0gc3R5bGU9e3t3aWR0aDogJzIwMHB4JywgaGVpZ2h0OicyMDBweCd9fS8+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcclxuICAgICAgICAgIG5hbWU9XCJfYWNjZXNzS2V5SWRcIlxyXG4gICAgICAgICAgdmFsdWU9e2RhdGEuYWNjZXNzS2V5SWR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImhpZGRlblwiXHJcbiAgICAgICAgICBuYW1lPVwiX2FjY2Vzc0tleVNlY3JldFwiXHJcbiAgICAgICAgICB2YWx1ZT17ZGF0YS5hY2Nlc3NLZXlTZWNyZXR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImhpZGRlblwiXHJcbiAgICAgICAgICBuYW1lPVwiX2J1Y2tldFwiXHJcbiAgICAgICAgICB2YWx1ZT17ZGF0YS5idWNrZXR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgbmFtZT1cIl9wYXRoXCJcclxuICAgICAgICAgIHZhbHVlPXtkYXRhLnBhdGh9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIFVybDp7XCIgXCJ9XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RhdGE/LnVybH1cclxuICAgICAgICAgICAgICBuYW1lPVwidXJsXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgIEFkZFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8T3V0bGV0Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59IiwgImxldCBPU1MgPSByZXF1aXJlKCdhbGktb3NzJyk7XHJcblxyXG5jb25zdCBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcclxuY29uc3QgdXJsbGliID0gcmVxdWlyZShcInVybGxpYlwiKTtcclxuY29uc3QgY3J5cHRvID0gcmVxdWlyZSgnY3J5cHRvJyk7XHJcblxyXG5sZXQgY2xpZW50OiBhbnkgPSBudWxsXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpZW50KGFjY2Vzc0tleUlkOiBzdHJpbmcsIGFjY2Vzc0tleVNlY3JldDogc3RyaW5nLCBidWNrZXQ6IHN0cmluZywpIHtcclxuICAgIHJldHVybiBuZXcgT1NTKHtcclxuICAgICAgICAvLyB5b3VyUmVnaW9uXHU1ODZCXHU1MTk5QnVja2V0XHU2MjQwXHU1NzI4XHU1NzMwXHU1N0RGXHUzMDAyXHU0RUU1XHU1MzRFXHU0RTFDMVx1RkYwOFx1Njc2RFx1NURERVx1RkYwOVx1NEUzQVx1NEY4Qlx1RkYwQ1JlZ2lvblx1NTg2Qlx1NTE5OVx1NEUzQW9zcy1jbi1oYW5nemhvdVx1MzAwMlxyXG4gICAgICAgIHJlZ2lvbjogJ29zcy1jbi1iZWlqaW5nJyxcclxuICAgICAgICAvLyBcdTk2M0ZcdTkxQ0NcdTRFOTFcdThEMjZcdTUzRjdBY2Nlc3NLZXlcdTYyRTVcdTY3MDlcdTYyNDBcdTY3MDlBUElcdTc2ODRcdThCQkZcdTk1RUVcdTY3NDNcdTk2NTBcdUZGMENcdTk4Q0VcdTk2NjlcdTVGODhcdTlBRDhcdTMwMDJcdTVGM0FcdTcwQzhcdTVFRkFcdThCQUVcdTYwQThcdTUyMUJcdTVFRkFcdTVFNzZcdTRGN0ZcdTc1MjhSQU1cdTc1MjhcdTYyMzdcdThGREJcdTg4NENBUElcdThCQkZcdTk1RUVcdTYyMTZcdTY1RTVcdTVFMzhcdThGRDBcdTdFRjRcdUZGMENcdThCRjdcdTc2N0JcdTVGNTVSQU1cdTYzQTdcdTUyMzZcdTUzRjBcdTUyMUJcdTVFRkFSQU1cdTc1MjhcdTYyMzdcdTMwMDJcclxuICAgICAgICBhY2Nlc3NLZXlJZDogYWNjZXNzS2V5SWQsXHJcbiAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBhY2Nlc3NLZXlTZWNyZXQsXHJcbiAgICAgICAgYnVja2V0OiBidWNrZXRcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGlzdERpcihhY2Nlc3NLZXlJZDogc3RyaW5nLCBhY2Nlc3NLZXlTZWNyZXQ6IHN0cmluZywgYnVja2V0OiBzdHJpbmcsIGRpcjogc3RyaW5nKSB7XHJcblxyXG4gICAgbGV0IGNsaWVudCA9IGdldENsaWVudChhY2Nlc3NLZXlJZCwgYWNjZXNzS2V5U2VjcmV0LCBidWNrZXQpXHJcbiAgICAvLyBjb25zdCByZXN1bHQgPSBhd2FpdCBcclxuXHJcbiAgICAvLyByZXN1bHQucHJlZml4ZXMuZm9yRWFjaCgoc3ViRGlyOiBhbnkpID0+IHtcclxuICAgIC8vIH0pO1xyXG4gICAgLy8gcmVzdWx0Lm9iamVjdHMuZm9yRWFjaCgob2JqOiB7IG5hbWU6IGFueTsgfSkgPT4ge1xyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgcmV0dXJuIGNsaWVudC5saXN0KHtcclxuICAgICAgICBwcmVmaXg6IGRpcixcclxuICAgICAgICAvLyBcdThCQkVcdTdGNkVcdTZCNjNcdTY1OUNcdTdFQkZcdUZGMDgvXHVGRjA5XHU0RTNBXHU2NTg3XHU0RUY2XHU1OTM5XHU3Njg0XHU1MjA2XHU5Njk0XHU3QjI2XHUzMDAyXHJcbiAgICAgICAgZGVsaW1pdGVyOiAnLydcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cEltYWdlVXJsKGFjY2Vzc0tleUlkOiBzdHJpbmcsIGFjY2Vzc0tleVNlY3JldDogc3RyaW5nLCBidWNrZXQ6IHN0cmluZywgdXJsOiBzdHJpbmcsIHBhdGg6IHN0cmluZykge1xyXG4gICAgbGV0IGNsaWVudCA9IGdldENsaWVudChhY2Nlc3NLZXlJZCwgYWNjZXNzS2V5U2VjcmV0LCBidWNrZXQpXHJcbiAgICBjb25zdCBEdXBsZXggPSByZXF1aXJlKFwic3RyZWFtXCIpLkR1cGxleDtcclxuICAgIGNvbnNvbGUubG9nKFwidXBJbWFnZVVybDogXCIgKyB1cmwpXHJcbiAgICBjb25zb2xlLmxvZyhcInBhdGg6IFwiICsgcGF0aClcclxuICAgIC8vIC8vIFx1NUI5RVx1NEY4Qlx1NTMxNlx1NTNDQ1x1NURFNVx1NkQ0MVx1MzAwMlxyXG4gICAgbGV0IHN0cmVhbSA9IG5ldyBEdXBsZXgoKTtcclxuXHJcbiAgICBsZXQgZXh0TmFtZSA9IGdldEZpbGVFeHRlbmRpbmdOYW1lKHVybClcclxuXHJcbiAgICB1cmxsaWIucmVxdWVzdCh1cmwsIChlcnI6IGFueSwgZGF0YTogYW55LCByZXM6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmICghZXJyKSB7XHJcbiAgICAgICAgICAgIC8vIFx1OTAxQVx1OEZDN1x1NTNDQ1x1NURFNVx1NkQ0MVx1NjNBNVx1NjUzNlx1NjU3MFx1NjM2RVx1MzAwMlxyXG4gICAgICAgICAgICBzdHJlYW0ucHVzaChkYXRhKTtcclxuICAgICAgICAgICAgc3RyZWFtLnB1c2gobnVsbCk7XHJcbiAgICAgICAgICAgIC8vIFx1NTg2Qlx1NTE5OU9iamVjdFx1NUI4Q1x1NjU3NFx1OERFRlx1NUY4NFx1RkYwQ1x1NEY4Qlx1NTk4MmV4YW1wbGVkaXIvZXhhbXBsZW9iamVjdC50eHRcdTMwMDJPYmplY3RcdTVCOENcdTY1NzRcdThERUZcdTVGODRcdTRFMkRcdTRFMERcdTgwRkRcdTUzMDVcdTU0MkJCdWNrZXRcdTU0MERcdTc5RjBcdTMwMDJcclxuICAgICAgICAgICAgbGV0IGhhc2hOYW1lID0gZ2V0SGFzaChkYXRhLCAndXRmOCcsICdtZDUnKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IF9wYXRoID0gXCJcIiArIHBhdGggKyBoYXNoTmFtZSArIGV4dE5hbWVcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCI9PT09PT09PT09PT1cIik7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiX3BhdGg6IFwiICsgX3BhdGgpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInBhdGg6IFwiICsgcGF0aCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaGFzaE5hbWU6IFwiICsgaGFzaE5hbWUpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImV4dE5hbWU6IFwiICsgZXh0TmFtZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2xpZW50LnB1dFN0cmVhbShfcGF0aCwgc3RyZWFtKS50aGVuKChyOiBhbnkpID0+IGNvbnNvbGUubG9nKHIpKS5jYXRjaCgoZTogYW55KSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbiAgICAvLyBcdTY1ODdcdTRFRjZcdTYyNjlcdTVDNTVcdTU0MERcdTUzMzlcdTkxNERcdTZCNjNcdTUyMTlcclxuZnVuY3Rpb24gZ2V0RmlsZUV4dGVuZGluZ05hbWUoZmlsZW5hbWU6IHN0cmluZykge1xyXG4gICAgdmFyIHJlZyA9IC9cXC5bXlxcLl0rJC87XHJcbiAgICB2YXIgbWF0Y2hlcyA9IHJlZy5leGVjKGZpbGVuYW1lKTtcclxuICAgIGlmIChtYXRjaGVzKSB7XHJcbiAgICAgICAgaWYobWF0Y2hlc1swXS5sZW5ndGggPj02ICl7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcbiAgICAgIHJldHVybiBtYXRjaGVzWzBdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxuICBcclxuXHJcblxyXG4vKipcclxuICogXHU4M0I3XHU1Rjk3XHU1MTg1XHU1QkI5XHU3Njg0aGFzaFx1NTAzQ1xyXG4gKiBcclxuICogQHBhcmFtIHtTdHJpbmd9IGNvbnRlbnQgXHU2NTg3XHU0RUY2XHU1MTg1XHU1QkI5XHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBlbmNvZGluZyBcdTY1ODdcdTRFRjZcdTc2ODRcdTdGMTZcdTc4MDFcdUZGMENcdTRGOEJcdTU5ODJcdUZGMUEndXRmOCcgXHU3QjQ5XHJcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIGhhc2hcdTdCOTdcdTZDRDVcdUZGMENcdTRGOEJcdTU5ODJcdUZGMUEnbWQ1J1x1MzAwMSdzaGExJ1x1MzAwMSdzaGEyNTYnXHUzMDAxJ3NoYTUxMicgXHU3QjQ5XHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XHJcbiAqL1xyXG5cclxuIGZ1bmN0aW9uIGdldEhhc2goY29udGVudCA6c3RyaW5nLCBlbmNvZGluZyA6c3RyaW5nLCB0eXBlIDpzdHJpbmcpIHtcclxuICAgIHJldHVybiBjcnlwdG8uY3JlYXRlSGFzaCh0eXBlKS51cGRhdGUoY29udGVudCwgZW5jb2RpbmcpLmRpZ2VzdCgnaGV4Jyk7XHJcbn0iLCAiaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24sIEFjdGlvbkZ1bmN0aW9uLCByZWRpcmVjdCwgT3V0bGV0IH0gZnJvbSBcInJlbWl4XCI7XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoe3BhcmFtc30pID0+IHtcclxuICBpZihwYXJhbXMubGlzdCAgPT0gcHJvY2Vzcy5lbnYubGlicmFyeVBhdGgpe1xyXG4gICAgcmV0dXJuIHJlZGlyZWN0KCBcIi9cIiArIHByb2Nlc3MuZW52LmxpYnJhcnlQYXRoICsgXCIvXCIgKyBwcm9jZXNzLmVudi5iYXNlRmlsZSArIFwiJTJmXCIpO1xyXG4gIH1cclxuICAgIHJldHVybiByZWRpcmVjdChcIi9cIilcclxuICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSm9rZVJvdXRlKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8cD5IZXJlJ3MgeW91ciBoaWxhcmlvdXMgam9rZTo8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9IiwgImltcG9ydCB7IExvYWRlckZ1bmN0aW9uLCBBY3Rpb25GdW5jdGlvbiwgTGluayB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhLCByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBPdXRsZXQgfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcblxyXG50eXBlIFNob3dEYXRhID0ge1xyXG4gIHVybDogc3RyaW5nXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGxldCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICBsZXQgZGF0YTogU2hvd0RhdGEgPSB7XHJcbiAgICB1cmw6IHBhcmFtcy5wYXRoIGFzIHN0cmluZ1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdCgpIHtcclxuXHJcbiAgbGV0IGRhdGEgPSB1c2VMb2FkZXJEYXRhPFNob3dEYXRhPigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aW1nIHNyYz17ZGF0YS51cmx9Lz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLFFBQVEsUUFBUTtBQUlwQixXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxTQUFTO0FBQUEsTUFDdEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxXQUFXO0FBQUEsTUFDeEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxVQUFVO0FBQUEsTUFDdkMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxxQkFBcUI7QUFBQSxNQUNsRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsV0FBVztBQUFBLE1BQ3hDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMscUJBQXFCO0FBQUEsTUFDbEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG1CQUFtQjtBQUFBLE1BQ2hELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsWUFBWTtBQUFBLE1BQ3pDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxXQUFXO0FBQUEsTUFDeEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGVBQWU7QUFBQSxNQUM1QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGVBQWU7QUFBQSxNQUM1QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLHFCQUFxQjtBQUFBLE1BQ2xELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQzFDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsb0JBQW9CO0FBQUEsTUFDakQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxtQkFBbUI7QUFBQSxNQUNoRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG1CQUFtQjtBQUFBLE1BQ2hELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQzFDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQzVJbEM7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLGdCQUFnQixRQUFRO0FBSTVCLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsd0JBQXdCO0FBQUEsTUFDckQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ3BEMUM7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG9DQUFvQztBQUFBLE1BQ2pFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsc0NBQXNDO0FBQUEsTUFDbkUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxtQ0FBbUM7QUFBQSxNQUNoRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDaENqQztBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksU0FBUztBQUNiLFFBQUksU0FBUztBQUNiLFFBQUksV0FBVztBQUlmLFdBQU8sS0FBSyxRQUFRLFFBQVEsU0FBVSxHQUFHO0FBQ3hDLFVBQUksTUFBTSxhQUFhLENBQUMsUUFBUSxlQUFlO0FBQUksZUFBTyxlQUFlLFNBQVMsR0FBRztBQUFBLFVBQ3BGLFlBQVk7QUFBQSxVQUNaLEtBQUssV0FBWTtBQUFFLG1CQUFPLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFHbkMsV0FBTyxLQUFLLFFBQVEsUUFBUSxTQUFVLEdBQUc7QUFDeEMsVUFBSSxNQUFNLGFBQWEsQ0FBQyxRQUFRLGVBQWU7QUFBSSxlQUFPLGVBQWUsU0FBUyxHQUFHO0FBQUEsVUFDcEYsWUFBWTtBQUFBLFVBQ1osS0FBSyxXQUFZO0FBQUUsbUJBQU8sT0FBTztBQUFBO0FBQUE7QUFBQTtBQUduQyxXQUFPLEtBQUssVUFBVSxRQUFRLFNBQVUsR0FBRztBQUMxQyxVQUFJLE1BQU0sYUFBYSxDQUFDLFFBQVEsZUFBZTtBQUFJLGVBQU8sZUFBZSxTQUFTLEdBQUc7QUFBQSxVQUNwRixZQUFZO0FBQUEsVUFDWixLQUFLLFdBQVk7QUFBRSxtQkFBTyxTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDbkNyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBK0I7QUFDL0IsbUJBQTRCO0FBR2IsdUJBQ2IsU0FDQSxvQkFDQSxpQkFDQSxjQUNBO0FBQ0EsUUFBTSxTQUFTLGtDQUNiLG9DQUFDLDBCQUFEO0FBQUEsSUFBYSxTQUFTO0FBQUEsSUFBYyxLQUFLLFFBQVE7QUFBQTtBQUduRCxrQkFBZ0IsSUFBSSxnQkFBZ0I7QUFFcEMsU0FBTyxJQUFJLFNBQVMsb0JBQW9CLFFBQVE7QUFBQSxJQUM5QyxRQUFRO0FBQUEsSUFDUixTQUFTO0FBQUE7QUFBQTs7O0FDbEJiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU9PO0FBS0EsSUFBTSxPQUFxQixNQUFNO0FBQ3RDLFNBQU8sRUFBRSxPQUFPO0FBQUE7QUFHSCxlQUFlO0FBQzVCLFNBQ0Usb0NBQUMsUUFBRDtBQUFBLElBQU0sTUFBSztBQUFBLEtBQ1Qsb0NBQUMsUUFBRCxPQUNBLG9DQUFDLFFBQUQsTUFDRSxvQ0FBQyxzQkFBRCxPQUNBLG9DQUFDLHVCQUFEO0FBQUE7OztBQ3RCUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFxRDtBQUNyRCxvQkFBd0M7QUFDeEMsb0JBQXVCOzs7QUNGdkI7QUFBQSxJQUFJLE1BQU0sUUFBUTtBQUVsQixJQUFNLEtBQUssUUFBUTtBQUNuQixJQUFNLFNBQVMsUUFBUTtBQUN2QixJQUFNLFNBQVMsUUFBUTtBQUloQixtQkFBbUIsYUFBcUIsaUJBQXlCLFFBQWlCO0FBQ3JGLFNBQU8sSUFBSSxJQUFJO0FBQUEsSUFFWCxRQUFRO0FBQUEsSUFFUjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUE7QUFBQTtBQUlELGlCQUFpQixhQUFxQixpQkFBeUIsUUFBZ0IsS0FBYTtBQUUvRixNQUFJLFNBQVMsVUFBVSxhQUFhLGlCQUFpQjtBQVFyRCxTQUFPLE9BQU8sS0FBSztBQUFBLElBQ2YsUUFBUTtBQUFBLElBRVIsV0FBVztBQUFBO0FBQUE7QUFNWixvQkFBb0IsYUFBcUIsaUJBQXlCLFFBQWdCLEtBQWEsTUFBYztBQUNoSCxNQUFJLFNBQVMsVUFBVSxhQUFhLGlCQUFpQjtBQUNyRCxRQUFNLFNBQVMsUUFBUSxVQUFVO0FBQ2pDLFVBQVEsSUFBSSxpQkFBaUI7QUFDN0IsVUFBUSxJQUFJLFdBQVc7QUFFdkIsTUFBSSxTQUFTLElBQUk7QUFFakIsTUFBSSxVQUFVLHFCQUFxQjtBQUVuQyxTQUFPLFFBQVEsS0FBSyxDQUFDLEtBQVUsTUFBVyxRQUFhO0FBQ25ELFFBQUksQ0FBQyxLQUFLO0FBRU4sYUFBTyxLQUFLO0FBQ1osYUFBTyxLQUFLO0FBRVosVUFBSSxXQUFXLFFBQVEsTUFBTSxRQUFRO0FBRXJDLFVBQUksUUFBUSxLQUFLLE9BQU8sV0FBVztBQVFuQyxhQUFPLFVBQVUsT0FBTyxRQUFRLEtBQUssQ0FBQyxNQUFXLFFBQVEsSUFBSSxJQUFJLE1BQU0sQ0FBQyxNQUFXLFFBQVEsSUFBSTtBQUFBO0FBQUE7QUFBQTtBQU0zRyw4QkFBOEIsVUFBa0I7QUFDNUMsTUFBSSxNQUFNO0FBQ1YsTUFBSSxVQUFVLElBQUksS0FBSztBQUN2QixNQUFJLFNBQVM7QUFDVCxRQUFHLFFBQVEsR0FBRyxVQUFTLEdBQUc7QUFDdEIsYUFBTztBQUFBO0FBRWIsV0FBTyxRQUFRO0FBQUE7QUFFakIsU0FBTztBQUFBO0FBY1YsaUJBQWlCLFNBQWlCLFVBQWtCLE1BQWM7QUFDL0QsU0FBTyxPQUFPLFdBQVcsTUFBTSxPQUFPLFNBQVMsVUFBVSxPQUFPO0FBQUE7OztBRGpFN0QsSUFBSSxTQUF5QixPQUFPLEVBQUUsYUFBYTtBQVV4RCxNQUFJLGNBQWMsTUFBTSxRQUN0QixRQUFRLElBQUksYUFDWixRQUFRLElBQUksaUJBQ1osUUFBUSxJQUFJLFFBQ1osT0FBTztBQVVQLE1BQUksT0FBTyxJQUFJO0FBQ2YsTUFBRyxZQUFZLFlBQVksTUFBSztBQUM5QixnQkFBWSxTQUFTLElBQUksQ0FBQyxXQUFtQjtBQUczQyxVQUFJLE9BQU8sT0FBTyxXQUFXLEtBQUs7QUFFbEMsYUFBUSxRQUFRLElBQUksY0FBYyxNQUFNO0FBR3hDLFdBQUssS0FBSyxFQUFDLE1BQU0sT0FBTyxNQUFNLEtBQUssTUFBTSxLQUFLO0FBQUE7QUFBQTtBQU1wRCxNQUFJLE9BQWdCO0FBQUEsSUFFbEIsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVk7QUFBQSxJQUN6RCxTQUFTO0FBQUEsSUFFVCxLQUFLO0FBQUEsSUFDTCxhQUFhLFFBQVEsSUFBSTtBQUFBLElBQ3pCLGlCQUFpQixRQUFRLElBQUk7QUFBQSxJQUM3QixRQUFRLFFBQVEsSUFBSTtBQUFBLElBQ3BCLE1BQU0sT0FBTztBQUFBO0FBR2YsU0FBTztBQUFBO0FBR0YsSUFBSSxTQUF5QixPQUFPO0FBQUEsRUFDekM7QUFBQSxFQUNBO0FBQUEsTUFDSTtBQUNKLE1BQUksT0FBTyxNQUFNLFFBQVE7QUFDekIsTUFBSSxNQUFNLEtBQUssSUFBSTtBQUNuQixNQUFJLGNBQWMsS0FBSyxJQUFJO0FBQzNCLE1BQUksa0JBQWtCLEtBQUssSUFBSTtBQUMvQixNQUFJLFNBQVMsS0FBSyxJQUFJO0FBQ3RCLE1BQUksT0FBTyxLQUFLLElBQUk7QUFDcEIsUUFBTSxXQUFXLGFBQWEsaUJBQWlCLFFBQVEsS0FBSztBQUU1RCxTQUFPO0FBQUE7QUFHTSxnQkFBZ0I7QUFFN0IsTUFBSSxPQUFPO0FBQ1gsU0FDRSxvQ0FBQyxPQUFELE1BRUUsb0NBQUMsUUFBRCxNQUNFLG9DQUFDLE9BQUQsTUFDRSxvQ0FBQyxPQUFELE1BQUssVUFFSCxLQUFLLFFBQVEsSUFBSSxZQUNmLG9DQUFDLE9BQUQsTUFDRSxvQ0FBQyxvQkFBRDtBQUFBLElBQU0sSUFBSSxNQUFNLE9BQU87QUFBQSxLQUFPLE9BQU8sU0FLM0Msb0NBQUMsT0FBRCxNQUFLLGlCQUdILEtBQUssU0FBUyxJQUFJLFVBQ2hCLG9DQUFDLFFBQUQsTUFDRSxvQ0FBQyxvQkFBRDtBQUFBLElBQU0sSUFBSSxXQUFXLEtBQUssSUFBSSxXQUFXLEtBQUs7QUFBQSxJQUM5QyxPQUFPO0FBQUEsTUFDUCxTQUFTLEtBQUssUUFBUSxNQUFNLFNBQVE7QUFBQTtBQUFBLEtBRXRDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLEtBQUssS0FBSztBQUFBLElBQUssS0FBSyxLQUFLLEtBQUssTUFBTSxLQUFLO0FBQUEsSUFBTyxPQUFPLEVBQUMsT0FBTyxTQUFTLFFBQU87QUFBQSxVQU0xRixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxRQUFPO0FBQUEsS0FDYixvQ0FBQyxTQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsSUFDTCxPQUFPLEtBQUs7QUFBQSxNQUVOLG9DQUFDLFNBQUQ7QUFBQSxJQUNOLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLE9BQU8sS0FBSztBQUFBLE1BRU4sb0NBQUMsU0FBRDtBQUFBLElBQ04sTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsT0FBTyxLQUFLO0FBQUEsTUFFZCxvQ0FBQyxTQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsSUFDTCxPQUFPLEtBQUs7QUFBQSxNQUVkLG9DQUFDLFNBQUQsTUFBTyxRQUNFLEtBQ0wsb0NBQUMsU0FBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsY0FBYyw2QkFBTTtBQUFBLElBQ3BCLE1BQUs7QUFBQSxPQUdYLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLE1BQUs7QUFBQSxJQUFTLFdBQVU7QUFBQSxLQUFTLFNBSXpDLG9DQUFDLE9BQUQsTUFDRSxvQ0FBQyxzQkFBRDtBQUFBOzs7QUVyS1Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQWlFO0FBRTFELElBQUksVUFBeUIsT0FBTyxFQUFDLGFBQVk7QUFDdEQsTUFBRyxPQUFPLFFBQVMsUUFBUSxJQUFJLGFBQVk7QUFDekMsV0FBTyw0QkFBVSxNQUFNLFFBQVEsSUFBSSxjQUFjLE1BQU0sUUFBUSxJQUFJLFdBQVc7QUFBQTtBQUU5RSxTQUFPLDRCQUFTO0FBQUE7QUFJTCxxQkFBcUI7QUFDaEMsU0FDRSxvQ0FBQyxPQUFELE1BQ0Usb0NBQUMsS0FBRCxNQUFHO0FBQUE7OztBQ2JYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLG9CQUF3QztBQVVqQyxJQUFJLFVBQXlCLE9BQU8sRUFBRSxhQUFhO0FBQ3hELE1BQUksT0FBaUI7QUFBQSxJQUNuQixLQUFLLE9BQU87QUFBQTtBQUdkLFNBQU87QUFBQTtBQUdNLGlCQUFnQjtBQUU3QixNQUFJLE9BQU87QUFDWCxTQUNFLG9DQUFDLE9BQUQsTUFDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxLQUFLLEtBQUs7QUFBQTtBQUFBOzs7QU5sQnJCLG9CQUFrQztBQUMzQixJQUFNLFFBQVEsRUFBRSxRQUFRO0FBQ3hCLElBQU0sU0FBUztBQUFBLEVBQ3BCLFFBQVE7QUFBQSxJQUNOLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVYsc0JBQXNCO0FBQUEsSUFDcEIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFVixzQkFBc0I7QUFBQSxJQUNwQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVWLHFCQUFxQjtBQUFBLElBQ25CLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
