"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path_1 = require("path");
electron_1.app.commandLine.appendSwitch('lang', 'ko-KR');
function createWindow() {
    let win = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            preload: (0, path_1.join)(__dirname, 'preload.js')
        },
        icon: (0, path_1.join)(__dirname, "..", "..", "assets", "icons", "icon.ico")
    });
    win.setMenuBarVisibility(false);
    if (electron_1.app.isPackaged) {
        // 빌드된 환경
        win.loadFile((0, path_1.join)(__dirname, 'index.html'));
    }
    else {
        win.webContents.openDevTools();
        // 개발 환경
        win.loadURL(`http://localhost:3000`);
    }
}
electron_1.app.whenReady().then(() => {
    createWindow();
    electron_1.app.on('window-all-closed', () => {
        electron_1.app.exit();
    });
});
