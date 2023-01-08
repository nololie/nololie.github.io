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

    document.getElementById("projects").style.display = "none";
    document.getElementById("Overlay").style.display = "none";
    document.getElementById("skills").style.display = "none";

    document.getElementById("link1").style.display = "inline";
    document.getElementById("link3").style.display = "inline";

    if (e.id == "link1") {
        document.getElementById("projects").style.display = "block";
        document.getElementById("link1").style.display = "none";
    } else if (e.id == "link3") {
        document.getElementById("skills").style.display = "block";
        document.getElementById("link3").style.display = "none";
    }

}

function showForm() {
    document.getElementsByTagName("form")[0].style.display = "block";
    document.getElementsByClassName("detailsHeading")[0].style.display = "none";
}