const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.to('.name span', {y: "0%", duration: 1, stagger: 0.25});
// tl.to('.name', {y: "-1190%", duration: 1, stagger: 0.25});
// tl.to('.name1', {y: "-1170%", duration: 1, stagger: 0.25}, "-=1");
// tl.to('.name', {fontSize: 20, duration: 1, stagger: 0.25}, "-=1");
// tl.to('.name', {height: "7%", duration: 1, stagger: 0.25}, "-=2");
// tl.to('.name1', {fontSize: 15, duration: 1, stagger: 0.25}, "-=1");
tl.to('.intro', {opacity: 0, duration: 1.5, delay: 1});
tl.to('.intro', {zIndex:-100});

document.getElementById('navcheckbox').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('navbox').style.display = "flex";
        document.getElementById('navbar').style.background = "#08080e";
    } else {
        document.getElementById('navbox').style.display = "none";
        document.getElementById('navbar').style.background = "transparent";
    }
})

document.getElementById('headAbout').addEventListener("mousedown", function() {
    document.getElementById('displayAbout').style.display = "flex";
    document.getElementById('displaySkills').style.display = "none";
    document.getElementById('displayProject').style.display = "none";
    document.getElementById('displayExp').style.display = "none";
    document.getElementById('displayContact').style.display = "none";
    document.getElementById('headAbout').classList.add("navselected");
    document.getElementById('headSkill').classList.remove("navselected");
    document.getElementById('headProject').classList.remove("navselected");
    document.getElementById('headExp').classList.remove("navselected");
    document.getElementById('headContact').classList.remove("navselected");
    if (screen.width <= 560) {
        document.getElementById('navbox').style.display = "none";
        document.getElementById('navbar').style.background = "transparent";
        document.getElementById("navcheckbox").checked = false;
    }
})

document.getElementById('headSkill').addEventListener("mousedown", function() {
    document.getElementById('displayAbout').style.display = "none";
    document.getElementById('displaySkills').style.display = "flex";
    document.getElementById('displayProject').style.display = "none";
    document.getElementById('displayExp').style.display = "none";
    document.getElementById('displayContact').style.display = "none";
    document.getElementById('headAbout').classList.remove("navselected");
    document.getElementById('headSkill').classList.add("navselected");
    document.getElementById('headProject').classList.remove("navselected");
    document.getElementById('headExp').classList.remove("navselected");
    document.getElementById('headContact').classList.remove("navselected");
    if (screen.width <= 560) {
        document.getElementById('navbox').style.display = "none";
        document.getElementById('navbar').style.background = "transparent";
        document.getElementById("navcheckbox").checked = false;
        window.addEventListener('touchstart', function() {
            document.getElementById('scrollmessage').style.display = "none";
        });
    }
})

document.getElementById('headProject').addEventListener("mousedown", function() {
    document.getElementById('displayAbout').style.display = "none";
    document.getElementById('displaySkills').style.display = "none";
    document.getElementById('displayProject').style.display = "block";
    document.getElementById('displayExp').style.display = "none";
    document.getElementById('displayContact').style.display = "none";
    document.getElementById('headAbout').classList.remove("navselected");
    document.getElementById('headSkill').classList.remove("navselected");
    document.getElementById('headProject').classList.add("navselected");
    document.getElementById('headExp').classList.remove("navselected");
    document.getElementById('headContact').classList.remove("navselected");
    if (screen.width <= 560) {
        document.getElementById('navbox').style.display = "none";
        document.getElementById('navbar').style.background = "transparent";
        document.getElementById("navcheckbox").checked = false;
    }
})

document.getElementById('headExp').addEventListener("mousedown", function() {
    document.getElementById('displayAbout').style.display = "none";
    document.getElementById('displaySkills').style.display = "none";
    document.getElementById('displayProject').style.display = "none";
    document.getElementById('displayExp').style.display = "block";
    document.getElementById('displayContact').style.display = "none";
    document.getElementById('headAbout').classList.remove("navselected");
    document.getElementById('headSkill').classList.remove("navselected");
    document.getElementById('headProject').classList.remove("navselected");
    document.getElementById('headExp').classList.add("navselected");
    document.getElementById('headContact').classList.remove("navselected");
    if (screen.width <= 560) {
        document.getElementById('navbox').style.display = "none";
        document.getElementById('navbar').style.background = "transparent";
        document.getElementById("navcheckbox").checked = false;
    }
})
document.getElementById('pmlink').addEventListener("mousedown", function() {
    document.getElementById('displayAbout').style.display = "none";
    document.getElementById('displaySkills').style.display = "none";
    document.getElementById('displayProject').style.display = "none";
    document.getElementById('displayExp').style.display = "block";
    document.getElementById('displayContact').style.display = "none";
    document.getElementById('headAbout').classList.remove("navselected");
    document.getElementById('headSkill').classList.remove("navselected");
    document.getElementById('headProject').classList.remove("navselected");
    document.getElementById('headExp').classList.add("navselected");
    document.getElementById('headContact').classList.remove("navselected");
})

document.getElementById('headContact').addEventListener("mousedown", function() {
    document.getElementById('displayAbout').style.display = "none";
    document.getElementById('displaySkills').style.display = "none";
    document.getElementById('displayProject').style.display = "none";
    document.getElementById('displayExp').style.display = "none";
    document.getElementById('displayContact').style.display = "flex";
    document.getElementById('headAbout').classList.remove("navselected");
    document.getElementById('headSkill').classList.remove("navselected");
    document.getElementById('headProject').classList.remove("navselected");
    document.getElementById('headExp').classList.remove("navselected");
    document.getElementById('headContact').classList.add("navselected");
    if (screen.width <= 560) {
        document.getElementById('navbox').style.display = "none";
        document.getElementById('navbar').style.background = "transparent";
        document.getElementById("navcheckbox").checked = false;
    }
})
