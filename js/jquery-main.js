//função que gera números aleatórios (random)
function random(number){
    return Math.floor(Math.random()*(number+1));
}

$(document).ready(function(){
     //mudar cor do label do botão entrar
     function mudarCor(){
        var rndCol = 'rgb('+255+','+random(255)+','+random(255)+')';
        $("#entlab").css("color", rndCol);
    }

    setInterval(mudarCor, 1000);
})