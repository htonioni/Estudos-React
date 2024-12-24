const html = document.querySelector("html");
const focoBtn = document.querySelector(".app__card-button--foco");
const curtoBtn = document.querySelector(".app__card-button--curto");
const longoBtn = document.querySelector(".app__card-button--longo");
const titulo = document.querySelector(".app__title");
const banner = document.querySelector(".app__image");
const cardTimer = document.querySelector(".app__card-timer");
const botoes = document.querySelectorAll(".app__card-button");
const musicaFocoInput = document.getElementById("alternar-musica");
const startPauseBtn = document.getElementById("start-pause");
const musica = new Audio("./sons/luna-rise-part-one.mp3");
const audioTempoFinalizado = new Audio("./sons/beep.mp3");
const audioPause = new Audio("./sons/pause.mp3");
const audioPlay = new Audio("./sons/play.wav");
const iniciarOuPausarBtn = document.querySelector("#start-pause span");
const iniciarOuPausarImg = document.querySelector("#start-pause img");
const tempoNaTela = document.querySelector("#timer");

let tempoDeorridoEmSegundos = 1500
let intervaloId = null

musica.loop = true;
musicaFocoInput.addEventListener("change", () => {
   if (musica.paused) {
      musica.play();
   } else {
      musica.pause();
   };
});

focoBtn.addEventListener("click", () => {
   tempoDeorridoEmSegundos = 1500
   alteraContexto("foco");
   focoBtn.classList.add("active");
})

curtoBtn.addEventListener("click", () => {
   tempoDeorridoEmSegundos = 300
   alteraContexto("descanso-curto");
   curtoBtn.classList.add("active");
})

longoBtn.addEventListener("click", () => {
   tempoDeorridoEmSegundos = 900
   alteraContexto("descanso-longo");
   longoBtn.classList.add("active");
})

function alteraContexto(contexto) {
   mostrarTempo()
   botoes.forEach((contexto) => {
      contexto.classList.remove("active");
   })
   html.setAttribute("data-contexto", contexto);
   banner.setAttribute("src", `./imagens/${contexto}.png`);
   switch (contexto) {
      case "foco":
         titulo.innerHTML = `Otimize sua produtividade,<br><strong class="app__title-strong">mergulhe no que importa.</strong>`
         break;
      case "descanso-curto":
         titulo.innerHTML = `Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>`
         break;
      case "descanso-longo":
         titulo.innerHTML = `Hora de voltar à superfície.<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>`
         break;
      default:
         break;
   };
};

const contagemRegressiva = () => {
   if(tempoDeorridoEmSegundos <= 0){
      audioTempoFinalizado.play();
      alert("Acabou o tempo!");
      zerar();
      return
   };
   tempoDeorridoEmSegundos -= 1
   mostrarTempo();
}

startPauseBtn.addEventListener("click", iniciarOuPausar);

function iniciarOuPausar() {
   if (intervaloId){
      audioPause.play()
      zerar();
      return
   };
   audioPlay.play()
   intervaloId = setInterval(contagemRegressiva, 1000);
   iniciarOuPausarBtn.textContent = "Pausar"
   iniciarOuPausarImg.src = "./imagens/pause.png"
};

function zerar() {
   clearInterval(intervaloId);
   iniciarOuPausarBtn.textContent = "Começar"
   iniciarOuPausarImg.src = "./imagens/play_arrow.png"
   intervaloId = null;
};

function mostrarTempo() {
   const tempo = new Date(tempoDeorridoEmSegundos*1000);
   const tempoFormatado = tempo.toLocaleString('pt-Br', {minute:'2-digit', second:'2-digit'});
   tempoNaTela.innerHTML = `${tempoFormatado}`
};

mostrarTempo();