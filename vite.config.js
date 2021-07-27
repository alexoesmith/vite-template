// import path from "path";
// import glob from "glob";

// export default {
//   build: {
//     outDir: path.join(__dirname, "dist"),
//     rollupOptions: {
//       input: glob.sync(path.resolve(__dirname, "src", "*.html")),
//     },
//   },
// };

// vite.config.js
const { resolve } = require("path");

module.exports = {
  root: "src",
  build: {
    outDir: resolve(__dirname, "dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        about: resolve(__dirname, "src/about.html"),
        contact: resolve(__dirname, "src/contact.html"),
      },
    },
  },
};
