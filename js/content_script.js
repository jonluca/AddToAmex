var run = () => {
    if (!window.location.href.includes("/offers/eligible")) {
        alert("Must be on offers page, redirecting now. Please press the icon again once the page has finished loading")
        window.location = "https://global.americanexpress.com/offers/eligible";
        return;
    }
    const buttons = document.querySelectorAll('[title="Add to Card"]');
    for(const button of buttons){
        button.click();
    }
    // note to self - all this does is PUT to https://global.americanexpress.com/api/servicing/v1/offers/<OFFER ID>
    // I wonder if thats a better methodology
}

run();