var idade = document.querySelector("#idade");
var mensagem = document.querySelector("#mensagem");

//validação de cadastro
function changeidade() {

    if (idade.value < 18) {
        mensagem.textContent = "Idade incorreta"
        alert("Idade incorreta");
    }

}
//função ao clicar no botão //onclick
function cadastro() {
    alert('Cadastro Finalizado.');
}
//função onmouseover and onmouseout (ação de cor dentro e fora do objeto)
document.getElementById("efeito").onmouseover = function() { mouseOver() };
document.getElementById("efeito").onmouseout = function() { mouseOut() };

function mouseOver() {
    document.getElementById("efeito").style.color = "blue";
}

function mouseOut() {
    document.getElementById("efeito").style.color = "black";
}

//caixa de entrada com opções + mensagem
function myFunction() {
    var x = document.getElementById("mySelect").value;
    document.getElementById("demo").innerHTML = "Você selecionou: " + x;
}

//map
//array de texto
//transferir para JSON

const jsondados = json.stringfy();
console.log(jsondados);
console.log(typeof jsondados);