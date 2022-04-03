const tab = document.querySelectorAll(".tabuleiro");
const filaUm = document.querySelectorAll(".box-um");
const filaDois = document.querySelectorAll(".box-dois");
const filaTres = document.querySelectorAll(".box-tres");
let arrayTabuleiro = [...tab];
let quantidadeDeClicks = 0;
let playerX = 0;
let playerO = 0;

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
  arrayTabuleiro.forEach((posicao) => {
    posicao.addEventListener("click", function () {
      const indice = arrayTabuleiro.indexOf(posicao);
      console.log("indice", indice);
      const classItemdentrodaDiv =
        arrayTabuleiro[indice].lastElementChild.className;
      console.log("arrayTabuleiro[indice]");

      classItemdentrodaDiv === "X"
        ? (playerX = playerX + 1)
        : (playerO = playerO + 1);

      if (playerX > 3) {
        playerX = 1;
      }
      if (playerO > 3) {
        playerO = 1;
      }
      console.log(
        "playerX",
        playerX,
        "classItemdentrodaDiv",
        classItemdentrodaDiv
      );
      if (playerX === 3 && arrayTabuleiro.includes(posicao, 0 && 1 && 2)) {
        alert(`Vencedor: ${classItemdentrodaDiv}`);
      }
      if (playerX === 3 && arrayTabuleiro.includes(posicao, 3 && 4 && 5)) {
        alert(`Vencedor: ${classItemdentrodaDiv}`);
      }

      if (playerX === 3 && arrayTabuleiro.includes(posicao, 6 && 7 && 8)) {
        alert(`Vencedor: ${classItemdentrodaDiv}`);
      }
      if (playerO === 3 && arrayTabuleiro.includes(posicao, 0 && 1 && 2)) {
        alert(`Vencedor: ${classItemdentrodaDiv}`);
      }
      if (playerO === 3 && arrayTabuleiro.includes(posicao, 3 && 4 && 5)) {
        alert(`Vencedor: ${classItemdentrodaDiv}`);
      }

      if (playerO === 3 && arrayTabuleiro.includes(posicao, 6 && 7 && 8)) {
        alert(`Vencedor: ${classItemdentrodaDiv}`);
      }
    });
  });
};
regrasDoJogo();

//criar um objeto onde o indice é a posicao e o valor é classItemdentrodaDiv
// criar array com array dentro com duas posições: posicao e classItemdentrodaDiv
