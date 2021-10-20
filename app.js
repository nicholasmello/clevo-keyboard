document.getElementById("input-red").addEventListener("change", updateRed);
document.getElementById("input-green").addEventListener("change", updateGreen);
document.getElementById("input-blue").addEventListener("change", updateBlue);

function updateRed() {
	let val = document.getElementById("input-red").value;
	if (val > 255) {
		document.getElementById("input-red").value = 255;
	} else if (val < 0) {
		document.getElementById("input-red").value = 0;
	}
	window.api.send("updateRed", document.getElementById("input-red").value);
}

function updateGreen() {
	let val = document.getElementById("input-green").value;
	if (val > 255) {
		document.getElementById("input-green").value = 255;
	} else if (val < 0) {
		document.getElementById("input-green").value = 0;
	}
	window.api.send("updateGreen", document.getElementById("input-green").value);
}

function updateBlue() {
	let val = document.getElementById("input-blue").value;
	if (val > 255) {
		document.getElementById("input-blue").value = 255;
	} else if (val < 0) {
		document.getElementById("input-blue").value = 0;
	}
	window.api.send("updateBlue", document.getElementById("input-blue").value);
}