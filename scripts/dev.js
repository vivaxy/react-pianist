/**
 * @since 2017-01-27 11:05
 * @author vivaxy
 */

const open = require('open');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const webpackConfig = require('../webpack.config');

const compiler = webpack(webpackConfig);

const server = new WebpackDevServer(compiler, {
    contentBase: [
        webpackConfig.RELEASE_PATH,
    ],
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true,
    },
});

server.listen(webpackConfig.DEVELOPMENT_PORT, webpackConfig.DEVELOPMENT_IP, function(err) {
    if (err) {
        console.log(err);
    } else {
        const address = server.listeningApp.address();
        const url = `http://${address.address}:${address.port}`;
        console.log(`server started: ${url}`);
        open(`${url}/html/List.html`);
    }
});
