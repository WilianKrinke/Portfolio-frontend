const winston = require('winston');
const path = require('path')

const {printf, combine, label, timestamp} = winston.format

const myFormatsLog = printf(({level, message, label, timestamp}) => {
    return `\n${timestamp} | ${label} | ${level}: ${message}`
})

const loggerWinston = winston.createLogger({
    level: 'info',
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({filename: path.resolve('./errors/errors-log.log')})        
    ],
    format: combine(
        label({label: 'Project Library'}),
        timestamp(),
        myFormatsLog
    )
})

module.exports = loggerWinston;