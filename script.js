const tab = document.querySelectorAll(".tabuleiro");
let quantidadeDeClicks = 0;

tab.forEach((posicao) => {
  console.log(posicao);
  posicao.addEventListener("click", function () {
    quantidadeDeClicks = quantidadeDeClicks + 1;

    console.log("quantidadeDeClicks", quantidadeDeClicks);
    if (quantidadeDeClicks % 2 !== 0) {
      console.log("jogador X");
      const img = document.createElement("img");
      img.src = "/XXX.jpg";
      img.width = 70;
      img.height = 50;
      posicao.appendChild(img);
    }

    if (quantidadeDeClicks % 2 === 0) {
      console.log("jogador O");
      const img = document.createElement("img");
      img.src = "/OOO.jpg";
      img.width = 70;
      img.height = 50;
      posicao.appendChild(img);
    }

    console.log(quantidadeDeClicks % 2 === 0);
  });
});
