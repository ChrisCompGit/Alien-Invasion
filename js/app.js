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
        const testShip1 = new Spaceship (1, "1+2", 10, 1);
        const testShip2 = new Spaceship (2, "3+4", 10, 2);
        const testShip3 = new Spaceship (3, "5+6", 10, 3);
        const testShip4 = new Spaceship (4, "7+8", 10, 4);
        testShip1.shipMove();

    });

    


    //INIT




    


})();