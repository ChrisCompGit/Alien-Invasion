//DOM Tree Elements

    const menu = document.querySelector(".menu-screen");
    const playButton = document.querySelector(".play-btn");
    const rulesButton = document.querySelector(".menu-screen > div > div:nth-child(3)");
    const exitMenuButton = document.querySelector(".menu-screen > div > div:nth-child(4)");
    const startScreen = document.querySelector(".start-screen");
    const rulesScreen = document.querySelector(".rules-screen");
    const backToMenuButton = document.querySelector(".rules-screen > div > div:nth-child(2) > div:nth-child(1)");
    const exitRulesButton = document.querySelector(".rules-screen > div > div:nth-child(2) > div:nth-child(2)");
    const startButton = document.querySelector(".menu-screen > div > div:nth-child(2)");
    const form = document.querySelector("#username");
    const level1 = document.querySelector("#level1");
    const level2 = document.querySelector("#level2");
    const easyDifficulty = document.querySelector("#easyDifficulty");
    const hardDifficulty = document.querySelector("#hardDifficulty");   
    const gameGrid1 = document.querySelector("#gameGrid1");
    const gameGrid2 = document.querySelector("#gameGrid2");
    const timerNode = document.querySelectorAll(".timerNode");
    const scoreCounterNode = document.querySelectorAll(".score-counter");
    const hitCounterNode = document.querySelectorAll(".hit-counter");
    const missCounterNode = document.querySelectorAll(".miss-counter");
    const gameOverScreen = document.querySelector(".gameover-screen");
    const gameOverRestartButton = document.querySelector(".gameover-screen > div > div > div:nth-child(1)");
    const gameOverExitButton = document.querySelector(".gameover-screen > div > div > div:nth-child(2)");
    const congratsScreen = document.querySelector(".congrats-screen");
    const congratsRestartButton = document.querySelector(".congrats-screen > div > div > div:nth-child(1)");
    const congratsExitButton = document.querySelector(".congrats-screen > div > div > div:nth-child(2)");
    const userNameMenu = document.querySelector("#username");



export {menu, playButton, rulesButton, exitMenuButton, startScreen, rulesScreen, backToMenuButton, exitRulesButton, startButton, form, level1, level2, easyDifficulty, hardDifficulty, gameGrid1, gameGrid2, timerNode, gameOverScreen, scoreCounterNode, hitCounterNode, missCounterNode, congratsScreen, userNameMenu, gameOverRestartButton, gameOverExitButton, congratsRestartButton, congratsExitButton};
