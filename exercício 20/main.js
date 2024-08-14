//Lanna Kamily
function escolherDificuldade() {
    var nivel = prompt("Digite o nível de dificuldade (fácil, médio ou dificil):");
    if (nivel === "fácil") {
        document.write("Você escolheu o nível fácil!");
    } else if (nivel === "médio") {
        document.write("Você escolheu o nível médio!");
    } else if (nivel === "dificil") {
        document.write("Você escolheu o nível difícil!");
    } else {
        document.write("Nível de dificuldade inválido!");
    }
}