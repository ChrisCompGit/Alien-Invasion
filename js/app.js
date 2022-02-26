const main = (() => {


    //DOM Tree Elements
    const menu = document.querySelector(".menu-screen");
    const playButton = document.querySelector(".play-btn");
    const startScreen = document.querySelector(".start-screen");
    const rulesScreen = document.querySelector(".rules-screen");
    const rulesButton = document.querySelector(".menu-screen > div > div:nth-child(3)");
    const backToMenuButton = document.querySelector(".rules-screen > div > div:nth-child(2) > div:nth-child(1)")

    //Functions
    playButton.addEventListener("click",() =>{
        menu.classList.remove("hide");
        playButton.classList.add("hide");
        startScreen.classList.add("hide");
    });

    
    rulesButton.addEventListener("click",() =>{
        rulesScreen.classList.remove("hide");
        menu.classList.add("hide");
    });

    backToMenuButton.addEventListener("click",() =>{
        rulesScreen.classList.add("hide");
        menu.classList.remove("hide");
    });




    //Event Listeners






    //Init




})();