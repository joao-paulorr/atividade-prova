function nota() {
    let nome = prompt("Qual seu nome?")
    let nota1 = Number.parseFloat(prompt("Qual a primeira nota que você tirou?"))
    let nota2 = Number.parseFloat(prompt("Qual a segunda nota?"))
    let media = (nota1 + nota2) / 2
    alert(`Bem vindo ${nome}!`)

    if (media >= 7) {
        alert(`Você foi aprovado`)
    } else if (media >= 4 && media <= 6.9) {
        alert(`Você está em conselho de classe`)
    } else if (media < 4) {
        alert(`Você foi reprovado!`)
    }


}