const util = require('util');
const child_process = require('child_process');
const { exec } = child_process;

const exec2 = util.promisify(exec);
const userInput = '. && pwd'

exec2(`ls ${userInput}`).then(data => {
  console.log(data.stdout)
})