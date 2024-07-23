USE Citizensconnect;
GO


CREATE PROCEDURE LikePost
    @PostId INT
AS
BEGIN
    UPDATE Posts
    SET Likes = Likes + 1
    WHERE Id = @PostId;
END;
