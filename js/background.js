chrome.browserAction.onClicked.addListener(function(tab) {

    chrome.tabs.executeScript(null, {
        file: "js/jquery-3.2.0.min.js"
    }, function() {
        chrome.tabs.executeScript(null, {
            file: "js/content_script.js"
        });
    });
});
