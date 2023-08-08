
let button = document.getElementById("button");
let statusElement = document.getElementById('status');

document.addEventListener('DOMContentLoaded', () => {

  chrome.runtime.sendMessage({ action: 'getStatus' }, (response) => {
    statusElement.textContent = response.status;
    button.textContent = response.interval ? "stop" : "start";
  });

});

button.addEventListener("click", () => {

  if (button.textContent.includes("start")) {
    chrome.runtime.sendMessage({ action: "start" }, (res) => {
      button.textContent = "stop";
    });
  }
  else {
    chrome.runtime.sendMessage({ action: "stop" }, (res) => {
      button.textContent = "start";
    });
  }

});