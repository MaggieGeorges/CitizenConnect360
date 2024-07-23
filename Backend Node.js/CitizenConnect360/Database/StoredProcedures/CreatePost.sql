USE Citizensconnect;
GO

CREATE PROCEDURE CreatePost
    @Title NVARCHAR(255),
    @Content NVARCHAR(MAX),
    @Author NVARCHAR(255),
    @Date DATETIME
AS
BEGIN
    INSERT INTO Posts (Title, Content, Author, Date, Likes)
    VALUES (@Title, @Content, @Author, @Date, 0);
END;
