let gameSe = [];
let userSe = [];

let gameStarted = false;
let level = 0;
let h3 = document.querySelector("h3");



document.addEventListener("keypress",function(){
    if(gameStarted==false){
        console.log("game started")
        gameStarted=true;

        levelUp();
    };
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
       btn.classList.remove("flash");
    },1000);
};


function levelUp(){
    level++;
    h3.innerText=`level ${level}`;

    btnFlash();
    
}




