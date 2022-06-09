// 1)Fazer um algoritmon que imprima os numeros de 0 a 100 sem funcao e com funcao

// for (i = 0; i <= 100; i++){
//     console.log(i)
// }

//--------------------------------------------------------------------------------------

// function numeracao(){
//     for (i = 0; i <= 100; i++){
//         console.log(i)
//     }
// }

// numeracao()



//2) Fazer um algoritmon que imprima os numeros pares de 0 a 100 sem função e com função

// for (i = 0 ; i <= 100 ; i++) {
//     if(i % 2 == 0) {
//         console.log(i)
//     } 
// }

//--------------------------------------------------------------------------------------

// function numerosPares() {
//     for (i = 0 ; i <= 100 ; i++) {
//         if(i % 2 == 0) {
//             console.log('Esse é um numero par',i)
//         } 
//     }
// }

// numerosPares()

//3) Fazer um algoritmon que imprima os numeros impares de 0 a 100 sem função e com função

// for (i = 0 ; i <= 100 ; i++) {
//     if(i % 2) {
//         console.log('Esse é um numero impar',i)
//     } 
// }

//--------------------------------------------------------------------------------------

// function numerosImpares() {
//     for (i = 0 ; i <= 100 ; i++) {
//         if(i % 2) {
//             console.log('Esse é um numero impar',i)
//         } 
//     }
// }

// numerosImpares()


//4) Fazer um algoritmo que imprima os numeros primos de 0 a 100 sem função e com função

// for( i = 0 ; i <= 100 ; i++){
//     num=0;
//     for(c = 1 ; c <= i ; c++){
//         if(i % c == 0)
//             num++;
//     }
//         if(num==2){
//          console.log(i)
//         }
// }

//c

// function numPrimos () {
//     for( i = 0 ; i <= 100 ; i++){
//         num=0;
//         for(c = 1 ; c <= i ; c++){
//             if(i % c == 0)
//                 num++;
//         }
//             if(num==2){
//              console.log(i)
//             }
//     }
// }

// numPrimos()

//5) Fazer um algoritmo que imprima os numeros multiplos de 5 de 0 a 100 sem função e com função

// for(i = 0; i <= 100; i++) {
//     if ( i % 5 === 0)  {
//         console.log(i)
//     }
// }

// --------------------------------------------------------------------------------------

// function multiplosDe5 (){
//     for(i = 0; i <= 100; i++) {
//         if ( i % 5 === 0)  {
//             console.log(i)
//         }
//     }    
// }
// multiplosDe5()

//6) Fazer uma funcao que recebe 2 parametros numericos e imprima os valores entre esses numeros

// function valores(num1,num2) {
//     for(i = num1 + 1 ; i < num2 ; i++)
//     console.log(i)

// }
// valores(9,20)

//7) Fazer uma funcao que receba um array e retorne os numeros pares desse array sem usar o filter e usando o filter

// var array =[1,2,3,4,5,6,7,8,9,10,11]

// function returnArray (variavel) {   
//     const arr = []
//     for(i = 1; i <= variavel.length; i++) {
//         if(variavel[i] % 2 === 0) {
//             arr.push(variavel[i])
//         }
//     }

//     return arr

// }

// console.log(returnArray(array))

// --------------------------------------------------------------------------------------

// var array =[1,2,3,4,5,6,7,8,9,10]

// console.log(array.filter(function(pares) {
//     return pares % 2 === 0
// }))


//8) Fazer uma funcao que receba um array e retorne os numeros impares desse array sem usar o filter e usando o filter

// var array =[1,2,3,4,5,6,7,8,9,10,11]

// function returnArrayImpar(variavel) {
//     const arr = []

//     for(i = 0; i <= array.length ; i++){
//         if(variavel[i] % 2) {
//             arr.push(variavel[i])
//         }
//     }
//     return arr
// }

// console.log(returnArrayImpar(array))

// --------------------------------------------------------------------------------------

// var array =[1,2,3,4,5,6,7,8,9,10]

// console.log(array.filter(function(impar) {
//     return impar % 2
// }))


//9) Fazer uma funcao que receba um array e retorne os numeros primos desse array sem usar o filter e usando o filter

// var array = [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

// function numPrimos(numero) {
//     const arr = []
//     for( i = 0 ; i < array.length ; i++){

//         num=0;

//         for(c = 1 ; c <= numero[i] ; c++){
//             if(numero[i] % c === 0)
//                 num++;
//         }
//             if(num==2){
//              arr.push(numero[i])
//             }
//     }
//     return arr
// }

// console.log(numPrimos(array))

// --------------------------------------------------------------------------------------

// var array = [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

// console.log(array.filter((arr) => {
//     num = 0
//     for (i = 1 ; i <= arr ; i++ ) {
//         if(arr % i == 0 ) {
//             num++;
//         }
//     }
//     if(num == 2){
//         return arr
//     }
// }))


//Fazer uma funcao que receba um array e retorne um novo array e para cada posicao desse array que tiver um numero par retorne o numero com - par na frente e para cada posicao que tenha um impar retorne o numero com - impar na frente e quando for zero retorne a string zero ao invés do numero 0.

// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

// let resultado = array.map(function(p) {
//    if (p === 0) {
//        return ('Zero')
//    }else if(p % 2 ==0) {
//        return `${p} - par`
//    }else {
//        return `${p} - Impar`
//    }
// })
// console.log(resultado)
