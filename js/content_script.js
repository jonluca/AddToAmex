
var loadMore = document.getElementsByClassName("ah-view-more-button");
//Old page layout
if (loadMore.length != 0) {
    //Load all offers onto page
    while (loadMore.length != 0) {
        loadMore[0].click();
        var loadMore = document.getElementsByClassName("ah-view-more-button");
    }
    //Find all buttons on page
    var buttons = document.getElementsByClassName("ah-btn");
    for (var i = 0; i < buttons.length; i++) {
        //If the button is an Add to Card offer, click it
        if (buttons[i].getAttribute('title') == "Add to Card") {
            (buttons[i]).click();
        }
    }
} else {
    //New layout uses single page 
    //url might be different for different countries, verify that it always works
    if (!window.location.href.includes("/offers/eligible")) {
        window.location = "https://global.americanexpress.com/offers/eligible";
    }
    //Same methodology as above
    var buttons = document.getElementsByClassName("btn");
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].getAttribute('title') == "Add to Card") {
            (buttons[i]).click();
        }
    }
}