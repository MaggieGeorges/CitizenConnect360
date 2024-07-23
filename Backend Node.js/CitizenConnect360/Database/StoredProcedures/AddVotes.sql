CREATE PROCEDURE AddVote
    @PollId INT,
    @UserId INT,
    @Option NVARCHAR(255)
AS
BEGIN
    IF NOT EXISTS (SELECT 1 FROM Votes WHERE PollId = @PollId AND UserId = @UserId)
    BEGIN
        INSERT INTO Votes (PollId, UserId, [Option])
        VALUES (@PollId, @UserId, @Option);
    END
END;
