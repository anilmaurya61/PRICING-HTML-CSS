const annualCard = document.querySelectorAll(".annually");
const monthlyCard = document.querySelectorAll(".monthly");
const toggleButton = document.getElementById("mytoggle");
let isAnnualVisible = true;

toggleButton.addEventListener("click", () => {
    console.log("toggle");
    if (isAnnualVisible) {
        annualCard.forEach(card => {
            card.style.display = "none";
        });
        monthlyCard.forEach(card => {
            card.style.display = "block";
        });
    } else {
        annualCard.forEach(card => {
            card.style.display = "block";
        });
        monthlyCard.forEach(card => {
            card.style.display = "none";
        });
    }
    isAnnualVisible = !isAnnualVisible; 
});





