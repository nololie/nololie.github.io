const { links } = require("express/lib/response");

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
    var greeting = `<p>Good ${verb} and welcome to my portfolio site. I am Lehlohonolo Lawrence Lefatle, a full-stack web developer.</p>`;
    document.getElementsByClassName("greeting")[0].innerHTML = greeting;
}

function toggleMenu(e) {

    const sections = document.getElementsByTagName("section")

    for (i in sections) {
        if (i < 4) sections[i].style.display = "none";
    }

    const links = document.getElementsByClassName("link")

    for (i in links) {
        if (i < 4 && i !== 2) {
            links[i].style.display = "inline"
        }
    }

    e.style.display = "none"
    document.getElementsByClassName(e.id)[0].style.display = "block"

}

function showForm() {
    document.getElementsByTagName("form")[0].style.display = "block";
    document.getElementsByClassName("detailsHeading")[0].style.display = "none";
}