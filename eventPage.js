console.log("eventPage.js started for " + document.URL);
/*
chrome.tabs.onCreated.addListener(function(tab) {
    if (event = "getDOM")
        chrome.downloads.download({url: document.images[0].src, conflictAction: "uniquify"}, function () {console.log("Download successful!")});
    else
        console.log("Download unsuccessful.");
});
*/
console.log("eventPage.js found " + document.images.length + " images!");
for(i=0; i<document.images.length; i++) {
    // chrome.debugger.onEvent.addListener(function(){});
    // chrome.downloads.download({url: document.images[i].src, conflictAction: "uniquify"});
    chrome.runtime.sendMessage({
    	action: 'createWindow',
    	url: 'http://google.com'
    },
    function(createdWindow) {
    	console.log(createdWindow);
    });
    console.log("eventPage.js image[" + i + "]:" + document.images[i].src);
}

console.log("eventPage.js ended.");