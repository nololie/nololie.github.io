function setGreeting() {
    var hour = new Date().getHours();
    var verb = "";

    if (hour >= 00 && hour < 12) {
        verb = "morning";
    } else if (hour >= 12 && hour < 17) {
        verb = "afternoon";
    } else if (hour >= 17 || hour < 00) {
        verb = "evening";
    }
    var greeting = `<p>Good ${verb} and welcome to my portfolio site. I am Lehlohonolo Lawrence Lefatle, a full-stack web developer.</p>`;
    document.getElementsByClassName("greeting")[0].innerHTML = greeting;
}

function toggleMenu(e) {

    const sections = document.getElementsByTagName("section");

    // hide all content sections and remove any active borders
    for (i in sections) {
        if (i < 4) sections[i].style.display = "none";
    }

    // display the content section of the recently clicked link
    document.getElementsByClassName(e.id)[0].style.display = "block";

    // reset the active  content sections
    const links = document.getElementsByClassName("innerNav");
    for (const i in links) {
        links[i].style = "border-bottom: none";
    }

    // indicate active content section
    e.childNodes[1].style = "border-bottom: 1.5px red solid";
}

function showForm() {
    document.getElementsByTagName("form")[0].style.display = "block";
    document.getElementsByClassName("detailsHeading")[0].style.display = "none";
}