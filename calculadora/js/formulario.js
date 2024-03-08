$(document).ready(function () {
    var suma1 = $('#suma1');
    var suma2 = $('#suma2');
    var resultado = $('#resultado');
    var boton = $('#boton');

    boton.on('click', function (e) {
        resultado.val(parseInt(suma1.val()) + parseInt(suma2.val()));
        e.preventDefault();
    })

})