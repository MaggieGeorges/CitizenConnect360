USE Citizensconnect;
GO

CREATE PROCEDURE AddComment
    @IncidentId INT,
    @Text NVARCHAR(MAX)
AS
BEGIN
    INSERT INTO Comments (incidentId, text)
    VALUES (@IncidentId, @Text);
END
GO
