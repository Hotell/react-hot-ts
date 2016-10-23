const webpack = require( "webpack" );
const path = require( 'path' );
const { getIfUtils, removeEmpty } = require('webpack-config-utils');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ( env ) => {

  const { ifProd, ifNotProd } = getIfUtils(env);
  return {
    entry: [
      ifNotProd( 'react-hot-loader/patch' ),
      // "webpack-dev-server/client?http://localhost:8080",
      // "webpack/hot/only-dev-server",
      './src/index.tsx',
    ],
    output: {
      path: path.join( __dirname, 'dist' ),
      filename: '[name]-[hash].js',
      // Include comments with information about the modules.
      pathinfo: ifNotProd(),
      // publicPath: "/",
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
//   devServer: {
//       hot: true,
//       historyApiFallback: true,
//       publicPath: "/"
//     },

    resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: [ ".ts", ".tsx", ".js" ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve('index.html')
      }),
      // Set NODE_ENV to enable production react version
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: ifProd('"production"', '"development"')
        }
      }),
      new webpack.NamedModulesPlugin(),
      // new webpack.HotModuleReplacementPlugin(),
    ],

    module: {
      rules: [
        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        {
          test: /\.js$/,
          enforce: 'pre',
          use: 'source-map-loader'
        },
        // All files with a '.ts' or '.tsx' extension will be handled by
        // 'ts-loader'.
        {
          test: /\.tsx?$/,
          use: [
            // "react-hot-loader/webpack",
            'awesome-typescript-loader'
          ],
          // exclude: path.resolve( __dirname, 'node_modules' ),
          // include: path.resolve( __dirname, "src" ),
        }
      ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between
    // builds.
    externals: {
      "react": "React",
      "react-dom": "ReactDOM"
    },

  }
};