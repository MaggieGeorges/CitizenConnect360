USE Citizensconnect;
GO


CREATE PROCEDURE GetAllPosts
AS
BEGIN
    SELECT * FROM Posts;
END;
