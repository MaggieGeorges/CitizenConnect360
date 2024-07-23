USE Citizensconnect;
GO

CREATE PROCEDURE ReportIncident
    @Description NVARCHAR(MAX),
    @Location NVARCHAR(255),
    @Datetime DATETIME,
    @Media NVARCHAR(MAX),
    @UserId INT
AS
BEGIN
    INSERT INTO Incidents (description, location, datetime, media, userId)
    VALUES (@Description, @Location, @Datetime, @Media, @UserId);
END
GO
