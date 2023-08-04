const second = document.querySelector("#second-game");
const first = document.querySelector("#first-game");
window.addEventListener("load", () => {
  initGame(first);
  initGame(second);
});

function initGame(root) {
  const container = root.querySelector(".flag-container");
  const redFlag = document.createElement("img");
  redFlag.src = "flag-red.svg";
  const greenFlag = document.createElement("img");
  greenFlag.src = "flag-green.svg";
  const flagsSeparator = document.createElement("div");
  flagsSeparator.innerText = "x";
  const winningMessage = document.createElement("span");
  const btn1 = root.querySelector(".btn-1");
  const btn2 = root.querySelector(".btn-2");
  const btnReset = root.querySelector(".btn-reset");

  const initialState = {
    currentPlayer: "ONE",
    flagCount: 21,
    lastTake: undefined,
  };

  let state = initialState;

  function updateState(s) {
    state = s;
    renderGame();
  }

  const renderGame = () => {
    while (container.firstChild) {
      container.lastChild.remove();
    }
    if (state.flagCount <= 0) {
      if (state.currentPlayer === "ONE") {
        winningMessage.innerText = "You lost. The Oppenent won";
      } else {
        winningMessage.innerText = "You won. The Opponent lost";
      }
      winningMessage.setAttribute("class", "winningMessage");
      container.appendChild(winningMessage);
      btn1.disabled = true;
      btn2.disabled = true;
    }
    let flagsLeft = state.flagCount;
    let rowIndex = 0;
    while (flagsLeft > 0) {
      rowIndex++;
      const row = document.createElement("ul");
      let columnIndex = 0;
      while (columnIndex < rowIndex && flagsLeft) {
        flagsLeft--;
        const column = document.createElement("li");
        const flag = rowIndex === 1 ? redFlag : greenFlag;
        column.appendChild(flag.cloneNode(true));
        row.appendChild(column);
        row.appendChild(flagsSeparator.cloneNode(true));
        columnIndex++;
      }
      row.lastChild.remove();
      container.appendChild(row);
    }
    if (state.currentPlayer === "ONE") {
      root.querySelector(
        ".show-turn"
      ).innerText = `Your turn. Opponent took: ${state.lastTake}`;
    } else {
      root.querySelector(
        ".show-turn"
      ).innerText = `Opponent's turn. You took: ${state.lastTake}`;
    }
  };

  const takeOne = () => {
    updateState({
      flagCount: state.flagCount - 1,
      lastTake: 1,
      currentPlayer: state.currentPlayer === "ONE" ? "TWO" : "ONE",
    });
  };
  btn1.addEventListener("click", takeOne);

  const takeTwo = () => {
    updateState({
      flagCount: state.flagCount - 2,
      lastTake: 2,
      currentPlayer: state.currentPlayer === "ONE" ? "TWO" : "ONE",
    });
  };
  btn2.addEventListener("click", takeTwo);
  const reset = () => {
    updateState(initialState);
    root.querySelector(".btn-1").disabled = false;
    root.querySelector(".btn-2").disabled = false;
    root.querySelector(".show-turn").innerText = `Your Turn`;
  };

  btnReset.addEventListener("click", reset);
  renderGame(21);
}
