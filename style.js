// creating the board or grid 6x16
let board = document.querySelector(".board");

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    board.appendChild(cell);
  }
}
//define individualCells for use in functions
const individualCells = document.querySelectorAll(".cell");

// creating hover state so grid cells change to black when you hover over them
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

// array of colors to cycle through
const colors = [
  "#00FF",
  "#ff0",
  "#008000",
  "#ff0000",
  "#ffc0cb",
  "#fff",
  "#000",
];
let colorIndex = 6;

//change color function
function changeColor() {
  individualCells.forEach((cell) => {
    cell.addEventListener("mouseenter", (e) => {
      cell.style.backgroundColor = colors[colorIndex];
    });
  });

  colorIndex = (colorIndex + 1) % colors.length;
}

// chance the color of the circle
let colorCircle = document.getElementById("circle");
function changeCircleColor() {
  circle.style.backgroundColor = colors[colorIndex];
}

// button that changes the color of the hover state/ "pen"
const colorBtn = document.getElementById("changeColor");
colorBtn.addEventListener("click", function () {
  changeColor();
  changeCircleColor();
});

//update board size function
function updateBoardSize(size) {
  board.innerHTML = "";

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      board.appendChild(cell);
    }
  }

  //shrink the cell to still fit inside the board
  const newSize = 100 / size + "%";
  const individualCells = document.querySelectorAll(".cell");
  individualCells.forEach((cell) => {
    cell.style.width = newSize;
    cell.style.height = newSize;
  });

  individualCells.forEach((cell) => {
    cell.addEventListener("mouseenter", (e) => {
      cell.style.backgroundColor = "#000";
    });
  });

  changeColor();
}

//make the slider responsive
const slider = document.getElementById("slider");
const sliderText = document.getElementById("sliderText");

slider.addEventListener("input", function () {
  const size = parseInt(this.value);
  sliderText.textContent = size;
  updateBoardSize(size);
});
