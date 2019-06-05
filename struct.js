var people = [];

function loadPeople(){
    people = [];
    people.push(new Submission(0, "Debra Mattson", "58", ["/images/Deb1.jpg", "/images/Deb2.jpg", "/images/Deb3.jpg"], ["", "", "Have to be honest....after raising 8 children, there is little that overwhelms me. Uncle Ed said to take a pic of my calendar. "], "Erie, Pennsylvania ", {lat:42.1292241, lng: -80.085059}));
    people.push(new Submission(1, "Rajiv Shenoy", "32", ["/images/Rajiv1.jpg", "/images/Rajiv2.jpg", "/images/Rajiv3.jpg"], ["", "My family brings me joy ", "Tarantulas and lizards inside my home overwhelm me,"], "Dallas, Texas ", {lat:32.7766642, lng: -96.7969879}));
    people.push(new Submission(2, "Tim Chambers", "49", ["/images/TimC1.jpg", "/images/TimC2.jpg", "/images/TimC3.jpg"], ["Loves basketball, family, and traveling.", "Cooking with kids gives me joy. ", ""], "Sydney, Australia ", {lat:-33.8688197, lng: 151.2092955}));
    people.push(new Submission(3, "Jackson Walti", "19", ["/images/Jackson1.jpeg", "/images/Jackson2.jpeg", "/images/Jackson3.jpeg"], ["", "", ""], "Vevey, Switzerland ", {lat:46.3628333, lng: 6.9419192}));
    people.push(new Submission(4, "Carla Garfield", "62", ["/images/Carla1.jpg", "/images/Carla2.jpg", "/images/Carla3.jpg"], ["Me tearing my hair out over the move!", "My grandson Calvin. ", "We're moving tomorrow! Lots still to do here, with time out for a picnic and remembrance."], "Montclair, New Jersey ", {lat:40.8259007, lng: -74.2090053}));
    people.push(new Submission(5, "Jeanne Walti", "", ["/images/Jeanne1.jpg", "/images/Jeanne2.jpg", "/images/Jeanne3.jpg"], ["", "Music brings me great joy.", "Working with lesson plans can be overwhelming."], "Vevey, Switzerland ", {lat:46.4628333, lng: 6.8419192}));
    people.push(new Submission(6, "ShayLa Arnett", "32", ["/images/Shayla1.jpg", "/images/Shayla2.jpg", "/images/Shayla3.png"], ["", "My children bring me joy. ", "I currently have the overwhelming feeling of needing to speed up my path to success. When I say success, I mean meeting the expectations and goals that I set for myself after graduating college."], "Saginaw, Michigan ", {lat:43.4194699, lng: -83.9508068}));
    people.push(new Submission(7, "David Sample", "50", ["/images/David1.jpg", "/images/David2.jpg", "/images/David3.jpg"], ["", "", "I made a collage for the overwhelming part. "], "Alexandria, Virginia ", {lat:38.8048355, lng: -77.0469214}));
    people.push(new Submission(8, "Tim Hewitt", "50", ["/images/TimH1.jpg", "/images/TimH2.jpg", "/images/TimH3.jpg"], ["", "My daughter and my brand new grandson for something that brings me joy. ", "[This] is a picture I took showing global warming (it is a glacier in Alaska and how much it has retreated in the last 14 years) to show something that is overwhelming to me (climate change). That is the Exit Glacier near Seward Alaska and they have signs along the hike up to it showing where it was in previous years. At one time it extended 8 miles further than it does now."], "Lockhaven, Pennsylvania ", {lat:41.1370133, lng: -77.4469263}));
    people.push(new Submission(9, "Kevin Izzard", "57", ["/images/Kevin1.jpg", "/images/Kevin2.jpg", "/images/Kevin3.png"], ["", "Riding my mountain bike in the countryside close to where I live, something which always brings me joy.", "Screenshot of the UK political news, which brings me pretty close to despair these days."], "Eastbourne, UK ", {lat:50.768035, lng: 0.290472}));
    people.push(new Submission(10, "Karla", "48", ["/images/Karla1.jpg", "/images/Karla2.jpg", "/images/Karla3.jpg"], ["", "My alters are pure bliss for me ", "Dirty dishes I hate."], "Heredia, Costa Rica ", {lat:9.9981413, lng: -84.1197643}));
    people.push(new Submission(11, "Kateryna", "21", ["/images/Kateryna1.png", "/images/Kateryna2.jpg", "/images/Kateryna3.jpg"], ["", "Dancing brings me joy.", "Editing the web-site really overwhelms me. "], "Kyiv, Ukraine ", {lat:50.4501, lng: 30.5234}));
    people.push(new Submission(12, "Poonam", "49", ["/images/Poonam1.jpg", "/images/Poonam2.jpg", "/images/Poonam3.jpg"], ["", "My moment of joy is a nicely served cup of coffee with a close friend or family. ", "I find nature very overwhelming... specifically blooms like this. "], "Gurgaon, India ", {lat:28.3594965, lng: 77.1266383}));
    people.push(new Submission(13, "Brad Knabel", "52", ["/images/Brad1.jpeg", "/images/Brad2.jpeg", "/images/Brad3.jpeg"], ["", "Photos of my son give me joy.", "Work can be overwhelming at times."], "Rosslyn Farms, Pennsylvania ", {lat:40.4256246, lng: -80.0939445}));
    people.push(new Submission(14, "Ina Abraham", "45", ["/images/Ina1.jpg", "/images/Ina2.jpg", "/images/Ina3.jpg"], ["This is me happy happy with my plants.", "My plants and herb garden give me joy. ", "What overwhelms me is unfinished projects, like these bins of old photographs which need to be sorted and scanned. Some photos have been lying in this state for 25 years! "], "Gurgaon, India ", {lat:28.4594965, lng: 77.0266383}));
    people.push(new Submission(15, "Anya, Marco Austriaco", "", ["/images/AnyaMarco1.jpg", "/images/AnyaMarco2.jpg", "/images/AnyaMarco3.jpg"], ["", "Our dogs give me joy everyday. This bunch was out very first liter from which we only kept 2. The rest are w friends in and around Manila.", "What overwhelms me is seeing our immediate family grow up together. This is the first time we were complete as my sister cane gone for a family reunion."], "Manila, Philippines", {lat:14.5995124, lng: 120.9842195}));
    people.push(new Submission(16, "Cathy Stalker", "45", ["/images/Cathy1.jpg", "/images/Cathy2.jpg", "/images/Cathy3.jpg"], ["", "This is a picture of something that gives me joy. It's a family photo from last summer. I love the family pics with extended family as my family is very small. ", "[This] is today's results in the European elections. The Brexit party won the most seats and it worries me that we are definitely going to have Brexit, possibly \"hard Brexit\" with no trade and travel agreements and life will become more difficult in lots of ways. It may be harder to travel around Europe for work and holidays, it will have a bad impact on the U.K. economy etc. "], "Saffron, Walden", {lat:52.022593, lng: 0.239215}));
    return people;
}

class Submission{
    constructor(id, name, age, images, comments, location, latlng){
        this.id = id;
        this.images = images;
        this.age = age;
        this.comments = comments;
        this.name = name;
        this.location = location;
        this.coords = latlng;
    }
}