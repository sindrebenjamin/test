const body = document.querySelector("body");
const mobileNav = document.querySelector(".mobile-nav-wrapper");
const menuBtn = document.querySelector(".menu-btn");
const mobileNavOverlay = document.querySelector(".mobile-nav-overlay");
let menuOpen = false;


mobileNavOverlay.onclick = function() {
    toggleMenu();
}

menuBtn.onclick = function() {
    toggleMenu();
};

function toggleMenu() {
    if(!menuOpen) {
        menuBtn.classList.add("open");
        body.classList.add("scroll-lock");
        menuOpen = true;
    } else {
        menuBtn.classList.remove("open");
        body.classList.remove("scroll-lock");
        menuOpen = false;
    }
    
    mobileNav.classList.toggle("open-menu");
}



//Portfolio

const browser = document.querySelector(".browser-inside-wrapper");
const portfolioInfo = document.querySelectorAll(".portfolio-info");


// console.log(window.innerWidth);



//Arrows

const tilbake = document.querySelectorAll(".tilbake");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");


for(let i = 0; i < tilbake.length; i++) {

    tilbake[i].onclick = function() {
 
        clearReadme();
        for(let i = 0; i < portfolioInfo.length; i++) {
            portfolioInfo[i].classList.remove("hidden");
        }
    }

}



leftArrow.onclick = function() {

    
    

     if(!readmeLocations[0].classList.contains("hidden")) {
        clearReadme()
        
        
     } else if (!folderLocations[currentFolder].classList.contains("hidden")) {

        clearCurrentLocation() 
        toggleTopFolder();

    }

    checkArrows()

    
}

rightArrow.onclick = function() {


  

    if(folderLocations[currentFolder].classList.contains("hidden")) {
        
        folderLocations[currentFolder].classList.remove("hidden");
        toggleTopFolder();

    } else if(!folderLocations[currentFolder].classList.contains("hidden")) {
        
        openReadme(currentFolder);

    }

 
    
    checkArrows()


    
   
}


function checkArrows() {



    if(folderLocations[currentFolder].classList.contains("hidden")) {

        leftArrow.classList.add("arrow-disabled");
        leftArrow.classList.remove("arrow-active");
    }

    if(!folderLocations[currentFolder].classList.contains("hidden") && readmeLocations[0].classList.contains("hidden")) {
       
        rightArrow.classList.remove("arrow-disabled");
        rightArrow.classList.add("arrow-active");

    }

    if(!folderLocations[currentFolder].classList.contains("hidden") && readmeLocations[0].classList.contains("hidden")) {

        leftArrow.classList.remove("arrow-disabled");
        leftArrow.classList.add("arrow-active");

    }

    if(!readmeLocations[0].classList.contains("hidden")) {

        rightArrow.classList.add("arrow-disabled");
        rightArrow.classList.remove("arrow-active");
        

    }


}

//Locations

const topFolderLocation = document.querySelector(".top-folder-location");
const folderLocations = document.querySelectorAll(".folder-location");
const readmeLocations = document.querySelectorAll(".readme-location");


topFolderLocation.onclick = function() {


    arrowOverrideForTopFolderLocation()


    if(topFolder.classList.contains("inactive")) {

        
        clearCurrentLocation() 
        clearReadme()
        toggleTopFolder();

      

        
    }
    

}

function arrowOverrideForTopFolderLocation() {


    rightArrow.classList.remove("arrow-disabled");
    rightArrow.classList.add("arrow-active");

    leftArrow.classList.add("arrow-disabled");
    leftArrow.classList.remove("arrow-active");

    
}

for(let i = 0; i < folderLocations.length; i++) {

    folderLocations[i].onclick = function() {
        
        clearReadme()
        checkArrows()
    }

}

function clearCurrentLocation() {

    folderLocations.forEach(function(currentLocation) {

        currentLocation.classList.add("hidden");
        
    })

}


function clearReadme() {

    //Arrow + Readme
    

    browser.classList.remove("hidden");
    readmeFiles[currentFolder].classList.add("hidden");

    readmeLocations[0].classList.add("hidden");
    readmeLocations[1].classList.add("hidden");

    

}



//Readme Links


const readmeLinks = document.querySelectorAll(".readme");
const readmeFiles = document.querySelectorAll(".readme-file");

let currentReadmeFile = 0;

for(let i = 0; i < readmeLinks.length; i++) {
   
    readmeLinks[i].onclick = function() {

        currentReadmeFile = i;
        openReadme(i);
        checkArrows()

        if(window.innerWidth <= 888) {

            for(let i = 0; i < portfolioInfo.length; i++) {
                portfolioInfo[i].classList.add("hidden");
            }
            
        }

    }
}

function openReadme(link) {

    readmeLocations[0].classList.remove("hidden");
    readmeLocations[1].classList.remove("hidden");

    browser.classList.add("hidden");
    readmeFiles[link].classList.remove("hidden");


}


//Folders and files


const topFolder = document.querySelector(".top-folder");
const folders = document.querySelectorAll(".folder");
const files = document.querySelectorAll(".files");


let currentFolder = 0;

 topFolder.onclick = function() {



    if(!topFolder.classList.contains("inactive")) {

        folderLocations[currentFolder].classList.remove("hidden");

    } else {
        folderLocations[currentFolder].classList.add("hidden");
    }

    toggleTopFolder()
    checkArrows()


}

function toggleTopFolder() {

    //Checks if files are open or closed

    if(topFolder.classList.contains("inactive") && !files[currentFolder].classList.contains("hidden")) {

        files[currentFolder].classList.add("hidden");

    } else if(topFolder.classList.contains("inactive") && files[currentFolder].classList.contains("hidden") && !folders[currentFolder].classList.contains("inactive")) {

        files[currentFolder].classList.add("hidden");

    } else {
        files[currentFolder].classList.remove("hidden");
    }
    
 
    topFolder.classList.toggle("inactive");
    


    for(let i = 0; i < folders.length; i++) {

        folders[i].classList.toggle("hidden");
      
    }

}



//Folders - active or inactive

for(let i = 0; i < folders.length; i++) {
    
    folders[i].onclick = function() {
      
    currentFolder = i;
    addInactive(i);
    addHidden(i);
    changeLocation(i);
  }
  
}

function changeLocation(currentLocation) {

    for(let i = 0; i < folderLocations.length; i++) {

        if (i === currentLocation) {
            folderLocations[i].classList.remove("hidden");
            continue;
        }

        folderLocations[i].classList.add("hidden");

    }

}



function addInactive(currentFolder) {

    for(let i = 0; i < folders.length; i++) {

         if (i === currentFolder) {

            folders[i].classList.remove("inactive");
            continue;
         }
         

        folders[i].classList.add("inactive");
  

    }
}

//Files - hide or display


function addHidden(currentFiles) {

    for(let i = 0; i < files.length; i++) {

        if (i === currentFiles) {

           files[i].classList.toggle("hidden");
           continue;
        }
        

       files[i].classList.add("hidden");
 

   }

}