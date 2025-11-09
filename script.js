/**
 * logic 
 * numbers,operators  when clicked ++input.value
 * when = is clicked, do operation
 * when C is clicked, input clears
 * when leftClear is clicked, slice the last value.
 */

let input = document.querySelector(".input");
let btns = document.querySelectorAll(".btn");

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.innerText;

        // Clear all
        if (value === "C") {
            input.innerText = "";
            return;
        }

        // Clear one character
        if (btn.querySelector("i") || value === "⌫") {
            input.innerText = input.innerText.slice(0, -1);
            // clear the last char and returns remaining
            return;
        }

        // Equals
        if (value === "=") {
            try {
                // Replace ÷ × with JS operators
                let expression = input.innerText.replace(/÷/g, "/").replace(/×/g, "*");
                input.innerText = eval(expression);
            } catch (e) {
                input.innerText = "Error";
            }
            return;
        }

        // Add numbers, decimal, operators
        input.innerText += value;
    });
});
