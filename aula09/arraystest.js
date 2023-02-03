let vet = []
let cont = 10
for(i = 0; i < cont; i++){
    vet[i] = i
}
for(let i in vet){
    console.log(`A posição ${i} tem valor ${vet[i]}`)
}