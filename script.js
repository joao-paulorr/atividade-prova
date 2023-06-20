// function nota() {
//     let nome = prompt("Qual seu nome?")
//     let nota1 = Number.parseFloat(prompt("Qual a primeira nota que você tirou?"))
//     let nota2 = Number.parseFloat(prompt("Qual a segunda nota?"))
//     let media = (nota1 + nota2) / 2
//     alert(`Bem vindo ${nome}!`)

//     if (media >= 7) {
//         alert(`Você foi aprovado`)
//     } else if (media >= 4 && media <= 6.9) {
//         alert(`Você está em conselho de classe`)
//     } else if (media < 4) {
//         alert(`Você foi reprovado!`)
//     }
// }

// function triangulo() {
//     let base = prompt("Qual o tamanho da base do triângulo?")
//     let altura = prompt("Qual o tamanho da altura do triângulo?")
//     let conta = (base * altura) / 2
//     let div = document.getElementById("area")
//     div.innerText = conta
// }

// function carros() {
//     let car = document.getElementById("carro").value
//     let pre = document.getElementById("preco")

//     switch (car) {
//         case "Gol 1.6":
//             pre.innerText = "R$48.000,00"
//             break;
        
//         case "Saveiro 1.8":
//             pre.innerText = "R$56.500,00"
//             break;

//         case "Fiat Toro":
//             pre.innerText = "R$87.390,00"
//             break;

//         case "Susuki Vitara":
//             pre.innerText = "R$169.880,00"
//             break;

//         case "Corolla":
//             pre.innerText = "R$77.360,00"
//             break;
//         default:
//             pre.innerText = "Carro Inválido!"
//             break;
//     }
// }


function cor(color) {
let corpo = document.getElementsByTagName("body")[0]
corpo.style.backgroundColor = color
}