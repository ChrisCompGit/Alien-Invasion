
import{menu, playButton, startScreen, rulesButton, rulesScreen, backToMenuButton, startButton, form, level1} from "./DOMTree.js";
type: module;

class Spaceship 
{
    //Properties

    type;
    speed;
    image;
    question;
    marginTop;
    bottomLine;
    gridPosition;
    DOMElement

    constructor(type, question, marginTop, position)
    {
        this.type = type;
        this.questions = question;
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
        }
        else if(type == 3)
        {
            this.speed = 5
        }

        this.createSpaceship()
    }


    //Methods

    displayQuestionsFromAPI (a) {

        console.log(a)

    }  

    createSpaceship () {
        //Create div for spaceship
        const spaceshipDOM = gameGrid.appendChild(document.createElement("div"));
        

        //Style the div
        spaceshipDOM.style.cssText = `
        height: 50px;
        width: 49px;
        grid-column: ${this.gridPosition};
        background: url(${this.image});
        margin-top: ${this.marginTop};
        `;

        //Assign it to property
        this.DOMElement = spaceshipDOM;
    }

}




export {Spaceship};

