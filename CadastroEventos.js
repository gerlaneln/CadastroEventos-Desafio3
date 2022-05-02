console.log("Sistema de cadastro de eventos");
var nomeEvento = "";
var eventos = [];
var participantes = [];
menu();

function menu() {
    console.log("Menu: \n1. Cadastro de Eventos\n2. Listagem de eventos\n3. Sair");
    var opcao = prompt("Digite sua opção: ");
    console.log(opcao);

    switch (opcao) {
        case "1":
            cadastroEventos();
        case "2":
            listarEventos();
        case "3":
            return 0;
        default:
            break;
    }
}

function cadastroEventos() {
    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    var dataAtual = dia + '/' + mes + '/' + ano;

    var dataEvento = prompt("Insira a data do evento: (dd/mm/aaaa)");

    if(dataEvento === dataAtual){
        console.log("Data inválida. Evento não pode ser cadastrado para data atual");
        cadastroEventos();
    }

    nomeEvento = prompt("Qual o nome do evento?");
    eventos.push(nomeEvento);
    eventos.push(["Evento: "+ nomeEvento]);
    menuParticipante();
}

function menuParticipante() {
    var opcaoPart = prompt("Deseja inserir participantes? \n4. Sim\n5. Não");
    switch (opcaoPart) {
        case "4":
            cadastroParticipantes();
        case "5":
            eventos.push(["Participantes: "+ participantes]);
            menu();
        default:
            break;
    }
}

function cadastroParticipantes() {
    if(participantes.length > 100){
        console.log("Um evento não pode ter mais de 100 participantes.");
        menu();
    }
    var idade = prompt("Digite a idade do participante: ");
    if(idade < 18){
        console.log("Não é permitido o cadastro de participantes menores de 18 anos");
        cadastroParticipantes();
    }
    var nomeParticipante = prompt("Insira o nome do participante:");
    participantes.push(nomeParticipante);
    menuParticipante();
}

function listarEventos(){
    console.log("Eventos e participantes cadastrados: ");
    console.log(participantes);
    menu();
}
