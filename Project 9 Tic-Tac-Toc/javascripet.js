let resetbtn = document.querySelector(".reset");
let boxs = document.querySelectorAll(".box")
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newBtn = document.querySelector("#new-btn");
let container = document.querySelector(".container");
let turn = document.querySelector(".turn");
let playerO = true;
let count=0;
turn.innerHTML = `Your are First "O"`;
let WiningArr =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const disabledBox = () =>{
    boxs.forEach(box => {
        box.disabled = true;
    });
}

const enableBoxs = () => {
    boxs.forEach(box => {
        box.disabled = false;
        box.innerHTML="";
    })
}

const resetGame = () => {
    playerO=true;
    enableBoxs();
    count=0;
    turn.innerHTML = `Your are First "O"`;
    msgContainer.classList.add("hide");
    container.classList.remove("show")
}

boxs.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(!playerO)
        {
            turn.innerHTML = `Now your Turn "O"`;
        }
        else
        {
            turn.innerHTML = `Now your Turn "X"`;

        }
        if (playerO) {
            box.innerHTML = "O" ;
            playerO=false;  
        } else {
            box.innerHTML = "X";
            playerO =true;
        }
        box.disabled = true;
        count++;

        checkWinner();
    })
})

const checkWinner = () => {

    if (count < 9){
        WiningArr.forEach(win => {
        let pos0 = boxs[win[0]].innerHTML;
        let pos1 = boxs[win[1]].innerHTML;
        let pos2 = boxs[win[2]].innerHTML; 

        if (pos0 !="" && pos1 !="" && pos2 !="") {
           if (pos0 === pos1 &&  pos1 === pos2) {
                console.log("Game Over",pos1)
                showWinner(pos1);
           }
        }

    });
    }else{
        msg.innerHTML = `Game Over , Draw`;
        msgContainer.classList.remove("hide");
        container.classList.add("show");
        disabledBox();
    }
    
}

const showWinner = (winner) => {
    msg.innerHTML = `Game Over , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    container.classList.add("show");
    disabledBox();
}

newBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
