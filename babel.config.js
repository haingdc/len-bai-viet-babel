module.exports = function (api) {
  api.cache(true)

  const presets = []
  const plugins = [
    './babel-plugins/first-plugin.js',
  ]

  return {
    presets,
    plugins,
  }
}