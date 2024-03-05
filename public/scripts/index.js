// ALERTA DE CONSTRUÇÃO

document.addEventListener('DOMContentLoaded', function () {
    if (window.matchMedia("(max-width: 767px)").matches) {
        Swal.fire({
            title: 'Olá viajante!',
            html: 'Por enquanto, a versão mobile está em modo de hibernação. Por favor, retorne à estação Desktop mais próxima.',
            icon: 'error',
            showConfirmButton: false,
            showCloseButton: false,
            allowOutsideClick: false,
        });
    } else {
        Swal.fire({
            title: 'Olá viajante!',
            text: 'Estamos em construção e bugs são esperados. Por favor, mantenha-se firme enquanto nossos cientistas espaciais realizam ajustes na nave-mãe.',
            icon: 'warning',
            confirmButtonText: 'Entendido!'
        });
    }
});


// CONTROLE BACKGROUND ESTRELAS

let interval;
const video = document.getElementById("video-background");
const checkbox = document.getElementById("checkbox");
video.playbackRate = 0.8; // Velocidade inicial

function mudarVelocidade() {
    let targetSpeed = checkbox.checked ? 16 : 0.8; // Velocidade desejada
    let currentSpeed = video.playbackRate; // Velocidade atual
    let increment = 1; // Incremento de velocidade

    // Adiciona ou remove a classe de desfoque dependendo do estado do switch
    if (checkbox.checked) {
        video.classList.add("blur");
    } else {
        video.classList.remove("blur");
    }

    // Limpa o intervalo atual
    clearInterval(interval);

    // Verifica se a velocidade atual é maior ou menor que a velocidade desejada
    if (currentSpeed < targetSpeed) {
        // Aumenta gradativamente a velocidade
        interval = setInterval(function () {
            currentSpeed += increment;
            video.playbackRate = currentSpeed;
            // Se a velocidade atual atingir ou ultrapassar a velocidade desejada, para o intervalo
            if (currentSpeed >= targetSpeed) {
                clearInterval(interval);
            }
        }, 200); // Ajuste esse valor para controlar a suavidade da transição
    } else if (currentSpeed > targetSpeed) {
        // Diminui gradativamente a velocidade
        interval = setInterval(function () {
            currentSpeed -= increment;
            video.playbackRate = currentSpeed;
            // Se a velocidade atual atingir ou ficar abaixo da velocidade desejada, para o intervalo
            if (currentSpeed <= targetSpeed) {
                clearInterval(interval);
            }
        }, 200); // Ajuste esse valor para controlar a suavidade da transição
    }
}


// CONTROLE DOS TITULOS PESSOAIS

const textos = [
    'Desenvolvedor Full Stack.',
    'Navegador de Dados Interplanetário.',
    'Apaixonado por inovação.',
    'Que a força esteja com você.',
];
const tituloPessoal = document.querySelector('.titulos-pessoais');

let index = 0;
let writingText = true;

function escreverTexto(texto, index = 0) {
    if (index <= texto.length) {
        tituloPessoal.innerHTML = texto.substring(0, index) + '<span class="span-cor">|</span>';
        setTimeout(() => escreverTexto(texto, index + 1), 100);
    } else {
        writingText = false;
        setTimeout(apagarTexto, 2000); // Tempo de espera antes de apagar o texto
    }
}

function apagarTexto() {
    const textoAtual = tituloPessoal.textContent;
    if (textoAtual.length > 1) {
        tituloPessoal.textContent = textoAtual.slice(0, -1);
        setTimeout(apagarTexto, 50);
    } else {
        writingText = true;
        index = (index + 1) % textos.length;
        setTimeout(() => escreverTexto(textos[index]), 10); // Tempo de espera antes de começar a escrever o próximo texto
    }
}

setInterval(() => {
    if (!writingText) {
        const textoAtual = tituloPessoal.textContent;
        if (textoAtual.charAt(textoAtual.length - 1) === '|') {
            tituloPessoal.innerHTML = textoAtual.slice(0, -1);
        } else {
            tituloPessoal.innerHTML += '<span class="span-cor">|</span>';
        }
    }
}, 500);
escreverTexto(textos[index]);








