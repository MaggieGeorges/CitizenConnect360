USE Citizensconnect;
GO

CREATE PROCEDURE AuthenticateUsers
    @Email NVARCHAR(255),
    @Password NVARCHAR(255)
AS
BEGIN
    SELECT id, email, password, role, created_at
    FROM Users
    WHERE email = @Email;
END
GO
