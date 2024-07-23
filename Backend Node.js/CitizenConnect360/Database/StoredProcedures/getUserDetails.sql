USE Citizensconnect;
GO

CREATE PROCEDURE GetUserDetails
    @UserId INT
AS
BEGIN
    SELECT id, email, role, created_at
    FROM Users
    WHERE id = @UserId;
END
GO