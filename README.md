# Botanical Q&A
Botanical Q&A is a full-stack web application built for plant enthusiasts to ask, answer, and explore questions about indoor, outdoor, and pet-friendly plants. The platform enables users to create secure accounts, browse plant categories, post questions, and contribute answers within a structured community-driven environment.

The application features JWT-based authentication, protected API routes, and a PostgreSQL relational database to manage users, categories, questions, and answers efficiently. A responsive React frontend delivers a dynamic user experience, including interactive category cards, real-time answer updates, and seamless navigation across devices.

Designed with a cohesive botanical theme, the interface combines curated imagery, intuitive layout, and modern UI components to create a welcoming space for knowledge sharing and plant discovery.

## Set Up and Installation:
  1. Clone the Repository
    ○ git clone https://github.com/HazelStack/Express-Project.git
    ○ cd Express-Project 
  2. Install server dependencies
    ○ cd server
    ○ npm install
  3. Install client dependencies
    ○ cd ../client
    ○ npm install
  4. Set Up PostgresSQL Database
    ○ Make sure PostgreSQL is installed and running
    ○ Create a database: createdb botanical_qanda OR
      - Inside psql: CREATE DATABASE botanical_qanda;
  5. Configure Environment Variables
    ○ Inside your server folder, create a .env file:
    DATABASE_URL=postgres://YOUR_USERNAME:YOUR_PASSWORD@localhost:5432/botanical_qanda
    JWT_SECRET=your_secret_key
    PORT=5000
    ○ Replace 
      - YOUR_USERNAME
      - YOUR_PASSWORD
    ○ With your local PostgreSQL credentials
  6. Create Tables
    ○ Users Table
  ```
  CREATE TABLE users (
    userID SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  ```
  
    ○ Categories Table
  ```
  CREATE TABLE categories (
    categoryID SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT
  );
  ```
  
    ○ Questions Table
  ```
  CREATE TABLE questions (
    questionID SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    userID INTEGER REFERENCES users(userID) ON DELETE CASCADE,
    categoryID INTEGER REFERENCES categories(categoryID) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  ```
  
    ○ Answers Table
  ```
  CREATE TABLE answers (
    answerID SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    userID INTEGER REFERENCES users(userID) ON DELETE CASCADE,
    questionID INTEGER REFERENCES questions(questionID) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  ```
    
  7. Start the Backend Server
    ○ Inside the server folder
      - npm run dev
    ○ Or 
      - node index.js
    ○ Backend should run on:
      - http://localhost:5000
  8. Start the Frontend
    ○ In a new terminal:
      - cd client
      - npm start
    ○ Frontend should open at:
      - http://localhost:3000

## Features

- **Secure Authentication & Authorization** – User registration and login powered by bcrypt password hashing and JWT-based authentication, with protected API routes.

- **Category-Based Q&A System** – Browse and explore questions organized into plant categories: Indoor, Outdoor, and Pet-Friendly.

- **Ask & Contribute** – Authenticated users can post questions and submit answers to support the community.

- **Real-Time UI Updates** – Newly submitted answers render instantly without requiring a full page refresh.

- **Interactive Dashboard** – Visually engaging category cards with images and hover effects for intuitive navigation.

- **Responsive Design** – Fully responsive layout optimized for desktop, tablet, and mobile devices.

- **Persistent Navigation Experience** – Sticky navigation bar, structured routing, and smooth user flow across pages.

- **Cohesive Botanical UI Theme** – Custom styling, curated imagery, and consistent color palette aligned with the plant-focused concept.

## Tech Stack

### Frontend
- **React** – Component-based architecture for building dynamic user interfaces.
- **React Bootstrap** – Responsive UI components including cards, navigation, and layout utilities.
- **Axios** – Promise-based HTTP client for API communication.
- **CSS3** – Custom styling, responsive layouts, and themed design enhancements.

### Backend
- **Node.js** – JavaScript runtime environment.
- **Express.js** – RESTful API development and routing.
- **PostgreSQL** – Relational database for structured data management.
- **JWT (JSON Web Tokens)** – Secure authentication and protected routes.
- **bcrypt** – Password hashing for enhanced security.

## User Stories

1. **As a visitor**, I want to browse plant categories (Indoor, Outdoor, Pet-Friendly) so that I can explore community questions before creating an account.

2. **As a registered user**, I want to securely create an account and log in so that I can post questions and contribute answers.

3. **As an authenticated user**, I want to post questions and submit answers within specific categories so that I can share knowledge with the community.

4. **As a user**, I want newly submitted answers to appear instantly without refreshing the page so that interactions feel seamless and dynamic.

5. **As a returning user**, I want my session to remain secure and protected so that my account information and contributions are safe.

## Live Demo

Check out the live version of the Botanical Q&A site here:  
[https://botanical-qanda.onrender.com](https://botanical-qanda.onrender.com)

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

## EER Diagram
![EER Diagram](./client/src/images/EER-Diagram.jpg)

## Database Schema (PostgreSQL)

The application uses four primary relational tables:

- `users`
- `categories`
- `questions`
- `answers`

### Users Table
```
 CREATE TABLE users (
    userID SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
```

### Categories Table
```
 CREATE TABLE categories (
    categoryID SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT
  );
```

### Questions Table
```
CREATE TABLE questions (
    questionID SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    userID INTEGER REFERENCES users(userID) ON DELETE CASCADE,
    categoryID INTEGER REFERENCES categories(categoryID) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
```

### Answers Table
```
CREATE TABLE answers (
    answerID SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    userID INTEGER REFERENCES users(userID) ON DELETE CASCADE,
    questionID INTEGER REFERENCES questions(questionID) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
```
## Future Improvements

- **Answer Commenting & Threaded Discussions** – Allow users to comment on answers and create threaded discussions to foster deeper engagement and community interaction.

- **User Profiles & Activity Dashboard** – Create personalized user profile pages displaying posted questions, answers, and activity history to enhance user experience and ownership.

- **Image Upload for Questions** – Enable users to upload plant images when posting questions to provide visual context and improve answer accuracy.

**Developer:** [Hazel Arevalo](https://www.linkedin.com/in/harevalo123)