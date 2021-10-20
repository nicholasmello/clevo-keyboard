const {contextBridge, ipcRenderer} = require("electron");

contextBridge.exposeInMainWorld(
    "api", {
        send: (channel, data) => {
            // whitelist channels
            let validChannels = ["updateRed", "updateGreen", "updateBlue"];
            if (validChannels.includes(channel)) {
                ipcRenderer.send(channel, data);
            }
        }
    }
);