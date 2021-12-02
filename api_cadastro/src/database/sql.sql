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
);

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
  numero_propiedade VARCHAR(4)
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
  status_sensor VARCHAR(20),
  fk_Area INT,
  FOREIGN KEY (fk_Area) REFERENCES area (idArea)
)AUTO_INCREMENT = 100000;

-- --------------------------------------------------------------------------------------------------------------------------------------------------------
-- Table `registro`
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------

CREATE TABLE registro (
  idRegistro INT PRIMARY KEY  AUTO_INCREMENT,
  diaEhora DATETIME,
  temperatura FLOAT ,
  alerta VARCHAR(45),
  fk_Sensor INT ,
  FOREIGN KEY (fk_Sensor) REFERENCES sensor(idSensor),
  constraint check_alerta check(alerta='ativado' or alerta='desativado')
);

select * from  usuario;
select * from  sensor;
select * from  granja;
select * from  registro;