
function imprime(nome){
    for(var i = 0; i < 5; i++) {
        document.write('Você dançou, ' + nome);
    }
}
var nome = prompt('Seu nome');
confirm('Tem certeza que você quer informar o seu nome?');
alert('Não importa o que você respondeu. O nome informado já está guardado');

imprime(nome);

    