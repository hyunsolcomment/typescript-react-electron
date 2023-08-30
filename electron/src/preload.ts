import { contextBridge } from "electron";

contextBridge.exposeInMainWorld('electron', {
    test() {
        console.log('안녕하세요 리엑트!')
    }
});