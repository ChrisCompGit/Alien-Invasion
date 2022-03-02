import{menu, playButton, startScreen, rulesButton, rulesScreen, backToMenuButton, startButton, form, level1} from "./DOMTree.js";

class Cannon {
    gridPosition = 3;
    image;
    answer;
    cannonTop;
    DOMElement;


    constructor (answer) {
        this.answer = answer;
        this.image = "../media/Game-Objects/Cannon-Facing-Left.png";

        this.createCannon();
        this.cannonMove();
    }

    createCannon() {
        //Create the div for the spaceship
        const cannonDOM = gameGrid.appendChild(document.createElement("div"));

        //Add answer
        const answer = cannonDOM.appendChild(document.createElement("p"));
        answer.innerText = this.answer;

        //Style the div
        cannonDOM.style.cssText = `
        display: grid;
        height: 250px;
        width: 181px;
        grid-column: ${this.gridPosition};
        grid-row: 1 / 5;
        align-self: end;
        background: url(${this.image}) no-repeat center center/cover;
        text-align: center;
        align-content: center;
        justify-content: center;
        margin-bottom: -30px;
        `;

        //Style the answer
        answer.style.backgroundColor = "blue";
        answer.style.color = "white";
        answer.style.fontSize = "25px";
        answer.style.padding = "0px 10px";

        //Assign it to property
        this.DOMElement = cannonDOM;

    }

    cannonMove() {

        /*function buttonCheck(e) {
            if(e.key===ArrowRight)
            {
            if (this.gridPosition < 5)  
                {  
                this.gridPosition++;
                this.DOMElement.style.gridColumn = this.gridPosition;
                }
            }
            else if(e.key===ArrowLeft)
            {
                if (this.gridPosition > 1)  
                {  
                this.gridPosition--;
                this.DOMElement.style.gridColumn = this.gridPosition;
                }
            }
        }*/

        document.addEventListener("keydown", event => {
            if(event.key===ArrowRight)
            {
            if (this.gridPosition < 5)  
                {  
                this.gridPosition++;
                this.DOMElement.style.gridColumn = this.gridPosition;
                }
            }
            else if(event.key===ArrowLeft)
            {
                if (this.gridPosition > 1)  
                {  
                this.gridPosition--;
                this.DOMElement.style.gridColumn = this.gridPosition;
                }
            }
        })
    }

}

export {Cannon};