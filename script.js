const tab = document.querySelectorAll(".tabuleiro");
const filaUm = document.querySelectorAll(".box-um");
const filaDois = document.querySelectorAll(".box-dois");
const filaTres = document.querySelectorAll(".box-tres");
let arrayTabuleiro = [...tab];
let quantidadeDeClicks = 0;
let img;
let quantidadeDeItem = 0;

const players = () => {
  arrayTabuleiro.forEach((posicao) => {
    // console.log(posicao);

    posicao.addEventListener("click", function () {
      quantidadeDeClicks = quantidadeDeClicks + 1;

      // console.log("quantidadeDeClicks", quantidadeDeClicks);
      if (quantidadeDeClicks % 2 !== 0) {
        // console.log("jogador X");
        img = document.createElement("img");
        img.src = "/XXX.jpg";
        img.width = 70;
        img.height = 50;
        posicao.appendChild(img);
        img.classList.add("X");
      }

      if (quantidadeDeClicks % 2 === 0) {
        // console.log("jogador O");
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
      // console.log("arrayTabuleiro", arrayTabuleiro);
      let objDeJogadores = [
        {
          pos1: "",
          pos2: "",
          pos3: "",
          pos4: "",
          pos5: "",
          pos6: "",
          pos8: "",
          pos9: "",
        },
      ];
      const indice = arrayTabuleiro.indexOf(posicao);
      console.log("indice", indice);
      const classItemdentrodaDiv =
        arrayTabuleiro[indice].lastElementChild.className;
      for (let obj in objDeJogadores) {
        // objDeJogadores[i].pos1.keys = indice;
        obj[indice] = classItemdentrodaDiv;
      }

      classItemdentrodaDiv === "X"
        ? (quantidadeDeItem = quantidadeDeItem + 1)
        : false;

      if (quantidadeDeItem > 3) {
        quantidadeDeItem = 0;
      }

      console.log(
        "quantidadeDeIte",
        quantidadeDeItem,
        "classItemdentrodaDiv",
        classItemdentrodaDiv
      );
      console.log("objDeJogadores", objDeJogadores);
      if (quantidadeDeItem === 3 && indice <= 2) {
        alert(`Vencedor: ${classItemdentrodaDiv}`);
      }
      if (
        quantidadeDeItem === 3 &&
        indice === 3 &&
        indice === 4 &&
        indice === 5
      ) {
        alert(`Vencedor: ${classItemdentrodaDiv}`);
      }
      if (
        quantidadeDeItem === 3 &&
        indice === 6 &&
        indice === 7 &&
        indice === 8
      ) {
        alert(`Vencedor: ${classItemdentrodaDiv}`);
      }

      // console.log(posicao.childNodes[0]);
      // console.log(posicao.classList);
      // console.log(arrayTabuleiro[indice].lastElementChild.className);
      // console.log(
      //   "arrayTabuleiro[indice].lastElementChild",
      //   arrayTabuleiro[indice].lastElementChild
      // );
    });
  });
};
regrasDoJogo();

//criar um objeto onde o indice é a posicao e o valor é classItemdentrodaDiv
// criar array com array dentro com duas posições: posicao e classItemdentrodaDiv
