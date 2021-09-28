$(window).on("scroll touchmove", function() {
    if ($(document).scrollTop() >= $("#sec_inicio").position().top){
        $('#div_menu').css('background-color', 'rgba(0, 0, 0, 0)');
        $('#link_inicio').css('text-decoration','underline');
        $('#link_inicio').css('text-decoration-color','#ffc200');
        
        $('#link_inicio').css('color', '#f2f2f2');
        $('#link_sobre').css('color', '#f2f2f2');
        $('#link_produto').css('color', '#f2f2f2');
        $('#link_contato').css('color', '#f2f2f2');
        $('#link_simulador').css('color', '#f2f2f2');

        $('#link_sobre').css('text-decoration','none');
    }
    if ($(document).scrollTop() >= $("#sec_sobre").position().top){
        $('#div_menu').css('background-color', '#f2f2f2');
        $('#link_sobre').css('text-decoration','underline');
        $('#link_sobre').css('text-decoration-color','#ffc200');

        $('#link_inicio').css('color', '#252525');
        $('#link_sobre').css('color', '#252525');
        $('#link_produto').css('color', '#252525');
        $('#link_contato').css('color', '#252525');
        $('#link_simulador').css('color', '#252525');

        $('#link_inicio').css('text-decoration','none');
    }
});