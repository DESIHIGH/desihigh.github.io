// Override base link if href is a page anchor
document.addEventListener("click", function(event) {
    var element = event.target;
    // console.log("Clicked element: ", element);
    try {
        if (element.tagName.toLowerCase() == "a" &&
            element.getAttribute("href").indexOf("#") === 0) {
                element.href = location.href.split("#")[0] + element.getAttribute("href");
            console.log("Updated anchor href to: ", element.href);
        }
    } catch (error) {
        console.error("No # in anchor href: ", error);
    }
});

async function openBinder(binderUrl) {
    // Do not open if the URL is empty or undefined
    if (!binderUrl || binderUrl.trim() === "") {
        console.error("Binder URL is empty or undefined.");
        return;
    }
    // Check if the URL is valid
    try {
        new URL(binderUrl);
    } catch (error) {
        console.error("Invalid Binder URL: ", error);
        return;
    }
    console.log("Opening Binder URL: ", binderUrl);
    window.open(binderUrl, '_blank');
}