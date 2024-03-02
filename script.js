let currentPlayer = "p1";

const buttons = document.getElementsByClassName("button");

const rows = 6;
const columns = 7;

let turn = 0;

const arr = createArray(rows, columns);

for (let index = 0; index < buttons.length; index++) {
    const button = buttons[index];
    button.addEventListener("click", function(){
        addCircle(parseInt(button.id));
        switchPlayer();
    });
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

function addCircle(id){

    if(turn == 0){
            arr[arr.length - 1][id] = 1;
    }else{
        for (let index = 0; index < arr.length; index++) {
            if(arr[index + 1][id] == 1 || arr[index + 1][id] == 2){
                if(currentPlayer == "p1"){
                    arr[index][id] = 1;
                }else{
                    arr[index][id] = 2;
                }
                break;
            }
        }
        
    }

    turn++;

}

function createArray(rows, columns){
    let array = new Array(rows);

    for (let index = 0; index < rows; index++) {
        array[index] = new Array(columns);
    }

    return array;
}