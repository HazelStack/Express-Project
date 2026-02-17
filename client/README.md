## Application Architecture

This project follows a full-stack architecture:

- **Frontend:** React (Client)
- **Backend:** Express + Node.js (Server)
- **Database:** MySQL (Relational)

The Express API processes HTTP requests from the React frontend, performing CRUD operations on a MySQL database where foreign key constraints enforce referential integrity across tables.

## Database Schema (MySQL)

The application uses four primary relational tables:

- `users`
- `categories`
- `questions`
- `answers`

### Users Table

CREATE TABLE `users` (
  `userID` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

### Categories Table

CREATE TABLE `categories` (
  `categoryID` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`categoryID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

### Questions Table

CREATE TABLE `questions` (
  `questionID` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `userID` int NOT NULL,
  `categoryID` int NOT NULL,
  PRIMARY KEY (`questionID`),
  KEY `userID` (`userID`),
  KEY `categoryID` (`categoryID`),
  CONSTRAINT `questions_ibfk_1`
    FOREIGN KEY (`userID`) REFERENCES `users` (`userID`),
  CONSTRAINT `questions_ibfk_2`
    FOREIGN KEY (`categoryID`) REFERENCES `categories` (`categoryID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

### Answers Table
CREATE TABLE `answers` (
  `answerID` int NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  `questionID` int NOT NULL,
  `userID` int NOT NULL,
  PRIMARY KEY (`answerID`),
  KEY `questionID` (`questionID`),
  KEY `userID` (`userID`),
  CONSTRAINT `answers_ibfk_1`
    FOREIGN KEY (`questionID`) REFERENCES `questions` (`questionID`),
  CONSTRAINT `answers_ibfk_2`
    FOREIGN KEY (`userID`) REFERENCES `users` (`userID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
