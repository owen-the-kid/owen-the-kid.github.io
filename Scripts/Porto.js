// Check if the user is on a mobile device
if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
    // Replace the CV iframe with a link to open the PDF in a new tab
    document.getElementById("CV").outerHTML = '<a href="../Documents/CV.pdf" target="_blank" id="CV">Please open PDF viewer</a>';
    
    // Create a new link element for the mobile-specific stylesheet
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "../Styles/PortoR.css";
    document.head.appendChild(link);
    
    // Remove the old desktop-specific stylesheet
    var oldLink = document.querySelector("link[href*='Porto.css']");
    oldLink.parentNode.removeChild(oldLink);
}

