const electron = require('electron')
const ipc = electron.ipcRenderer

ipc.on('theme', function(event, arg) {
  editor.setTheme(String(arg))
})