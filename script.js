let audioTurn = new Audio("Resources/ting.mp3");
let reset=document.getElementById('reset');
let isgameOver=false;
let turn="X";

//Function to Change the Turn
const changeTurn = () => {
return turn==="X"?"O":"X";
}

//Function to check for a win
const checkWin = () => {
   let boxtext=document.getElementsByClassName('boxtext'); 
   
  let wins=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
           ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + "---Won"
            isgameOver=true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width="190px";
        }
    })       
}

// Main Game Logic
//music.play();
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerHTML===''){
            boxtext.innerHTML=turn;
            turn=changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameOver){
                document.getElementsByClassName('info')[0].innerHTML="Turn for " + turn;
            }
        }
    })
    
})
// Add onClick listener for reset
reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(e=>{
        e.innerHTML="";
    });
    turn="X";
    isgameOver=false;
    document.getElementsByClassName('info')[0].innerHTML="Turn for " + turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width="0px";
})