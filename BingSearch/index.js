let interval;

document.getElementById("inputSearch").addEventListener("change",()=>{ 
    let select = document.getElementById("inputSearch");
    let count = select.options[select.selectedIndex].value * 1;
    document.getElementById("pTag").textContent = count;

});


document.getElementById("buttonStart").addEventListener("click",async () => {

    if(interval){ clearInterval(interval); }

    let [currTab] = await chrome.tabs.query({active:true, currentWindow:true});

    document.getElementById("buttonStart").style.backgroundColor = "rgb(247, 159, 255)";

    setTimeout(()=>{ document.getElementById("buttonStart").style.backgroundColor = "rgb(255, 255, 255)"; },1500);

    
    let selectDuration = document.getElementById("input");
    let duration = selectDuration.options[selectDuration.selectedIndex].value*1000;

    if(duration === 0){ duration = 2000; }

    let select = document.getElementById("inputSearch");
    let count = select.options[select.selectedIndex].value * 1;

    interval = setInterval(()=>{ 


        chrome.scripting.executeScript({
            target : { tabId : currTab.id },
            func : runOnTab,
            args: [count]
        });

        count--;
        document.getElementById("pTag").textContent = count;
        if(count === -1){ 
            let url = chrome.runtime.getURL('beep.mp3');
            let sound = new Audio(url); 
            //sound.play();
            clearInterval(interval); 
        }

    },duration);

});




function runOnTab(count){
    //alert('fjfj');
    // if(count == 0){
    
    //     let keyEvent = new keyBoardEvent('keydown', {key: 'F12'});
    //     document.body.dispatchEvent(keyEvent);
    //     alert('fjfj');
    //     return;
    // }

    let itemSer = [
        "python",
        "programming",
        "data science", 
        "machine learning",
        "artificial intelligence",
        "web development",
        "backend",
        "frontend",
        "database",
        "algorithms",
        "API", 
        "agile", 
        "analytics", 
        "android", 
        "AngularJS", 
        "API design", 
        "app development", 
        "application architecture", 
        "architecture", 
        "ASP.NET", 
        "AWS", 
        "backend development", 
        "big data", 
        "bootstrap", 
        "C++", 
        "CSS", 
        "cloud computing", 
        "code optimization", 
        "coding", 
        "computer graphics", 
        "computer networking", 
        "computer security", 
        "computer vision", 
        "continuous delivery", 
        "continuous integration", 
        "CSS frameworks", 
        "data analytics", 
        "data engineering", 
        "data modeling", 
        "data structures", 
        "data visualization", 
        "database design", 
        "database management", 
        "debugging", 
        "deep learning", 
        "design patterns", 
        "devOps", 
        "django", 
        "docker", 
        "e-commerce", 
        "embedded systems", 
        "encryption", 
        "enterprise software", 
        "ethical hacking", 
        "express.js", 
        "full stack development", 
        "functional programming", 
        "game development", 
        "git", 
        "go", 
        "GraphQL", 
        "Hadoop", 
        "HTML", 
        "HTML5", 
        "iOS development", 
        "Java", 
        "JavaScript", 
        "jQuery", 
        "JSON", 
        "JSP", 
        "Kotlin", 
        "Linux", 
        "MVC architecture", 
        "machine vision", 
        "Magento", 
        "MATLAB", 
        "Microsoft Azure", 
        "MongoDB", 
        "MySQL", 
        "natural language processing", 
        "network programming", 
        "node.js", 
        "object-oriented programming", 
        "OpenGL", 
        "OpenCV", 
        "operating systems", 
        "optimization", 
        "Oracle", 
        "PHP", 
        "postgresql", 
        "programming languages", 
        "prototyping", 
        "PyTorch", 
        "R", 
        "React", 
        "React Native", 
        "Redis", 
        "REST API", 
        "Ruby", 
        "Ruby on Rails", 
        "SASS", 
        "Scala", 
        "scikit-learn", 
        "search algorithms", 
        "security", 
        "server-side scripting", 
        "shell scripting", 
        "software architecture", 
        "software design", 
        "software engineering", 
        "SQL", 
        "SQLite", 
        "statistics", 
        "Swift", 
        "systems programming", 
        "TensorFlow", 
        "testing", 
        "UI/UX design", 
        "Unity", 
        "Unix", 
        "user experience", 
        "user interface", 
        "version control", 
        "virtualization", 
        "web frameworks", 
        "web scraping", 
        "Windows development", 
        "WordPress", 
        "XML", 
        "XSLT", 
        "Yii", 
        "Zend", 
        "API integration", 
        "API management", 
        "app architecture", 
        "app security", 
        "application development", 
        "architecture patterns", 
        "artificial neural networks", 
        "automation", 
        "AWS Lambda", 
        "backend frameworks", 
        "back-end services", 
        "big data analysis", 
        "Big Data technologies", 
        "blockchain", 
        "C#", 
        "Cassandra", 
        "chatbots", 
        "CI/CD", 
        "Cloudera", 
        "cloud infrastructure", 
        "cloud storage", 
        "coding standards", 
        "computer architecture", 
        "computer engineering", 
        "computer hardware", 
        "computer science fundamentals", 
        "computer systems", 
        "continuous testing", 
        "cross-functional teams", 
        "cross-platform development", 
        "CSS preprocessors", 
        "data analysis", 
        "data cleaning", 
        "data engineering frameworks", 
        "data integration", 
        "data lakes", 
        "data management", 
        "data migration", 
        "data mining", 
        "data processing", 
        "data science frameworks", 
        "data warehousing", 
        "database integration", 
        "debugging tools", 
        "deep learning frameworks", 
        "design thinking", 
        "desktop applications", 
        "distributed systems", 
        "Django REST framework", 
        "Docker Compose", 
        "Domain-Driven Design", 
        "e-commerce platforms",
        "embedded programming", 
        "emerging technologies", 
        "encryption algorithms", 
        "enterprise architecture", 
        "event-driven architecture", 
        "financial analysis",
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
        Math.floor(Math.random()*1000) + " inch to cm" 
    ];
    
    let searchIn = document.getElementById("sb_form_q");

    let submitIn = document.getElementById("sb_form_go");

    
    searchIn.value = itemSer[Math.floor(Math.random() * itemSer.length)] + " " + itemSer[Math.floor(Math.random() * itemSer.length)] + " " + String.fromCharCode(Math.random() * (90 - 65) + 65) + String.fromCharCode(Math.random() * (90 - 65) + 65);
    
    submitIn.click(); 
    
    

}
