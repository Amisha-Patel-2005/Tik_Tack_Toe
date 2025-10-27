let Game = document.querySelector(".Game-container");
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let newBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");

let turnO = true;
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    count=0;
    turnO = true;
    enableddBoxes();
    msgContainer.classList.add("hide");
    Game.classList.remove("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was click");

        if (turnO) {
            box.innerHTML = "O";
            box.style.color = "black";
            
            turnO = false;
        } else {
            box.innerHTML = "X";
             box.style.color = "red";
            

            turnO = true;
        }

        count++;
        console.log(`count is: ${count}`);
        
        box.disabled = true;
        checkWinner();
    });
});

const enableddBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const showWinner = (Winner) => {
    msg.innerText = `Congratulation, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
    Game.classList.add("hide");
};

const checkWinner = () => {
    winPatterns.forEach((patterns) => {
        let val1 = boxes[patterns[0]].innerHTML;
        let val2 = boxes[patterns[1]].innerHTML;
        let val3 = boxes[patterns[2]].innerHTML;

        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 === val2 && val2 === val3) {
                console.log("winner");
                showWinner(val1);
            } else {
                if (count === 9) {
                    msg.innerText = `Game is Draw`;
                    Game.classList.add("hide");
                    msgContainer.classList.remove("hide");
                }
            }
        }
    });
};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
