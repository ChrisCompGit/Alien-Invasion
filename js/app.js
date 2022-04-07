import {menu, playButton, rulesButton, exitMenuButton, startScreen, rulesScreen, backToMenuButton, exitRulesButton, startButton, form, level1, level2, easyDifficulty, hardDifficulty, timerNode, gameOverScreen, scoreCounterNode, hitCounterNode, missCounterNode, gameGrid1, gameGrid2, congratsScreen, userNameMenu, gameOverRestartButton, gameOverExitButton, congratsRestartButton, congratsExitButton} from "./DOMTree.js";
import { Spaceship } from "./spaceship.js";
import { Cannon } from "./cannon.js";
import { Level } from "./level.js";
// import { createSpaceships } from "./createSpaceships.js";


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
        userNameMenu.classList.add("hide");
        level1.classList.remove("hide");
        
        
        const levelOne = new Level (30, 0, 0, 0, 1);

        const gameOverChecker = setInterval(() => {
                if (levelOne.gameWon == false) {
                level1.classList.add("hide");
                gameOverScreen.classList.remove("hide");
                }
            }, 2);

        const levelResultTestOne = setTimeout(() => {    
            
            if (levelOne.gameWon == true) {
                level1.classList.add("hide");
                level2.classList.remove("hide");
                const levelTwo = new Level (30, 0, 0, 0, 2);
                console.log("test");

                const gameOverChecker = setInterval(() => {
                    if (levelTwo.gameWon == false) {
                        level2.classList.add("hide");
                        gameOverScreen.classList.remove("hide");
                    }
                }, 2);
                
                const levelResultTestOne = setTimeout(() => {
                    if (levelTwo.gameWon == true) {
                        level2.classList.add("hide");
                        congratsScreen.classList.remove("hide");
                        console.log(congratsScreen);
                    }
                    
                }, 30100)
            }


        }, 30100)
           
    });

    hardDifficulty.addEventListener("click",() => {
        userNameMenu.classList.add("hide");
        level1.classList.remove("hide");
        
        
        const levelOne = new Level (30, 1, 0, 0, 1);

        const gameOverChecker = setInterval(() => {
                if (levelOne.gameWon == false) {
                level1.classList.add("hide");
                gameOverScreen.classList.remove("hide");
                clearInterval(gameOverChecker);
                }
            }, 2);

        const levelResultTestOne = setTimeout(() => {    
            
            if (levelOne.gameWon == true) {
                level1.classList.add("hide");
                level2.classList.remove("hide");
                const levelTwo = new Level (30, 1, 0, 0, 2);
                console.log("test");

                const gameOverChecker = setInterval(() => {
                    if (levelTwo.gameWon == false) {
                        level2.classList.add("hide");
                        gameOverScreen.classList.remove("hide");
                        clearInterval(gameOverChecker);
                    }
                }, 2);
                
                const levelResultTestOne = setTimeout(() => {
                    if (levelTwo.gameWon == true) {
                        level2.classList.add("hide");
                        congratsScreen.classList.remove("hide");
                        clearTimeout(levelResultTestOne);
                    }
                    
                }, 30100)
            }


        }, 30100)


           
    });

    gameOverRestartButton.addEventListener("click", () => {
        gameOverScreen.classList.add("hide");
        //gameOverRestartButton.classList.add("hide");
        //gameOverExitButton.classList.add("hide");
        level1.classList.add("hide");
        level2.classList.add("hide");
        playButton.classList.add("hide");
        startScreen.classList.add("hide");
        menu.classList.remove("hide");
        userNameMenu.classList.remove("hide");

    });
    
    gameOverExitButton.addEventListener("click", () => {
        gameOverScreen.classList.add("hide");
        //gameOverRestartButton.classList.add("hide");
        //gameOverExitButton.classList.add("hide");
        level1.classList.add("hide");
        level2.classList.add("hide");
        menu.classList.add("hide");
        userNameMenu.classList.add("hide");
        playButton.classList.remove("hide");
        startScreen.classList.remove("hide");

    });

    congratsRestartButton.addEventListener("click", () => {
        congratsScreen.classList.add("hide");
        //congratsRestartButton.classList.add("hide");
        //congratsExitButton.classList.add("hide");
        level1.classList.add("hide");
        level2.classList.add("hide");
        playButton.classList.add("hide");
        startScreen.classList.add("hide");
        menu.classList.remove("hide");
        userNameMenu.classList.remove("hide");

    });
    
    
    congratsExitButton.addEventListener("click", () => {
        congratsScreen.classList.add("hide");
        //congratsRestartButton.classList.add("hide");
        //congratsExitButton.classList.add("hide");
        level1.classList.add("hide");
        level2.classList.add("hide");
        menu.classList.add("hide");
        userNameMenu.classList.add("hide");
        playButton.classList.remove("hide");
        startScreen.classList.remove("hide");

    });



})();