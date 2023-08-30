import { app, BrowserWindow } from "electron";
import { join } from 'path';

app.commandLine.appendSwitch('lang', 'ko-KR');

function createWindow() {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            preload: join(__dirname, 'preload.js')
        },
        icon: join(__dirname, "..", "..", "assets", "icons","icon.ico")
    });

    win.setMenuBarVisibility(false);
    
    if(app.isPackaged) {

        // 빌드된 환경
        win.loadFile(join(__dirname,'index.html'));

    } else {

        win.webContents.openDevTools();
        
        // 개발 환경
        win.loadURL(`http://localhost:3000`);
    }
}

app.whenReady().then(() => {
    createWindow();

    app.on('window-all-closed', () => {
        app.exit();
    })
})