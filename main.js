const electron = require('electron')
const menubar = require('menubar')
const log = require('electron-log')
const fs = require('fs')

const Printer = require('./printer')
const Options = require('./options')

const ipc = electron.ipcMain

let mb = menubar()

mb.on('ready', () => {

  mb.tray.setContextMenu(
    electron.Menu.buildFromTemplate([{
      label: 'Preferences...',
      click: () => mb.showWindow()
    }, {
      label: 'Quit',
      click: () => electron.app.quit()
    }])
  );

  this.options = new Options()
  this.printer = new Printer(this.options)
  log.info('ready')
})

ipc.on('updateOption', (evt, property, value) => {
  log.info('updateOption.%s value=%s', property, value)
  this.options[property] = value
})

ipc.on('getOptions', (evt) => {
  evt.sender.send('optionsUpdated', this.options)
})

ipc.on('getLog', (evt) => {
  var logString = '';
  var stream = fs.createReadStream(log.findLogPath())

  stream.on('data', (chunk) => { 
    logString += chunk
  })

  stream.on('end', () => {
    evt.sender.send('logUpdated', logString)
  })
})