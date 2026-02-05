let display = document.getElementById("display");

function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        let expression = display.value;

        // ✅ Divide by zero check
        if (expression.includes("/0")) {
            display.value = "Not Defined";
            return;
        }

        let result = eval(expression);

        // Extra safety check
        if (result === Infinity || result === -Infinity) {
            display.value = "Not Defined";
        } else {
            display.value = result;
        }

    } catch {
        display.value = "Error";
    }
}
