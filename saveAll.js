// Called when user clicks on browser action.
console.log("saveAll.js started.");

document.addEventListener('DOMContentLoaded', function() {
    console.log("Event listener added.");
    var queryInfo = {
        active: true,
        currentWindow: true
    };
    var tab;
    chrome.tabs.query(queryInfo, function(tabs) {
        // Note the differences in "document" and "tab" found through tabs.query.
        // We have to find a way to search through the DOM of the current tab.
        tab = tabs[0];
        // Debugging print statements.
        console.log("document given by DOM: ");
        console.log("url: " + document.URL);
        console.log("tab found through tabs.query:");
        console.log("windowId: " + tab.windowId +
                    "\nindex: " + tab.index +
                    "\nurl: " + tab.url);
    });
    //console.log("Saving first image from " + tab.url);
    chrome.tabs.executeScript({
        code: 'chrome.downloads.download({url: document.images[0].src, conflictAction: "uniquify"}, function () {console.log("Download successful!")});'
    });
});