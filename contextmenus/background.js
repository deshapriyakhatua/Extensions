chrome.contextMenus.create({
    id:"paintOnWeb",
    title:"paint",
    contexts:["all"]
});

chrome.contextMenus.onClicked.addListener((info,tab)=>{
    if(info.menuItemId === "paintOnWeb"){
       
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            files: ['contentScript.js']
        });
    }
});