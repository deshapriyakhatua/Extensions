// Initialize an empty array to store visited URLs

// Add event listener to track URL visits
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

  if (changeInfo.status === "complete" && !tab.url.includes("chrome://newtab/")) {
    
    getVisitedURLs((data = []) => {

      data.push({
        url: tab.url,
        timestamp: new Date().getTime()
      });

      saveVisitedURLs(data);

    });

  }

});

// Save visited URLs to local storage
function saveVisitedURLs(visitedURLs) {
  chrome.storage.local.set({ visitedURLs: visitedURLs }, () => {
    console.log("data saved successfully.");
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



console.log("background.js opened");

const isOnline = navigator.onLine;
console.log('Online status:', isOnline);

navigator.connection.addEventListener('change', changeHandler)

function changeHandler() { 

  handleOnlineStatus();
  
}


function handleOnlineStatus() {
  const isOnline = navigator.onLine;

  if (isOnline) {
    console.log('Internet connection is available');
  } else {
    console.log('Internet connection is lost');
  }
}

