const fs = require('fs')
const stream = require('stream')
const events = require('events')

const s = fs.createReadStream('./big_file.txt')

console.log(stream.Readable.prototype)
console.log(s.on)
console.log(s.destroy)
console.log(events.EventEmitter.prototype)


