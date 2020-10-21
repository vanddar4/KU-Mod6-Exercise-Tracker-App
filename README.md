npm This is the code for KU Mod-6 project final project. Jared and I have created a exercise app using the following core technologies:

- MongoDB: A document-based open source database.
- Express: A web application framework for Node.js.
- React: A JavaScript front-end library for building user interfaces.
- Node.js: JavaScript run-time environment that executes JavaScript code outside of a browser (such as a server)
  
  Folder/File Architecture is structured as follows:
- backend
  - models
    - exercise.model
    - user.model
  - routes
    - exercises
    - users
  - server
  - .env
  - node_modules
  - package-lock.json
  - package.json
- public
- src
  - components
    - create-exercise.component
    - create-user.component
    - edit-exercise.component
    - exercises-list.component
    - footer.component
    - map.component
    - navbar.component
    - user-login.component
    - user-login.component
  - App
  - Index
- .gitignore
- package-lock.json
- package.json
- README.md
  
  Start-up guidance:
- Download zip file from github repository or clone https://github.com/vanddar4/KU-Mod6-Exercise-Tracker-App
- open terminal in main folder
- in terminal \$ npm install
- \$ cd backend
- create .env file in backend folder, add ATLAS_URI = >Your Database Link<
- Replaced with your credentials "mongodb+srv://>username<:>password<@>db<.llftq.mongodb.net/>dbname<?retryWrites=true&w=majority"
- \$ npm install
- \$ nodemon server
- open new terminal
- \$ npm start
