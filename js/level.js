
import {menu, playButton, rulesButton, exitMenuButton, startScreen, rulesScreen, backToMenuButton, exitRulesButton, startButton, form, level1, easyDifficulty, hardDifficulty, timerNode, gameOverScreen, scoreCounterNode, hitCounterNode, missCounterNode,  gameGrid1, gameGrid2} from "./DOMTree.js";
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
    level;
    playerName;
    currentLevel;
    correctQuestion;
    audio;
    collisionResult;
    spaceshipHit;
    questionHit;
    gameOver;
    collisionCheckInterval;
    scoreCounter;
    gameWon;
    level;

    //score;


    constructor (timer, difficulty, hitCounter, missCounter, level, playerName, currentLevel, questionsArray, answer, audio)
    {
        this.timer = timer;
        this.difficulty = difficulty;
        this.hitCounter = hitCounter;
        this.missCounter = missCounter;
        this.level = level;
        this.playerName = playerName;
        this.currentLevel = currentLevel;
        this.answer = answer;
        this.audio = audio;

        this.startTimer ();
        this.createSpaceships (this.difficulty, this.level);
        this.createCannon(3, this.level);
        
        /* const intervalTest = setTimeout(() => {
        this.collisionTest ();
        }, 200)*/
        this.collisionTest ();
        
        //this.gameOverFunc();
        //this.checkCounters();
        //this.updateCounters();

    }

    startTimer () {
        
        this.timeRef= setInterval(()=>{
            
            let timerElement;

            if (this.level == 1){
                timerElement = timerNode[0];
            }
            else if (this.level == 2){
                timerElement = timerNode[1];
            }

            this.timer -= 3;
            timerElement.innerHTML = "Timer: " + this.timer;
             
            if(this.timer < 60)
            {
                timerElement.style.color="yellow";
            }

            if(this.timer < 30)
            {
                timerElement.style.color="red";
            }

            if(this.timer <= 0)
            {
                this.gameWon = true;
                /*for (const currentSpaceship of this.spaceshipArray) {
                    currentSpaceship.shipStop();
                    currentSpaceship.clearShip();
                }
                console.log(this.spaceshipArray);
                this.cannon.clearCannon();*/
                this.clearLevel();
                clearInterval(this.timeRef);
                
                
                //this.gameOverFunc();
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

                let operation;
                if (this.level == 1) {
                    operation = `+`
                } else if (this.level == 2) {
                    operation = `-`
                }
    
                const createdQuestion = `${firstNum}${operation}${secondNum}`;
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


    chooseQuestion() {
        const randomQuestionNumber = Math.floor(Math.random() * 4);
        const chosenQuestion = this.spaceshipArray[randomQuestionNumber].question

        
        return chosenQuestion;

    }

    questionAnswerReset () {

        const currentCannonPosition = this.cannon.gridPosition;

        //question reset
        const newQuestionsArray = this.createQuestions();
        for (let i = 0; i < this.spaceshipArray.length; i++) {
            this.spaceshipArray[i].question = newQuestionsArray[i];
            this.spaceshipArray[i].DOMElement.firstElementChild.innerText = newQuestionsArray[i];
        }

        //answer reset
        //const newAnswer = this.createAnswer();
        //this.cannon.DOMElement.firstElementChild.innerText = this.createAnswer();
        this.cannon.clearCannon();
        this.createCannon(currentCannonPosition, this.level);

    }


    createSpaceships (difficulty, level) {
    
        //turn Set into Array so it can be traversed in order
        const questionsArrayNew = this.createQuestions();
        //Placeholder Array for Spaceships
        let spaceshipArray = [];

        console.log(level);
    
    
        for (let i = 0; i < 5; i++) {
            const shipType = Math.floor(Math.random() * 4) + 1;
            const gridPositionTest = i + 1;
    
            const createdShip = new Spaceship (shipType, questionsArrayNew[i], 10, gridPositionTest, difficulty, level);
            spaceshipArray.push(createdShip);
        }
        
        this.spaceshipArray = spaceshipArray;
    
    }

    createCannon(gridPosition, level) {

        const randomQuestionNumber = Math.floor(Math.random() * 4);
        const chosenQuestion = this.chooseQuestion();
        this.correctQuestion = chosenQuestion;
        const answer = eval(chosenQuestion);

        //waApi.getShort(chooseQuestion).then(console.log, console.error)
        
        this.cannon = new Cannon (answer, gridPosition, level);

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
                


                if ((spaceshipRect !== undefined) && (cannonRect !== undefined)) {
                    if (((spaceshipRect.bottom - 50) > (cannonRect.top + 50)) && (this.cannon.gridPosition == currentSpaceship.gridPosition))
                    {
                        //alert(`Game Over`);
                        this.collisionResult = 0;
                        this.collisionEvent();
                        this.gameWon = false;
                        
                        //this.clearLevel();
                        //clearInterval(timeRef);
                    }

                    if ((spaceshipRect.bottom - 50) > (cannonRect.bottom - 60))
                    {
                        //alert(`Game Over`);
                        this.collisionResult = 0;
                        this.collisionEvent();
                        this.gameWon = false;

                        //this.clearLevel();
                        //clearInterval(timeRef);
                    }
                    if ((this.cannon.projectileRect !== undefined) && ((spaceshipRect.bottom - 50) > (this.cannon.projectileRect.top + 50)) && (currentSpaceship.gridPosition == this.cannon.projectileGridPosition)) {
                        //alert(`Hit`);
                        this.spaceshipHit = currentSpaceship;
                        this.collisionResult = 1;
                        //this.gameWon = true;
                        
                        this.questionHit = currentSpaceship.question;
                        this.collisionEvent();
                        this.collisionResult = undefined;

                    }

                }
            
            }
        }, 2)

        this.collisionCheckInterval = collision;

    }


    collisionClear () {

        clearInterval(this.collisionCheckInterval);
        
    }


    collisionEvent() {

            if (this.collisionResult == 0) {
                this.gameWon == false;
                //this.gameOverFunc();
            } 
            else if (this.collisionResult == 1)
            {
                if (this.questionHit == this.correctQuestion) {
                    const currentCannonPosition = this.cannon.gridPosition;
                    for (const currentSpaceship of this.spaceshipArray) {
                        currentSpaceship.clearShip();
                    }
                    this.checkCounters();
                    this.updateCounters();
                    this.cannon.clearCannon();
                    this.createSpaceships(this.difficulty, this.level);
                    this.createCannon(currentCannonPosition, this.level);
                    this.questionHit = ``;
                    this.collisionResult = undefined;

                } 
                else if ((this.questionHit !== this.correctQuestion) && (this.questionHit !==``) && (this.cannon.projectile !== undefined)) {
                    //console.log(this.questionHit);
                    //console.log(this.correctQuestion);
                    
                    this.checkCounters();
                    this.updateCounters();
                    this.questionAnswerReset();
                    
                    //this.collisionResult = undefined;

                    //console.log("test");
                     
                    //this.collisionClear();


                }
            }
        
    }

    checkCounters() {

        if (this.collisionResult == 1)
        {
            if (this.questionHit == this.correctQuestion) 
            {
                this.hitCounter++;
                this.scoreCounter++;
                //console.log(this.hitCounter);
            }
            
            else if ((this.questionHit !== this.correctQuestion) && (this.questionHit !==``) && (this.cannon.projectile !== undefined))
            {
                this.missCounter++;
            }
        }
    }

    updateCounters() {

        let hitElement;
        let scoreElement;
        let missElement;

        if (this.level == 1){
            hitElement = hitCounterNode[0];
            scoreElement = scoreCounterNode[0];
            missElement = missCounterNode[0];
        }
        else if (this.level == 2){
            hitElement = hitCounterNode[1];
            scoreElement = scoreCounterNode[1];
            missElement = missCounterNode[1];
        }

        if (this.questionHit == this.correctQuestion) 
        {
            hitElement.innerHTML = "Hit: " + this.hitCounter;
            this.scoreCounter = this.hitCounter * 100;
            scoreElement.innerHTML = "Score: " + this.scoreCounter;
        }    
        else if ((this.questionHit !== this.correctQuestion) && (this.questionHit !==``) && (this.cannon.projectile !== undefined))
        {
            missElement.innerHTML = "Miss: " + this.missCounter;
        }
    }


    clearLevel () {
        this.cannon.clearCannon();
        for (const currentSpaceship of this.spaceshipArray) {
            currentSpaceship.shipStop();
            currentSpaceship.clearShip();
        }
        this.collisionClear();


    }

    
    /*
    gameOverFunc() {

        if (this.gameOver == true)
        {
            level1.classList.add("hide");
            gameOverScreen.classList.remove("hide");
        }

    }*/



}

export {Level};