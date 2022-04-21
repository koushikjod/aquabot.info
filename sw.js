if (!self.define) {
  const e = (e) => {
      "require" !== e && (e += ".js");
      let i = Promise.resolve();
      return (
        r[e] ||
          (i = new Promise(async (i) => {
            if ("document" in self) {
              const r = document.createElement("script");
              (r.src = e), document.head.appendChild(r), (r.onload = i);
            } else importScripts(e), i();
          })),
        i.then(() => {
          if (!r[e]) throw new Error(`Module ${e} didn’t register its module`);
          return r[e];
        })
      );
    },
    i = (i, r) => {
      Promise.all(i.map(e)).then((e) => r(1 === e.length ? e[0] : e));
    },
    r = { require: Promise.resolve(i) };
  self.define = (i, s, d) => {
    r[i] ||
      (r[i] = Promise.resolve().then(() => {
        let r = {};
        const a = { uri: location.origin + i.slice(1) };
        return Promise.all(
          s.map((i) => {
            switch (i) {
              case "exports":
                return r;
              case "module":
                return a;
              default:
                return e(i);
            }
          })
        ).then((e) => {
          const i = d(...e);
          return r.default || (r.default = i), r;
        });
      }));
  };
}
define("./sw.js", ["./workbox-69b5a3b7"], function (e) {
  "use strict";
  self.addEventListener("message", (e) => {
    e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        { url: "app.js", revision: "9de66f32e2622db757a12f7c16e4992c" },
        { url: "commands", revision: "247681128d3491e65c428585b47e2086" },
        {
          url: "assets/fonts/GT-Walsheim-Pro-Bold.woff2",
          revision: "5a709a70e0448ddc7ef04e6d98cf1db8",
        },
        {
          url: "assets/fonts/GT-Walsheim-Pro-Medium.woff2",
          revision: "df0fc3f37efd59db55980a306c9d7cb6",
        },
        {
          url: "assets/fonts/GT-Walsheim-Pro-Regular.woff2",
          revision: "65bd4f101a0d57353a65d397a7a89205",
        },
        {
          url: "assets/images/1.webp",
          revision: "b69e44e40d2d25ba9d675fbe8223f9dc",
        },
        {
          url: "assets/images/1024x1024.png",
          revision: "829158155e760c10fdf3ecf07347c36e",
        },
        {
          url: "assets/images/1024x1024.webp",
          revision: "d9a00daf22c7e5e362db1f2843d83f3c",
        },
        {
          url: "assets/images/16x16.webp",
          revision: "70d340deebfb8b2038c08f1c6e108fe3",
        },
        {
          url: "assets/images/180x180.webp",
          revision: "bbc5856542f77fd9400dd4696c7dd69c",
        },
        {
          url: "assets/images/2.webp",
          revision: "b69e44e40d2d25ba9d675fbe8223f9dc",
        },
        {
          url: "assets/images/3.webp",
          revision: "b69e44e40d2d25ba9d675fbe8223f9dc",
        },
        {
          url: "assets/images/32x32.webp",
          revision: "5743a2cac8132a4a1cb109dbbe2236f2",
        },
        {
          url: "assets/images/4.webp",
          revision: "b69e44e40d2d25ba9d675fbe8223f9dc",
        },
        {
          url: "assets/images/discord.svg",
          revision: "a219956caf348a5bc3434b17fce51349",
        },
        { url: "/", revision: "ccaaab7db979253dc129ac4e6e466c24" },
        { url: "log.js", revision: "2e547da4d2d5444ff4383a32e160cb82" },
        { url: "manifest.json", revision: "7ee1b1a6658129d29a642aab2c1acbde" },
      ],
      {}
    );
});
//# sourceMappingURL=sw.js.map
