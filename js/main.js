
//Função que verifica a posição do scrool ao ser movimentado
$(window).on("scroll touchmove", function() {

    //Função que se o scrollTop da pagina estiver na seção inicio, altera o css da pagina
    if ($(document).scrollTop() >= $("#sec_inicio").position().top){
        $('#div_menu').css('background-color', 'rgba(0, 0, 0, 0)');
        $('.link_inicio').css('text-decoration','underline');
        $('.link_inicio').css('text-decoration-color','#ffc200');
        
        $('.link_inicio').css('color', '#f2f2f2');
        $('.link_sobre').css('color', '#f2f2f2');
        $('.link_produto').css('color', '#f2f2f2');
        $('.link_contato').css('color', '#f2f2f2');
        $('.link_simulador').css('color', '#f2f2f2');
        $('#btn_entrar').css('background-color', '#FFC200');
        $('#fundo_btn_entrar').css('background-color', '#F2F2F2');
        div_menu.style.transition = "0.2s";//Controle do tempo da duração da transição de cor
        fundo_btn_entrar.style.transition = "0.2s";//Controle do tempo da duração da transição de cor
        btn_entrar.style.transition = "0.5s";//Controle do tempo da duração da transição de cor
        
        $('.link_sobre').css('text-decoration','none');
        $('.link_produto').css('text-decoration','none');
        $('.link_contato').css('text-decoration','none');
        $('.link_simulador').css('text-decoration','none');
    }

    //Função que se o scrollTop da pagina estiver na seção Sobre, altera o css da pagina
    if ($(document).scrollTop() >= $("#sec_sobre").position().top){
        $('#div_menu').css('background-color', '#f2f2f2');
        $('.link_sobre').css('text-decoration','underline');
        $('.link_sobre').css('text-decoration-color','#ffc200');

        $('.link_inicio').css('color', '#252525');
        $('.link_sobre').css('color', '#252525');
        $('.link_produto').css('color', '#252525');
        $('.link_contato').css('color', '#252525');
        $('.link_simulador').css('color', '#252525');
        $('#btn_entrar').css('background-color', '#FFC200');
        $('#fundo_btn_entrar').css('background-color', '#252525');
        div_menu.style.transition = "0.2s";//Controle do tempo da duração da transição de cor
        fundo_btn_entrar.style.transition = "0.2s";//Controle do tempo da duração da transição de cor
        btn_entrar.style.transition = "0.5s";//Controle do tempo da duração da transição de cor


        $('.link_inicio').css('text-decoration','none');
        $('.link_produto').css('text-decoration','none');
        $('.link_contato').css('text-decoration','none');
        $('.link_simulador').css('text-decoration','none');
    }
    
    if ($(document).scrollTop() >= $("#sec_produto").position().top){
        $('#div_menu').css('background-color', '#f2f2f2');
        $('.link_produto').css('text-decoration','underline');
        $('.link_produto').css('text-decoration-color','#ffc200');

        $('.link_inicio').css('color', '#252525');
        $('.link_sobre').css('color', '#252525');
        $('.link_produto').css('color', '#252525');
        $('.link_contato').css('color', '#252525');
        $('.link_simulador').css('color', '#252525');
        $('#btn_entrar').css('background-color', '#FFC200');
        $('#fundo_btn_entrar').css('background-color', '#252525');
        div_menu.style.transition = "0.2s";//Controle do tempo da duração da transição de cor
        fundo_btn_entrar.style.transition = "0.2s";//Controle do tempo da duração da transição de cor
        btn_entrar.style.transition = "0.5s";//Controle do tempo da duração da transição de cor


        $('.link_inicio').css('text-decoration','none');
        $('.link_sobre').css('text-decoration','none');
        $('.link_contato').css('text-decoration','none');
        $('.link_simulador').css('text-decoration','none');
    }

    if ($(document).scrollTop() >= $("#sec_contato").position().top){
        $('#div_menu').css('background-color', '#f2f2f2');
        $('.link_contato').css('text-decoration','underline');
        $('.link_contato').css('text-decoration-color','#ffc200');

        $('.link_inicio').css('color', '#252525');
        $('.link_sobre').css('color', '#252525');
        $('.link_produto').css('color', '#252525');
        $('.link_contato').css('color', '#252525');
        $('.link_simulador').css('color', '#252525');
        $('#btn_entrar').css('background-color', '#FFC200');
        $('#fundo_btn_entrar').css('background-color', '#252525');
        div_menu.style.transition = "0.2s";//Controle do tempo da duração da transição de cor
        fundo_btn_entrar.style.transition = "0.2s";//Controle do tempo da duração da transição de cor
        btn_entrar.style.transition = "0.5s";//Controle do tempo da duração da transição de cor


        $('.link_inicio').css('text-decoration','none');
        $('.link_sobre').css('text-decoration','none');
        $('.link_produto').css('text-decoration','none');
        $('.link_simulador').css('text-decoration','none');
    }
});