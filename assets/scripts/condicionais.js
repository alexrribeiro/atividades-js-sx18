function verificarCidade() {
    const cidade = document.getElementById("selCidade").value;

    if(cidade == "Pindamonhangaba") {
        alert("Olá! Temos uma oferta especial para você neste final de semana!");
    }
}

function calcularImposto() {
    const anofab = document.getElementById("txtAno").value;
    const valor = document.getElementById("txtValor").value;
    const anoatual = new Date().getFullYear();
    const resultado = document.getElementById("resultado");
    var frase;

    if(anofab > anoatual - 20) {
        const imposto = valor * 0.04;
        const impostoFormatado = imposto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        frase = "Valor a pagar do imposto é: " + impostoFormatado;
    }
    else {
        frase = "O veículo está isento de pagar IPVA.";
    }

    resultado.innerHTML = frase;
    resultado.style.display = "block";
}

function parOuImpar() {
    const numero = document.getElementById("txtNumero").value;
    var frase;

    numero % 2 == 0 ? frase = "O número é par!" : frase = "O número é ímpar!";

    resultado.innerHTML = frase;
    resultado.style.display = "block";
}

function calcularCombustiveis() {
    const precoEtanol = document.getElementById("txtEtanol").value;
    const precoGasolina = document.getElementById("txtGasolina").value;
    var frase;
    const resultado = document.getElementById("resultado");

    const precoEtanolArrumado = precoEtanol.replace(",",".");
    const precoGasolinaArrumado = precoGasolina.replace(",",".");

    if (precoEtanolArrumado/precoGasolinaArrumado > 0.7) {
        frase = "Abasteça com gasolina!";
    }
    else if (precoEtanolArrumado/precoGasolinaArrumado < 0.7) {
        frase = "Abasteça com etanol!";
    }
    else {
        frase = "Você pode escolher qualquer um dos dois!";
    }

    resultado.innerHTML = frase;
    resultado.style.display = "block";
}

function verificarBeneficio() {
    const salario = document.getElementById("txtSalario").value;
    const anoInicio = document.getElementById("txtAnoInicio").value;
    const anoAtual = new Date().getFullYear();
    var beneficio, frase;
    const resultado = document.getElementById("resultado");

    // Testando se o funcionário tem direito a 10%
    if (salario < 2200 && anoInicio < anoAtual-10) {
        beneficio = salario * 0.1;
        frase = "<p>O valor do benefício será " + beneficio + "</p>";
    }
    // Testando se o funcionário tem direito a 5%
    else if (salario < 2200 || anoInicio < anoAtual-10) {
        beneficio = salario * 0.05;
        frase = "<p>O valor do benefício será " + beneficio + "</p>";
    }
    // E se o funcionário não tiver direito...
    else {
        frase = "<p>O funcionário não tem direito ao benefício =/</p>";
    }

    resultado.innerHTML = frase;
    resultado.style.display = "block";
}

function verificarBeneficioFilhos() {
    const salario = document.getElementById("txtSalario").value;
    const anoInicio = document.getElementById("txtAnoInicio").value;
    const anoAtual = new Date().getFullYear();
    const numeroFilhos = document.getElementById("txtFilhos").value;
    var beneficio, frase;
    const resultado = document.getElementById("resultado");

    // Testando se o funcionário tem direito a 10%
    if ((salario < 2200 && anoInicio < anoAtual-10) || filhos != 0) {
        const acrescimo = numeroFilhos * salario * 0.01;
        beneficio = salario * 0.1 + acrescimo;
        frase = "<p>O valor do benefício será " + beneficio + "</p>";
    }
    // Testando se o funcionário tem direito a 5%
    else if (salario < 2200 || anoInicio < anoAtual-10) {
        beneficio = salario * 0.05;
        frase = "<p>O valor do benefício será " + beneficio + "</p>";
    }
    // E se o funcionário não tiver direito...
    else {
        frase = "<p>O funcionário não tem direito ao benefício =/</p>";
    }

    resultado.innerHTML = frase;
    resultado.style.display = "block";
}

function exibirDataDeHoje() {
    const agora = new Date();
    var diaDaSemana = agora.getDay();
    const dia = agora.getDate();
    var mes = agora.getMonth();
    const ano = agora.getFullYear();

    const resultado = document.getElementById("resultado");
    const resultadoSec = document.getElementById("resultado-sec");

    var frase, diasDoMes;

    if (diaDaSemana == 0) {
        diaDaSemana = "Domingo";
    }
    else if (diaDaSemana == 1) {
        diaDaSemana = "Segunda-Feira";
    }
    else if (diaDaSemana == 2) {
        diaDaSemana = "Terça-Feira";
    }
    else if (diaDaSemana == 3) {
        diaDaSemana = "Quarta-Feira";
    }
    else if (diaDaSemana == 4) {
        diaDaSemana = "Quinta-Feira";
    }
    else if (diaDaSemana == 5) {
        diaDaSemana = "Sexta-Feira";
    }
    else if (diaDaSemana == 6) {
        diaDaSemana = "Sábado";
    }
    else {
        alert("Ocorreu um problema.")
        diaDaSemana = "";
    }

    switch (mes) {
        case 0:
        case 2:
        case 4:
        case 6:
        case 7:
        case 9:
        case 11:
            diasDoMes = "Mês com 31 dias";
            break;
        case 3:
        case 5:
        case 8:
        case 10:
            diasDoMes = "Mês com 30 dias";
            break;
        case 1:
            diasDoMes = "Mês com 28 ou 29 dias";
            break;
        default:
            alert("Ocorreu um erro.");
            break;
    }

    switch (mes) {
        case 0:
            mes = "Janeiro";
            break;
        case 1:
            mes = "Fevereiro";
            break;
        case 2:
            mes = "Março";
            break;
        case 3:
            mes = "Abril";
            break;
        case 4:
            mes = "Maio";
            break;
        case 5:
            mes = "Junho";
            break;
        case 6:
            mes = "Julho";
            break;
        case 7:
            mes = "Agosto";
            break;
        case 8:
            mes = "Setembro";
            break;
        case 9:
            mes = "Outubro";
            break;
        case 10:
            mes = "Novembro";
            break;
        case 11:
            mes = "Dezembro";
            break;
        default:
            alert("Ocorreu um problema.");
            mes = "";
            break;
    }

    frase = `<p>${diaDaSemana}, ${dia} de ${mes} de ${ano}.</p>`;

    resultado.innerHTML = frase;
    resultadoSec.innerHTML = diasDoMes;
    resultado.style.display = "block";
    resultadoSec.style.display = "block";
}