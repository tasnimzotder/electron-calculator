// import { app, BrowserWindow } from "electron";
const { app, BrowserWindow } = require("electron");
require("electron-reload")(__dirname);

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 350,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile("index.html");
  // win.webContents.openDevTools();
  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
