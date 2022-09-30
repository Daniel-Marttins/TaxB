function teste(valor, valorPorKm, bandeirada){
    var valor = parseFloat(document.querySelector(".valorInicial").value);
    var valorPorKm = parseFloat(document.querySelector(".valorPorKm").value);
    var bandeirada = parseInt(document.querySelector(".Bandeirada").value);

    var calculo = (valor * valorPorKm) + bandeirada;

    var resultado = document.querySelector(".resultado").value = `R$ ${calculo}`;
}

function limpar(){
    document.querySelector(".valorInicial").value = "";
    document.querySelector(".valorPorKm").value = "";
    document.querySelector(".Bandeirada").value = "";
    document.querySelector(".resultado").value = "";
}