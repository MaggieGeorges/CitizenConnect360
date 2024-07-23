USE Citizensconnect;
GO


CREATE PROCEDURE GetCommentsForPost
    @PostId INT
AS
BEGIN
    SELECT * FROM ViewsComments
    WHERE PostId = @PostId;
END;
