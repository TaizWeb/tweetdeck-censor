function talkingBody() { // Maybe scan ALL tweets on initial load, then just scan new tweet every interval
	for (var i = 0; i < document.getElementsByClassName('js-tweet-text').length; i++) { //substring tweet length THE LAST INDEX OF THE TWEET SHOULD BE NULL
		var tweetWords = document.getElementsByClassName('js-tweet-text')[i].innerHTML.split(" ");
		for (var j = 0; j < tweetWords.length; j++) {
			if (tweetWords[j].toLowerCase() == "me") {
				document.getElementsByClassName('js-tweet-text')[i].innerHTML = "";
			}
		}
	}
}
setInterval(function(){ talkingBody(); },3000);