'use strict'
const merge = require('webpack-merge')

module.exports = merge({ NODE_ENV: '"production"' }, { NODE_ENV: '"development"' })
