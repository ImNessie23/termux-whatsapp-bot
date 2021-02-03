console.log('[SYSTEM] Starting Bot...')
let { spawn } = require('child_process')
let path = require('path')
const CFonts  = require('cfonts')
CFonts.say('WHATSAPP BOT', {
  font: 'chrome',
  align: 'center',
  gradient: ['red', 'magenta']
})
CFonts.say('\'termux-whatsapp-bot\' By @ImNessie23 & @NazwaS', {
  font: 'console',
  align: 'center',
  gradient: ['red', 'magenta']
})

function start() {
  let args = [path.join(__dirname, 'nzwa.js'), ...process.argv.slice(2)]
  CFonts.say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']
  })
  let p = spawn(process.argv[0], args, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc']
  })
  .on('message', data => {
    if (data == 'reset') {
      console.log('RESET')
      p.kill()
      start()
      delete p
    }
  })
}

start()
