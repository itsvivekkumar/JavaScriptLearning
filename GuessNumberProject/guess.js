'use strict';
let score=20, highscore=0;

document.querySelector('body').style.backgroundColor ='#344';
document.querySelector('.number').style.width = '15rem';
let randomNumber=Math.trunc(Math.random()*20+1);

document.querySelector('.number').textContent=randomNumber;
console.log(document.querySelector('.message').textContent);
const displayMessage=function(message){
    document.querySelector('.message').textContent=message;
}


document.querySelector('.check').addEventListener("click",function(){
     const guess=Number(document.querySelector('.guess').value);
    //  console.log(guess,typeof guess);
     
     if(!guess){
        console.log('No random value is present!!!')
         document.querySelector('.message').textContent='No value present!!!'; 
     }
     else if(guess < randomNumber){
        console.log('you entered lower value !!!');
        if(score>1){
        document.querySelector('.message').textContent='you entered lower value !!!';
        score--;
        document.querySelector('.score').textContent = score;
        }
        else{
            console.log('you lost match!!'); 
            document.querySelector('.message').textContent='you lost match!!';
            document.querySelector('.score').textContent = 0;
        }
     }
     else if(guess > randomNumber){
        console.log('you entered higher value !!!');
        if(score>1){
            document.querySelector('.message').textContent='you entered higher value !!!';
            score--;
            document.querySelector('.score').textContent = score;
            }
            else{
                console.log('you lost match!!'); 
                document.querySelector('.message').textContent='you lost match!!';
                document.querySelector('.score').textContent = 0;
        }
     }
     else {
        console.log('Correct answer You won !!! ');
        document.querySelector('.message').textContent='Correct answer You won !!!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    
        if (score > highscore) {
          highscore = score;
          document.querySelector('.highscore').textContent = highscore;
        } 
     }
})

document.querySelector('.again').addEventListener('click',function(){
    console.log(document.querySelector('.number').textContent);
     score=20;
     randomNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.highscore').textContent = highscore;
    document.querySelector('.number').textContent =randomNumber;
    document.querySelector('.guess').value = '';

})
 