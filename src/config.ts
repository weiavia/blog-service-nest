import path = require('path')

const DEFAULT_DIR = path.resolve(process.cwd(), 'uploads')
export const STATIC_DIR =  process.env.STATIC_DIR || DEFAULT_DIR