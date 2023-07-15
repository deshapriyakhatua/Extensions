var previousStatus = navigator.onLine;

function checkInternetStatus() {



  var currentStatus = navigator.onLine;
  console.log(currentStatus, previousStatus);
  if (currentStatus !== previousStatus) {
    previousStatus = currentStatus;
    showNotification(currentStatus ? 'Online' : 'Offline');
  }
}

function showNotification(status) {

  chrome.notifications.create({
    type: 'basic',
    iconUrl: 'wifi.jpg',
    title: status ? "Logged In Successfully." :" Log In required...",
    message: "Internet LogIn status"
  });

}





chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'getStatus') {
    var isOnline = navigator.onLine;
    var status = isOnline ? 'Online' : 'Offline';
    sendResponse({ status: status });
  }
});


setInterval(fetchData, 2000); // Check status every 2 seconds

async function fetchData() {

  try {
    let res = await fetch("http://10.254.254.62/0/up/");
    let data = await res.text();

    if (data.includes("loginform")) {
      console.log("Log In required...")
      showNotification(false);
      logIn();
    }
    else if (data.includes("ADARSHA KHATUA")) {
      console.log("Already LoggedIn");
    }
    else {
      console.log("No Internet. Trying Again...");
    }
  }
  catch (err) {
    console.log(err);
  }

}

async function logIn() {

  try {

    console.log("LogIn Process Initiated...");
    let res = await fetch("http://10.254.254.62/0/up/", {
      "headers": {
        "content-type": "application/x-www-form-urlencoded"
      },
      "body": "user=ak49_stcbn1&pass=5840&login=Login",
      "method": "POST"
    });

    let data = await res.text();
    console.log("Log In Status : " + data.includes("ADARSHA KHATUA"));
    if(data.includes("ADARSHA KHATUA")){ showNotification(true); }

  }
  catch (err) {
    console.log(err);
  }

}