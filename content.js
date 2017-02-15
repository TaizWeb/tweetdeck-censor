// new name: perhaps tweetdeck filter?
var blockedWords = ["hate", "go", "more"];
function filter() {
	for (var i = 0; i < document.getElementsByClassName('js-tweet-text').length; i++) {
		var tweetWords = document.getElementsByClassName('js-tweet-text')[i].innerHTML.split(" ");
		for (var j = 0; j < tweetWords.length; j++) {
			for (var k = 0; k < blockedWords.length; k++) {
				if (tweetWords[j].toLowerCase() == blockedWords[k]) {
					document.getElementsByClassName('js-tweet-text')[i].parentNode.parentNode.parentNode.parentNode.innerHTML = "";
				}
			}
		}
	}
}
setInterval(function(){ filter(); }, 3000);