import {menu, playButton, rulesButton, exitMenuButton, startScreen, rulesScreen, backToMenuButton, exitRulesButton, startButton, form, level1, level2, easyDifficulty, hardDifficulty, timerNode, gameOverScreen, scoreCounterNode, hitCounterNode, missCounterNode, gameGrid1, gameGrid2, congratsScreen, userNameMenu, gameOverRestartButton, gameOverExitButton} from "./DOMTree.js";
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
        
        //Testing Spaceship
        
        /*const testShip1 = new Spaceship (1, "1+2", 10, 1);
        const testShip2 = new Spaceship (2, "3+4", 10, 2);
        const testShip3 = new Spaceship (3, "5+6", 10, 3);
        const testShip4 = new Spaceship (4, "7+8", 10, 4);
        const testShip5 = new Spaceship (5, "9+10", 10, 5);

        const spaceshipArray = [testShip1, testShip2, testShip3, testShip4, testShip5];*/
        //spaceshipArray.push = [testShip1, testShip2, testShip3, testShip4, testShip5];

        //const spaceshipArray = createSpaceships(0);
        //console.log (spaceshipArray);

        
    
        
        /* //Testing shipStop()

        function testStop () {

            testShip1.shipStop();
        }

        setTimeout(testStop, 5000);
        */
        
        /*
        const test = setInterval(()=>{
            console.log(testShip4.DOMRect)

        }, 3000) */



        //Testing Cannon

        //const testCannon = new Cannon ("3+4");
        
        /*document.addEventListener("keydown", event => {
            if(event.key===" ")
            {
                testCannon.cannonShoot();
            };
        });*/
              
                

        /* const intervalTest = setTimeout(() => {
        const testLevel = new Level (90, 0, 0, 0);
        }, 200) */
        const levelOne = new Level (90, 0, 0, 0, 1);

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
                const levelTwo = new Level (90, 0, 0, 0, 2);
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
    
                //const levelResultTestOne = setTimeout(() => {
                    
                //}, 30015)

            //console.log("test");
            //console.log(levelOne.gameWon);

        }, 30015)
           
    });

    /*gameOverRestartButton.addEventListener("click", () => {
        gameOverScreen.classList.add("hide");
        menu.classList.remove("hide");
        
    });
    
    gameOverExitButton.addEventListener("click", () => {
        gameOverScreen.classList.add("hide");
        playButton.classList.remove("hide");
        startScreen.classList.remove("hide");

    });*/



    //INIT





})();