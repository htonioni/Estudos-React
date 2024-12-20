const html = document.querySelector("html");
const focoBtn = document.querySelector(".app__card-button--foco");
const curtoBtn = document.querySelector(".app__card-button--curto");
const longoBtn = document.querySelector(".app__card-button--longo");
const titulo = document.querySelector(".app__title");
const banner = document.querySelector(".app__image");
const cardTimer = document.querySelector(".app__card-timer");
const duracaoFoco = 1500; 
const duracaoDescansoCurto = 300; 
const duracaoDescansoLongo = 900; 

focoBtn.addEventListener("click", () => {
   alteraContexto("foco");
})

curtoBtn.addEventListener("click", () => {
   alteraContexto("descanso-curto");
})

longoBtn.addEventListener("click", () => {
   alteraContexto("descanso-longo")
})

function alteraContexto(contexto){
   html.setAttribute("data-contexto", contexto)
   banner.setAttribute("src" ,`./imagens/${contexto}.png`)
   switch (contexto) {
      case "foco":
         titulo.innerHTML = `Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`
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
   }
}