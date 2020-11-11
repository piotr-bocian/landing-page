const toggleContact = () => {
    if(document.getElementById('contact').style.display==""){
    document.getElementById('contact').style.display="flex";
    document.getElementById('about-me').style.display="";
    }
    else{
    document.getElementById('contact').style.display="";
    }
}

const toggleAbout = () => {
    if(document.getElementById('about-me').style.display==""){
        document.getElementById('contact').style.display="";
    document.getElementById('about-me').style.display="flex";
    }
    else{
    document.getElementById('about-me').style.display="";
    }
}

const toggleProjects = () => {
    document.getElementById('projects').style.display="flex";
}


const slideOut = () => {
    document.getElementById('projects').style.animation="";
    document.getElementById('projects').style.animation="slide-out 1s both";
    setTimeout(() => {
        document.getElementById('projects').style.display="";
        document.getElementById('projects').style.animation="slide-in-projects 1s";
    
    },
    1000);
    
   
}

const offSound = () => {
    if(document.getElementById("ambient").paused){
        document.getElementById('speaker').src="./assets/volume-line.svg";
        document.getElementById("ambient").play();
  
    }
    else{
        document.getElementById('speaker').src="./assets/silent-line.svg";
        document.getElementById("ambient").pause();
    }
};