const button = document.getElementById("toggleBtn");
const text = document.getElementById("extraText");

button.addEventListener("click", () => {
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
});
