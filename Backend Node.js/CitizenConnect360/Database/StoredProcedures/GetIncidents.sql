USE Citizensconnect;
GO

CREATE PROCEDURE GetIncidents
AS
BEGIN
    SELECT id, description, location, datetime, media, status, userId, created_at
    FROM Incidents;
END
GO
