const child_process = require('child_process')
const { spawn } = child_process

const userInput = './'

const streams = spawn('ls', ["-la", userInput], {
//   cwd: 'C:\\',
//   env: { NODE_ENV: 'development' },
  // maxBuffer: 2 * 1024 * 1024
});

streams.stdout.on('data', (chunk) => {
    console.log(chunk.toString())
})
