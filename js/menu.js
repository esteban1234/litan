$(document).ready(function(){


    // $('.menu ul .selector').click(function(){
    //   $('.selector').removeClass('select');
    //   $(this).addClass('select');

    // });

    var contador = 1;
    var pull = $('.op-menu');
    menu = $('.nav');

    $(pull).on('click', function(e) {
        e.preventDefault();
        if (contador == 1) {
           menu.slideToggle(1000);
            contador = 0;
        } else {
            menu.slideToggle(1000);
            // abrir.slideToggle(100);
            contador = 1;
        }
    });

});