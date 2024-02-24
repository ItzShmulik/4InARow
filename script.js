let currentPlayer = "p1";

const buttons = document.getElementsByClassName("button");

for (let index = 0; index < buttons.length; index++) {
    const button = buttons[index];
    button.addEventListener("click", switchPlayer);
}

function switchPlayer(){
    if(currentPlayer == "p1"){
        currentPlayer = "p2";
        document.body.style.backgroundColor = "#8dc1c9";
    }else{
        currentPlayer = "p1";
        document.body.style.backgroundColor = "#b32e45";
    }
}