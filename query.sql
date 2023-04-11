IF OBJECT_ID('users', 'U') IS NULL
BEGIN
    CREATE TABLE [users] (
        id int identity(1,1) NOT NULL PRIMARY KEY,
        name nvarchar(50) NOT NULL,
        email nvarchar(100) NOT NULL,
        password nvarchar(255) NOT NULL
    );
END

INSERT INTO [users] (name, email, password) VALUES ('Ana', 'ana@example.com', 'senha123');
INSERT INTO [users] (name, email, password) VALUES ('Bruno', 'bruno@example.com', 'abc123');
INSERT INTO [users] (name, email, password) VALUES ('Carlos', 'carlos@example.com', 'qwerty');
INSERT INTO [users] (name, email, password) VALUES ('Daniela', 'daniela@example.com', '123456');
INSERT INTO [users] (name, email, password) VALUES ('Eduardo', 'eduardo@example.com', 's3nh@f0rt3');
select * from [users]