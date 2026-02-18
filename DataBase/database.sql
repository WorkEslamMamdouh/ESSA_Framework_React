
CREATE DATABASE ERP_DB;
GO
USE ERP_DB;

CREATE TABLE Users(
Id INT IDENTITY PRIMARY KEY,
Username NVARCHAR(50),
Password NVARCHAR(50)
);

CREATE TABLE Menus(
Id INT IDENTITY PRIMARY KEY,
Title NVARCHAR(100),
Route NVARCHAR(100),
Icon NVARCHAR(50)
);

INSERT INTO Menus VALUES
('Dashboard','/app','home'),
('Table','/app/table','table'),
('Form','/app/form','form');
