const { app, BrowserWindow, Menu } = require('electron')
const shell = require('electron').shell
const ipc = require('electron').ipcMain

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createSettingsWindow() {
  
  let settings = new BrowserWindow({ width: 640, height: 200})
  //comment this on release
  //settings.webContents.openDevTools()
  settings.on('close', () => {
    settings = null
  })
  settings.loadFile('src/settings.html')
}

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({ width: 800, height: 600 })

  // and load the index.html of the app.
  win.loadFile('src/index.html')

  //comment this on release
  //win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })

  var menu = Menu.buildFromTemplate([
    {
      label: 'Menu',
      submenu: [
        {
          label: 'Settings',
          click() {
            createSettingsWindow()
          }
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
    }
  ])
  Menu.setApplicationMenu(menu)
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

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

ipc.on('themeChange', function(event, arg) {
  win.webContents.send('theme', arg)
})