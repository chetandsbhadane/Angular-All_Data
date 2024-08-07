CRUD APP USING MEAN

1) Create new project in angular first and setup
ng new frontend_angular

	# Using 
	# Using SCSS - Sassy Cascading Style Sheets
	# Tailwind CSS for css

2) Install required dependencies

ng add @angular/material

3) Setup Tailwind CSS

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

4) Now Setup backend app with express and mongo
npm init -y

5) Install express in project and mongo
npm i express
npm i mongoose --save

6)Now setup the express server
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


7) What are promises?
IF WE HAVE TO HANDLE CALLBACK FUNCTIONS THEN THERE ARE TWO WAYS
1. PROMISE
2. ASYNCH AND AWAIT KEYWORDS

ANS- A promise is a placeholder value that will eventually be filled in the future. The idea is similar to the familiar concept of real-world promises. 
For example, if you make a promise to do the dishes, that is an assurance that the dishes will be done eventually, which lets you continue on
 with other tasks.

Promises allow an asynchronous operation to run and wait for the value—while also running any following code (called “callbacks”) in the meantime.
 Callbacks were originally invoked by passing them as an argument. Promises introduced a new syntax of using then/catch statements to chain 
callbacks together.

This new way of invoking callbacks eliminates the issue that is popularly known as “callback hell” or “promise pyramids,” which occurs
 when there are multiple chains of callbacks:
firstFunction(args, function() {
  secondFunction(args, function() {
    thirdFunction(args, function() {
      // it can keep going
    });
  });
});

GO THROUGH:
https://blog.postman.com/understanding-async-await-in-node-js/



8) Write apis in express and test them on postman
    "name":"Chetan",
    "email":"chetan09@gmail.com",
    "age":24,
    "address":panchavati,
    "password":123


9) Now go and add some css bootstrap

10) Routes.componenet
ng g c users

11) set routes for users
in app.routes.ts file make neccessary changes


12) now to integration with api's
we need to make service class using following command
ng g s services/user


13) using httpClient we can create rest api call integration (search on google for more info (*imp))


14)Create interface in App/type/user.ts
export default interface User{
    _id:string;
    "name": string;
    "email": string;
    "age": number;
    "address": "string";
    "password": "string";
}


15) Go to Provider means config.ts file
edit suitable changes

16) now go to user service ts file
do neccessary changes

17) before further step include cors in your backend express app
npm i cors



18) create component for add user in angular
ng g c adduser


19) Create all the end points into angular
get, getbyid,edit,delete





