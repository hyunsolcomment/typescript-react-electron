import { contextBridge } from "electron";

contextBridge.exposeInMainWorld('electron', {
    test() {
        console.log('안녕하세요, '+process.env.USERNAME+"! 여기는 일렉트론입니다.")
    }
});