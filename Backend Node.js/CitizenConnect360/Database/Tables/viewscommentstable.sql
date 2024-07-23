USE Citizensconnect;
GO



CREATE TABLE ViewsComments (
    Id INT PRIMARY KEY IDENTITY(1,1),
    PostId INT,
    Content NVARCHAR(MAX),
    Author NVARCHAR(255),
    Date DATETIME,
    FOREIGN KEY (PostId) REFERENCES Posts(Id)
);
