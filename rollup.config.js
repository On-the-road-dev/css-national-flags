import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default {
  input: "lib/main.js",
  plugins: [
    peerDepsExternal(),
    postcss({
      minimize: true,
      modules: false,
      use: {
        sass: null,
        stylus: null,
        less: { javascriptEnabled: true },
      },
      extract: true,
    }),
  ],
  output: {
    file: "build/bundle.js",
    format: "cjs",
  },
};
