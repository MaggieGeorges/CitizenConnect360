USE Citizensconnect;
GO

CREATE PROCEDURE RegisterUser
    @Email NVARCHAR(255),
    @Password NVARCHAR(255),
    @Role NVARCHAR(50)
AS
BEGIN
    INSERT INTO Users (email, password, role)
    VALUES (@Email, @Password, @Role);
END
GO