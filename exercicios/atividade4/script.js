function generate(){
    let numtxt = document.querySelector("#numtxt")
    let tabuada = document.querySelector("#tabuada")

    if(numtxt.value.length == 0){
        window.alert("Digite um valor")
    }else{
        let num = Number(numtxt.value)
        tabuada.innerHTML = ""
        if(num == 0){
            let option0 = document.createElement("option")
            option0.text = "Todo numero multiplicado por 0 é 0"
            tabuada.appendChild(option0)
        }else{
            for(let i = 1; i <= 10 ; i++){
                let option = document.createElement("option")
                let answer = num * i
                option.text = `${i} x ${num} = ${answer}`
                tabuada.appendChild(option)
            }
        }
    }
}