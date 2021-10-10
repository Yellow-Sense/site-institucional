function calculo(){
    var qtde_ovo       = Number(qtd_ovo.value);
    var qtde_perdida   = Number(qtd_perda.value);
    var valor_vendido  = Number(qtd_preco.value);
    var area_granja    = Number(qtd_area.value);
    var qtde_sensor    = (area_granja / 10);

    var lucro_solo = ((qtde_ovo - (qtde_ovo * (qtde_perdida / 100))) * valor_vendido).toFixed(2);
    var lucro_projeto = ((qtde_ovo - (qtde_ovo * (10/ 100))) * valor_vendido).toFixed(2);
    var potencial = (90 -(100 - qtde_perdida)).toFixed(2);
    var ano = ((lucro_projeto - lucro_solo) * 4 * 12).toFixed(2);
    var mes = ((lucro_projeto - lucro_solo) * 4 ).toFixed(2);
    var sensor = (1  * qtde_sensor);
    var instalacao = qtde_sensor * 80;
    var total = (sensor + instalacao);

    resultado.innerHTML = `
    <h2 class="h2-js"> Potencial de ganhos </h2>

        <b class="b-js"> Sem o <span class="span-yellow">Yellow Sensor</span>,você teve um lucro de aproximadamente R$ ${lucro_solo}. <br>

        <b class="b-js">Com a nossa ajuda <span class="span-yellow"> Yellow Sensor</span> você poderá obter um lucro de aproximadente R$ ${lucro_projeto}.</b> <br>

        <b class="b-js">O <span class="span-yellow">Yellow Sensor</span> teria o potencial de lucrar aproximadamente ${potencial}% a mais. <br>

    <h2 class="h2-js">Diferença de lucro com o projeto</h2>

        <b class="b-js"> Rendendo um lucro a mais de aproximadamente R$ ${mes} ao mês. </b> <br>

        <b class="b-js"> Rendendo um lucro a mais de aproximadamente R$ ${ano} ao ano. </b> <br>

        <h2 class="h2-js">Orçamento</h2>

        <b class="b-js"> O valor do projeto com a instalação seria em torno de R$${total} </b> <br>     

    `
}

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
        $('#btn_entrar').css('border-color', '#FFC200');
        $('.p_btn_entrar').css('color', '#F2F2F2');
        div_menu.style.transition = "0.2s";//Controle do tempo da duração da transição de cor
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
        $('#btn_entrar').css('border-color', '#252525');
        $('.p_btn_entrar').css('color', '#252525');
        div_menu.style.transition = "0.2s";//Controle do tempo da duração da transição de cor
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
        $('#btn_entrar').css('border-color', '#252525');
        $('.p_btn_entrar').css('color', '#252525');
        div_menu.style.transition = "0.2s";//Controle do tempo da duração da transição de cor
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
        $('#btn_entrar').css('border-color', '#252525');
        $('.p_btn_entrar').css('color', '#252525');
        div_menu.style.transition = "0.2s";//Controle do tempo da duração da transição de cor
        btn_entrar.style.transition = "0.5s";//Controle do tempo da duração da transição de cor


        $('.link_inicio').css('text-decoration','none');
        $('.link_sobre').css('text-decoration','none');
        $('.link_produto').css('text-decoration','none');
        $('.link_simulador').css('text-decoration','none');
    }
});