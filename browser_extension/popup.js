document.getElementById("reportButton").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const url = tabs[0].url;
      fetch("http://localhost:5000/report-phishing", {
        method: "POST",
        body: JSON.stringify({ url: url }),
        headers: { "Content-Type": "application/json" },
      }).then(() => alert("Thank you for reporting!"));
    });
  });