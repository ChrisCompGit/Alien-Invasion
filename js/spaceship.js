
import {menu, playButton, startScreen, rulesButton, rulesScreen, backToMenuButton, startButton, form, level1, gameGrid1, gameGrid2} from "./DOMTree.js";

class Spaceship 
{
    //Properties

    difficulty;   
    type;
    speed;
    image;
    question;
    marginTop;
    shipBottom;
    gridPosition;
    DOMElement;
    shipMovement;
    DOMRect;
    shipRectMonitor;
    level;

    constructor(type, question, marginTop, position, difficulty, level)
    {
        this.type = type;
        this.question = question;
        this.marginTop = marginTop;
        this.gridPosition = position;
        this.difficulty = difficulty;
        this.level = level;

        if(type == 1)
        {
            this.speed = .6;
            this.image = "../media/Game-Objects/Spaceship-1.png";
        }
        else if(type == 2)
        {
            this.speed = .4;
            this.image = "../media/Game-Objects/Spaceship-2.png";
        }
        else if(type == 3)
        {
            this.speed = .32;
            this.image = "../media/Game-Objects/Spaceship-3.png";
        }
        else if(type == 4)
        {
            this.speed = .7;
            this.image = "../media/Game-Objects/Spaceship-4.png";
        }
        else if(type == 5)
        {
            this.speed = .6;
            this.image = "../media/Game-Objects/Spaceship-5.png";
        }


        this.createSpaceship();
        this.hardDifficultyCheck();
        this.shipMove(true);
        this.getDOMRect();
    }


    //Methods

    displayQuestionsFromAPI (a) {

        console.log(a)

    }  

    createSpaceship () {
        //Create div for spaceship
        let spaceshipDom;
        console.log(this.level);
        
        if (this.level == 1) {
            spaceshipDom = gameGrid1.appendChild(document.createElement("div"));
        } else if (this.level == 2) {
            spaceshipDom = gameGrid2.appendChild(document.createElement("div"));
        }
        console.log(spaceshipDom);

        //Add question
        const question = spaceshipDom.appendChild(document.createElement("p"));
        question.innerText = this.question;
        

        //Style the div
        spaceshipDom.style.cssText = `
        display: grid;
        height: 200px;
        width: 199px;
        grid-column: ${this.gridPosition};
        grid-row: 1 / 5;
        background: url(${this.image}) no-repeat center center/cover;
        text-align: center;
        align-content: center;
        justify-content: center;
        margin-top: ${this.marginTop}px;
        align-self: start;
        margin-bottom: -3000px;
        `;

        //Style the answer
        question.style.backgroundColor = "black";
        question.style.color = "red";
        question.style.fontSize = "25px";
        question.style.padding = "0px 10px";

        //Assign it to property
        this.DOMElement = spaceshipDom;
    }


    //Make the Spaceshio move
    shipMove(b) {

        if (b) {
            this.shipMovement = setInterval(()=>{
                
                this.DOMElement.style.marginTop = `${this.marginTop+this.speed}px`;
                this.marginTop = parseFloat(this.DOMElement.style.marginTop);

            }, 25)
        }

        if (!b) {
            clearInterval(this.shipMovement);
            console.log("test");
        } 
    }

    shipStop() {
        clearInterval(this.shipMovement);
    }


    getDOMRect () {
        const DOMRectMonitor = setInterval(()=>{
            this.DOMRect = this.DOMElement.getBoundingClientRect();

    }, 2);
    this.shipRectMonitor = DOMRectMonitor;
    }
    

    hardDifficultyCheck () {
        if (this.difficulty == 1) {
            this.speed *= 1.25;
        }
    }

    clearShip() {
        this.shipStop();
        this.DOMElement.remove();

        clearInterval(this.shipRectMonitor);

    }

}




export {Spaceship};

