
var loadMore = document.getElementsByClassName("ah-view-more-button");
//Old amex layout 
if (loadMore.length != 0) {
    while (loadMore.length != 0) {
        loadMore[0].click();
        var loadMore = document.getElementsByClassName("ah-view-more-button");
    }

    var buttons = document.getElementsByClassName("ah-btn");
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].getAttribute('title') == "Add to Card") {
            (buttons[i]).click();
        }
    }
} else {
    if (!window.location.href.includes("/offers/eligible")) {
        window.location = "https://global.americanexpress.com/offers/eligible";
    }
    var buttons = document.getElementsByClassName("btn");
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].getAttribute('title') == "Add to Card") {
            (buttons[i]).click();
        }
    }
}