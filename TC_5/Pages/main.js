document.addEventListener("DOMContentLoaded", () => {
    const selectedButtons = document.querySelectorAll(".numbers");
    let dataString = "";

    selectedButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const currentText = button.innerText;
            dataString += currentText;
            document.getElementById("DataScreen").innerText = dataString;
        });
    });
});
