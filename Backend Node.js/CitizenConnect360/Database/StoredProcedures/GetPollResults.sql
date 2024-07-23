USE Citizensconnect;
GO

CREATE PROCEDURE GetPollResults
    @PollId INT
AS
BEGIN
    SELECT PollId, [Option1], [Option2], [Option3]
    FROM PollResults
    WHERE PollId = @PollId;
END
