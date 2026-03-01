# Botanical Q&A
Botanical Q&A is an interactive web application designed for plant enthusiasts to ask, answer, and explore questions about indoor, outdoor, and pet-friendly plants. Users can create accounts, browse categorized plant topics, post questions, and contribute answers to help others in the community. The platform features a responsive, botanical-themed interface with a cohesive design, including category-specific visuals and a clean layout for reading and posting content. Built with a React frontend and Express/MySQL backend, the app emphasizes community knowledge sharing while maintaining a visually inviting experience that reflects the natural beauty of plants.

## Features

- **User Authentication** – Sign up, log in, and manage your account securely.
- **Categorized Q&A** – Browse questions by plant categories: Indoor, Outdoor, and Pet-Friendly.
- **Ask & Answer** – Post questions and contribute answers to help the community.
- **Responsive Design** – Works seamlessly on desktop, tablet, and mobile devices.
- **Interactive Dashboard** – Beautiful category cards with hover effects for an engaging experience.
- **Dynamic Updates** – Answers appear instantly after posting without refreshing the page.
- **Cohesive Botanical Theme** – Aesthetic layout, colors, and imagery aligned with plant topics.
- **Logout & Navigation** – Easy navigation with a sticky navbar and footer for a polished interface.

## Technology Used

1. **React** – Frontend framework for building dynamic, component-based user interfaces.
2. **React Bootstrap** – UI library for responsive layout, cards, navbar, and buttons.
3. **Express.js** – Backend server handling API requests and routing.
4. **MySQL** – Relational database to store users, categories, questions, and answers.
5. **Axios** – HTTP client for frontend API calls.
6. **Node.js** – Runtime environment to run the Express server.
7. **CSS3 & Custom Styles** – Botanical-themed styling, responsive layout, and hover effects.

## User Stories

1. **As a plant enthusiast**, I want to browse plant categories (Indoor, Outdoor, Pet-Friendly) so that I can find questions and answers relevant to my interests.

2. **As a registered user**, I want to post questions about specific plants and provide answers to others’ questions so that I can share knowledge and learn from the community.

3. **As a returning user**, I want to log in and quickly see the categories I follow, so that I can stay engaged and track discussions without having to search manually.

## Wireframes

Here’s a visual overview of the app layout:

### Register Page
![Register Wireframe](./client/src/images/Login.drawio.svg)

### Dashboard 
![Dashboard Wireframe](./client/src/images/Register.drawio.svg)

### Question & Answer Page
![Question Page Wireframe](./client/src/images/Dashboard.drawio.svg)

![Answer Page Wireframe](./client/src/images/Answers.drawio.svg)

## Screenshots

### Login / Register Page
![Login Desktop Version](./client/src/images/Home(Desktop).jpg)

![Register Mobile Version](./client/src/images/Register(Mobile).jpg)

### Dashboard
![Dashboard Desktop Version](./client/src/images/Dashboard(Desktop).jpg)

### Question & Answer Page
![Question Desktop Version](./client/src/images/Questions(Desktop).jpg)

![Answer Mobile Version](./client/src/images/Answers(Mobile).jpg)


## Database Schema (MySQL)

The application uses four primary relational tables:

- `users`
- `categories`
- `questions`
- `answers`

### Users Table
```
CREATE TABLE `users` (
  `userID` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

### Categories Table
```
CREATE TABLE `categories` (
  `categoryID` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`categoryID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

### Questions Table
```
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
```

### Answers Table
```
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
```
## Future Improvements

- **Secure Authentication System** – Implement password hashing (bcrypt), JWT-based authentication, and protected API routes to enhance application security.

- **Upvote & Reputation System** – Add voting functionality to highlight high-quality answers and introduce a reputation system to encourage community engagement.

- **Search & Advanced Filtering** – Build dynamic search and filtering capabilities so users can quickly find questions by keywords, category, or popularity.

**Developer:** [Hazel Arevalo](https://www.linkedin.com/in/harevalo123)