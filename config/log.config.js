const log4js = require('log4js')
const fs = require('fs')
const paths = require('./paths')

log4js.configure({
  appenders: {
    console: {
      type: 'console'
    },
    info_file:{
      type : 'file',
      filename: `${paths.logPath}/info/info.log`,
      maxLogSize : 20 * 1024 * 1024,
      backups : 3
    },
    warn_file: { 
      type: 'dateFile',
      filename: `${paths.logPath}/warns/log`,
      pattern: '_yyyy-MM-dd.log',
      alwaysIncludePattern: true,
      daysToKeep: 30
    },
    error_file: {
      type: 'dateFile',
      filename:  `${paths.logPath}/errors/log`,
      alwaysIncludePattern: true,
      daysToKeep: 30,
      pattern: '_yyyy-MM-dd.log'
    }
  },
  categories: {
    default: { appenders: ['console'], level: 'info' },
    info: { appenders: ['info_file'], level: 'info' },
    warn: { appenders: ['warn_file'], level: 'warn'},
    error: { appenders: ['error_file'], level: 'error' }
  }
})

const logs = (app, mode = '') => {
  app.use(log4js.connectLogger(log4js.getLogger(mode), {
    format: ':method :url :status :response-time ms'
  }))
}

export default logs;