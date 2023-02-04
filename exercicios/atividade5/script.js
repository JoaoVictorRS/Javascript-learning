function add(){
    let numtxt = document.querySelector("#numtxt")
    let numList = document.querySelector("#numList")
    var vet = []

    if(numtxt.value.length == 0){
        window.alert("Por favor digite um numero!")
    }else
        var num = Number(numtxt.value)
        let option = document.createElement("option")
        vet.push(num)
        option.text = `Vetor ${num} adicionado`
        numList.appendChild(option)
    function end(vet){
        
    }
}