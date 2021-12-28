const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    open: true,
  },
  plugins: [
    new ReactRefreshWebpackPlugin(), // Отвечает за то чтобы при изменении текста(и не только) на странице не сбрасывались данные
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('DEV'),
    }),
  ],
}