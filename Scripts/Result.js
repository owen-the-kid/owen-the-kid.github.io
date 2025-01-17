/**
 * Calculates the average of three scores and updates the corresponding total element.
 * @param {string} id1 - The ID of the first score element.
 * @param {string} id2 - The ID of the second score element.
 * @param {string} id3 - The ID of the third score element.
 * @param {string} totalId - The ID of the total element to update.
 */
function calculateAndDisplayAverage(id1, id2, id3, totalId) {
    var score1 = document.getElementById(id1).innerHTML;
    var score2 = document.getElementById(id2).innerHTML;
    var score3 = document.getElementById(id3).innerHTML;
    var total = (parseFloat(score1) + parseFloat(score2) + parseFloat(score3)) / 3;
    document.getElementById(totalId).innerHTML = total.toFixed(1);
}

// Calculate averages for each subject and update the corresponding total element.
calculateAndDisplayAverage("Rea1", "Rea2", "Rea3", "reaT");
calculateAndDisplayAverage("TV1", "TV2", "TV3", "tvT");
calculateAndDisplayAverage("PO1", "PO2", "PO3", "poT");
calculateAndDisplayAverage("CV1", "CV2", "CV3", "cvT");

