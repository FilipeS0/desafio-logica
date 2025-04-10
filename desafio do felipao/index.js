let nome = "Repi";
let xp = 1000;
let elo;

if (xp < 1001) {
  elo = "Ferro";
} else if (xp < 2001) {
  elo = "Bronze";
} else if (xp < 3001) {
  elo = "Prata";
} else if (xp < 4001) {
  elo = "Ouro";
} else if (xp < 5001) {
  elo = "Platina";
} else if (xp < 6001) {
  elo = "Esmeralada";
} else if (xp < 7001) {
  elo = "Diamante";
} else if (xp < 8001) {
  elo = "Mestre";
} else if (xp < 9001) {
  elo = "Grão-Mestre";
} else {
  elo = "Desafiante";
}

console.log(elo);
