/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: "/",
    src: "/dist",
  },
  plugins: [],
  optimize: {
    bundle: true,
    minify: true,
    sourcemap: false,
  },
};
