
import {menu, playButton, rulesButton, exitMenuButton, startScreen, rulesScreen, backToMenuButton, exitRulesButton, startButton, form, level1, easyDifficulty, hardDifficulty, timerNode} from "./DOMTree.js";
import { Spaceship } from "./spaceship.js";
import { Cannon } from "./cannon.js";


class Level {

    //Properties
    
    timer;
    spaceshipsArray;
    cannon;
    difficulty;
    hitCounter;
    missCounter;
    playerName;
    currentLevel;
    questionsArray;
    answer;
    audio;
    collisionResult;
    spaceshipHit;
    //score;


    constructor (timer, spaceships, cannon, difficulty, hitCounter, missCounter, playerName, currentLevel, questionsArray, answer, audio)
    {
        this.timer = timer;
        this.spaceshipsArray = spaceships;
        this.cannon = cannon;
        this.difficulty = difficulty;
        this.hitCounter = hitCounter;
        this.missCounter = missCounter;
        this.playerName = playerName;
        this.currentLevel = currentLevel;
        this.questionsArray = questionsArray;
        this.answer = answer;
        this.audio = audio;

    
        this.startTimer ();

        this.collisionTest ();

    }

    startTimer () {
        
        const timeRef= setInterval(()=>{

            this.timer--;
            timerNode.innerHTML = this.timer;

            if(this.timer === 0)
            {
                clearInterval(timeRef)
                //endGame();
            } 
        },1000);
    }

    collisionTest () {

        const collision = setInterval(() => {

            let cannonRect = this.cannon.DOMRect;

            for (let i = 0; i < this.spaceshipsArray.length; i++) {

                const currentSpaceship = this.spaceshipsArray[i];
                // console.log(spaceship);
                const spaceshipRect = currentSpaceship.DOMRect;
                //console.log("Spaceship rect" + spaceshipRect.bottom);
                //console.log("Cannon rect" + cannonRect.top);



                if (((spaceshipRect.bottom - 50) > (cannonRect.top + 50)) && (this.cannon.gridPosition == currentSpaceship.gridPosition))
                {
                    alert(`Game Over`);
                    this.collisionResult = 0;
                }

                if ((spaceshipRect.bottom - 50) > (cannonRect.bottom - 60))
                {
                    alert(`Game Over`);
                    this.collisionResult = 0;
                }
                if ((this.cannon.projectile != undefined) && (this.cannon.projectileRect != undefined) && ((spaceshipRect.bottom - 50) > (this.cannon.projectileRect.top + 50))) {
                    alert(`Hit`);
                    this.collisionResult = 1;
                    this.spaceshipHit = this.spaceshipsArray[i];
                }
            
            };
        }, 2) 
    }

}

export {Level};