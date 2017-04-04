
console.log("starting");
var loadMore = document.getElementsByClassName("ah-view-more-button");
while (loadMore.length != 0) {
    loadMore.click();
    var loadMore = document.getElementsByClassName("ah-view-more-button");
}
var buttons = document.getElementsByClassName("ah-btn");
for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].getAttribute('title') == "Add to Card") {
        (buttons[i]).click();
    }
}
console.log("ending");