// Override base link if href is a page anchor
document.addEventListener("click", function(event) {
    var element = event.target;
    if (element.tagName.toLowerCase() == "a" &&
        element.getAttribute("href").indexOf("#") === 0) {
            element.href = location.href + element.getAttribute("href");
    }
});