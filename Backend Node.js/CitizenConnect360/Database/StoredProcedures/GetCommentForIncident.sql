USE Citizensconnect;
GO

CREATE PROCEDURE GetCommentsForIncident
    @IncidentId INT
AS
BEGIN
    SELECT id, text, created_at
    FROM Comments
    WHERE incidentId = @IncidentId;
END
GO
