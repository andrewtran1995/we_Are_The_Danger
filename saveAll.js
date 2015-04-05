chrome.browserAction.setPopup("popup.html");
// Asynchronous function that determines what the tab of interest is.
// If used as a parameter in another function, tab is properly found and called back.
function getCurrentTab(callback){
    // Create object with necessary info for query.
    var queryInfo = {
        active: true,
        currentWindow: true
    };
    // Call query with queryInfo to find tab of interest.
    chrome.tabs.query(queryInfo, function(tabs) {
        // Set tab variable equal to tab of interest.
        var tab = tabs[0];
        // Console logs for debugging purposes.
        console.log("document given by DOM: ");
        console.log("url: " + document.URL);
        console.log("tab found through tabs.query:");
        console.log("windowId: " + tab.windowId +
                        "\nindex: " + tab.index +
                        "\nurl: " + tab.url);
        // Callback tab variable s.t. it can be used by functions
        // that call getCurrentTab().
        callback(tab);
    });
}

console.log("saveAll.js started.");

// Get tab of interest, and send message to tab.
document.addEventListener('DOMContentLoaded', function() {
    console.log("Event listener added.");
    var imgUrl="";
    getCurrentTab(function(tab) {
        console.log("tab.id: " + tab.id);
        chrome.tabs.sendMessage(tab.id, "getDOM");
        imgUrl = tab.url;
        console.log("URL: " + imgUrl);
        console.log("# of images: " + document.images.length);
        chrome.downloads.download({url: imgUrl}, function (id) {console.log("Downloaded ID: " + id)});
    });
    //console.log("URL OUTSIDE:" + imgUrl);
    //console.log("Saving first image from " + tab.url);


   // chrome.tabs.executeScript({
      //  code: 'chrome.downloads.download({url: document.images[0].src, conflictAction: "uniquify"}, function () {console.log("Download successful!")});'
    //});
});

console.log("saveAll.js ended");