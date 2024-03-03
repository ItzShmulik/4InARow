let currentPlayer = "p1";

const buttons = document.getElementsByClassName("button");

let turn = 0;

const rows = 6;
const columns = 7;

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

    if(isColumnOccupied(id)){

        const rowFound = findAvailableSpot(id);

        if(currentPlayer == "p1"){
            arr[rowFound][id] = 1;
        }else{
            arr[rowFound][id] = 2;
        }

        console.log("Added circle at", rowFound, id);
    }else{
        if(currentPlayer == "p1"){
            arr[arr.length - 1][id] = 1;
        }else{
            arr[arr.length - 1][id] = 2;
        }

        console.log("Added circle at ", arr.length - 1, id)
    }

}

function isColumnOccupied(column){

    for (let index = 0; index < arr.length; index++) {
        if(arr[index][column] == 1 || arr[index][column] == 2){
            return true;            
        }
    }

    return false;
}

function findAvailableSpot(column){
    for (let index = 0; index < arr.length; index++) {
        if(arr[index + 1][column] == 1 || arr[index + 1][column] == 2){
            return index;
        }
    }
}

function createArray(rows, columns){
    let array = new Array(rows);

    for (let index = 0; index < rows; index++) {
        array[index] = new Array(columns);
    }

    return array;
}