function sortear(qtde_jogos) {

    for (let i = 0; i < qtde_jogos; i++) {
        
        var numeros = [];

        while(numeros.length < 6) {

            var n = getRandomInt(1, 60);
            
            if (!numeros.includes(n)) {

                numeros.push(n);
            }
        }

        console.log('Jogo ' + (i + 1) + ': ' + numeros.sort(function (a, b) {  return a - b;  }));
    }
}

function getRandomInt(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

sortear(3);

console.log('Good luck!');