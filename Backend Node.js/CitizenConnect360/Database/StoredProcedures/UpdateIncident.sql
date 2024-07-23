USE Citizensconnect;
GO

CREATE PROCEDURE UpdateIncidentStatus
    @Id INT,
    @Status NVARCHAR(50)
AS
BEGIN
    UPDATE Incidents
    SET status = @Status
    WHERE id = @Id;
END
GO
