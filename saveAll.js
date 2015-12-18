console.log("saveAll.js started for " + document.URL);

console.log("saveAll.js found " + document.images.length + " images!");

// Asynchronous function that determines what the tab of interest is.
// If used as a parameter in another function, tab is properly found and called back.
function getCurrentTab(callback){
    // Create object with necessary info for query.
    var queryInfo = {
        active: true,
        currentWindow: true
    };
    console.log("Middle of getCurrentTab");
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

// Get tab of interest, and send message to tab.
console.log("Adding event listener.");
// chrome.downloads.download;
document.addEventListener("DOMContentLoaded", function() {
    var imgUrl="";
    console.log("Middle of addEventListener");
    getCurrentTab(function(tab) {
        console.log("Injection start.");
        console.log("Injection into: " + tab.url);
        // TESTING CODE
        /*chrome.tabs.executeScript(tab.id, {
           code: 'for(i=0; i<document.images.length; i++) {(chrome.downloads).download({url: document.images[i].src, conflictAction: "uniquify"})};'},
            function() {console.log("Injection.")}
        );*/
        chrome.tabs.executeScript(tab.id, {file: "dom.js"}, function() {console.log("Code injected.")});
        console.log("Injection end.");
        // END TESTING CODE
        //chrome.tabs.sendMessage(tab.id, "getDOM");
        //imgUrl = document.images[0].src;
        //imgUrl = tab.url;
        //console.log("URL: " + imgUrl);
        //chrome.downloads.download({url: imgUrl}, function (id) {console.log("Downloaded ID: " + id)});
    });
    //console.log("URL OUTSIDE:" + imgUrl);
    //console.log("Saving first image from " + tab.url);


   // chrome.tabs.executeScript({
      //  code: 'chrome.downloads.download({url: document.images[0].src, conflictAction: "uniquify"}, function () {console.log("Download successful!")});'
    //});
});

console.log("saveAll.js ended");