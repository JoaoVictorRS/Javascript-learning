function carregar(){
    var msg = document.getElementById("msg")
    var imagem = document.getElementById("imagem")
    var pegaHora = new Date()
    var hora = pegaHora.getHours()

    if(hora >= 0 && hora < 12){
        msg.innerText = (`Bom dia! agora são ${hora} horas`)
        imagem.src = "imagens/dia.jpg"
        document.body.style.background = "linear-gradient(#6cbefa, white)" + "no-repeat"
        document.getElementById("embaixo").style.color = "black"
    }else if(hora < 18){
        msg.innerText = (`Boa tarde! agora são ${hora} horas`)
        imagem.src = "imagens/tarde.jpg"
        document.body.style.background = "#ed9847"
    }else{
        msg.innerText = (`Boa noite! agora são ${hora} horas`)
        imagem.src = "imagens/noite.jpg"
        document.body.style.background = "#032123"
    }
}