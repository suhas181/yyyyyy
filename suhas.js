let gameSeq=[];
let userSeq=[];

let color=["red","green","yellow","purple"];

let started=false;
let level=0;
let h2=document.querySelector("h2");


console.log("JS file is connected!");

document.addEventListener("keypress", function () {

if(started==false){
    console.log("Game started");
    started=true;
    levelUP();
}
    });

function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");

    },250);

}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");

    },250);

}
function levelUP(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;
    let randIdx=Math.floor(Math.random()*4);
    let randcolor=color[randIdx];

    let randbtn=document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    console.log(gameSeq);
     gameFlash(randbtn);
}

function checkAns(idx){
   
    if(userSeq[idx]===gameSeq[idx]){
      if(userSeq.length==gameSeq.length){
        setTimeout(levelUP, 1000);
      }

    }else{
        h2.innerHTML=`Game over and your score was <b> ${level}</b> &#128079  <br>try again.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);

       reset();

    }
}
function btnpress(){
let btn=this;
userColor=btn.getAttribute("id");
userSeq.push(userColor);
console.log(userColor);
userFlash(btn);
checkAns(userSeq.length - 1);


}let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started=false;
    level=0;
    gameSeq=[];
    userSeq=[];
}
