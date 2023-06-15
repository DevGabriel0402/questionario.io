// Obtém referências para os elementos do DOM
const logoComecar = document.getElementById("logoInicial");
const botao = document.getElementById("comecar");

// Define a posição inicial da logo
logoComecar.style.transform = "translateY(0)";

// Define a animação da logo
function animateLogo() {
  logoComecar.style.transition = "transform 1s ease-in-out";
  logoComecar.style.transform = "translateY(30px)";
}

// Define a opacidade inicial do botão
comecar.style.opacity = "0";

// Define a animação de entrada do botão
function animateEntrada() {
  comecar.style.transition = "opacity 1.8s ease-in-out";
  comecar.style.opacity = "1";
}

// Executa a animação da entrada após um intervalo de tempo
setTimeout(animateEntrada, 200);

// Executa a animação da logo após um intervalo de tempo
setTimeout(animateLogo, 200);

// Esconde elementos do DOM na primeira parte
const formulario = document.getElementById("msform");
const header = document.getElementById("header");
const info = document.getElementById("info");
header.style.display = "none";
formulario.style.display = "none";
info.style.display = "none";

// Função para exibir os elementos do DOM na segunda parte
function entrar() {
  const inicio = document.getElementById("primeiraParte");
  const body = document.getElementById("corpo");
  inicio.style.display = "none";
  header.style.display = "block";
  formulario.style.display = "block";
  body.style.background = "#fff";
}

// Event listener para a tecla F7 para ocultar a mensagem de navegabilidade por cursor
document.addEventListener("keydown", function (event) {
  if (event.keyCode === 118) {
    // Verifica se a tecla pressionada é a tecla F7
    var mensagem = document.getElementById("mensagemCaretBrowsing");
    mensagem.style.display = "none"; // Oculta a mensagem quando a tecla F7 é pressionada
  }
});

// Formulário multi-step - Segunda Parte

// Variáveis para controle dos fieldsets
let current_fs, next_fs, previous_fs; // fieldsets
let left, opacity, scale; // propriedades dos fieldsets que serão animadas
let animating; // flag para evitar glitches de cliques múltiplos rápidos


// Event listener para o botão "Próximo"
$(".next").click(function () {
  // Obtém referências para as perguntas e respostas do formulário
  document.getElementById("next").addEventListener("click",function(){
  let textArea1 = document.getElementById("CAT_Custom_1").value;
  let textArea2 = document.getElementById("CAT_Custom_2").value;
  let textArea3 = document.getElementById("CAT_Custom_3").value;
  let textArea4 = document.getElementById("CAT_Custom_4").value;
  let pergunta1 = document.getElementById("pergunta1");
  let pergunta2 = document.getElementById("pergunta2");
  let pergunta3 = document.getElementById("pergunta3");
  let pergunta4 = document.getElementById("pergunta4");
  if (textArea1.trim() === "" || textArea2.trim() === "" || textArea3.trim() === "" || textArea4.trim() === "" ) {
    // Se estiver vazio, exibe uma mensagem de erro ou faz alguma ação desejada
    alert("O campo é obrigatório. Por favor, preencha-o.");
    return; // Interrompe o envio do formulário
  }
  }
  if (animating) return false;
  animating = true;

  current_fs = $(this).parent();
  next_fs = $(this).parent().next();

  // Ativa o próximo passo na barra de progresso usando o índice de next_fs
  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

  // Mostra o próximo conjunto de campos
  next_fs.show();
  // Oculta o conjunto de campos atual com animação
  current_fs.animate(
    { opacity: 0 },
    {
      step: function (now, mx) {
        // Conforme a opacidade de current_fs reduz para 0 - armazenado em "now"
        // 1. Reduz current_fs para 80%
        scale = 1 - (1 - now) * 0.2;
        // 2. Traz next_fs da direita (50%)
        left = now * 50 + "%";
        // 3. Aumenta a opacidade de next_fs para 1 conforme ele se move
        opacity = 1 - now;
        current_fs.css({ transform: "scale(" + scale + ")" });
        next_fs.css({ left: left, opacity: opacity });
      },
      duration: 500,
      complete: function () {
        current_fs.hide();
        animating = false;
      },
      // Isso vem do plug-in de easing personalizado
      easing: "easeOutQuint",
    }
  );
});

// Event listener para o botão "Anterior"
$(".previous").click(function () {
  if (animating) return false;
  animating = true;

  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();

  // Desativa o passo atual na barra de progresso
  $("#progressbar li")
    .eq($("fieldset").index(current_fs))
    .removeClass("active");

  // Mostra o fieldset anterior
  previous_fs.show();
  // Oculta o fieldset atual com animação
  current_fs.animate(
    { opacity: 0 },
    {
      step: function (now, mx) {
        // Conforme a opacidade de current_fs reduz para 0 - armazenado em "now"
        // 1. Escala previous_fs de 80% a 100%
        scale = 0.8 + (1 - now) * 0.2;
        // 2. Leve current_fs para a direita (50%) - de 0%
        left = (1 - now) * 50 + "%";
        // 3. Aumenta a opacidade de previous_fs para 1 conforme ele se move
        opacity = 1 - now;
        current_fs.css({ left: left });
        previous_fs.css({
          transform: "scale(" + scale + ")",
          opacity: opacity,
        });
      },
      duration: 500,
      complete: function () {
        current_fs.hide();
        animating = false;
      },
      // Isso vem do plug-in de easing personalizado
      easing: "easeOutQuint",
    }
  );
});

// function confirmar() {}

// // Impede o envio do formulário ao clicar no botão "Enviar"
// $(".submit").click(function () {
//   return false;
// });

// Terceira Parte - Agradecimento
function btnFinalizar() {
  const formulario2 = document.getElementsByClassName("msform")[0];

  formulario2.style.display = "none";
  document.body.style.backgroundColor = "#0574bc";

  const logo = document.getElementById("logo");

  // Define a posição inicial da logo
  logo.style.transform = "translateY(0)";

  // Define a animação da logo
  function animateLogo() {
    // Verifica o tamanho da tela para aplicar diferentes propriedades da animação
    if (window.innerWidth < 768) {
      // Estilos para telas menores que 768px
      logo.style.transition = "transform 1s ease-in-out";
      logo.style.transform = "translateY(250px) scale(1.5)";
    } else {
      // Estilos para telas maiores ou iguais a 768px
      logo.style.transition = "transform 1s ease-in-out";
      logo.style.transform = "translateY(300px) scale(2.0)";
    }
  }
  // Executa a animação após um intervalo de tempo
  setTimeout(animateLogo, 200);

  info.style.display = "block";
  info.style.opacity = "0";

  // Define a animação do título
  function animateTitle() {
    info.style.transition = "opacity 1.8s ease-in-out";
    info.style.opacity = "1";
  }

  setTimeout(animateTitle, 500);
}
