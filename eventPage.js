console.log("eventPage.js started for " + document.URL);
console.log("eventPage.js found " + document.images.length + " images!");
console.log("eventPage.js adding runtime listener");
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("eventPage.js handling runtime message w/ " + document.images.length + " images");
    if(request && request.action === 'getImageURLs') {
        sendResponse(Array.prototype.map.call(document.images, function(img) {
            return img.src;
        }));
    }
});
console.log("eventPage.js ended.");