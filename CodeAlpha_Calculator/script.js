const display = document.getElementById("display");

function addToDisplay(value) {

    if (display.value === "0") {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = "0";
}

function deleteLast() {

    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = "0";
    }
}

function calculate() {

    try {
        let expression = display.value;
        let result = eval(expression);
        display.value = result;
    } 
    catch (error) {
        display.value = "Error";
    }
}

document.addEventListener("keydown", function(event) {
    const key = event.key;

    if (!isNaN(key)) {
        addToDisplay(key);
    }
    else if (key === "+") {
        addToDisplay("+");
    }
    else if (key === "-") {
        addToDisplay("-");
    }
    else if (key === "*") {
        addToDisplay("*");
    }
    else if (key === "/") {
        addToDisplay("/");
    }
    else if (key === ".") {
        addToDisplay(".");
    }
    else if (key === "Enter") {
        calculate();
    }
    else if (key === "Escape") {
        clearDisplay();
    }
    else if (key === "Backspace") {
        deleteLast();
    }

});