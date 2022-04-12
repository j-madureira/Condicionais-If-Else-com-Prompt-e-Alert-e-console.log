/* Criar uma variável que recebeo nome e outra variável que recebe a idade, e
   se a idade for maior ou igual a 18tem acesso e também pode fazer um pedido
   E se for menor que 18 apenas não tem acesso e não pode fazer um pedido
*/
var nome = prompt("Olá digite seu nome^^:")
var idadePedido = prompt("Olá informe sua idade:");

if(idadePedido >= 18){
    console.log(`${nome},tem acesso a fazer um pedido`);
    var pedido =prompt(`Qual o pedido, ${nome} :`)
    alert(`Certo ${nome} seu pedido é: ${pedido}`);
    console.log(`Pessoal o pedido do ${nome} é: ${pedido}`)
}
else{
    console.log(`${nome}, Você não tem acesso pois sua idade é: ${idadePedido}`);
}
