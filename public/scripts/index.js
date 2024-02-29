let interval;
const video = document.getElementById("video-background");
const checkbox = document.getElementById("checkbox");
video.playbackRate = 0.8; // Velocidade inicial

function mudarVelocidade() {
    let targetSpeed = checkbox.checked ? 8 : 0.8; // Velocidade desejada
    let currentSpeed = video.playbackRate; // Velocidade atual
    let increment = 0.8; // Incremento de velocidade

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

