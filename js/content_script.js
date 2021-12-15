var cardTexts = ["Add to Card", "Activate Offer"];
var activateClassName = "offer-cta";
console.log("Attempting to add all Amex offers")
var run = () => {
  if (!window.location.href.includes("/offers/eligible")) {
    alert(
      "Must be on offers page, redirecting now. Please press the icon again once the page has finished loading"
    );
    window.location = "https://global.americanexpress.com/offers/eligible";
    return;
  }
  const buttons = document.getElementsByTagName("button");
  for (const button of buttons) {
    try {
      if (
        cardTexts.includes(button.getAttribute("title")) ||
        cardTexts.includes(button.innerText) ||
        button.classList.contains(activateClassName)
      ) {
        button.click();
      }
    } catch (e) {
      console.error(e);
    }
  }
  // note to self - all this does is PUT to https://global.americanexpress.com/api/servicing/v1/offers/<OFFER ID>
  // I wonder if thats a better methodology
};

run();
