

let interval;



document.getElementById("buttonStart").addEventListener("click",async () => {

    // change css of button on each click
    document.getElementById("buttonStart").style.backgroundColor = "rgb(247, 159, 255)";
    setTimeout(()=>{ document.getElementById("buttonStart").style.backgroundColor = "rgb(255, 255, 255)"; },1500);

    // change p tag
    document.getElementById("pTag").textContent = "checking...";


    // if interval already created clear it
    if(interval){ clearInterval(interval); }

    let [currTab] = await chrome.tabs.query({active:true, currentWindow:true});


    // "duration" is "waiting after each search" AND "durationInject" is "waiting after bing.com opened"
    let selectDuration = document.getElementById("input");
    let duration = selectDuration.options[selectDuration.selectedIndex].value*1000;
    let durationInject = 2;

    chrome.tabs.update({active: true, url: "http://10.254.254.62/0/up/"});

    interval = setInterval(()=>{ 

        // open bing.com first if checkbox is selected and wait for "durationInject" mili sec
        
        chrome.tabs.update({active: true, url: "http://10.254.254.62/0/up/"});
        console.log("website opened");
        

        // inject JS to active tab console after "durationInject" mili sec
        setTimeout(()=>{

            chrome.scripting.executeScript({
                target : { tabId : currTab.id },
                func : runOnTab,
                args: []
            });

            console.log("js injected");
            


        }, durationInject);
        
        

    },duration + durationInject);

});




function runOnTab(count){
   
    
    let logInId = document.getElementById("username");
    let logInPswd = document.getElementById("password");
    let submitIn = document.getElementsByClassName("btnlink1")[0];

    let userName = document.querySelectorAll(".username  p")[1].textContent.includes("ADARSHA KHATUA");
            console.log(userName);
    if(userName){ 

        document.getElementById("yui-main").style.backgroundColor = "teal";

    }
    else{

        logInId.value = "ak49_stcbn1" ;
        logInPswd.value = "5840";
        
        try{ submitIn.click(); } catch(e){}
    
    }
    

}
