import {menu, playButton, startScreen, rulesButton, rulesScreen, backToMenuButton, startButton, form, level1,  gameGrid1, gameGrid2} from "./DOMTree.js";

class Cannon {
    gridPosition;
    image;
    answer;
    cannonTop;
    DOMElement;
    DOMRect;
    projectile;
    projectileRect;
    projectileGridPosition;
    level;



    constructor (answer, gridPosition, level) {

        this.answer = answer;
        this.gridPosition = gridPosition;
        this.level = level;
        this.image = "../media/Game-Objects/Cannon-Facing-Left.png";

        this.createCannon();
        this.cannonMove();
        this.getDOMRect();
        this.cannonShoot();
        
        
    }

    createCannon() {
        //Create the div for the spaceship
       let cannonDom;
        if (this.level == 1) {
            cannonDom = gameGrid1.appendChild(document.createElement("div"));
        } else if (this.level == 2) {
            cannonDom = gameGrid2.appendChild(document.createElement("div"));
        }

        //Add answer
        const answer = cannonDom.appendChild(document.createElement("p"));
        answer.innerText = this.answer;

        //Style the div
        cannonDom.style.cssText = `
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
        margin-bottom: -15px;
        z-index: 1;
        `;

        //Style the answer
        answer.style.backgroundColor = "blue";
        answer.style.color = "white";
        answer.style.fontSize = "25px";
        answer.style.padding = "0px 10px";

        //Assign it to property
        this.DOMElement = cannonDom;

    }

    cannonMove() {

        document.addEventListener("keydown", event => {
            if(event.key==="ArrowRight")
            {
            if (this.gridPosition < 5)  
                {  
                this.gridPosition++;
                this.DOMElement.style.gridColumn = this.gridPosition;
                }
            }
            else if(event.key==="ArrowLeft")
            {
                if (this.gridPosition > 1)  
                {  
                this.gridPosition--;
                this.DOMElement.style.gridColumn = this.gridPosition;
                }
            }
        });
    }
    
    cannonShoot() {

        document.addEventListener("keydown", event => {
            if(event.key===" ")
            {
                const projectile = this.DOMElement.appendChild(document.createElement("div"));
                let projectileBottom = 0;

                projectile.style.cssText = `
                position: absolute;
                height: 100px;
                width: 80px;
                background: url("../media/Game-Objects/Cannon-Shot.gif") no-repeat center center/contain;
                transform: rotate(-90deg);
                z-index: -1;
                `;

                this.projectileGridPosition = this.gridPosition;


                const freeProjectile = setTimeout( () => {
                    const projectilePos = projectile.getBoundingClientRect();


                    projectile.style.cssText = `
                    position: fixed;
                    height: 100px;
                    width: 80px;
                    left: ${projectilePos.left + 60}px;
                    bottom: ${projectilePos.bottom}px;
                    background: url("../media/Game-Objects/Cannon-Shot.gif") no-repeat center center/contain;
                    transform: rotate(-90deg);
                    z-index: 0;
                    `;

                    

                }, 1) 

                const projectileUp = setInterval(()=>{
                    
                    projectile.style.bottom = `${projectileBottom}px`;
                    projectileBottom+= 4;
                    this.projectile = projectile;

                    if (projectile == undefined) {
                        this.projectile.remove();
                        clearInterval(projectileUp);
                    }
                    
                }, 2);

            };
        });  

    }

    getDOMRect () {
        const DOMRectMonitor = setInterval(()=>{
            this.DOMRect = this.DOMElement.getBoundingClientRect();

            if (this.projectile != undefined) {
            this.projectileRect = this.projectile.getBoundingClientRect();
            }
        }, 2)

        this.cannonRectMonitor = DOMRectMonitor;

    }

    clearCannon() {
        
        this.DOMElement.remove();
        
        clearInterval(this.cannonRectMonitor);
        if (this.projectile != undefined) {
            this.projectile.remove();
        }

    }

    clearProjectileOnly() {
        this.projectile.remove();
        this.projectile = undefined;
        this.projectileRect = undefined;
        //this.projectileGridPosition = undefined;
    }

}

export {Cannon};