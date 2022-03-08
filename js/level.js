
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


    constructor (timer, cannon, difficulty, hitCounter, missCounter, playerName, currentLevel, questionsArray, answer, audio)
    {
        this.timer = timer;
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
        this.createSpaceships (this.difficulty);
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


    createSpaceships (difficulty) {
    
        let questionsSetFinal;
    
        //Create 5 unique questions
        do {
            let questionsUnique = false;
    
            const questionsSetTest = new Set();
    
            for (let i = 0; i < 5; i++) {
                const firstNum = Math.floor(Math.random() * 25) + 1;
                const secondNum = Math.floor(Math.random() * 9) + 1;
    
                const createdQuestion = `${firstNum}+${secondNum}`;
                questionsSetTest.add(createdQuestion);
            }
    
            if (questionsSetTest.size == 5) {
                questionsSetFinal = questionsSetTest;
                questionsUnique = true;
                break;
            }
    
        } while (!questionsUnique);
    
        //turn Set into Array so it can be traversed in order
        const finalQuestionsArray = Array.from(questionsSetFinal);
        //Placeholder Array for Spaceships
        let spaceshipArray = [];
    
    
        for (let i = 0; i < 5; i++) {
            const shipType = Math.floor(Math.random() * 4) + 1;
            const gridPositionTest = i + 1;
    
            const createdShip = new Spaceship (shipType, finalQuestionsArray[i], 10, gridPositionTest);
            spaceshipArray.push(createdShip);
        }
        
        this.spaceshipArray = spaceshipArray;
        this.questionsArray = finalQuestionsArray;
    
    }

    collisionTest () {


         const collision = setInterval(() => {


            let cannonRect = this.cannon.DOMRect;

            for (let i = 0; i < this.spaceshipArray.length; i++) {

                const currentSpaceship = this.spaceshipArray[i];
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