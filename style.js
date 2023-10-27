let board = document.querySelector(".board");

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    board.appendChild(cell);
  }
}

const individualCells = document.querySelectorAll(".cell");

individualCells.forEach((cell) => {
  cell.addEventListener("mouseenter", (e) => {
    cell.style.backgroundColor = "#000";
  });
});
