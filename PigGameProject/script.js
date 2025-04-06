'use strict';
const score0Ele0=document.getElementById('score--0');
const score1Ele1=document.querySelector('#score--1');
score0Ele0.textContent=0;
score1Ele1.textContent=0;

let currScore=0;
const currScoreEle0=document.getElementById('current--0');
const currScoreEle1=document.getElementById('current--1');
const diceImgELe=document.querySelector('.dice');
const btnNewGame=document.querySelector('.btn--new');
const btnRollDice=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');

btnRollDice.addEventListener("click",function(){
    const diceNumber=Math.trunc(Math.random()*6)+1;
    diceImgELe.classList.add('hidden');
    if(diceNumber!=1){
        diceImgELe.src=`dice-${diceNumber}.png`;  
        currScore+=diceNumber;
        currScoreEle0.textContent=currScore; 

    }
})