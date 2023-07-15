document.addEventListener("DOMContentLoaded", () => {
    // Get the URL list element
    const urlListElement = document.getElementById("urlList");

    // Get the clear button
    const clearButton = document.getElementById("clearButton");

    // Add event listener to clear button
    clearButton.addEventListener("click", () => {
        clearVisitedURLs();
        urlListElement.innerHTML = "";
    });

    // Retrieve visited URLs and display them
    getVisitedURLs((data = []) => {

        data.forEach(function (visitedURL) {

            const visitedDate = new Date(visitedURL.timestamp);
            const formattedDate = `${visitedDate.getDate()}-${visitedDate.getMonth() + 1}-${visitedDate.getFullYear()}`;
            const formattedTime = `${visitedDate.getHours()}:${visitedDate.getMinutes()}:${visitedDate.getSeconds()}`;
            const listItem = document.createElement("li");
            const link = document.createElement("a");
            link.href = visitedURL.url;
            link.target = "_blank";
            link.title = visitedURL.url;
            link.innerText = new URL(visitedURL.url).hostname;

            listItem.appendChild(link);
            listItem.innerHTML += `<br><span class="timestamp"> Time: ${formattedTime} &nbsp;&nbsp;&nbsp; Date: ${formattedDate}</span>`;
            urlListElement.prepend(listItem);
        });

    });


});

// Save visited URLs to local storage
function saveVisitedURLs(visitedURLs) {

    chrome.storage.local.set({ visitedURLs: visitedURLs }, () => {
        console.log("Visited URLs saved successfully.");
    });

}

// Retrieve visited URLs from local storage

function getVisitedURLs(callback) {

    chrome.storage.local.get("visitedURLs", (result) => {

        if (chrome.runtime.lastError) {
            console.error(`An error occurred in getVisitedURLs: ${chrome.runtime.lastError.message}`);
            callback();
        } else {
            let data = result["visitedURLs"];
            callback(data);
        }

    });


}

// Clear visited URLs from local storage
function clearVisitedURLs() {

    chrome.storage.local.clear();

}

