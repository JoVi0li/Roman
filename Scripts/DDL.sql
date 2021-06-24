--DDL
CREATE DATABASE Roman 
GO

USE Roman
GO

CREATE TABLE TipoUsuario
(
	IdTipoUsuario		INT PRIMARY KEY IDENTITY
	,NomeTipoUsuario	VARCHAR(200) UNIQUE NOT NULL
);

GO

CREATE TABLE Usuario
(
	IdUsuario		INT PRIMARY KEY IDENTITY
	,IdEquipe		INT FOREIGN KEY REFERENCES Equipe(IdEquipe)
	,IdTipoUsuario	INT FOREIGN KEY REFERENCES TipoUsuario(IdTipoUsuario)
	,NomeUsuario	VARCHAR(200) NOT NULL
	,Email			VARCHAR(200) UNIQUE NOT NULL
	,senha			VARCHAR(200) NOT NULL
);
GO

CREATE TABLE Equipe 
(
	IdEquipe		INT PRIMARY KEY IDENTITY 
	,NomeEquipe		VARCHAR(200) UNIQUE NOT NULL
);
GO

CREATE TABLE Projeto
(
	IdProjeto		INT PRIMARY KEY IDENTITY,
	IdUsuario		INT FOREIGN KEY REFERENCES Usuario(IdUsuario)
	,NomeProjeto	VARCHAR(200) UNIQUE NOT NULL
	,IdTema			INT FOREIGN KEY REFERENCES Tema(IdTema)
	,Descricao		VARCHAR(200) UNIQUE NOT NULL

);
GO

CREATE TABLE Tema 
(
	IdTema		INT PRIMARY KEY IDENTITY
	,NomeTema	VARCHAR(200) UNIQUE NOT NULL
	,Ativo		BIT DEFAULT (1)			-- VER SE O TEMA EST� ATIVO SIM = 1 , CASO N�O ESTEJA = 2
);
GO
