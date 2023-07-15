document.addEventListener('DOMContentLoaded', function () {
    var statusElement = document.getElementById('status');
    chrome.runtime.sendMessage({ action: 'getStatus' }, function (response) {
      statusElement.textContent = response.status;
    });
  });
  