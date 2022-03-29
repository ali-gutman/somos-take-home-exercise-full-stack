# SOMOS Engineering Take-Home Exercise

💫 Welcome to the SOMOS take-home coding exercise! 🎉

This full-stack exercise involves building a form component in React that also makes a request to a Node.js/Express.js backend and saves the data on a MongoDB database. We imagine you should spend around four hours at minimum to implement this feature, but want to emphasize that there is no specific deadline, or ticking clock for the implementation time. You can feel free to break the work up over multiple days. The entire point of this exercise is to get a good sense of how you build software.

Also, please keep in mind that you are not specifically limited to four hours. If you want to spend more time than that, using this as an opportunity to learn a new library or technology, or just generally making it more awesome, you are of course free to do so.

## Project

Build a React Form Component that makes a request to a Node.js/Express.js backend and saves the data to a MongoDB database.

- [ ] React form to create new recomendations.
- [ ] REST API to add new recomendations to the MongoDB database [POST] [GET]
- [ ] MongoDB Database

## Getting Set Up

The exercise requires [Node.js](https://nodejs.org/en/) to be installed. We recommend using the LTS version.


1. Create a forked copy of this project.

1. Add `tonomb` as collaborator on Github.

1. Clone your OWN version of Repo (Not SOMOS's by mistake!).

1. Create a new Branch on the clone: git checkout -b `<develop>`.

1. Implement the project on this Branch, committing changes regularly.

1. Push commits: git push origin `<develop>`.



1. In the repo root directory, run `npm install` to gather all dependencies.

1. Then run `npm start` which should start the React client.

1. Then run `npm run server`to start the server on port 4000

Follow these steps for completing your project:

1. Submit a Pull-Request to merge `<develop>` Branch into master (Your  Repo).

1. Add `tonomb` as a Reviewer on the Pull-request

1. We will count the project as recived by  merging the branch back into master.


❗️ **Make sure you commit all changes to the master branch!**

## Technical Notes

- The server is running with [nodemon](https://nodemon.io/) which will automatically restart for you when you modify and save a file.
- The frontend was bootstrapped with [Create React App](https://facebook.github.io/create-react-app/docs/getting-started)
- Use [MongoDb](https://www.mongodb.com/) as your database.
- The API client we have set up for you is [axios](https://github.com/axios/axios). You are welcome to swap this out for your favorite client if you prefer.
- The server is running on port 4000.
- You can use the recomendations on [fingerprint.somos.me](https://fingerprint.somos.me) or add your own.

## Acceptance Criteria

Below is a list of user stories corresponding to our acceptance criteria.

1. I can click a button that says 'Agregar Recomendación'.

1. Clicking the 'Agregar Recomendación' button displays a form allowing me to fill out all of the information of a new recomendation 

1. Filling out the form will create a new recomendation in the database that persists on reload.

1. I can see the recomendations I have created.

## Going Above and Beyond the Requirements

Given the time expectations of this exercise, we don't expect anyone to submit anything super fancy, but if you find yourself with extra time, any extra credit item(s) that showcase your unique strengths would be awesome! 🙌

## Submitting the Assignment

[ ] When you have finished the assignment, Submit a Pull-Request to merge `<develop>` Branch into master (Your  Repo).

[ ] Add `tonomb` as a Reviewer on the Pull-request 

[ ] We will count the project as recived by  merging the branch back into master. Let us know you are done via e-mail. We'll review your code within 1-2 days.

Thank you and good luck! 🙏
