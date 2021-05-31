// Activador de jQuery - Función principal de jQuery
$(document).ready(function(){

    // Funciones de Filtrado
    $('#todos').click(function(){
        $('main section#sistema-filtrado article img').show();

        $('#todos').addClass('filtro-activo');
        $('#todos').removeClass('filtro-inactivo');

        $('#guitarras, #bajos, #de-viento, #teclados').removeClass('filtro-activo');
        $('#guitarras, #bajos, #de-viento, #teclados').addClass('filtro-inactivo');
    });

    $('#guitarras').click(function(){
        $('main section#sistema-filtrado article img').hide();
        $('main section#sistema-filtrado article img.guitarras').show();

        $('#guitarras').addClass('filtro-activo');
        $('#guitarras').removeClass('filtro-inactivo');

        $('#todos, #bajos, #de-viento, #teclados').removeClass('filtro-activo');
        $('#todos, #bajos, #de-viento, #teclados').addClass('filtro-inactivo');
    });

    $('#bajos').click(function(){
        $('main section#sistema-filtrado article img').hide();
        $('main section#sistema-filtrado article img.bajos').show();

        $('#bajos').addClass('filtro-activo');
        $('#bajos').removeClass('filtro-inactivo');

        $('#todos, #guitarras, #de-viento, #teclados').removeClass('filtro-activo');
        $('#todos, #guitarras, #de-viento, #teclados').addClass('filtro-inactivo');
    });

    $('#de-viento').click(function(){
        $('main section#sistema-filtrado article img').hide();
        $('main section#sistema-filtrado article img.de-viento').show();

        $('#de-viento').addClass('filtro-activo');
        $('#de-viento').removeClass('filtro-inactivo');

        $('#todos, #guitarras, #bajos, #teclados').removeClass('filtro-activo');
        $('#todos, #guitarras, #bajos, #teclados').addClass('filtro-inactivo');

    });

    $('#teclados').click(function(){
        $('main section#sistema-filtrado article img').hide();
        $('main section#sistema-filtrado article img.teclados').show();

        $('#teclados').addClass('filtro-activo');
        $('#teclados').removeClass('filtro-inactivo');

        $('#todos, #guitarras, #bajos, #de-viento').removeClass('filtro-activo');
        $('#todos, #guitarras, #bajos, #de-viento').addClass('filtro-inactivo');
 
    });


    // Función de Posición fija de Filtros al hacer ScrollDown
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('main section#sistema-filtrado nav#filtros').css('position','fixed');
            $('main section#sistema-filtrado nav#filtros').css('left','0');
            $('main section#sistema-filtrado nav#filtros').css('z-index','999');
            $('main section#sistema-filtrado nav#filtros').css('top','80px');
            $('main section#sistema-filtrado nav#filtros').css('border-radius','0 0 5px 5px');
        } else {
            $('main section#sistema-filtrado nav#filtros').css('position','relative');
            $('main section#sistema-filtrado nav#filtros').css('left','0');
            $('main section#sistema-filtrado nav#filtros').css('z-index','1');
            $('main section#sistema-filtrado nav#filtros').css('top','0');
            $('main section#sistema-filtrado nav#filtros').css('border-radius','5px');
        }
    });
});