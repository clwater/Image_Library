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
  if (params.list != process.env.libraryPath) {
    return (0, import_remix3.redirect)("/");
  }
  let ossListData = await listDir(process.env.accessKeyId, process.env.accessKeySecret, process.env.bucket, params.path);
  let data = {
    ShowDir: ossListData.prefixes == null ? [] : ossListData.prefixes,
    ShowFile: ossListData.objects,
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
  let data = (0, import_remix3.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, "Posts"), data.ShowDir.map((subDir) => /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("li", null, subDir))), /* @__PURE__ */ React.createElement("div", null, "------------"), data.ShowFile.map((file) => /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("a", {
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
  }, "Add")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_remix4.Outlet, null))));
}

// route-module:D:\code\my\Image_Library\app\routes\$list\index.tsx
var list_exports = {};
__export(list_exports, {
  default: () => JokeRoute,
  loader: () => loader2
});
init_react();
var import_remix5 = __toModule(require_remix());
var loader2 = async ({ params }) => {
  if (params.list != process.env.libraryPath) {
    return (0, import_remix5.redirect)("/");
  }
  return (0, import_remix5.redirect)("/" + process.env.libraryPath + "/" + process.env.baseFile + "%2f");
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOkQ6XFxjb2RlXFxteVxcSW1hZ2VfTGlicmFyeVxcYXBwXFxyb290LnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXGNvZGVcXG15XFxJbWFnZV9MaWJyYXJ5XFxhcHBcXHJvdXRlc1xcJGxpc3RcXCRwYXRoLnRzeCIsICIuLi8uLi9hcHAvdXRpbHMvb3NzLnNlcnZlci50cyIsICJyb3V0ZS1tb2R1bGU6RDpcXGNvZGVcXG15XFxJbWFnZV9MaWJyYXJ5XFxhcHBcXHJvdXRlc1xcJGxpc3RcXGluZGV4LnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuIiwgIi8qKlxuICogcmVtaXggdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNsaWVudCA9IHJlcXVpcmUoJy4vY2xpZW50Jyk7XG52YXIgc2VydmVyID0gcmVxdWlyZSgnLi9zZXJ2ZXInKTtcbnZhciBwbGF0Zm9ybSA9IHJlcXVpcmUoJy4vcGxhdGZvcm0nKTtcblxuXG5cbk9iamVjdC5rZXlzKGNsaWVudCkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGllbnRba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHNlcnZlcikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHBsYXRmb3JtKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBsYXRmb3JtW2tdOyB9XG5cdH0pO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiRDpcXFxcY29kZVxcXFxteVxcXFxJbWFnZV9MaWJyYXJ5XFxcXGFwcFxcXFxlbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIkQ6XFxcXGNvZGVcXFxcbXlcXFxcSW1hZ2VfTGlicmFyeVxcXFxhcHBcXFxccm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiRDpcXFxcY29kZVxcXFxteVxcXFxJbWFnZV9MaWJyYXJ5XFxcXGFwcFxcXFxyb3V0ZXNcXFxcJGxpc3RcXFxcJHBhdGgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIkQ6XFxcXGNvZGVcXFxcbXlcXFxcSW1hZ2VfTGlicmFyeVxcXFxhcHBcXFxccm91dGVzXFxcXCRsaXN0XFxcXGluZGV4LnRzeFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiLi9hc3NldHMuanNvblwiO1xuZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG5leHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICBcInJvb3RcIjoge1xuICAgIGlkOiBcInJvb3RcIixcbiAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgIHBhdGg6IFwiXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTBcbiAgfSxcbiAgXCJyb3V0ZXMvJGxpc3QvJHBhdGhcIjoge1xuICAgIGlkOiBcInJvdXRlcy8kbGlzdC8kcGF0aFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcIjpsaXN0LzpwYXRoXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTFcbiAgfSxcbiAgXCJyb3V0ZXMvJGxpc3QvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy8kbGlzdC9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcIjpsaXN0XCIsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUyXG4gIH1cbn07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcclxuICBMaW5rcyxcclxuICBMaXZlUmVsb2FkLFxyXG4gIE1ldGEsXHJcbiAgT3V0bGV0LFxyXG4gIFNjcmlwdHMsXHJcbiAgU2Nyb2xsUmVzdG9yYXRpb25cclxufSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcbi8vIHJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpXHJcblxyXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiB7IHRpdGxlOiBcIk5ldyBSZW1peCBBcHBcIiB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cclxuICAgICAgPGhlYWQ+PC9oZWFkPlxyXG4gICAgICA8Ym9keT5cclxuICAgICAgICA8T3V0bGV0IC8+XHJcbiAgICAgICAgPFNjcmlwdHMgLz5cclxuICAgICAgPC9ib2R5PlxyXG4gICAgPC9odG1sPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IExvYWRlckZ1bmN0aW9uLCBBY3Rpb25GdW5jdGlvbiwgTGluayB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhLCByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBPdXRsZXQgfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcbmltcG9ydCB7bGlzdERpciwgdXBJbWFnZVVybH0gZnJvbSBcIi4uLy4uL3V0aWxzL29zcy5zZXJ2ZXJcIlxyXG5cclxuXHJcbnR5cGUgT1NTRGF0YSA9IHtcclxuICBTaG93RGlyOiBzdHJpbmdbXVxyXG4gIFNob3dGaWxlOiBbe1xyXG4gICAgbmFtZTogc3RyaW5nXHJcbiAgICBzaXplOiBzdHJpbmdcclxuICAgIHVybDogc3RyaW5nXHJcbiAgfV1cclxuICAvLyBjbGllbnQ6IGFueVxyXG4gIHVybDogc3RyaW5nXHJcbiAgYWNjZXNzS2V5SWQ6IHN0cmluZ1xyXG4gIGFjY2Vzc0tleVNlY3JldDogc3RyaW5nXHJcbiAgYnVja2V0OiBzdHJpbmdcclxuICBwYXRoOiBzdHJpbmdcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xyXG5cclxuICAvL1x1NTIyNFx1NjVBRFx1NjYyRlx1NTQyNlx1NjcwOVx1Njc0M1xyXG4gIGlmKHBhcmFtcy5saXN0ICAhPSBwcm9jZXNzLmVudi5saWJyYXJ5UGF0aCl7XHJcbiAgICByZXR1cm4gcmVkaXJlY3QoXCIvXCIpXHJcbiAgfVxyXG4gIC8vIGNvbnNvbGUubG9nKHBhcmFtcyk7XHJcbiAgLy8gY29uc29sZS5sb2cocGFyYW1zLnBhdGgpO1xyXG5cclxuXHJcbiAgbGV0IG9zc0xpc3REYXRhID0gYXdhaXQgbGlzdERpcihcclxuICAgIHByb2Nlc3MuZW52LmFjY2Vzc0tleUlkIGFzIHN0cmluZywgXHJcbiAgICBwcm9jZXNzLmVudi5hY2Nlc3NLZXlTZWNyZXQgYXMgc3RyaW5nLCBcclxuICAgIHByb2Nlc3MuZW52LmJ1Y2tldCBhcyBzdHJpbmcsXHJcbiAgICBwYXJhbXMucGF0aCBhcyBzdHJpbmcpXHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coXCI9PT09PT09PT09PT09PT09PT1cIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhvc3NMaXN0RGF0YSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PT09PT09PVwiKTtcclxuXHJcblxyXG4gICAgXHJcblxyXG4gIGxldCBkYXRhOiBPU1NEYXRhID0ge1xyXG4gICAgU2hvd0Rpcjogb3NzTGlzdERhdGEucHJlZml4ZXMgPT0gbnVsbCA/IFtdIDogb3NzTGlzdERhdGEucHJlZml4ZXMsXHJcbiAgICBTaG93RmlsZTogb3NzTGlzdERhdGEub2JqZWN0cyxcclxuICAgIC8vIFNob3dEaXI6IGRpcnMsXHJcbiAgICAvLyBTaG93RmlsZTogZmlsZXMsXHJcbiAgICB1cmw6IFwiXCIsXHJcbiAgICBhY2Nlc3NLZXlJZDogcHJvY2Vzcy5lbnYuYWNjZXNzS2V5SWQgYXMgc3RyaW5nLFxyXG4gICAgYWNjZXNzS2V5U2VjcmV0OiBwcm9jZXNzLmVudi5hY2Nlc3NLZXlTZWNyZXQgYXMgc3RyaW5nLFxyXG4gICAgYnVja2V0OiBwcm9jZXNzLmVudi5idWNrZXQgYXMgc3RyaW5nLFxyXG4gICAgcGF0aDogcGFyYW1zLnBhdGggYXMgc3RyaW5nXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoe1xyXG4gIHJlcXVlc3QsXHJcbiAgcGFyYW1zXHJcbn0pID0+IHtcclxuICBsZXQgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuICBsZXQgdXJsID0gZm9ybS5nZXQoXCJ1cmxcIikgIGFzIHN0cmluZ1xyXG4gIGxldCBhY2Nlc3NLZXlJZCA9IGZvcm0uZ2V0KFwiX2FjY2Vzc0tleUlkXCIpIGFzIHN0cmluZ1xyXG4gIGxldCBhY2Nlc3NLZXlTZWNyZXQgPSBmb3JtLmdldChcIl9hY2Nlc3NLZXlTZWNyZXRcIikgYXMgc3RyaW5nXHJcbiAgbGV0IGJ1Y2tldCA9IGZvcm0uZ2V0KFwiX2J1Y2tldFwiKSBhcyBzdHJpbmdcclxuICBsZXQgcGF0aCA9IGZvcm0uZ2V0KFwiX3BhdGhcIikgYXMgc3RyaW5nXHJcbiAgYXdhaXQgdXBJbWFnZVVybChhY2Nlc3NLZXlJZCwgYWNjZXNzS2V5U2VjcmV0LCBidWNrZXQsIHVybCwgcGF0aCk7XHJcblxyXG4gIHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdCgpIHtcclxuXHJcbiAgbGV0IGRhdGEgPSB1c2VMb2FkZXJEYXRhPE9TU0RhdGE+KCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcblxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdj5Qb3N0czwvZGl2PlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBkYXRhLlNob3dEaXIubWFwKHN1YkRpciA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsaT57c3ViRGlyfTwvbGk+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA8ZGl2Pi0tLS0tLS0tLS0tLTwvZGl2PlxyXG5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZGF0YS5TaG93RmlsZS5tYXAoZmlsZSA9PiAoXHJcbiAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj17ZmlsZS51cmx9IFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZpbGUuc2l6ZSA9PSAnMCcgPyAnbm9uZSc6ICcnLFxyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2ZpbGUudXJsfSBhbHQ9e2ZpbGUubmFtZS5zcGxpdCgnLycpLnBvcCgpfSBzdHlsZT17e3dpZHRoOiAnMjAwcHgnLCBoZWlnaHQ6JzIwMHB4J319Lz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgbmFtZT1cIl9hY2Nlc3NLZXlJZFwiXHJcbiAgICAgICAgICB2YWx1ZT17ZGF0YS5hY2Nlc3NLZXlJZH1cclxuICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcclxuICAgICAgICAgIG5hbWU9XCJfYWNjZXNzS2V5U2VjcmV0XCJcclxuICAgICAgICAgIHZhbHVlPXtkYXRhLmFjY2Vzc0tleVNlY3JldH1cclxuICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcclxuICAgICAgICAgIG5hbWU9XCJfYnVja2V0XCJcclxuICAgICAgICAgIHZhbHVlPXtkYXRhLmJ1Y2tldH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImhpZGRlblwiXHJcbiAgICAgICAgICBuYW1lPVwiX3BhdGhcIlxyXG4gICAgICAgICAgdmFsdWU9e2RhdGEucGF0aH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgVXJsOntcIiBcIn1cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGF0YT8udXJsfVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ1cmxcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgQWRkXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxPdXRsZXQvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcblxyXG5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iLCAibGV0IE9TUyA9IHJlcXVpcmUoJ2FsaS1vc3MnKTtcclxuXHJcbmNvbnN0IGZzID0gcmVxdWlyZShcImZzXCIpO1xyXG5jb25zdCB1cmxsaWIgPSByZXF1aXJlKFwidXJsbGliXCIpO1xyXG5jb25zdCBjcnlwdG8gPSByZXF1aXJlKCdjcnlwdG8nKTtcclxuXHJcbmxldCBjbGllbnQ6IGFueSA9IG51bGxcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnQoYWNjZXNzS2V5SWQ6IHN0cmluZywgYWNjZXNzS2V5U2VjcmV0OiBzdHJpbmcsIGJ1Y2tldDogc3RyaW5nLCkge1xyXG4gICAgcmV0dXJuIG5ldyBPU1Moe1xyXG4gICAgICAgIC8vIHlvdXJSZWdpb25cdTU4NkJcdTUxOTlCdWNrZXRcdTYyNDBcdTU3MjhcdTU3MzBcdTU3REZcdTMwMDJcdTRFRTVcdTUzNEVcdTRFMUMxXHVGRjA4XHU2NzZEXHU1RERFXHVGRjA5XHU0RTNBXHU0RjhCXHVGRjBDUmVnaW9uXHU1ODZCXHU1MTk5XHU0RTNBb3NzLWNuLWhhbmd6aG91XHUzMDAyXHJcbiAgICAgICAgcmVnaW9uOiAnb3NzLWNuLWJlaWppbmcnLFxyXG4gICAgICAgIC8vIFx1OTYzRlx1OTFDQ1x1NEU5MVx1OEQyNlx1NTNGN0FjY2Vzc0tleVx1NjJFNVx1NjcwOVx1NjI0MFx1NjcwOUFQSVx1NzY4NFx1OEJCRlx1OTVFRVx1Njc0M1x1OTY1MFx1RkYwQ1x1OThDRVx1OTY2OVx1NUY4OFx1OUFEOFx1MzAwMlx1NUYzQVx1NzBDOFx1NUVGQVx1OEJBRVx1NjBBOFx1NTIxQlx1NUVGQVx1NUU3Nlx1NEY3Rlx1NzUyOFJBTVx1NzUyOFx1NjIzN1x1OEZEQlx1ODg0Q0FQSVx1OEJCRlx1OTVFRVx1NjIxNlx1NjVFNVx1NUUzOFx1OEZEMFx1N0VGNFx1RkYwQ1x1OEJGN1x1NzY3Qlx1NUY1NVJBTVx1NjNBN1x1NTIzNlx1NTNGMFx1NTIxQlx1NUVGQVJBTVx1NzUyOFx1NjIzN1x1MzAwMlxyXG4gICAgICAgIGFjY2Vzc0tleUlkOiBhY2Nlc3NLZXlJZCxcclxuICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGFjY2Vzc0tleVNlY3JldCxcclxuICAgICAgICBidWNrZXQ6IGJ1Y2tldFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsaXN0RGlyKGFjY2Vzc0tleUlkOiBzdHJpbmcsIGFjY2Vzc0tleVNlY3JldDogc3RyaW5nLCBidWNrZXQ6IHN0cmluZywgZGlyOiBzdHJpbmcpIHtcclxuXHJcbiAgICBsZXQgY2xpZW50ID0gZ2V0Q2xpZW50KGFjY2Vzc0tleUlkLCBhY2Nlc3NLZXlTZWNyZXQsIGJ1Y2tldClcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFxyXG5cclxuICAgIC8vIHJlc3VsdC5wcmVmaXhlcy5mb3JFYWNoKChzdWJEaXI6IGFueSkgPT4ge1xyXG4gICAgLy8gfSk7XHJcbiAgICAvLyByZXN1bHQub2JqZWN0cy5mb3JFYWNoKChvYmo6IHsgbmFtZTogYW55OyB9KSA9PiB7XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICByZXR1cm4gY2xpZW50Lmxpc3Qoe1xyXG4gICAgICAgIHByZWZpeDogZGlyLFxyXG4gICAgICAgIC8vIFx1OEJCRVx1N0Y2RVx1NkI2M1x1NjU5Q1x1N0VCRlx1RkYwOC9cdUZGMDlcdTRFM0FcdTY1ODdcdTRFRjZcdTU5MzlcdTc2ODRcdTUyMDZcdTk2OTRcdTdCMjZcdTMwMDJcclxuICAgICAgICBkZWxpbWl0ZXI6ICcvJ1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwSW1hZ2VVcmwoYWNjZXNzS2V5SWQ6IHN0cmluZywgYWNjZXNzS2V5U2VjcmV0OiBzdHJpbmcsIGJ1Y2tldDogc3RyaW5nLCB1cmw6IHN0cmluZywgcGF0aDogc3RyaW5nKSB7XHJcbiAgICBsZXQgY2xpZW50ID0gZ2V0Q2xpZW50KGFjY2Vzc0tleUlkLCBhY2Nlc3NLZXlTZWNyZXQsIGJ1Y2tldClcclxuICAgIGNvbnN0IER1cGxleCA9IHJlcXVpcmUoXCJzdHJlYW1cIikuRHVwbGV4O1xyXG4gICAgY29uc29sZS5sb2coXCJ1cEltYWdlVXJsOiBcIiArIHVybClcclxuICAgIGNvbnNvbGUubG9nKFwicGF0aDogXCIgKyBwYXRoKVxyXG4gICAgLy8gLy8gXHU1QjlFXHU0RjhCXHU1MzE2XHU1M0NDXHU1REU1XHU2RDQxXHUzMDAyXHJcbiAgICBsZXQgc3RyZWFtID0gbmV3IER1cGxleCgpO1xyXG5cclxuICAgIGxldCBleHROYW1lID0gZ2V0RmlsZUV4dGVuZGluZ05hbWUodXJsKVxyXG5cclxuICAgIHVybGxpYi5yZXF1ZXN0KHVybCwgKGVycjogYW55LCBkYXRhOiBhbnksIHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKCFlcnIpIHtcclxuICAgICAgICAgICAgLy8gXHU5MDFBXHU4RkM3XHU1M0NDXHU1REU1XHU2RDQxXHU2M0E1XHU2NTM2XHU2NTcwXHU2MzZFXHUzMDAyXHJcbiAgICAgICAgICAgIHN0cmVhbS5wdXNoKGRhdGEpO1xyXG4gICAgICAgICAgICBzdHJlYW0ucHVzaChudWxsKTtcclxuICAgICAgICAgICAgLy8gXHU1ODZCXHU1MTk5T2JqZWN0XHU1QjhDXHU2NTc0XHU4REVGXHU1Rjg0XHVGRjBDXHU0RjhCXHU1OTgyZXhhbXBsZWRpci9leGFtcGxlb2JqZWN0LnR4dFx1MzAwMk9iamVjdFx1NUI4Q1x1NjU3NFx1OERFRlx1NUY4NFx1NEUyRFx1NEUwRFx1ODBGRFx1NTMwNVx1NTQyQkJ1Y2tldFx1NTQwRFx1NzlGMFx1MzAwMlxyXG4gICAgICAgICAgICBsZXQgaGFzaE5hbWUgPSBnZXRIYXNoKGRhdGEsICd1dGY4JywgJ21kNScpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgX3BhdGggPSBcIlwiICsgcGF0aCArIGhhc2hOYW1lICsgZXh0TmFtZVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PVwiKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJfcGF0aDogXCIgKyBfcGF0aCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicGF0aDogXCIgKyBwYXRoKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJoYXNoTmFtZTogXCIgKyBoYXNoTmFtZSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZXh0TmFtZTogXCIgKyBleHROYW1lKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjbGllbnQucHV0U3RyZWFtKF9wYXRoLCBzdHJlYW0pLnRoZW4oKHI6IGFueSkgPT4gY29uc29sZS5sb2cocikpLmNhdGNoKChlOiBhbnkpID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuICAgIC8vIFx1NjU4N1x1NEVGNlx1NjI2OVx1NUM1NVx1NTQwRFx1NTMzOVx1OTE0RFx1NkI2M1x1NTIxOVxyXG5mdW5jdGlvbiBnZXRGaWxlRXh0ZW5kaW5nTmFtZShmaWxlbmFtZTogc3RyaW5nKSB7XHJcbiAgICB2YXIgcmVnID0gL1xcLlteXFwuXSskLztcclxuICAgIHZhciBtYXRjaGVzID0gcmVnLmV4ZWMoZmlsZW5hbWUpO1xyXG4gICAgaWYgKG1hdGNoZXMpIHtcclxuICAgICAgICBpZihtYXRjaGVzWzBdLmxlbmd0aCA+PTYgKXtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgcmV0dXJuIG1hdGNoZXNbMF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG4gIFxyXG5cclxuXHJcbi8qKlxyXG4gKiBcdTgzQjdcdTVGOTdcdTUxODVcdTVCQjlcdTc2ODRoYXNoXHU1MDNDXHJcbiAqIFxyXG4gKiBAcGFyYW0ge1N0cmluZ30gY29udGVudCBcdTY1ODdcdTRFRjZcdTUxODVcdTVCQjlcclxuICogQHBhcmFtIHtTdHJpbmd9IGVuY29kaW5nIFx1NjU4N1x1NEVGNlx1NzY4NFx1N0YxNlx1NzgwMVx1RkYwQ1x1NEY4Qlx1NTk4Mlx1RkYxQSd1dGY4JyBcdTdCNDlcclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgaGFzaFx1N0I5N1x1NkNENVx1RkYwQ1x1NEY4Qlx1NTk4Mlx1RkYxQSdtZDUnXHUzMDAxJ3NoYTEnXHUzMDAxJ3NoYTI1NidcdTMwMDEnc2hhNTEyJyBcdTdCNDlcclxuICogQHJldHVybnMge1N0cmluZ31cclxuICovXHJcblxyXG4gZnVuY3Rpb24gZ2V0SGFzaChjb250ZW50IDpzdHJpbmcsIGVuY29kaW5nIDpzdHJpbmcsIHR5cGUgOnN0cmluZykge1xyXG4gICAgcmV0dXJuIGNyeXB0by5jcmVhdGVIYXNoKHR5cGUpLnVwZGF0ZShjb250ZW50LCBlbmNvZGluZykuZGlnZXN0KCdoZXgnKTtcclxufSIsICJpbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiwgQWN0aW9uRnVuY3Rpb24sIHJlZGlyZWN0LCBPdXRsZXQgfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7cGFyYW1zfSkgPT4ge1xyXG4gIGlmKHBhcmFtcy5saXN0ICAhPSBwcm9jZXNzLmVudi5saWJyYXJ5UGF0aCl7XHJcbiAgICByZXR1cm4gcmVkaXJlY3QoXCIvXCIpXHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiByZWRpcmVjdCggXCIvXCIgKyBwcm9jZXNzLmVudi5saWJyYXJ5UGF0aCArIFwiL1wiICsgcHJvY2Vzcy5lbnYuYmFzZUZpbGUgKyBcIiUyZlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSm9rZVJvdXRlKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8cD5IZXJlJ3MgeW91ciBoaWxhcmlvdXMgam9rZTo8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxRQUFRLFFBQVE7QUFJcEIsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsU0FBUztBQUFBLE1BQ3RDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsV0FBVztBQUFBLE1BQ3hDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsVUFBVTtBQUFBLE1BQ3ZD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
