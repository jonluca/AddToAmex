var script = document.createElement("SCRIPT");
script.src = chrome.runtime.getURL("js/jquery-3.2.0.min.js");
script.type = 'text/javascript';
script.onload = function() {
    var $ = window.jQuery;
// Use $ here...
};
document.getElementsByTagName("head")[0].appendChild(script);

console.log("starting");
var loadMore = $(".ah-view-more-button");
while (loadMore.length != 0) {
    $(loadMore).click();
    var loadMore = $("ah-view-more-button");
}
var buttons = $(".ah-btn");
for (button in buttons) {
    if ($(buttons[button]).attr('title') == "Add to Card") {
        $(buttons[button]).click();
    }
}
console.log("ending");