--DML
USE Roman
GO

INSERT INTO TipoUsuario (NomeTipoUsuario)
VALUES					('Administrador')
						,('Professor');
GO

INSERT INTO Usuario  ( IdTipoUsuario , NomeUsuario  , Email   ,			Senha )
VALUES				 (  1			,'Caique'	,'Caique@adm.com'		,1234)
					,(	1			,'saulo'	,'Saulo@adm.com	'		,1234)
					,(	2			,'Aparecido','Aparecido@email.com'	,1234)
					,(	2			,'Carlos'	,'Carlos@email.com'		,1234)
					,(	2			,'Jo�o'		,'Joao@email.com'		,1234)
					,(	2			,'Joyce'	,'Joyce@email.com'		,1234)
					,(	2			,'Yuri'		,'Yuri@email.com'		,1234);
GO


INSERT INTO Equipe (IdUsuario	,NomeEquipe)
VALUES				(3			,'Desenvolvimento')
					,(4			,'Redes'		  )
					,(5			,'Multim�dia'	  );
GO

INSERT INTO Projeto (IdTipoUsuario,	NomeProjeto)
VALUES				( 2,		'Controle de Estoque');

GO

INSERT INTO Tema (IdProjeto,  NomeTema				,Descricao	,			  Ativo)
VALUES			( 1,		  'Gest�o',	  'Programa para gerir um projeto',		1)
				,(1,		  'HQs',	  'Progrma de Hist�ria em Quadrinhos',  1);

GO


