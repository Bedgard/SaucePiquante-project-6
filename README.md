# SaucePiquante — Secure API for a Gourmet Sauce Review Application

![MongoDB Logo](https://webassets.mongodb.com/_com_assets/cms/mongodb-logo-rgb-j6w271g1xn.jpg)
![Express.js Logo](https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png)


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

1.Create a folder for the project and navigate into it:

   (Here, `project-folder` is an example name — feel free to rename it as you like.)
   mkdir project-folder
   cd project-folder

2. Clone the backend repository into your project folder :
git clone https://github.com/StephaneChimy/projet-6.git

This will create a folder named projet-6 inside your project folder.

3. Clone and install the frontend repository, then start it

git clone https://github.com/OpenClassrooms-Student-Center/dwj-projet6.git
cd dwj-projet6
npm install --save node-sass@4.14.1
ng serve

The frontend application will run on port 4200.

4. Navigate back to the backend folder and install dependencies_

cd ../projet-6/backend
npm install

5. Start the backend server
npm start

The backend server will run on port 3000.

6. Open your browser and visit
http://localhost:4200/ to start interacting with the app.









