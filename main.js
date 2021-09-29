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
        $('#btn_entrar_frente').css('background-color', '#FFC200');
        $('#btn_entrar_fundo').css('background-color', '#F2F2F2');
        div_menu.style.transition = "0.2s";//Controle do tempo da duração da transição de cor
        btn_entrar_fundo.style.transition = "0.2s";//Controle do tempo da duração da transição de cor
        btn_entrar_frente.style.transition = "0.5s";//Controle do tempo da duração da transição de cor
        
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
        $('#btn_entrar_frente').css('background-color', '#FFC200');
        $('#btn_entrar_fundo').css('background-color', '#252525');
        div_menu.style.transition = "0.2s";//Controle do tempo da duração da transição de cor
        btn_entrar_fundo.style.transition = "0.2s";//Controle do tempo da duração da transição de cor
        btn_entrar_frente.style.transition = "0.5s";//Controle do tempo da duração da transição de cor


        $('#link_inicio').css('text-decoration','none');
    }
});