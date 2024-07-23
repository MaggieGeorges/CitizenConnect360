USE Citizensconnect;
GO

CREATE PROCEDURE UpdatePoll
    @Id INT,
    @Question NVARCHAR(MAX),
    @Category NVARCHAR(255),
    @Options NVARCHAR(MAX)
AS
BEGIN
    UPDATE Polls
    SET Question = @Question, Category = @Category, Options = @Options
    WHERE Id = @Id;
END;