document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("myButton").addEventListener("click", function() {
        alert("Button was clicked!");
    });

    // Add functionality for dynamic.html
    const submitButton = document.getElementById("submitBtn");
    const inputField = document.querySelector("#dynamic input[type='text']");
    const list = document.getElementById("myList");

    submitButton.addEventListener("click", function() {
        const inputValue = inputField.value.trim();
        if (inputValue) {
            const listItem = document.createElement("li");
            listItem.textContent = inputValue;
            list.appendChild(listItem);
            inputField.value = ""; // Clear the input field
        } else {
            alert("Please enter some text.");
        }
    });
});
