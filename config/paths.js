const fs = require('fs')
const path = require('path')

const appDirectory = fs.realpathSync(process.cwd()) // 获取真实路径
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

module.exports = {
  clientBuild: resolveApp('clientBuild'),
  serverBuild: resolveApp('serverBuild'),
  appPath: resolveApp('.'),
  appNodeModules: resolveApp('node_modules'),
  appIndexJs: resolveApp('client/index.js'),
  publicPath: '/',
  logPath: resolveApp('logs')
}