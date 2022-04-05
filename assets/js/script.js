$(document).ready(function () {
    //FUNCIÓN TOOLTIPS
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    //FUNCIÓN ALERTA MENSAJE ENVIADO
    $('#enviarCorreo').click(function () {
        alert('El mensaje ha sido enviado correctamente...');
    });

    //FUNCIÓN CAMBIO COLOR DE TÍTULO (DOUBLE CLICK)
    $('h4').on("dblclick", function () {
        $(this).css("color", "#dc3545");
    });

    //FUNCIÓN ESCONDER DESCRIPCIÓN CARD (CLICK)
    $('.card-title').click(function () {
        $('.card-text').toggle();
    });
});