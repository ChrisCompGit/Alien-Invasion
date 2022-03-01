'use strict';

//DOM Tree Elements

    const menu = document.querySelector(".menu-screen");
    const playButton = document.querySelector(".play-btn");
    const rulesButton = document.querySelector(".menu-screen > div > div:nth-child(3)");
    const exitMenuButton = document.querySelector(".menu-screen > div > div:nth-child(4)");
    const startScreen = document.querySelector(".start-screen");
    const rulesScreen = document.querySelector(".rules-screen");
    const backToMenuButton = document.querySelector(".rules-screen > div > div:nth-child(2) > div:nth-child(1)")
    const exitRulesButton = document.querySelector(".rules-screen > div > div:nth-child(2) > div:nth-child(2)")
    const startButton = document.querySelector(".menu-screen > div > div:nth-child(2)");
    const form = document.querySelector("#username");
    const level1 = document.querySelector("#level1");
    const easyDifficulty = document.querySelector("#easyDifficulty");
    const hardDifficulty = document.querySelector("#hardDifficulty");   
    const gameGrid = document.querySelector("gameGrid");


export{menu, playButton, rulesButton, exitMenuButton, startScreen, rulesScreen, backToMenuButton, exitRulesButton, startButton, form, level1, easyDifficulty, hardDifficulty, gameGrid};
