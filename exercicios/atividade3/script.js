function count(){
    var startTxt = document.querySelector("#startTxt")
    var finishTxt = document.querySelector("#finishTxt")
    var stepsTxt = document.querySelector("#stepsTxt")
    var answerText = document.querySelector("#answerText")
    
    if(startTxt.value.length == 0 || finishTxt.value.length == 0 || stepsTxt.value.length == 0){
        window.alert("Faltam dados!")
    }else
        answerText.innerHTML = "Contando: <br>"
        var start = Number(startTxt.value)
        var finish = Number(finishTxt.value)
        var steps = Number(stepsTxt.value)

        if(steps <= 0){
            window.alert("Considerando passo = 1")
            steps = 1
        }
        //regressiva
        if(start > finish){
            for(var i = start; i >= finish; i -= steps){
                answerText.innerHTML += ` ${i} \u{1F449}`
            }
        //progressiva
        }else
            for(var i = start; i <= finish; i += steps){
                answerText.innerHTML += ` ${i} \u{1F449}`
            }
            answerText.innerHTML += "\u{1F44F}" 
    }