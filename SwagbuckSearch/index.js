let interval;



document.getElementById("buttonStart").addEventListener("click",async () => {

    let [currTab] = await chrome.tabs.query({active:true, currentWindow:true});

    document.getElementById("buttonStart").style.backgroundColor = "rgb(247, 159, 255)";
    let duration = document.getElementById("input").value*1;

    if(duration === 0){ duration = 2000; }

    let select = document.getElementById("inputSearch");
    let count = 0;
    

    let interval = setInterval(()=>{ 


        chrome.scripting.executeScript({
            target : { tabId : currTab.id },
            func : runOnTab,
            args: []
        });

        count++;
        document.getElementById("pTag").textContent = count;
        duration = document.getElementById("input").value * Math.random();

    },duration + 2000);

});




function runOnTab(){

    let itemSer = [
        "COVID-19 update", 
        "Weather forecast", 
        "Breaking news", 
        "Live sports scores", 
        "Movie trailers", 
        "Stock market", 
        "Healthy recipes", 
        "Travel deals", 
        "Online courses", 
        "Job openings", 
        "Mortgage rates", 
        "Social media platforms", 
        "Online shopping", 
        "Real estate listings", 
        "Small business loans", 
        "New technology", 
        "Science news", 
        "Online gaming", 
        "Electric cars", 
        "Fitness workouts", 
        "Top songs", 
        "Popular movies", 
        "TV show schedules", 
        "Celebrity news", 
        "Fashion trends", 
        "Home renovation ideas", 
        "Pet adoption", 
        "Beauty tips", 
        "Online dating", 
        "Video game reviews", 
        "Virtual fitness classes", 
        "Popular podcasts", 
        "Best credit cards", 
        "Vegetarian recipes", 
        "Travel destinations", 
        "Online certifications", 
        "Job interview tips", 
        "Real estate agents", 
        "Business loans", 
        "5G technology", 
        "Space news", 
        "Best online games", 
        "Luxury cars", 
        "Yoga classes", 
        "Billboard hits", 
        "Movie reviews", 
        "TV show spoilers", 
        "Celebrity interviews", 
        "Sustainable fashion", 
        "DIY home projects", 
        "Pet care tips", 
        "Skincare products", 
        "Healthy meal plans", 
        "Cryptocurrency news", 
        "Online language courses", 
        "Remote jobs", 
        "Home insurance rates", 
        "Home decor trends", 
        "New cars", 
        "Fitness equipment", 
        "Top albums", 
        "Award-winning movies", 
        "Reality TV shows", 
        "Celebrity gossip", 
        "Fashion bloggers", 
        "Gardening tips", 
        "Adoptable pets", 
        "Makeup tutorials", 
        "Easy dessert recipes", 
        "Online shopping deals", 
        "Online tutoring", 
        "Resume writing tips", 
        "Real estate investing", 
        "Small business grants", 
        "Artificial intelligence news", 
        "Medical breakthroughs", 
        "New video games", 
        "Hybrid cars", 
        "Cardio workouts", 
        "Music videos", 
        "Independent films", 
        "TV show reboots", 
        "Celebrity fashion", 
        "Men's fashion trends", 
        "Home organization tips", 
        "Pet-friendly travel", 
        "Anti-aging skincare", 
        "Low-carb recipes", 
        "Blockchain technology", 
        "Online education platforms", 
        "Work from home tips", 
        "Life insurance rates", 
        "Home security systems", 
        "Affordable cars", 
        "Running shoes", 
        "Album releases", 
        "Classic movies", 
        "Documentary films", 
        "Celebrity couples", 
        "Street style fashion", 
        "Indoor plants", 
        "Dog training tips", 
        "Hair care products", 
        "Healthy snacks", 
        "Cybersecurity news", 
        "Coding bootcamps", 
        "Remote work jobs", 
        "Home renovation costs", 
        "Best credit cards for travel", 
        Math.floor(Math.random()*1000) + " usd to inr",
      "squre root of " + Math.floor(Math.random()*1000),
      Math.floor(Math.random()*1000) + "!", 
      Math.floor(Math.random()*1000) + " meter to feet", 
      Math.floor(Math.random()*1000) + " / " + Math.floor(Math.random()*1000), 
      Math.floor(Math.random()*1000) + " * " + Math.floor(Math.random()*1000) , 
      Math.floor(Math.random()*1000) + " mile to kilometer" , 
      Math.floor(Math.random()*1000) + " inch to cm" ];
    
    let searchIn = document.getElementById("sbGlobalNavSearchInputWeb");

    let submitIn = document.getElementById("sbGlobalNavSearchSubmit");

    
    searchIn.value = itemSer[Math.floor(Math.random()*117)]; 
    
    submitIn.click(); 
    
    

}