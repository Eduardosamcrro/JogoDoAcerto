
alert("Boas vindas ao jogo número secreto");
let numeroSecreto = parseInt(Math.random() * 100 + 1);
let chute;
let tentativas = 1;
//Para atribuior mais 1: ++
//Operadores- NAO é igual: != igual: == maior: >
//enquanto chute nao for igual ao numero secreto
while (chute != numeroSecreto){
    chute = prompt("Escolha um número entre 1 e 100");
    //se o chute for igual ao número secreto
    if (numeroSecreto == chute) {
    break;
    } else {
    if(chute > numeroSecreto ){
        alert(`O número secreto é menor que ${chute}`);
    } else {
        alert(`O número secreto é maior que ${chute}`);
    }
    //tentativas = tentativas = 1
    tentativas++;
}
}

let palavraTentativa = tentativas > 1 ? 'tenativas' : 'tentativa';
    alert(`Isso ai! vc descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
//if(tentativas > 1) {
  //      alert(`Isso ai! vc descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas.`);
    //} else{
      //  alert(`Isso ai! vc descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa.`);
//}