const tab = document.querySelectorAll(".tabuleiro");
const filaUm = document.querySelectorAll(".box-um");
const filaDois = document.querySelectorAll(".box-dois");
const filaTres = document.querySelectorAll(".box-tres");
let arrayTabuleiro = [...tab];
let quantidadeDeClicks = 0;

const players = () => {
  arrayTabuleiro.forEach((posicao) => {
    let img;
    posicao.addEventListener("click", function () {
      quantidadeDeClicks = quantidadeDeClicks + 1;

      if (quantidadeDeClicks % 2 !== 0) {
        img = document.createElement("img");
        img.src = "/XXX.jpg";
        img.width = 70;
        img.height = 50;
        posicao.appendChild(img);
        img.classList.add("X");
      }

      if (quantidadeDeClicks % 2 === 0) {
        img = document.createElement("img");
        img.src = "/OOO.jpg";
        img.width = 70;
        img.height = 50;
        posicao.appendChild(img);
        img.classList.add("O");
      }
    });
  });
};

players();

const regrasDoJogo = () => {
  let playerX = 0;
  let playerO = 0;
  let newArray = [];
  arrayTabuleiro.forEach((posicao) => {
    posicao.addEventListener("click", function () {
      const indice = arrayTabuleiro.indexOf(posicao);
      const classItemdentrodaDiv =
        arrayTabuleiro[indice].lastElementChild.className;
      newArray.push([classItemdentrodaDiv, indice]);

      console.log("newArray", newArray);

      classItemdentrodaDiv === "X"
        ? (playerX = playerX + 1)
        : (playerO = playerO + 1);

      playerX > 3 ? (playerX = 1) : false;
      playerO > 3 ? (playerO = 1) : false;

      for (let i = 0; i <= newArray.length; i++) {
        if (
          playerX === 3 &&
          newArray[i][0] === "X" &&
          arrayTabuleiro.includes(posicao, 0 && 1 && 2)
        ) {
          return alert(`Vencedor: ${classItemdentrodaDiv}`);
        }
        if (
          (playerX === 3 && newArray[i][0] === "X") ||
          (newArray[i][0] === "O" &&
            arrayTabuleiro.includes(posicao, 3 && 4 && 5))
        ) {
          return alert(`Vencedor: ${classItemdentrodaDiv}`);
        }
        if (
          (playerX === 3 && newArray[i][0] === "X") ||
          (newArray[i][0] === "O" &&
            arrayTabuleiro.includes(posicao, 6 && 7 && 8))
        ) {
          return alert(`Vencedor: ${classItemdentrodaDiv}`);
        }
        if (
          (playerX === 3 && newArray[i][0] === "X") ||
          (newArray[i][0] === "O" &&
            arrayTabuleiro.includes(posicao, 6 && 7 && 8))
        ) {
          return alert(`Vencedor: ${classItemdentrodaDiv}`);
        }
      }
    });
  });
};
regrasDoJogo();
