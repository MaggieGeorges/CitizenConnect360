USE Citizensconnect;
GO

CREATE TABLE Votes (
    Id INT PRIMARY KEY IDENTITY(1,1),
    PollId INT,
    UserId INT,
    [Option] NVARCHAR(255),
    FOREIGN KEY (PollId) REFERENCES Polls(Id),
    FOREIGN KEY (UserId) REFERENCES Users(Id)
);
