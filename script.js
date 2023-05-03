let lista = [3, 1, 2, 20, 19, 12]

lista.sort()// var.sort() serve para ordenar a lista
lista.push(5) //push é equilavente ao append do python, serve para adicionar itens na lista

console.log(lista) 
console.log(`${lista[3]} é um número par, e ${lista[5]} é ímpar`)

console.log('--------  --------  --------  --------')

console.log(`Esta lista comporta ${lista.length} itens`)


// Enquanto o índice (i) for menor que o tamanho da lista, o loop continua.
for (let i = 0; i < lista.length; i++){
    console.log(`Item ${i} --> ${lista[i]}`)
}

console.log('--------  --------  --------  --------')

// Para cada índice (i) dentro da lista, o loop irá executar o console.log
for (let i in lista){
    console.log(`Item ${i} --> ${lista[i]}`)
}

console.log('--------  --------  --------  --------')

//indexOf recebe como parâmetro um elemento que pode estar no array, se o programa achar o elemento passado ele irá retornar a posição onde está este elemento.
console.log(lista.indexOf(19))
