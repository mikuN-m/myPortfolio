const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',

    output: {
        path: `${__dirname}/dist`,
        filename: 'main.js'
    },

    mode: "development",

    devServer: {
        static: "dist",
        open: true
    },

    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
              },
              "css-loader",
            ],
          },
        ],
    },
    plugins: [
    new MiniCssExtractPlugin({
        filename: "style.css"
    }),
    ],
}