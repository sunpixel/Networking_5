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

document.getElementById("equals").addEventListener("click", async e => {
    e.preventDefault();

    const response = await fetch("/api/calculate", {
        method: "POST",
        headers: { "accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
            x: 12,
            y: 34,
            oprt: 1
        })
    }
})



