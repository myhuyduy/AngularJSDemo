const path = require('path');
const webpack = require('webpack');

var GetVersion = function () {
    return "version_1_0";
}

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/app.ts'),
        angdemo: path.resolve(__dirname, 'src/angdemo/main.ts'),
        vendor: ['angular', 'angular-resource', 'angular-route']
    },
    output: {
        path: path.resolve(__dirname, 'output'),
        filename: '[name].' + GetVersion() + '.bundle.js'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension. 
        extensions: ['.ts', '.tsx', '.js'] // note if using webpack 1 you'd also need a '' in the array as well 
    },
    module: {
        loaders: [ // loaders will work with webpack 1 or 2; but will be renamed "rules" in future 
          // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader` 
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: "vendor", filename: "vendor.bundle.js" })
    ]
};
