document.getElementById("submitBtn").addEventListener("click", async function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value.trim();
    const message = document.getElementById("message");

    // Clear any existing message
    message.innerHTML = "";

    // Check if username is empty
    if (username === "") {
        displayMessage("Please enter a username.", "error");
        return;
    }

    try {
        const response = await fetch("info.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `username=${encodeURIComponent(username)}`,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.text();
        
        if (result === "Verified") {
            displayMessage(result, "verified");
        } else {
            displayMessage(result, "error");
        }
    } catch (error) {
        console.error("Error:", error);
        displayMessage("An error occurred. Please try again.", "error");
    }
});

function displayMessage(text, className) {
    const message = document.getElementById("message");
    message.innerHTML = text;
    message.className = className;
}