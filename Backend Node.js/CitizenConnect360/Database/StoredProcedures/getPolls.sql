USE Citizensconnect;
GO

CREATE PROCEDURE GetPolls
AS
BEGIN
    SELECT Id, Question, Category, Options
    FROM Polls;
END;
