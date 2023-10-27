// creating the board or grid 6x16
let board = document.querySelector(".board");

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    board.appendChild(cell);
  }
}

// creating hover state so grid cells change to black when you hover over them
const individualCells = document.querySelectorAll(".cell");

individualCells.forEach((cell) => {
  cell.addEventListener("mouseenter", (e) => {
    cell.style.backgroundColor = "#000";
  });
});

//function that clears the board
function clearTheBoard() {
  individualCells.forEach((cell) => {
    cell.style.backgroundColor = "#fff";
  });
}

// restart button that clears the board
const restartBtn = document.getElementById("restart");
restartBtn.addEventListener("click", clearTheBoard);

// //change color function
// function changeColor() {
//   cell.style.backgroundColor = "#00FF";
// }

// // button that changes the color of the hover state
// const colorBtn = document.getElementById("changeColor");
// colorBtn.addEventListener("click", changeColor);

// //update board size function
// function updateBoardSize() {}
