USE Citizensconnect;
GO




CREATE TABLE Posts (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Title NVARCHAR(255),
    Content NVARCHAR(MAX),
    Author NVARCHAR(255),
    Date DATETIME,
    Likes INT
);
