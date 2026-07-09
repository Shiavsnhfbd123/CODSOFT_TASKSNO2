const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {

        const value = button.textContent;

        if (value === "AC") {
            expression = "";
            display.value = "";
        }

        else if (value === "=") {
            try {

                let result = expression
                    .replace(/×/g, "*")
                    .replace(/÷/g, "/")
                    .replace(/%/g, "/100");

                expression = eval(result).toString();
                display.value = expression;

            } catch {
                display.value = "Error";
                expression = "";
            }
        }

        else {
            expression += value;
            display.value = expression;
        }
    });
});

// Keyboard Support
document.addEventListener("keydown", (e) => {

    const allowed = "0123456789+-*/.%";

    if (allowed.includes(e.key)) {
        expression += e.key;
        display.value = expression;
    }

    if (e.key === "Enter") {
        try {
            expression = eval(expression).toString();
            display.value = expression;
        } catch {
            display.value = "Error";
            expression = "";
        }
    }

    if (e.key === "Backspace") {
        expression = expression.slice(0, -1);
        display.value = expression;
    }

    if (e.key === "Escape") {
        expression = "";
        display.value = "";
    }
});