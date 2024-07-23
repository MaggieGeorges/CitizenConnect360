USE Citizensconnect;
GO

CREATE PROCEDURE CheckUserVote
    @PollId INT,
    @UserId INT
AS
BEGIN
    IF EXISTS (SELECT 1 FROM Votes WHERE PollId = @PollId AND UserId = @UserId)
    BEGIN
        SELECT 1 AS HasVoted;
    END
    ELSE
    BEGIN
        SELECT 0 AS HasVoted;
    END
END;
