let interval;

document.getElementById("inputSearch").addEventListener("change",()=>{ 
    let select = document.getElementById("inputSearch");
    let count = select.options[select.selectedIndex].value * 1;
    document.getElementById("pTag").textContent = count;
});


document.getElementById("buttonStart").addEventListener("click",async () => {

    let [currTab] = await chrome.tabs.query({active:true, currentWindow:true});

    document.getElementById("buttonStart").style.backgroundColor = "rgb(247, 159, 255)";
    let duration = document.getElementById("input").value*1000;

    if(duration === 0){ duration = 2000; }

    let select = document.getElementById("inputSearch");
    let count = select.options[select.selectedIndex].value * 1;
    

    let interval = setInterval(()=>{ 


        chrome.scripting.executeScript({
            target : { tabId : currTab.id },
            func : runOnTab,
            args: []
        });

        count--;
        document.getElementById("pTag").textContent = count;
        if(count === 0){ clearInterval(interval); }

    },duration);

});

document.getElementById("buttonStop").addEventListener("click",()=>{ clearInterval(interval); });


function runOnTab(){

    let itemSer = [ Math.floor(Math.random()*1000) + " usd to inr",
      "squre root of " + Math.floor(Math.random()*1000),
      Math.floor(Math.random()*1000) + "!", 
      Math.floor(Math.random()*1000) + " meter to feet", 
      Math.floor(Math.random()*1000) + " / " + Math.floor(Math.random()*1000), 
      Math.floor(Math.random()*1000) + " * " + Math.floor(Math.random()*1000) , 
      Math.floor(Math.random()*1000) + " mile to kilometer" , 
      Math.floor(Math.random()*1000) + " inch to cm" ];
    
    let searchIn = document.getElementById("sb_form_q");

    let submitIn = document.getElementById("sb_form_go");

    
    searchIn.value = itemSer[Math.floor(Math.random()*8)]; 
    
    submitIn.click(); 
    
    

}