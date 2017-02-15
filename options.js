function loadOptions() {
	if (typeof document.getElementById('blocked-words').value == "string") {
		chrome.storage.sync.get(["blockedWords"], function(items) {
			document.getElementById('blocked-words').value = items.blockedWords;
		});
	}
}

function saveOptions() {
	chrome.storage.sync.set({"blockedWords": document.getElementById('blocked-words').value}, function() {
	});
}

function restoreDefaults() {
	chrome.storage.sync.set({"blockedWords": ""}, function() {
		// Do something
	});
	document.getElementById('blocked-words').value = "";
}

document.addEventListener("DOMContentLoaded", function() {
	loadOptions();
	document.getElementById('update').addEventListener("click", saveOptions);
	document.getElementById('reset').addEventListener("click", restoreDefaults);
});
