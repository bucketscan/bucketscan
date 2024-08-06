const path = require("path")

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "commonjs2",

    // Getting the error "Automatic publicPath is not supported in this browser"
    // when executing the code in Lambda, so using this workaround to resolve it
    // See: https://stackoverflow.com/a/64715069/308012
    publicPath: "",

    // Failing at runtime with error "ReferenceError: self is not defined". I suspect
    // this is relating to the issue above and probably due to referencing the
    // @supabase/supabase-js package, so following this workaround to resolve
    // See: https://stackoverflow.com/a/64639975/308012
    globalObject: "this"
  }
}
