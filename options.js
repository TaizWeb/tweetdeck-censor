function loadOptions() {
	if (typeof document.getElementById('blocked-words').value == "string") document.getElementById('blocked-words').value = localStorage.blockedWords;
}

function saveOptions() {
	localStorage.blockedWords = document.getElementById('blocked-words').value;
}

function restoreDefaults() {
	localStorage.blockedWords = "";
	document.getElementById('blocked-words').value = "";
}

document.addEventListener("DOMContentLoaded", function() {
	loadOptions();
	document.getElementById('update').addEventListener("click", saveOptions);
	document.getElementById('reset').addEventListener("click", restoreDefaults);
});
