const container = document.querySelector(".flag-container");
const redFlag = document.createElement("img");
redFlag.src = "flag-red.svg";
const greenFlag = document.createElement("img");
greenFlag.src = "flag-green.svg";
const winningMessage = document.createElement("span");
// true;YOU , false; OTHER
let currentPlayer = "ONE";
let flagCount = 21;
let lastTake = undefined;

const renderFlags = () => {
  for (let rows = 1; rows <= 6; rows++) {
    const row = document.createElement("ul");
    for (let cols = 0; cols < rows; cols++) {
      const column = document.createElement("li");
      const flag = rows === 1 ? redFlag : greenFlag;
      column.appendChild(flag.cloneNode(true));
      row.appendChild(column);
    }
    container.appendChild(row);
  }
};

const isContainerEmpty = () => {
  return !container.hasChildNodes();
};

const removeRowIfEmpty = () => {
  if (!container.lastChild.lastChild) {
    container.lastChild.remove();
  }
};

const takeOne = () => {
  if (isContainerEmpty()) {
    getWinner();
    return;
  }
  container.lastChild.lastChild.remove();
  removeRowIfEmpty();
  if (isContainerEmpty()) {
    getWinner();
  }
  showPlayer(1);
};

const takeTwo = () => {
  takeOne();
  takeOne();
  if (isContainerEmpty()) {
    getWinner();
    return;
  }
  showPlayer(2);
};

const clearGame = () => {
  while (container.firstChild) {
    container.lastChild.remove();
  }
};

const reset = () => {
  clearGame();
  renderFlags();
  document.querySelector(".btn-1").disabled = false;
  document.querySelector(".btn-2").disabled = false;
  document.querySelector(".show-turn").innerText = `Your Turn`;
};

const showPlayer = (takes) => {
  switchPlayer();
  if (currentPlayer === "ONE") {
    document.querySelector(
      ".show-turn"
    ).innerText = `Your turn. Opponent took: ${takes}`;
  } else {
    document.querySelector(
      ".show-turn"
    ).innerText = `Opponent's turn. You took: ${takes}`;
  }
};

const getWinner = () => {
  clearGame();
  switchPlayer();
  if (currentPlayer === "ONE") {
    winningMessage.innerText = "You lost. The Oppenent won";
  } else {
    winningMessage.innerText = "You won. The Opponent lost";
  }
  winningMessage.setAttribute("class", "winningMessage");
  container.appendChild(winningMessage);
  document.querySelector(".btn-1").disabled = true;
  document.querySelector(".btn-2").disabled = true;
};

const switchPlayer = () => {
  currentPlayer = currentPlayer === "ONE" ? "TWO" : "ONE";
};
