import{menu, playButton, rulesButton, exitMenuButton, startScreen, rulesScreen, backToMenuButton, exitRulesButton, startButton, form, level1, easyDifficulty, hardDifficulty} from "./DOMTree.js";
import { Spaceship } from "./spaceship.js";

const main = (() => {


    //FUNCTIONS





    //EVENT LISTENERS

    //Home Page
    playButton.addEventListener("click",() =>{
        menu.classList.remove("hide");
        playButton.classList.add("hide");
        startScreen.classList.add("hide");
    });

    //Menu Screen
    startButton.addEventListener("click",() =>{
        menu.classList.add("hide");
        form.classList.remove("hide");
    });
    
    rulesButton.addEventListener("click",() =>{
        rulesScreen.classList.remove("hide");
        menu.classList.add("hide");
    });

    exitMenuButton.addEventListener("click",() =>{
        menu.classList.add("hide");
        playButton.classList.remove("hide");
        startScreen.classList.remove("hide");
    });

    //Rules Screen

    backToMenuButton.addEventListener("click",() =>{
        rulesScreen.classList.add("hide");
        menu.classList.remove("hide");
    });

    exitRulesButton.addEventListener("click",() =>{
        rulesScreen.classList.add("hide");
        playButton.classList.remove("hide");
        startScreen.classList.remove("hide");
    });

    //Gameplay LVL 1
    easyDifficulty.addEventListener("click",() => {
        menu.classList.add("hide");
        level1.classList.remove("hide");
        
        //test
        const testShip = new Spaceship (1, "1+2", 10, 1);

    });


    //INIT




    


})();