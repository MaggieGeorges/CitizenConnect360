USE Citizensconnect;
GO

CREATE PROCEDURE AddPoll
    @Question NVARCHAR(MAX),
    @Category NVARCHAR(255),
    @Options NVARCHAR(MAX) 
AS
BEGIN
    INSERT INTO Polls (Question, Category, Options)
    VALUES (@Question, @Category, @Options);
END;