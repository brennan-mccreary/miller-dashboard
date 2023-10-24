const { app, Menu, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');


require('@electron/remote/main').initialize()

function createWindow() {
  //Create Browser Window
  const win = new BrowserWindow({
    autoHideMenuBar: true,
    fullscreen: true,
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  })

  win.loadURL(
    isDev 
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`)
}

app.on('ready', createWindow)

app.whenReady().then(()=>{
  createWindow()
      const template = [
              {
                label:'Options',
                submenu:[
                          {role:'reload'}
                      ]
              }
      ]


  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
})