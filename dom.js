console.log("dom.js started.");

chrome.tabs.onCreated.addListener(function(tab) {
    if (request.action == "getDOM")
        chrome.downloads.download({url: document.images[0].src, conflictAction: "uniquify"}, function () {console.log("Download successful!")});
    else
        console.log("Download unsuccessful.");
});
/*
chrome.runtime.onMessageExternal.addListener(function(request, sender, sendResponse) {
    if (request.action == "getDOM")
        chrome.downloads.download({url: document.images[0].src, conflictAction: "uniquify"}, function () {console.log("Download successful!")});
    else
        console.log("Download unsuccessful.");
});
*/
console.log("dom.js ended.");