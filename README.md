# SSR（React)

## Start
`npm run dev:server` (Support hmr. There are still some problems)

`npm run dev` (Manual refresh)

## Structure
```
+-- client                              客户端代码
+-- server                              服务端代码
|   -- index.js                         本地服务入口
|   -- server.js                        服务器文件
+-- logs                                日志文件
|   -- errors 
|   -- info 
|   -- warns 
+-- config                              配置文件
|   -- log.config.js                    日志配置
|   -- paths.js                         路径配置
|   -- webpack.dev.config.js            开发配置
|   -- webpack.client.build.config.js   客户端打包配置
|   -- webpack.server.build.config.js   服务端打包配置
+-- clientBuild                         客户端静态资源文件
+-- .gitignore
+-- READMD.md
```
