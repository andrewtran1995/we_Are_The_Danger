// Called when user clicks on browser action.
console.log("Testing.");

console.log("Saving first image from " + tab.url);
chrome.tabs.executeScript({
    code: 'chrome.downloads.download({url: document.images[0].src, conflictAction: "uniquify"}, function () {console.log("Download successful!")});'
});
