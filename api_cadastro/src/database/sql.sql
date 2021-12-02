CREATE DATABASE Yellow_Sensor ;
USE Yellow_Sensor ;

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- Table `cliente`
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
CREATE TABLE usuario (
  idUsuario INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(50) ,
  email VARCHAR(70) ,
  senha CHAR(8),
  fkGranja INT,
  FOREIGN KEY (fkGranja) REFERENCES granja(idGranja)
)auto_increment = 100;

-- --------------------------------------------------------------------------------------------------------------------------------------------------------
-- Table `granja`
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
CREATE TABLE granja (
  idGranja INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(50),
  estado CHAR(2),
  cnpj CHAR(14),
  cep CHAR(8),
  rua VARCHAR (45),
  bairro VARCHAR(45),
  telefone VARCHAR(20),
  numero_propriedade VARCHAR(4)
);
    
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- TABLE `Yellow_Sensor`.`area`
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
CREATE TABLE area (
idArea INT PRIMARY KEY AUTO_INCREMENT,
nome_Area VARCHAR(45),
fk_Granja INT,
FOREIGN KEY (fk_Granja) REFERENCES granja(idGranja)
);
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- Table `Yellow_Sensor`.`sensor`
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
CREATE TABLE sensor (
  idSensor INT AUTO_INCREMENT PRIMARY KEY ,
  fk_Area INT,
  FOREIGN KEY (fk_Area) REFERENCES area (idArea)
);

-- --------------------------------------------------------------------------------------------------------------------------------------------------------
-- Table `registro`
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------

CREATE TABLE registro (
  idRegistro INT PRIMARY KEY  AUTO_INCREMENT,
  diaEhora DATETIME default current_timestamp,
  temperatura FLOAT ,
  alerta VARCHAR(45),
  fk_Sensor INT ,
  FOREIGN KEY (fk_Sensor) REFERENCES sensor(idSensor),
  constraint check_alerta check(alerta='ativado' or alerta='desativado')
);
drop table registro;

select * from  usuario;
select * from  sensor;
select * from  granja;
select * from  registro;
select * from area;

insert into granja(nome, estado, cnpj, cep, rua, bairro, telefone, numero_propriedade) values
	('Granja do Lucas', 'SP', '12312312312312', '09432360', 'Rua Arco Verde', 'Jardim Petrópolis', '11999290512', '12');

insert into area(nome_Area, fk_Granja) values
	('Area A', 1),
	('Area B', 1),
	('Area C', 1);
    
insert into sensor(fk_Area) values 
	(1),
    (2),
    (3),
    (1),
    (2);
    
    select round(avg(temperatura),2) from registro;
    
    select round(avg(temperatura),2) from registro 
		join sensor on fk_Sensor = idSensor
        join area on idArea = fk_Area where nome_Area = 'Area B' and day(diaEhora) = day(current_date());
        
	insert into usuario values
		(null, 'Lucas Soares', 'lucas.carvalho@bandtec.com.br', '12345678', null);
        select * from usuario;
        
          select round(avg(temperatura)) as mediaA from registro
	        join sensor on idSensor = fk_sensor
            join area on idArea = fk_Area
            join granja idGranja on fk_Granja
            where fk_Granja = 1 and YEAR(diaEhora) = YEAR(current_date())
            group by MONTH(diaEhora);
    
    select count(nome_Area), nome_Area from registro 
    join sensor on fk_sensor = idSensor
    join area on fk_Area = idArea 
    where round(temperatura) < 15 or round(temperatura) > 28 group by nome_Area;
    
    select round(avg(temperatura),2) as media_temp, nome_Area from registro 
		join sensor on fk_Sensor = idSensor
        join area on idArea = fk_Area
        join granja on fk_Granja = idGranja
        where day(diaEhora) = day(current_date()) group by nome_Area;
        