// Seperate CSS switcher made for index page

if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "Styles/CoreR.css";
    document.head.appendChild(link);
    var oldLink = document.querySelector("link[href*='Core.css']");
    oldLink.parentNode.removeChild(oldLink);
}

document.getElementById("MenuToggle").addEventListener("click", function() {
    document.getElementById("MenuList").classList.toggle("unhide");
    document.getElementById("MenuToggle").classList.toggle("unhide");
});


/**
 * Calculates the age of the user.
 * @return {number} The age of the user.
 */
function calculateAge() {
    var today = new Date();
    var birthDate = new Date(2006, 8, 6); // 6th of September, 2006
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

/**
 * Updates the age element on the page.
 */
function updateAge() {
    var age = calculateAge();
    document.getElementById("Leeftijd").innerText = `Ik ben op dit moment ${age} jaar oud`;
}

updateAge();




