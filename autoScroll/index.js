

document.getElementById("buttonStart").addEventListener("click",async () => {

    let [currTab] = await chrome.tabs.query({active:true, currentWindow:true});

    document.getElementById("buttonStart").style.backgroundColor = "rgb(247, 159, 255)";
    let select = document.getElementById("inputSearch");
    let speed = select.options[select.selectedIndex].value * 1;
    
    chrome.scripting.executeScript({
        target : { tabId : currTab.id },
        func : runOnTab,
        args: [speed]
    });

});



function runOnTab(speed){

    let scrollerID;
    let paused = true;
    let interval = speed * 2;

    function startScroll(){
        let id = setInterval(function() {
            window.scrollBy(0, 1);
            // if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            //     // Reached end of page
            //     stopScroll();
            // }
        }, interval);
        return id;
    }

    function stopScroll() {
        clearInterval(scrollerID);
    }

    document.body.addEventListener('keypress', function (event)
    {
        if (event.which == 13 || event.keyCode == 13) {
            // It's the 'Enter' key
            if(paused == true) {
                scrollerID = startScroll();
                paused = false;
            }
            else {
                stopScroll();
                paused = true;
            }
        }
    }, true);
    
    

}



