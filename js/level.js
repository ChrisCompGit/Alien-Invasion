
import {menu, playButton, rulesButton, exitMenuButton, startScreen, rulesScreen, backToMenuButton, exitRulesButton, startButton, form, level1, easyDifficulty, hardDifficulty, timerNode} from "./DOMTree.js";
import { Spaceship } from "./spaceship.js";
import { Cannon } from "./cannon.js";

//const WolframAlphaAPI = require('wolfram-alpha-api');
// const waApi = WolframAlphaAPI('42W65P-WRV9YT5WRW');


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
    correctnQuestion;
    audio;
    collisionResult;
    spaceshipHit;
    questionHit;
    gameOver;

    //score;


    constructor (timer, difficulty, hitCounter, missCounter, playerName, currentLevel, questionsArray, answer, audio)
    {
        this.timer = timer;
        this.difficulty = difficulty;
        this.hitCounter = hitCounter;
        this.missCounter = missCounter;
        this.playerName = playerName;
        this.currentLevel = currentLevel;
        this.answer = answer;
        this.audio = audio;

    
        this.startTimer ();
        this.createSpaceships (this.difficulty);
        this.createCannon(3);
        
        /* const intervalTest = setTimeout(() => {
        this.collisionTest ();
        }, 200)*/
        this.collisionTest ();
        this.collisionEvent()

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

    createQuestions () {
        let questionsSetFinal;

        let questionsUnique = false;
    
        //Create 5 unique questions
        do {
    
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

        const finalQuestionsArray = Array.from(questionsSetFinal);
        return finalQuestionsArray;
    }


    createAnswer() {
        const randomQuestionNumber = Math.floor(Math.random() * 4);
        const chosenQuestion = this.spaceshipArray[randomQuestionNumber].question

        return chosenQuestion;

    }

    questionAnswerReset () {

        //question reset
        const newQuestionsArray = this.createQuestions();
        for (let i = 0; i < this.spaceshipArray.length; i++) {
            this.spaceshipArray[i].question = newQuestionsArray[i];
            this.spaceshipArray[i].DOMElement.firstElementChild.innerText = newQuestionsArray[i];
        }

        //answer reset
        const newAnswer = this.createAnswer();
        this.cannon.DOMElement.firstElementChild.innerText = this.createAnswer();

    }


    createSpaceships (difficulty) {
    
        //turn Set into Array so it can be traversed in order
        const questionsArrayNew = this.createQuestions();
        //Placeholder Array for Spaceships
        let spaceshipArray = [];
    
    
        for (let i = 0; i < 5; i++) {
            const shipType = Math.floor(Math.random() * 4) + 1;
            const gridPositionTest = i + 1;
    
            const createdShip = new Spaceship (shipType, questionsArrayNew[i], 10, gridPositionTest);
            spaceshipArray.push(createdShip);
        }
        
        this.spaceshipArray = spaceshipArray;
    
    }

    createCannon(gridPosition) {

        const randomQuestionNumber = Math.floor(Math.random() * 4);
        const answer = this.createAnswer();
        this.correctQuestion = answer;

        //waApi.getShort(chooseQuestion).then(console.log, console.error)

        this.cannon = new Cannon (answer, gridPosition);

    }

    collisionTest () {


         const collision = setInterval(() => {


            let cannonRect = this.cannon.DOMRect;

            // let i = 0; i < this.spaceshipArray.length; i++
            for (const currentSpaceship of this.spaceshipArray) {

                //const currentSpaceship = this.spaceshipArray[i];
                // console.log(spaceship);
                const spaceshipRect = currentSpaceship.DOMRect;
                const questionTest = currentSpaceship.question;
                //console.log("Spaceship rect" + spaceshipRect.bottom);
                //console.log("Cannon rect" + cannonRect.top);


                if (spaceshipRect !== undefined) {
                    if (((spaceshipRect.bottom - 50) > (cannonRect.top + 50)) && (this.cannon.gridPosition == currentSpaceship.gridPosition))
                    {
                        alert(`Game Over`);
                        this.collisionResult = 0;
                        this.collisionEvent();
                    }

                    if ((spaceshipRect.bottom - 50) > (cannonRect.bottom - 60))
                    {
                        alert(`Game Over`);
                        this.collisionResult = 0;
                        this.collisionEvent();
                    }
                    if ((this.cannon.projectile !== undefined) && (this.cannon.projectileRect !== undefined) && ((spaceshipRect.bottom - 50) > (this.cannon.projectileRect.top + 50)) && (currentSpaceship.gridPosition == this.cannon.gridPosition)) {
                        //alert(`Hit`);
                        this.spaceshipHit = currentSpaceship;
                        this.collisionResult = 1;
                        
                        this.questionHit = currentSpaceship.question;
                        this.collisionEvent();
                    }

                }
            
            }
        }, 2)
    }

    collisionEvent() {

        

            if (this.collisionResult == 0) {
                this.gameOver == true;
            } 
            else if (this.collisionResult == 1)
            {
                if (this.questionHit == this.correctQuestion) {
                    const currentCannonPosition = this.cannon.gridPosition;
                    for (const currentSpaceship of this.spaceshipArray) {
                        currentSpaceship.clearShip();
                    }
                    this.cannon.clearCannon();
                    this.createSpaceships();
                    this.createCannon(currentCannonPosition);
                    this.questionHit = ``;
                    this.collisionResult = undefined;

                } 
                else if ((this.questionHit !== this.correctQuestion) && (this.questionHit !==``) && (this.cannon.projectile !== undefined)) {
                    //console.log(this.questionHit);
                    //console.log(this.correctQuestion);
                    this.cannon.clearProjectileOnly();
                    this.questionAnswerReset();
                    this.collisionResult = undefined;


                }
            }
        
    }

}

export {Level};