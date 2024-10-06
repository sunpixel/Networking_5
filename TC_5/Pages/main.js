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

document.getElementById("btn_equals").addEventListener("click", async (e) => {
    e.preventDefault();

    const response = await fetch("/api/calculate", {
        method: "POST",
        headers: { accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
            x: 12,
            y: 34,
            oprt: 1
        })
    });
});

document.getElementById("btn_plus").addEventListener("click", async (e) => {
    e.preventDefault();

    let num1 = parseFloat(document.getElementById("DataScreen"));

    get_result(0, num1);
});

async function get_result(operator, num1, num2 = 0) {
    const response = await fetch("/api/calculate", {
        method: "POST",
        headers: { accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
            oprt: operator,
            x: num1,
            y: num2
        })
    });

    if (response.ok) {
        try {
            const data = await response.json();
            document.getElementById("DataScreen").innerText = data.num1;
        } catch {
            document.getElementById("DataScreen").innerText = "error";
        }
    }
}
