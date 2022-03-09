// MOVED TO LEVEL AS METHOD. KEEPING IN CASE NEEDED.

/* import { Spaceship } from "./spaceship.js";


const createSpaceships = (difficulty) => {
    
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
    const questionsArray = Array.from(questionsSetFinal);
    //Placeholder for Spaceships
    let spaceshipArray = [];


    for (let i = 0; i < 5; i++) {
        const shipType = Math.floor(Math.random() * 4) + 1;
        const gridPositionTest = i + 1;

        const createdShip = new Spaceship (shipType, questionsArray[i], 10, gridPositionTest);
        spaceshipArray.push(createdShip);
    }
    
    return spaceshipArray;

};

export {createSpaceships}; */


c

waApi.getShort('2+2').then(console.log, console.error);