const { app, BrowserWindow, ipcMain } = require('electron');
const path = require("path");
const fs = require("fs");
const ColorChanger = require('./colorchanger.js');

changer = new(ColorChanger)("color_left");
changer = new(ColorChanger)("color_center");
changer = new(ColorChanger)("color_right");

app.whenReady().then(() => {
	const win = new BrowserWindow({
		width: 800,
		height: 180,
		resizable: false,
		webPreferences: {
			preload: path.join(__dirname, "preload.js"),
			nodeIntegration: true
		}
	})
	win.setMenuBarVisibility(false);
	win.loadFile('app.html')
})

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') app.quit()
})

ipcMain.on('updateRed', (event, arg) => {
	changer.red = arg;
	changer.update()
})

ipcMain.on('updateGreen', (event, arg) => {
	changer.green = arg;
	changer.update()
})

ipcMain.on('updateBlue', (event, arg) => {
	changer.blue = arg;
	changer.update()
})