function calcularInvestimento() {
    var valor = parseFloat(document.getElementById("txtValor").value);
    const meses = parseInt(document.getElementById("txtMeses").value);
    const taxa = 0.55/100;
    var valorFormatado;

    const resultadoParcial = document.getElementById("resultadoDetalhado");
    const resultadoFinal = document.getElementById("resultado");

    resultadoParcial.style.display = "block";
    resultadoFinal.style.display = "block";

    resultadoParcial.innerHTML = "";
    resultadoFinal.innerHTML = "";

    var i = 0;

    while (i < meses) {
        valor +=  valor * taxa;
        valorFormatado = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

        i++;

        resultadoParcial.innerHTML += `<p>${i}º mês: ${valorFormatado}</p>`;
    }

    resultadoFinal.innerHTML = `<p>Ao final do período você terá ${valorFormatado}</p>`
}

function calcularParcelamento() {
    var valor = parseFloat(document.getElementById("txtValor").value);
    const parcelas = parseInt(document.getElementById("txtMeses").value);
    var parcelaFormatada, valorParcela;

    const resultadoParcial = document.getElementById("resultadoDetalhado");
    resultadoParcial.style.display = "block";
    resultadoParcial.innerHTML = "";

    var i = 1;

    do {
        valorParcela = valor / i;
        parcelaFormatada = valorParcela.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

        resultadoParcial.innerHTML += `<p>${i} parcelas = ${parcelaFormatada}</p>`;
        i++;
    } while (i <= parcelas);
}

function obterTabuada() {
    const numero = document.getElementById("txtNumero").value;
    const resultado = document.getElementById("resultado");
    resultado.style.display = "block";
    resultado.innerHTML = "";
    var produto;

    for(var i = 0; i <= 10; i++) {
        produto = numero * i;
        resultado.innerHTML += `<p>${numero} x ${i} = ${produto}</p>`
    }
}