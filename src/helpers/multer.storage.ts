import { STATIC_DIR } from '@app/config'
import multer = require('multer')
import fs = require('fs')
import path = require('path')

export let diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    let dir = '/root/uploads/images'
    // 不存在则创建目录
    if(!fs.existsSync(dir)) {
      fs.mkdirSync(dir)
    }
    
    cb(null, dir); 
  },
  // 为文件名加上时间戳
  filename: (req, file, cb) => {
    let filename = file.originalname.split('.')
    let name = filename[0] + '-' + new Date().getTime()
    let ext = filename[1]
    cb(null, `${name}.${ext}`);
  }
})