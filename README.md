## NodeJS Application with Clean Architecture and SQL Server

This is an example of a NodeJS application that uses clean architecture and SQL Server.

### Prerequisites

To run this application, you need to have Node and Docker Compose installed on your machine.

### Installation

- Clone this repository on your machine.
- Run the following command in the root directory of the project to download the dependencies:
```bash
npm install
```

- Start the SQL Server database with the following command:
```bash
docker-compose up -d
```

- Wait a few seconds until the database is available.
- Run the following command to start the server:
```bash
npm run serve
```

### Usage

Now you can access the application API at `http://localhost:3000`. You can use a software like Postman or Insomnia to test the API.

### Stopping the Server and the Database

To stop the server, press the following keys on the terminal where it is running:
```bash
Ctrl + C
```

To stop the database, run the following command in the root directory of the project:
```bash
docker-compose down
```

That's it! If you have any questions or problems, don't hesitate to contact me.
