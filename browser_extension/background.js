chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "user_interaction") {
        console.log("Sending data to backend:", message.data);

        fetch("http://127.0.0.1:5000/analyze-behavior", {
            method: "POST",
            body: JSON.stringify(message.data),
            headers: { "Content-Type": "application/json" }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            console.log("Backend response:", data);

            if (data.is_suspicious) {
                showNotification("Suspicious Behavior Detected!", "This website may be phishing.");
            }
        })
        .catch(error => {
            console.error("Fetch error:", error);
        });
    }
});

// Function to show notification in background.js
function showNotification(title, message) {
    chrome.notifications.create({
        type: "basic",
        iconUrl: chrome.runtime.getURL("icons/icon48.png"),
        title: title,
        message: message
    }, (notificationId) => {
        if (chrome.runtime.lastError) {
            console.error("Notification error:", chrome.runtime.lastError);
        } else {
            console.log("Notification created:", notificationId);
        }
    });
}
