USE Citizensconnect;
GO

CREATE PROCEDURE DeletePoll
    @Id INT
AS
BEGIN
    DELETE FROM Polls WHERE Id = @Id;
END;