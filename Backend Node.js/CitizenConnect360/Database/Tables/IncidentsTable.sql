USE Citizensconnect;
GO

CREATE TABLE Incidents (
    id INT IDENTITY(1,1) PRIMARY KEY,
    description NVARCHAR(MAX),
    location NVARCHAR(255),
    datetime DATETIME,
    media NVARCHAR(MAX),
    status NVARCHAR(50) DEFAULT 'Under Review',
    userId INT,
    created_at DATETIME DEFAULT GETDATE()
);
GO