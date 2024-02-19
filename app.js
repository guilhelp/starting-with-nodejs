// console.log("Hello World!")

// var number1 = 5;
// var number2 = 2;

// var soma = number1 + number2;
// var sub = number1 - number2;
// var div = number1 / number2;
// var multi = number1 * number2;

// console.log(`A soma do número ${number1} e ${number2} é ${soma}`)
// console.log(`A subtração do número ${number1} e ${number2} é ${sub}`)
// console.log(`A divisão do número ${number1} por ${number2} é ${div}`)
// console.log(`A multiplicação do número ${number1} por ${number2} é ${multi}`)

// var soma = require('./soma');
// var sub = require('./sub');
// var multi = require('./multi');
// var div = require('./div');

// console.log(soma(10,10));
// console.log(sub(10, 5));
// console.log(multi(5,2 ));
// console.log(div(100, 10));
 
// Criando um servidor
var http = require('http');

// req = requisicao = captura
// res = resposta = envia

http.createServer(function(req, res) {
    res.end("Mensagem direcionada");
}).listen(8081);

console.log("Servidor está ativo!");
