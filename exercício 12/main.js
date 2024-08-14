//Lanna Kamilly
let escolha = prompt("Escolha uma opção de comida (1, 2 ou 3):");

switch (escolha) {
    case '1':
        alert("Você escolheu pizza! Confira nosso cardápio.");
        break;
    case '2':
        alert("Você escolheu hambúrguer! Delícia!");
        break;
    case '3':
        alert("Você escolheu sushi! Que tal um combinado?");
        break;
    default:
        alert("Opção inválida. Por favor, escolha 1, 2 ou 3.");
}