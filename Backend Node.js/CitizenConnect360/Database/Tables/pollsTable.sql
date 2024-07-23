USE Citizensconnect;
GO


CREATE TABLE Polls (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Question NVARCHAR(MAX),
    Category NVARCHAR(255),
    Options NVARCHAR(MAX) 
);
