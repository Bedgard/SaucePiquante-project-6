# SaucePiquante — Secure API for a Gourmet Sauce Review Application

<img src="https://webassets.mongodb.com/_com_assets/cms/mongodb-logo-rgb-j6w271g1xn.jpg" alt="MongoDB Logo" width="300" />
<img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="Express.js Logo" width="300" />

## Project Overview

The company now wants to develop an evaluation application for its hot sauces called **“Piquante”**. Although the application might evolve into an online store in the near future, Sophie, the product owner at So Pekocko, decided that the MVP will be a web app allowing users to add their favorite sauces and like or dislike sauces added by others.

---

## Constraints

- Follow OWASP best practices to secure the API.
- User data must be protected at the API and database level using masking methods.
- The project is hosted on a Node.js server.
- Database uses MongoDB with the Express framework.
- Use a Mongoose plugin to report any database errors.

---

## Security Requirements

- The API must comply with GDPR and OWASP standards.
- User passwords must be encrypted.
- Two types of administrator rights on the database must be defined:
  - One for deleting or modifying tables.
  - One for editing the database content.
- MongoDB security (e.g., via MongoDB Atlas) should allow the validator to run the app from their machine.
- Authentication is reinforced on protected routes.
- Passwords are stored securely.
- Email addresses in the database must be unique, with a Mongoose plugin enforcing uniqueness and error reporting.
- All sauce-related routes require authenticated requests containing a valid token in the authorization header.
- All database operations use Mongoose with strict data schemas.

---

## Objectives

- Implement a logical data model in compliance with regulations.
- Store data securely.
- Implement secure CRUD operations.

---

## Built With

### Backend

- Node.js  
- Express  
- MongoDB  
- Mongoose  

### Frontend

- *Provided by OpenClassrooms*
---

## Getting Started

### Installation

**1. Clone the repository:**

git clone https://github.com/Bedgard/SaucePiquante-project-6.git

cd SaucePiquante-project-6

**2. Install and start the backend :**

cd backend

npm install

npm start

The backend server will run on port 3000.

**3. In a new terminal window/tab, install and start the frontend::**

cd frontend

npm install

ng serve

The frontend application will run on port 4200.

**4. Open your browser and visit**

http://localhost:4200/ to start interacting with the app.









