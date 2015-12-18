console.log("saveAll.js started for " + document.URL);
console.log("saveAll.js found " + document.images.length + " images!");

function getHighlightedTabs(callback) {
    var queryInfo = {
        active: true,
        currentWindow: true,
        highlighted: true
    };
    chrome.tabs.query(queryInfo, function(tabs) {
        callback(tabs);
    });
}

function saveAll() {
    console.log("saveAll running");
    getHighlightedTabs(function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: 'getImageURLs'}, function(imageURLs) {
            for(i=0; i<imageURLs.length; i++) {
                console.log("saveAll got " + imageURLs[i]);
            } 
        })
    });
}

console.log("saveAll.js adding event listener for button.");
document.getElementById('clickme').addEventListener('click', saveAll);

console.log("saveAll.js ended");