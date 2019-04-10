import fs = require('fs')
import path = require('path')

export const STATIC_DIR = (() => {
  return path.resolve(__dirname, '../uploads')
})()