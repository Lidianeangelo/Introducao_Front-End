//console.log("correto") alerta no console do site
//declaração de variáveis

//Função para dar um alerta quando clicar no botão

const botao=document.querySelector("#enviar")
console.log(botao)

//pode crar uma condicional para verificar se enviou a mensagem, etc
function envio(){
    alert('clicou no botão')
    botao.innerHTML="Enviado"
}