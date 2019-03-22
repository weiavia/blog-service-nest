// .env mount to the process.env
import dotenv = require('dotenv')

export function initSundry() {
  dotenv.config('../.env')
}