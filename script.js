const tab = document.querySelectorAll(".tabuleiro");
const filaUm = document.querySelectorAll(".box-um");
const filaDois = document.querySelectorAll(".box-dois");
const filaTres = document.querySelectorAll(".box-tres");
let arrayTabuleiro = [...tab];
let quantidadeDeClicks = 0;
let img;

const players = () => {
  arrayTabuleiro.forEach((posicao) => {
    console.log(posicao);

    posicao.addEventListener("click", function () {
      quantidadeDeClicks = quantidadeDeClicks + 1;

      console.log("quantidadeDeClicks", quantidadeDeClicks);
      if (quantidadeDeClicks % 2 !== 0) {
        console.log("jogador X");
        img = document.createElement("img");
        img.src = "/XXX.jpg";
        img.width = 70;
        img.height = 50;
        posicao.appendChild(img);
        img.classList.add("X");
      }

      if (quantidadeDeClicks % 2 === 0) {
        console.log("jogador O");
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
      console.log("arrayTabuleiro", arrayTabuleiro);

      const indice = arrayTabuleiro.indexOf(posicao);
      console.log("indice", indice);

      if (indice <= 2 && posicao.lastElementChild.className === "X") {
        console.log("temos um vencedor na fila 1");
      }

      console.log(posicao.lastElementChild.className);
      console.log(posicao.childNodes[0]);
      console.log(posicao.classList);
    });
  });
};
regrasDoJogo();
