

let interval;


document.getElementById("buttonStart").addEventListener("click",async () => {

    
    let [currTab] = await chrome.tabs.query({active:true, currentWindow:true});

    let urlForSearch = currTab.url;

    let tabCount = document.getElementById("inputSearch").value*1;

    let duration = document.getElementById("inputTime").value*1000;

    let itemSer = ["array in java", "list in java", "javaScript", "mdn", "w3school", "geeksforgeeks", "android documentation", "hashMap in java", "hashset in java", "hoisting", "javapoint", "object in js", "leetcode", "weather", "local time now", "2*2", "56/87","62/57","232 usd to inr", "56 usd to inr", "52 usd to inr", "88 usd to inr", "36 usd to inr", "85 usd to inr", "41 usd to inr", "47 usd to inr", "74 usd to inr", "14 usd to inr", "12 usd to inr", "25 usd to inr", "45 usd to inr", "make", "a chrome", "extensions" , "that is started", "in one tab", "and continues", "to run "," while", "opening", "several", "new", "tabs", "However", "it only", "starts", "ONE", "new", "tab", "instead", "of", "the", "5 specified", "because", "the script", "stops", "running","array in java1", "list in java1", "javaScript1", "mdn1", "w3school1", "geeksforgeeks1", "android documentation1", "hashMap in java1", "hashset in java1", "hoisting1", "javapoint1", "object in js1", "leetcode1", "weather1", "local time now1", "2*21", "56/871","62/571","2312 usd to inr", "516 usd to inr", "512 usd to inr", "818 usd to inr", "316 usd to inr", "185 usd to inr", "411 usd to inr", "417 usd to inr", "714 usd to inr", "114 usd to inr", "112 usd to inr", "215 usd to inr", "415 usd to inr", "1make", "a chrom1", "extensions1" , "that is started1", "in one tab1", "and continues1", "to run 1"," while1", "opening1", "several1", "new11", "tabs1", "However1", "it only1", "starts1", "ONE1", "new1", "tab1", "instead1", "of1", "the1", "5 specified1", "because1", "the script1", "stops1", "running1"];

    let itemSer1 = itemSer.map(elem => elem.split(" ").join("+"));
    // creating new tab

    for(let i=1; i<=tabCount; i++){

        let searchIn = itemSer1[Math.floor(Math.random()*112)] + "+" + Math.floor(Math.random()*10) + Math.floor(Math.random()*10); 

        let searchUrl = "https://www.bing.com/search?q=" + searchIn + urlForSearch.substring(urlForSearch.indexOf("search?q=") + 10);

        chrome.tabs.create({url: searchUrl, active:false});

    }


    //close all new tabs after 5 sec

    setTimeout(function(){

        chrome.tabs.query({currentWindow: true}, function (tabs) {

            for (let i=tabs.length-1; i>=tabs.length-tabCount; i--) {

                chrome.tabs.remove(tabs[i].id);

            }
            
        });

    },duration);

    

});


