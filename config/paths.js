const fs = require('fs')
const path = require('path')

const appDirectory = fs.realpathSync(process.cwd()) // 获取真实路径
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)
const staticPath = resolveApp('client/static')

module.exports = {
  clientBuild: resolveApp('clientBuild'),
  serverBuild: resolveApp('serverBuild'),
  appPath: resolveApp('.'),
  appNodeModules: resolveApp('node_modules'),
  appIndexJs: resolveApp('client/index.js'),
  serverIndexJs: resolveApp('server/server.js'),
  publicPath: '/',
  logPath: resolveApp('logs'),
  templateHtml: resolveApp('client/index.html'),
  staticPath: staticPath,
  favPath: path.resolve(staticPath, 'favicon.ico')
}