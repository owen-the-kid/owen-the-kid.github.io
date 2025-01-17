/**
 * Checks if the user is on a mobile device and switches to a different CSS file if true.
 * @author Owen Ramaekers
 * @version 1.0
 */
if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
    // Create a new link element and set its rel and type attributes
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";

    // Set the href attribute to the mobile CSS file
    link.href = "../Styles/CoreR.css";

    // Add the new link element to the head of the document
    document.head.appendChild(link);

    // Remove the old link element from the document
    var oldLink = document.querySelector("link[href*='Core.css']");
    oldLink.parentNode.removeChild(oldLink);
}

document.getElementById("MenuToggle").addEventListener("click", function() {
    document.getElementById("MenuList").classList.toggle("unhide");
    document.getElementById("MenuToggle").classList.toggle("unhide");
});
