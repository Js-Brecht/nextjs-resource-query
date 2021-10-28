module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.raw\.js$/,
      use: {
        loader: require.resolve("./loader")
      }
    })

    return config;
  }
}
