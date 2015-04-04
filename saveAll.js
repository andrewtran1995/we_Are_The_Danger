// Called when user clicks on browser action.
console.log("Testing.");
console.log("Testing1.");


document.addEventListener('DOMContentLoaded', function() {
    document.getElementByID('button').addEventListener("click", function() {
        chrome.tabs.query({
            'active': true,
            'windowId': chrome.windows.WINDOW_ID_CURRENT
        }, function(tabs) {
            console.log("Saving first image from " + tabs[0].url);
            chrome.tabs.executeScript({
                code: 'chrome.downloads.download({url: document.images[0].src, conflictAction: "uniquify"}, function () {console.log("Download successful!")});'
            });
        });
    });
});