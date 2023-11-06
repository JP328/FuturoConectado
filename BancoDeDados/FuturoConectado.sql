CREATE DATABASE db_futuro_conectado;

USE db_futuro_conectado;

CREATE TABLE tb_usuario(
    Id BIGINT IDENTITY(1,1) PRIMARY KEY,
	Nome_usuario VARCHAR(255) NOT NULL,
	Cpf_usuario VARCHAR(50) NOT NULL,
	Cep__usuario VARCHAR(50) NOT NULL,
	Email_usuario VARCHAR(255) NOT NULL,
	Is_Admin BIT NOT NULL,
);

CREATE TABLE tb_video(
    Id BIGINT IDENTITY(1,1) PRIMARY KEY,
	Titulo_video VARCHAR(100) NOT NULL,
	Descricao_video VARCHAR(2000) NOT NULL,
	Link_video VARCHAR(2000) NOT NULL,
	quantidade_votos INT NOT NULL,
	Id_usuario_video BIGINT
	CONSTRAINT Id_usuario_fk FOREIGN KEY (Id_usuario_video) REFERENCES tb_usuario(id)
);

CREATE TABLE tb_votos(
    Id BIGINT IDENTITY(1,1) PRIMARY KEY,
    Id_usuario BIGINT NOT NULL
	CONSTRAINT Id_usuario_votos_fk FOREIGN KEY (Id_usuario) REFERENCES tb_usuario(id),
    Id_video BIGINT NOT NULL
	CONSTRAINT Id_video_votos_fk FOREIGN KEY (Id_video) REFERENCES tb_video(id),
);

INSERT INTO tb_usuario (Nome_usuario, Cpf_usuario, Cep__usuario,Email_usuario, Is_Admin)
VALUES ('João Pedro', '000.000.00-XX', '00000-000', 'joao@gmail.com', 0);

INSERT INTO tb_usuario (Nome_usuario, Cpf_usuario, Cep__usuario,Email_usuario, Is_Admin)
VALUES ('Maria', '000.000.00-XX', '00000-000', 'maria@gmail.com', 0);

INSERT INTO tb_video (Titulo_video, Descricao_video, Link_video, quantidade_votos, Id_usuario_video)
VALUES ('Primeiro Video', 'Descrição teste', 'https://www.youtube.com/watch?v=jfKfPfyJRdk', 0, 1);

INSERT INTO tb_votos (Id_usuario, Id_video)
VALUES (2, 1);

SELECT * FROM tb_usuario;

SELECT * FROM tb_video;

SELECT * FROM tb_votos;