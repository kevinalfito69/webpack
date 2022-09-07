const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    // mode
    mode: "production",
    // dev server
    devServer: {
        client: {
            overlay: {
                errors: true,
                warnings: false,
            },
        },
    },
    entry: "./src/index.js",
    // output
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    // Plugins
    plugins: [
        /* HTML Webpack Plugin */
        new htmlWebpackPlugin({
            template: "./src/template.html",
            filename: "index.html",
        }),
    ],
    module: {
        rules: [
            /* style and css loader */
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                ],
            },

            /* babel loader */
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },
};
