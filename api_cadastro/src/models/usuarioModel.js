var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function listarGranjas() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarResgate()");
    var instrucao = `
        SELECT nome,estado,cnpj,telefone,rua,idGranja FROM granja ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome_granja, cnpj, cep, estados, bairro, numero_propiedade, rua, telefone) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome_granja, cnpj, cep, estados, bairro, numero_propiedade, rua, telefone);
    var instrucao = `
        INSERT INTO granja (nome,cnpj,cep,estado,bairro,numero_propiedade,rua,telefone) VALUES ('${nome_granja}','${cnpj}','${cep}','${estados}','${bairro}','${numero_propiedade}','${rua}','${telefone}')
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarCliente(nome_usuario, senha, email, storage) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar_cliente():", nome_usuario, senha, email, storage);
    var instrucao = `
        INSERT INTO usuario (nome,email,senha,fkGranja) VALUES ('${nome_usuario}', '${senha}', '${email}', '${storage}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function verTemp() {
    var instrucao = `
        select round(avg(temperatura),2) as media from registro;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function graficoM(idGranja) {
    var instrucao = `
    select round(avg(temperatura)) as mediaM from registro
        join sensor on idSensor = fk_sensor
        join area on idArea = fk_area
        join granja idGranja on fk_Granja
        where fk_Granja = ${idGranja} and MONTH(diaEhora) = MONTH(current_date())
        group by DAY (diaEhora);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function graficoA(idGranja) {
    var instrucao = `
        select round(avg(temperatura)) as mediaA from registro
	        join sensor on idSensor = fk_sensor
            join area on idArea = fk_area
            join granja idGranja on fk_Granja
            where fk_Granja = ${idGranja} and YEAR(diaEhora) = YEAR(current_date())
            group by MONTH(diaEhora);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function graficoA2(idGranja,ano) {
    var instrucao = `
        select round(avg(temperatura)) as mediaA2 from registro
	        join sensor on idSensor = fk_sensor
            join area on idArea = fk_area
            join granja idGranja on fk_Granja
            where fk_Granja = ${idGranja} and YEAR(diaEhora) = ${ano}
            group by MONTH(diaEhora);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function graficoM2(idGranja,mes) {
    var instrucao = `
        select round(avg(temperatura)) as mediaM2 from registro
	        join sensor on idSensor = fk_sensor
            join area on idArea = fk_area
            join granja idGranja on fk_Granja
            where fk_Granja = ${idGranja} and YEAR(diaEhora) = YEAR(current_date()) and MONTH(diaEhora) = ${mes} 
            group by DAY(diaEhora);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listar_anos(idGranja) {
    var instrucao = `
        select YEAR(diaEhora) as ano from registro
            join sensor on idSensor = fk_sensor
            join area on idArea = fk_area
            join granja idGranja on fk_Granja
            where fk_Granja = ${idGranja}
            group by YEAR(diaEhora);
        `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    cadastrarCliente,
    listar,
    verTemp,
    listarGranjas,
    graficoM,
    graficoM2,
    graficoA,
    graficoA2,
    listar_anos,
};