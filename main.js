const { app, BrowserWindow, Menu } = require('electron')
const shell = require('electron').shell
const ipc = require('electron').ipcMain
const settings = require('electron-settings')
const axios = require('axios')
const path = require('path')

let win, settingsWin

function createSettingsWindow() {
  settingsWin = new BrowserWindow({
    width: 640, height: 400,
    webPreferences: {
      nodeIntegration: true
    },
    resizable: false
  })
  settingsWin.on('close', () => {
    settingsWin = null
  })
  settingsWin.loadFile('src/settings.html')
}

function createWindow () {
  settings.setPath(String(path.dirname(require.main.filename)) + '/Settings.json')
  win = new BrowserWindow({
    width: 800, height: 600,
    minHeight: 600, minWidth: 800,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('src/index.html')

  win.on('closed', () => {
    app.quit()
    win = null
  })

  var menu = Menu.buildFromTemplate([
    {
      label: 'File',
      submenu: [
        {
          label: 'Settings',
          click() {
            createSettingsWindow()
          },
          accelerator : 'CmdorCtrl+Shift+S'
        },
        {
          label: 'Help',
          click() {
            shell.openExternal('https://github.com/raffleberry')
          },
          accelerator : 'CmdorCtrl+Shift+C'
        },
        {
          type: 'separator'
        },
        {
          label: 'Exit',
          click() {
            app.quit()
          }
        }
      ]
    },
    {
      label: 'Developer Tools',
      submenu: [
        { role: 'reload' },
        { role: 'forcereload' },
        { role: 'toggledevtools' },
        { type: 'separator' },
        { role: 'resetzoom' },
        { role: 'zoomin' },
        { role: 'zoomout' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
      ]
    }
  ])
  win.setMenu(menu)
}

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

ipc.on('execute', function(event, arg) {
  execute(arg)
})

var argList = {
  "7": "-std=c++14 -O2 -o a.out source_file.cpp",
  "27": "-std=c++14 -stdlib=libc++ -O2 -o a.out source_file.cpp",
}

function execute(arg) {
  console.log(arg);
  axios.post('https://rextester.com/rundotnet/api', {
    "LanguageChoice": arg[2],
    "Program": arg[0],
    "Input": arg[1],
    "CompilerArgs": argList[arg[2]]
  }).then(function(res) {
    var data = res.data
    if (data.Errors == null) {
      win.webContents.send('output', [data.Result, 0])
    } else {
      win.webContents.send('output', [data.Errors, 1])
    }
  })
}
