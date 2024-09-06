let turn = "O";

const changeOnClick = (boxElement) => {
    console.log("changeOnClick");

    let boxValue = boxElement.innerText;
    if (boxValue === "X" || boxValue === "O") {
        alert("Box is already filled with " + boxValue);
        return;
    } else {
        if (turn === "O") {
            boxElement.innerText = "O";

            boxElement.classList.add("styleO");
            boxElement.classList.remove("styleX");
            turn = "X";
        } else if (turn === "X") {
            boxElement.innerText = "X";

            boxElement.classList.add("styleX");
            boxElement.classList.remove("styleO");
            turn = "O";
        }
    }
};

const reset = () => {
    console.log("reset");
    for (let i = 1; i <= 9; i++) {
        let boxId = "box" + i;
        let boxElement = document.querySelector(`#${boxId}`);
        boxElement.innerText = "";
        boxElement.classList.remove("styleX");
        boxElement.classList.remove("styleO");
        turn = "O";
    }
};

const checkWins = (boxes) => {
    let boxValues = [];
    for (let i = 0; i <= boxes.length - 1; i++) {
        let boxValue = boxes[i].innerText;
        boxValues.push(boxValue);
    }
    const winPos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for (const combination of winPos) {
        let [a, b, c] = combination;

        // Example win condition
        if (boxValues[a] === boxValues[b] && boxValues[b] === boxValues[c] && boxValues[a] !== "") {
            console.log(boxValues[0] + " wins");
            alert("Game over: " + boxValues[a] + " wins");
            reset();
            return;
        }
    }
};

let resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", () => reset());
let boxes = document.querySelectorAll(".box");

boxes.forEach(box => {

    box.addEventListener("click", () => {
        changeOnClick(box);
        // Use setTimeout to delay the win check slightly so the DOM updates first
        setTimeout(() => {
            checkWins(boxes);
        }, 10); // Delay win check by 10 milliseconds to allow DOM to update
    })
});




