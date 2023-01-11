

let interval;


document.getElementById("buttonStart").addEventListener("click",async () => {

    let [currTab] = await chrome.tabs.query({active:true, currentWindow:true});

    let duration = document.getElementById("input").value*1;

    if(duration === 0){ duration = 2000; }

    let itemSer = document.getElementById("inputSearch").value;

    interval = setInterval(()=>{ 

        itemSer += "0";

        chrome.scripting.executeScript({
            target : { tabId : currTab.id },
            func : runOnTab,
            args: [itemSer]
        });

    },duration);

});

document.getElementById("buttonStop").addEventListener("click",()=>{ clearInterval(interval); });


function runOnTab(itemSer){


    
    let searchIn = document.getElementById("sb_form_q");

    let submitIn = document.getElementById("sb_form_go");

    console.log(itemSer);
    
    searchIn.value = itemSer; 
    
    submitIn.click(); 
    
    

}

