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
  }, subDir.name))), /* @__PURE__ */ React.createElement("div", null, "------------"), data.ShowFile.map((file) => /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("a", {
    href: file.url,
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOkQ6XFxjb2RlXFxteVxcSW1hZ2VfTGlicmFyeVxcYXBwXFxyb290LnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXGNvZGVcXG15XFxJbWFnZV9MaWJyYXJ5XFxhcHBcXHJvdXRlc1xcJGxpc3RcXCRwYXRoLnRzeCIsICIuLi8uLi9hcHAvdXRpbHMvb3NzLnNlcnZlci50cyIsICJyb3V0ZS1tb2R1bGU6RDpcXGNvZGVcXG15XFxJbWFnZV9MaWJyYXJ5XFxhcHBcXHJvdXRlc1xcJGxpc3RcXGluZGV4LnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuIiwgIi8qKlxuICogcmVtaXggdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNsaWVudCA9IHJlcXVpcmUoJy4vY2xpZW50Jyk7XG52YXIgc2VydmVyID0gcmVxdWlyZSgnLi9zZXJ2ZXInKTtcbnZhciBwbGF0Zm9ybSA9IHJlcXVpcmUoJy4vcGxhdGZvcm0nKTtcblxuXG5cbk9iamVjdC5rZXlzKGNsaWVudCkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGllbnRba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHNlcnZlcikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHBsYXRmb3JtKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBsYXRmb3JtW2tdOyB9XG5cdH0pO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiRDpcXFxcY29kZVxcXFxteVxcXFxJbWFnZV9MaWJyYXJ5XFxcXGFwcFxcXFxlbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIkQ6XFxcXGNvZGVcXFxcbXlcXFxcSW1hZ2VfTGlicmFyeVxcXFxhcHBcXFxccm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiRDpcXFxcY29kZVxcXFxteVxcXFxJbWFnZV9MaWJyYXJ5XFxcXGFwcFxcXFxyb3V0ZXNcXFxcJGxpc3RcXFxcJHBhdGgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIkQ6XFxcXGNvZGVcXFxcbXlcXFxcSW1hZ2VfTGlicmFyeVxcXFxhcHBcXFxccm91dGVzXFxcXCRsaXN0XFxcXGluZGV4LnRzeFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiLi9hc3NldHMuanNvblwiO1xuZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG5leHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICBcInJvb3RcIjoge1xuICAgIGlkOiBcInJvb3RcIixcbiAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgIHBhdGg6IFwiXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTBcbiAgfSxcbiAgXCJyb3V0ZXMvJGxpc3QvJHBhdGhcIjoge1xuICAgIGlkOiBcInJvdXRlcy8kbGlzdC8kcGF0aFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcIjpsaXN0LzpwYXRoXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTFcbiAgfSxcbiAgXCJyb3V0ZXMvJGxpc3QvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy8kbGlzdC9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcIjpsaXN0XCIsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUyXG4gIH1cbn07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcclxuICBMaW5rcyxcclxuICBMaXZlUmVsb2FkLFxyXG4gIE1ldGEsXHJcbiAgT3V0bGV0LFxyXG4gIFNjcmlwdHMsXHJcbiAgU2Nyb2xsUmVzdG9yYXRpb25cclxufSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcbi8vIHJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpXHJcblxyXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiB7IHRpdGxlOiBcIk5ldyBSZW1peCBBcHBcIiB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cclxuICAgICAgPGhlYWQ+PC9oZWFkPlxyXG4gICAgICA8Ym9keT5cclxuICAgICAgICA8T3V0bGV0IC8+XHJcbiAgICAgICAgPFNjcmlwdHMgLz5cclxuICAgICAgPC9ib2R5PlxyXG4gICAgPC9odG1sPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IExvYWRlckZ1bmN0aW9uLCBBY3Rpb25GdW5jdGlvbiwgTGluayB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhLCByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBPdXRsZXQgfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcbmltcG9ydCB7bGlzdERpciwgdXBJbWFnZVVybH0gZnJvbSBcIi4uLy4uL3V0aWxzL29zcy5zZXJ2ZXJcIlxyXG5cclxuXHJcbnR5cGUgT3NzRGlyID0ge1xyXG4gIHBhdGg6IHN0cmluZ1xyXG4gIG5hbWU6IHN0cmluZ1xyXG59XHJcblxyXG50eXBlIE9TU0RhdGEgPSB7XHJcbiAgU2hvd0RpcjogT3NzRGlyW11cclxuICBTaG93RmlsZTogW3tcclxuICAgIG5hbWU6IHN0cmluZ1xyXG4gICAgc2l6ZTogc3RyaW5nXHJcbiAgICB1cmw6IHN0cmluZ1xyXG4gIH1dXHJcbiAgLy8gY2xpZW50OiBhbnlcclxuICB1cmw6IHN0cmluZ1xyXG4gIGFjY2Vzc0tleUlkOiBzdHJpbmdcclxuICBhY2Nlc3NLZXlTZWNyZXQ6IHN0cmluZ1xyXG4gIGJ1Y2tldDogc3RyaW5nXHJcbiAgcGF0aDogc3RyaW5nXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGxldCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuXHJcbiAgLy9cdTUyMjRcdTY1QURcdTY2MkZcdTU0MjZcdTY3MDlcdTY3NDNcclxuICAvLyBpZihwYXJhbXMubGlzdCAgIT0gcHJvY2Vzcy5lbnYubGlicmFyeVBhdGgpe1xyXG4gICAgLy8gcmV0dXJuIHJlZGlyZWN0KFwiL1wiKVxyXG4gIC8vIH1cclxuICAvLyBjb25zb2xlLmxvZyhwYXJhbXMpO1xyXG4gIC8vIGNvbnNvbGUubG9nKHBhcmFtcy5wYXRoKTtcclxuXHJcblxyXG4gIGxldCBvc3NMaXN0RGF0YSA9IGF3YWl0IGxpc3REaXIoXHJcbiAgICBwcm9jZXNzLmVudi5hY2Nlc3NLZXlJZCBhcyBzdHJpbmcsIFxyXG4gICAgcHJvY2Vzcy5lbnYuYWNjZXNzS2V5U2VjcmV0IGFzIHN0cmluZywgXHJcbiAgICBwcm9jZXNzLmVudi5idWNrZXQgYXMgc3RyaW5nLFxyXG4gICAgcGFyYW1zLnBhdGggYXMgc3RyaW5nKVxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKFwiMT09PT09PT09PT09PT1cIik7XHJcbiAgICBcclxuICAgIC8vIGNvbnNvbGUubG9nKG9zc0xpc3REYXRhKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiMj09PT09PT09PT09PT1cIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhwYXJhbXMpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCIzPT09PT09PT09PT09PVwiKTtcclxuXHJcbiAgICBcclxuICAgIGxldCBkaXJzID0gbmV3IEFycmF5KCk7XHJcbiAgICBpZihvc3NMaXN0RGF0YS5wcmVmaXhlcyAhPSBudWxsKXtcclxuICAgICAgb3NzTGlzdERhdGEucHJlZml4ZXMubWFwKChzdWJEaXI6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBwYXRoID0gc3ViRGlyLnJlcGxhY2VBbGwoXCIvXCIsIFwiJTJmXCIpXHJcblxyXG4gICAgICAgIHBhdGggPSAgcHJvY2Vzcy5lbnYubGlicmFyeVBhdGggKyBcIi9cIiArIHBhdGhcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgZGlycy5wdXNoKHtuYW1lOiBzdWJEaXIuc3BsaXQoJy8nKS5zbGljZSgtMiksIHBhdGg6IHBhdGh9KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICBsZXQgZGF0YTogT1NTRGF0YSA9IHtcclxuICAgIC8vIFNob3dEaXI6IG9zc0xpc3REYXRhLnByZWZpeGVzID09IG51bGwgPyBbXSA6IG9zc0xpc3REYXRhLnByZWZpeGVzLFxyXG4gICAgU2hvd0ZpbGU6IG9zc0xpc3REYXRhLm9iamVjdHMgPT0gbnVsbCA/IFtdIDogb3NzTGlzdERhdGEub2JqZWN0cyxcclxuICAgIFNob3dEaXI6IGRpcnMsXHJcbiAgICAvLyBTaG93RmlsZTogZmlsZXMsXHJcbiAgICB1cmw6IFwiXCIsXHJcbiAgICBhY2Nlc3NLZXlJZDogcHJvY2Vzcy5lbnYuYWNjZXNzS2V5SWQgYXMgc3RyaW5nLFxyXG4gICAgYWNjZXNzS2V5U2VjcmV0OiBwcm9jZXNzLmVudi5hY2Nlc3NLZXlTZWNyZXQgYXMgc3RyaW5nLFxyXG4gICAgYnVja2V0OiBwcm9jZXNzLmVudi5idWNrZXQgYXMgc3RyaW5nLFxyXG4gICAgcGF0aDogcGFyYW1zLnBhdGggYXMgc3RyaW5nXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoe1xyXG4gIHJlcXVlc3QsXHJcbiAgcGFyYW1zXHJcbn0pID0+IHtcclxuICBsZXQgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuICBsZXQgdXJsID0gZm9ybS5nZXQoXCJ1cmxcIikgIGFzIHN0cmluZ1xyXG4gIGxldCBhY2Nlc3NLZXlJZCA9IGZvcm0uZ2V0KFwiX2FjY2Vzc0tleUlkXCIpIGFzIHN0cmluZ1xyXG4gIGxldCBhY2Nlc3NLZXlTZWNyZXQgPSBmb3JtLmdldChcIl9hY2Nlc3NLZXlTZWNyZXRcIikgYXMgc3RyaW5nXHJcbiAgbGV0IGJ1Y2tldCA9IGZvcm0uZ2V0KFwiX2J1Y2tldFwiKSBhcyBzdHJpbmdcclxuICBsZXQgcGF0aCA9IGZvcm0uZ2V0KFwiX3BhdGhcIikgYXMgc3RyaW5nXHJcbiAgYXdhaXQgdXBJbWFnZVVybChhY2Nlc3NLZXlJZCwgYWNjZXNzS2V5U2VjcmV0LCBidWNrZXQsIHVybCwgcGF0aCk7XHJcblxyXG4gIHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdCgpIHtcclxuXHJcbiAgbGV0IGRhdGEgPSB1c2VMb2FkZXJEYXRhPE9TU0RhdGE+KCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcblxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdj5Qb3N0czwvZGl2PlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBkYXRhLlNob3dEaXIubWFwKHN1YkRpciA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtcIi9cIiArIHN1YkRpci5wYXRofT57c3ViRGlyLm5hbWV9PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgey8qIDxsaT48L2xpPiAqL31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDxkaXY+LS0tLS0tLS0tLS0tPC9kaXY+XHJcblxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBkYXRhLlNob3dGaWxlLm1hcChmaWxlID0+IChcclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICA8YSBocmVmPXtmaWxlLnVybH0gXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmlsZS5zaXplID09ICcwJyA/ICdub25lJzogJycsXHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17ZmlsZS51cmx9IGFsdD17ZmlsZS5uYW1lLnNwbGl0KCcvJykucG9wKCl9IHN0eWxlPXt7d2lkdGg6ICcyMDBweCcsIGhlaWdodDonMjAwcHgnfX0vPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImhpZGRlblwiXHJcbiAgICAgICAgICBuYW1lPVwiX2FjY2Vzc0tleUlkXCJcclxuICAgICAgICAgIHZhbHVlPXtkYXRhLmFjY2Vzc0tleUlkfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgbmFtZT1cIl9hY2Nlc3NLZXlTZWNyZXRcIlxyXG4gICAgICAgICAgdmFsdWU9e2RhdGEuYWNjZXNzS2V5U2VjcmV0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgbmFtZT1cIl9idWNrZXRcIlxyXG4gICAgICAgICAgdmFsdWU9e2RhdGEuYnVja2V0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcclxuICAgICAgICAgIG5hbWU9XCJfcGF0aFwiXHJcbiAgICAgICAgICB2YWx1ZT17ZGF0YS5wYXRofVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICBVcmw6e1wiIFwifVxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkYXRhPy51cmx9XHJcbiAgICAgICAgICAgICAgbmFtZT1cInVybFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICBBZGRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPE91dGxldC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuXHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSIsICJsZXQgT1NTID0gcmVxdWlyZSgnYWxpLW9zcycpO1xyXG5cclxuY29uc3QgZnMgPSByZXF1aXJlKFwiZnNcIik7XHJcbmNvbnN0IHVybGxpYiA9IHJlcXVpcmUoXCJ1cmxsaWJcIik7XHJcbmNvbnN0IGNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0bycpO1xyXG5cclxubGV0IGNsaWVudDogYW55ID0gbnVsbFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWVudChhY2Nlc3NLZXlJZDogc3RyaW5nLCBhY2Nlc3NLZXlTZWNyZXQ6IHN0cmluZywgYnVja2V0OiBzdHJpbmcsKSB7XHJcbiAgICByZXR1cm4gbmV3IE9TUyh7XHJcbiAgICAgICAgLy8geW91clJlZ2lvblx1NTg2Qlx1NTE5OUJ1Y2tldFx1NjI0MFx1NTcyOFx1NTczMFx1NTdERlx1MzAwMlx1NEVFNVx1NTM0RVx1NEUxQzFcdUZGMDhcdTY3NkRcdTVEREVcdUZGMDlcdTRFM0FcdTRGOEJcdUZGMENSZWdpb25cdTU4NkJcdTUxOTlcdTRFM0Fvc3MtY24taGFuZ3pob3VcdTMwMDJcclxuICAgICAgICByZWdpb246ICdvc3MtY24tYmVpamluZycsXHJcbiAgICAgICAgLy8gXHU5NjNGXHU5MUNDXHU0RTkxXHU4RDI2XHU1M0Y3QWNjZXNzS2V5XHU2MkU1XHU2NzA5XHU2MjQwXHU2NzA5QVBJXHU3Njg0XHU4QkJGXHU5NUVFXHU2NzQzXHU5NjUwXHVGRjBDXHU5OENFXHU5NjY5XHU1Rjg4XHU5QUQ4XHUzMDAyXHU1RjNBXHU3MEM4XHU1RUZBXHU4QkFFXHU2MEE4XHU1MjFCXHU1RUZBXHU1RTc2XHU0RjdGXHU3NTI4UkFNXHU3NTI4XHU2MjM3XHU4RkRCXHU4ODRDQVBJXHU4QkJGXHU5NUVFXHU2MjE2XHU2NUU1XHU1RTM4XHU4RkQwXHU3RUY0XHVGRjBDXHU4QkY3XHU3NjdCXHU1RjU1UkFNXHU2M0E3XHU1MjM2XHU1M0YwXHU1MjFCXHU1RUZBUkFNXHU3NTI4XHU2MjM3XHUzMDAyXHJcbiAgICAgICAgYWNjZXNzS2V5SWQ6IGFjY2Vzc0tleUlkLFxyXG4gICAgICAgIGFjY2Vzc0tleVNlY3JldDogYWNjZXNzS2V5U2VjcmV0LFxyXG4gICAgICAgIGJ1Y2tldDogYnVja2V0XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxpc3REaXIoYWNjZXNzS2V5SWQ6IHN0cmluZywgYWNjZXNzS2V5U2VjcmV0OiBzdHJpbmcsIGJ1Y2tldDogc3RyaW5nLCBkaXI6IHN0cmluZykge1xyXG5cclxuICAgIGxldCBjbGllbnQgPSBnZXRDbGllbnQoYWNjZXNzS2V5SWQsIGFjY2Vzc0tleVNlY3JldCwgYnVja2V0KVxyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0gYXdhaXQgXHJcblxyXG4gICAgLy8gcmVzdWx0LnByZWZpeGVzLmZvckVhY2goKHN1YkRpcjogYW55KSA9PiB7XHJcbiAgICAvLyB9KTtcclxuICAgIC8vIHJlc3VsdC5vYmplY3RzLmZvckVhY2goKG9iajogeyBuYW1lOiBhbnk7IH0pID0+IHtcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIHJldHVybiBjbGllbnQubGlzdCh7XHJcbiAgICAgICAgcHJlZml4OiBkaXIsXHJcbiAgICAgICAgLy8gXHU4QkJFXHU3RjZFXHU2QjYzXHU2NTlDXHU3RUJGXHVGRjA4L1x1RkYwOVx1NEUzQVx1NjU4N1x1NEVGNlx1NTkzOVx1NzY4NFx1NTIwNlx1OTY5NFx1N0IyNlx1MzAwMlxyXG4gICAgICAgIGRlbGltaXRlcjogJy8nXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBJbWFnZVVybChhY2Nlc3NLZXlJZDogc3RyaW5nLCBhY2Nlc3NLZXlTZWNyZXQ6IHN0cmluZywgYnVja2V0OiBzdHJpbmcsIHVybDogc3RyaW5nLCBwYXRoOiBzdHJpbmcpIHtcclxuICAgIGxldCBjbGllbnQgPSBnZXRDbGllbnQoYWNjZXNzS2V5SWQsIGFjY2Vzc0tleVNlY3JldCwgYnVja2V0KVxyXG4gICAgY29uc3QgRHVwbGV4ID0gcmVxdWlyZShcInN0cmVhbVwiKS5EdXBsZXg7XHJcbiAgICBjb25zb2xlLmxvZyhcInVwSW1hZ2VVcmw6IFwiICsgdXJsKVxyXG4gICAgY29uc29sZS5sb2coXCJwYXRoOiBcIiArIHBhdGgpXHJcbiAgICAvLyAvLyBcdTVCOUVcdTRGOEJcdTUzMTZcdTUzQ0NcdTVERTVcdTZENDFcdTMwMDJcclxuICAgIGxldCBzdHJlYW0gPSBuZXcgRHVwbGV4KCk7XHJcblxyXG4gICAgbGV0IGV4dE5hbWUgPSBnZXRGaWxlRXh0ZW5kaW5nTmFtZSh1cmwpXHJcblxyXG4gICAgdXJsbGliLnJlcXVlc3QodXJsLCAoZXJyOiBhbnksIGRhdGE6IGFueSwgcmVzOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoIWVycikge1xyXG4gICAgICAgICAgICAvLyBcdTkwMUFcdThGQzdcdTUzQ0NcdTVERTVcdTZENDFcdTYzQTVcdTY1MzZcdTY1NzBcdTYzNkVcdTMwMDJcclxuICAgICAgICAgICAgc3RyZWFtLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgIHN0cmVhbS5wdXNoKG51bGwpO1xyXG4gICAgICAgICAgICAvLyBcdTU4NkJcdTUxOTlPYmplY3RcdTVCOENcdTY1NzRcdThERUZcdTVGODRcdUZGMENcdTRGOEJcdTU5ODJleGFtcGxlZGlyL2V4YW1wbGVvYmplY3QudHh0XHUzMDAyT2JqZWN0XHU1QjhDXHU2NTc0XHU4REVGXHU1Rjg0XHU0RTJEXHU0RTBEXHU4MEZEXHU1MzA1XHU1NDJCQnVja2V0XHU1NDBEXHU3OUYwXHUzMDAyXHJcbiAgICAgICAgICAgIGxldCBoYXNoTmFtZSA9IGdldEhhc2goZGF0YSwgJ3V0ZjgnLCAnbWQ1JylcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBfcGF0aCA9IFwiXCIgKyBwYXRoICsgaGFzaE5hbWUgKyBleHROYW1lXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiPT09PT09PT09PT09XCIpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIl9wYXRoOiBcIiArIF9wYXRoKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJwYXRoOiBcIiArIHBhdGgpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImhhc2hOYW1lOiBcIiArIGhhc2hOYW1lKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJleHROYW1lOiBcIiArIGV4dE5hbWUpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNsaWVudC5wdXRTdHJlYW0oX3BhdGgsIHN0cmVhbSkudGhlbigocjogYW55KSA9PiBjb25zb2xlLmxvZyhyKSkuY2F0Y2goKGU6IGFueSkgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4gICAgLy8gXHU2NTg3XHU0RUY2XHU2MjY5XHU1QzU1XHU1NDBEXHU1MzM5XHU5MTREXHU2QjYzXHU1MjE5XHJcbmZ1bmN0aW9uIGdldEZpbGVFeHRlbmRpbmdOYW1lKGZpbGVuYW1lOiBzdHJpbmcpIHtcclxuICAgIHZhciByZWcgPSAvXFwuW15cXC5dKyQvO1xyXG4gICAgdmFyIG1hdGNoZXMgPSByZWcuZXhlYyhmaWxlbmFtZSk7XHJcbiAgICBpZiAobWF0Y2hlcykge1xyXG4gICAgICAgIGlmKG1hdGNoZXNbMF0ubGVuZ3RoID49NiApe1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICByZXR1cm4gbWF0Y2hlc1swXTtcclxuICAgIH1cclxuICAgIHJldHVybiAnJztcclxuICB9XHJcbiAgXHJcblxyXG5cclxuLyoqXHJcbiAqIFx1ODNCN1x1NUY5N1x1NTE4NVx1NUJCOVx1NzY4NGhhc2hcdTUwM0NcclxuICogXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb250ZW50IFx1NjU4N1x1NEVGNlx1NTE4NVx1NUJCOVxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZW5jb2RpbmcgXHU2NTg3XHU0RUY2XHU3Njg0XHU3RjE2XHU3ODAxXHVGRjBDXHU0RjhCXHU1OTgyXHVGRjFBJ3V0ZjgnIFx1N0I0OVxyXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBoYXNoXHU3Qjk3XHU2Q0Q1XHVGRjBDXHU0RjhCXHU1OTgyXHVGRjFBJ21kNSdcdTMwMDEnc2hhMSdcdTMwMDEnc2hhMjU2J1x1MzAwMSdzaGE1MTInIFx1N0I0OVxyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxyXG4gKi9cclxuXHJcbiBmdW5jdGlvbiBnZXRIYXNoKGNvbnRlbnQgOnN0cmluZywgZW5jb2RpbmcgOnN0cmluZywgdHlwZSA6c3RyaW5nKSB7XHJcbiAgICByZXR1cm4gY3J5cHRvLmNyZWF0ZUhhc2godHlwZSkudXBkYXRlKGNvbnRlbnQsIGVuY29kaW5nKS5kaWdlc3QoJ2hleCcpO1xyXG59IiwgImltcG9ydCB7IExvYWRlckZ1bmN0aW9uLCBBY3Rpb25GdW5jdGlvbiwgcmVkaXJlY3QsIE91dGxldCB9IGZyb20gXCJyZW1peFwiO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHtwYXJhbXN9KSA9PiB7XHJcbiAgaWYocGFyYW1zLmxpc3QgID09IHByb2Nlc3MuZW52LmxpYnJhcnlQYXRoKXtcclxuICAgIHJldHVybiByZWRpcmVjdCggXCIvXCIgKyBwcm9jZXNzLmVudi5saWJyYXJ5UGF0aCArIFwiL1wiICsgcHJvY2Vzcy5lbnYuYmFzZUZpbGUgKyBcIiUyZlwiKTtcclxuICB9XHJcbiAgICByZXR1cm4gcmVkaXJlY3QoXCIvXCIpXHJcblxyXG4gIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBKb2tlUm91dGUoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxwPkhlcmUncyB5b3VyIGhpbGFyaW91cyBqb2tlOjwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH0iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFB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
