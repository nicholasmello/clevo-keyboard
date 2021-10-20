const { exec } = require("child_process");

module.exports = class ColorChanger {
	constructor(location) {
		this.red = 255;
		this.green = 255;
		this.blue = 255;
		this.brightness = 255;
		this.directoryPath = '/sys/devices/platform/clevo_keyboard/';
		this.filePath = location;
	}

	toHex() {
		this.validate();
		let hex = "";
		hex += toHexString(Math.floor(this.red/16));
		hex += toHexString(this.red%16);
		hex += toHexString(Math.floor(this.green/16));
		hex += toHexString(this.green%16);
		hex += toHexString(Math.floor(this.blue/16));
		hex += toHexString(this.blue%16);
		return hex;
	}

	validate() {
		if (this.red > 255) { this.red = 255; }
		if (this.green > 255) { this.green = 255; }
		if (this.blue > 255) { this.blue = 255; }
		if (this.brightness > 255) { this.brightness = 255; }
	}

	update() {
		let cmd = "echo \"0x" + this.toHex() + "\" > \"" + this.directoryPath + this.filePath + "\"";
		exec(cmd, (error, stdout, stderr) => {
		    if (error) {
		        console.log(`error: ${error.message}`);
		        return;
		    }
		    if (stderr) {
		        console.log(`stderr: ${stderr}`);
		        return;
		    }
		});
	}
}

function toHexString(num) {
	switch (num) {
		case 15:
			return "F";
		case 14:
			return "E";
		case 13:
			return "D";
		case 12:
			return "C";
		case 11:
			return "B";
		case 10:
			return "A";
		default:
			return num.toString();
	}
}