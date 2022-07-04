function setGreeting() {
    var hour = new Date().getHours();
    var verb = "";

    if (hour >= 00 && hour < 12) {
        verb = "morning"
    } else if (hour >= 12 && hour < 17) {
        verb = "afternoon"
    } else if (hour >= 17 || hour < 00) {
        verb = "evening"
    }
    var greeting = `Good ${verb} I am Lehlohonolo Lefatle, a full-stack web developer. Welcome to my portfolio site.`;
    document.getElementsByClassName("greeting")[0].innerHTML = greeting;
}

function showForm() {
    document.getElementsByTagName("form")[0].style.visibility = "visible";
    document.getElementsByClassName("detailsHeading")[0].style.visibility = "hidden";
}

// How to send form data straight to email?

