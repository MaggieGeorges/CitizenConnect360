USE Citizensconnect;
GO

CREATE PROCEDURE AddComments
    @PostId INT,
    @Content NVARCHAR(MAX),
    @Author NVARCHAR(255),
    @Date DATETIME
AS
BEGIN
    INSERT INTO ViewsComments (PostId, Content, Author, Date)
    VALUES (@PostId, @Content, @Author, @Date);
END;
