function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var anotxt = document.querySelector("#anotxt")
    var res = document.querySelector("#res")
    var img = document.querySelector("#img")
    if (anotxt == 0 || anotxt.value > ano){
        window.alert("Verifique os dados e tente novamente")
    }else{
        var sex = document.getElementsByName("genero")
        var idade = ano - Number(anotxt.value)
        var genero = ''
        if(sex[0].checked){
            genero = "Homem"
            if(idade <= 12){
                img.src = "imagens/menino.png"
            }else if(idade <= 20){
                img.src = "imagens/jovem_m.png"
            }else if(idade < 60){
                img.src = "imagens/homem.png"
            }else
                img.src = "imagens/idoso.png"
        }else if(sex[1].checked){
            genero = "Mulher"
            if(idade <= 12){
                img.src = "imagens/menina.png"
            }else if(idade <= 20){
                img.src = "imagens/jovem_f.png"
            }else if(idade < 60){
                img.src = "imagens/mulher.png"
            }else
                img.src = "imagens/idosa.png"
        }
        res.innerHTML = `Você é ${genero} e tem ${idade} anos.`
    }
}