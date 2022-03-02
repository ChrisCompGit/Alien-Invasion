
import{menu, playButton, startScreen, rulesButton, rulesScreen, backToMenuButton, startButton, form, level1} from "./DOMTree.js";

class Spaceship 
{
    //Properties

    type;
    speed;
    image;
    question;
    marginTop;
    shipBottom;
    gridPosition;
    DOMElement;

    constructor(type, question, marginTop, position)
    {
        this.type = type;
        this.question = question;
        this.marginTop = marginTop;
        this.gridPosition = position;

        if(type == 1)
        {
            this.speed = 10;
            this.image = "../media/Game-Objects/Spaceship-1.png";
        }
        else if(type == 2)
        {
            this.speed = 15
            this.image = "../media/Game-Objects/Spaceship-2.png";
        }
        else if(type == 3)
        {
            this.speed = 5
            this.image = "../media/Game-Objects/Spaceship-3.png";
        }
        else if(type == 4)
        {
            this.speed = 15
            this.image = "../media/Game-Objects/Spaceship-4.png";
        }
        else if(type == 5)
        {
            this.speed = 15
            this.image = "../media/Game-Objects/Spaceship-5.png";
        }


        this.createSpaceship();
        this.shipMove();
    }


    //Methods

    displayQuestionsFromAPI (a) {

        console.log(a)

    }  

    createSpaceship () {
        //Create div for spaceship
        const spaceshipDOM = gameGrid.appendChild(document.createElement("div"));

        //Add question
        const question = spaceshipDOM.appendChild(document.createElement("p"));
        question.innerText = this.question;
        

        //Style the div
        spaceshipDOM.style.cssText = `
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
        this.DOMElement = spaceshipDOM;
    }


    //Make the Spaceshio move
    shipMove() {

        const startMove = ()=>{ 
            const shipMovement = setInterval(()=>{
                this.DOMElement.style.marginTop = `${this.marginTop+this.speed}px`;
                this.marginTop = parseInt(this.DOMElement.style.marginTop);
            }, 1000)

        };

        startMove();

    }

    shipStop() {
        clearInterval(shipMovement);
    }

}




export {Spaceship};

