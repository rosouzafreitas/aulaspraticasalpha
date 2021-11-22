function aboutMe () {
    let firstload = document.querySelector(".aboutmebtn");
    firstload.focus();
    let aboutme_content = document.querySelectorAll(".aboutme");
    let length = aboutme_content.length;
    for (index=0;index<length;index++) {
        aboutme_content[index].style.display = "flex";
    }
    let abtthembtn = document.querySelector(".aboutthembtn");
    let aboutthem_content = document.querySelectorAll(".aboutthem");
    let length2 = aboutthem_content.length;
    for (index=0;index<length2;index++) {
        aboutthem_content[index].style.display = "none";
    }
    document.querySelector('header').style.backgroundColor = "#df997e"
    document.querySelector('span').innerHTML = "Click the 'About Them' button to know my favorite artists!"
}
function aboutThem () {
    let firstload = document.querySelector(".aboutmebtn");
    firstload.focus();
    let aboutme_content = document.querySelectorAll(".aboutme");
    let length = aboutme_content.length;
    for (index=0;index<length;index++) {
        aboutme_content[index].style.display = "none";
    }
    let abtthembtn = document.querySelector(".aboutthembtn");
    abtthembtn.focus();
    let aboutthem_content = document.querySelectorAll(".aboutthem");
    let length2 = aboutthem_content.length;
    for (index=0;index<length2;index++) {
        aboutthem_content[index].style.display = "flex";
    }
    document.querySelector('header').style.backgroundColor = "#202020"
    document.querySelector('span').innerHTML = "Click the 'About Me' button to go back"
}