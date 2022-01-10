function setGreeting() {   
    var verbs = ["morning", "afternoon", "evening"];
    var hour = new Date().getHours();
    console.log(hour)
    var verb = "";
    
    if (hour >= 05 && hour < 12){
        verb = verbs[0]
    }else if (hour >= 12 && hour < 17){
        verb = verbs[1]
    }else if (hour >=17 || hour < 05){
        verb = verbs[2]
    }
    console.log(verb)
    var greeting = `Good ${verb}, my name is Lehlohonolo Lawrence Lefatle. Welcome to my portfolio site.`;
    document.getElementsByClassName("greeting")[0].innerHTML = greeting;
}
