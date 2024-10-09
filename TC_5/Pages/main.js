const screen = document.getElementById("DataScreen");
let num1 = null;
let num2 = null;
let operator = null;
let First = true;
let dataString = "";

document.addEventListener("DOMContentLoaded", () => {
    const selectedButtons = document.querySelectorAll(".numbers");

    selectedButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const currentText = button.innerText;
            if (First) {
                if (num1 == null) {
                    num1 = currentText;
                } else {
                    num1 += currentText;
                }
            } else {
                if (num2 == null) {
                    num2 = currentText;
                } else {
                    num2 += currentText;
                }
            }

            dataString += currentText;
            screen.innerText = dataString;
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const selectedButtons = document.querySelectorAll(".operators");

    selectedButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const currentText = button.innerText;


            switch (currentText) {
                case "+":
                    selector(0, " + ");
                    break;
                case "-":
                    selector(1, " - ");
                    break;
                case "*":
                    selector(2, " * ");
                    break;
                case "/":
                    selector(3, " / ");
                    break;
                case "**":
                    selector(4, " ** ");
                    break;
                case "√":
                    selector(5, " √ ");
                    break;
                case "Sin":
                    selector(6, " Sin ");
                    break;
                case "CoSin":
                    selector(7, " CoSin ");
                    break;
                case "Tan":
                    selector(8, " Tan ");
                    break;
                case "CoTan":
                    selector(9, " CoTan ");
                    break;
            };
        });
    });
});

document.getElementById("btn_equals").addEventListener("click", async (e) => {
    e.preventDefault();

    get_result();
});

document.getElementById("btn_dot").addEventListener("click", async (e) => {
    e.preventDefault();

    if (First && num1 != null) {
        if (
            dataString.includes(".") ||
            num1.includes(".") ||
            screen.innerText.includes(".")
        ) {
        } else {
            num1 += ".";
            dataString += ".";
            screen.innerText += ".";
        }
    } else if (First) {
        num1 = "0.";
        dataString = "0.";
        screen.innerText = "0.";
    } else if (num2 == null && operator != null) {
        num2 = "0.";
        dataString += "0.";
        screen.innerText += "0.";
    } else if (num2 != null && operator != null) {
        alert("Enter dot outter");
        if (!num2.includes(".")) {
            alert("Enter dot inner");
            num2 += ".";
            dataString += ".";
            screen.innerText += ".";
        }
    }
});

function selector(val1, val2) {
    if (operator == null) {
        operator = val1;
        alert(operator);
        screen.innerText += val2;
        First = false;
        dataString += val2;
        if (num1 != null && val1 > 5) {
            get_result();
        }
        else if (num2 != null) {
            get_result();
        }
    }
}

document.getElementById("btn_clear").addEventListener('click', async (e) => {
    e.preventDefault();

    num1 = null;
    num2 = null;
    First = true;
    screen.innerText = '0';
    dataString = '';

})

async function get_result() {
    const response = await fetch("/api/calculate", {
        method: "POST",
        headers: { accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
            oprt: parseInt(operator),
            x: parseFloat(num1),
            y: parseFloat(num2)
        })
    });

    if (response.ok) {
        try {
            const data = await response.json();
            screen.innerText = data.num1;
            num1 = data.num1;
            num2 = null;
            operator = null;
        } catch {
            screen.innerText = "0";
            num1 = null;
            num2 = null;
        }
    }
}
