USE Citizensconnect;
GO


CREATE TABLE Comments (
    id INT IDENTITY(1,1) PRIMARY KEY,
    incidentId INT,
    text NVARCHAR(MAX),
    created_at DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (incidentId) REFERENCES Incidents(id)
);
GO