function calcularInvestimento() {
    const valor = parseFloat(document.getElementById("txtValor").value);
    const meses = parseInt(document.getElementById("txtMeses").value);
    const taxa = 0.55/100;
    var valorFormatado;

    const resultadoParcial = document.getElementById("resultadoDetalhado");
    const resultadoFinal = document.getElementById("resultado");

    resultadoParcial.style.display = "block";
    resultadoFinal.style.display = "block";

    resultadoParcial.innerHTML = "";
    resultadoFinal.innerHTML = "";
}