# 🐾 Amazing Animals — Angular Frontend

Welcome to the Amazing Animals Angular frontend! This project connects to a RESTful API designed to help toddlers and young learners explore the animal kingdom in a fun, interactive way. 🌍🦁🧠

Live Demo 👉 https://amazing-animals.netlify.app

## 🧩 About the Project
This Angular-based web app is part of a full-stack project featuring:

- A playful animal guessing game

- Interactive search and filtering

- Full CRUD support (Create, Read, Update, Delete) for animal entries

- A responsive UI designed for kids and parents alike

- Accessible and mobile-friendly layout

Built as part of my Full Stack Open Source developer training at Chas Academy, this frontend consumes data from a custom-built backend API hosted on Render.

## 🛠️ Built With

- Angular 17

- TypeScript

- HTML, CSS, Tailwind

- RxJS (for reactive programming)

- Netlify (for deployment)

## 🚀 Features

- 🎮 Fun Fact Game: Guess the animal based on a fact

- ✏️ Edit & Delete existing animals

- ➕ Add new animals to the database

- ⚙️ Handles errors and loading states gracefully

- 🙋‍♀️ User function with login (coming soon)

- 🔍 Search & Filter animals by location (coming soon)

## 🌐 Backend API

The Angular frontend consumes data from a RESTful API you can find here:

🔗 RESTful API – Animal Learning for Toddlers - https://restful-api-animals.onrender.com/api

Main endpoints include:

|  HTTP request   |    Endpoint                  |
|-----------------|------------------------------|
| GET             |  /animals                    |
| POST            |  /animals                    |
| PUT             |  /animals/:id                |
| DELETE          |  /animals/:id                |
| GET             |  /animals/location/:location |
| GET             |  /animals/game/guess-funfact |
| POST            |  /animals/game/check-guess   |

## 📦 Installation & Setup

### Clone the repo

- git clone https://github.com/chas-academy/u08-angular-frontend-Sue-Holding.git

- cd amazing-animals-app

### Install dependencies

- npm install

### Run the app locally

- ng serve

The app should now be running at http://localhost:4200

## 🛠️ Futher Development / Features

To get start with new features or work on existing ones you can easily find all components under src/app/animals along with the service files.

- The game can be improved by removing the empty space in the text field when a user types in their guess to the fun fact, otherwise the game returns that the guess is wrong. The text input is also too wide on mobile view.

- Continue adding Trim() and error messages to validation of input to the components on branch trim.
  
- Alternatively a radio guess option could be added with a selection of wrong and the correct animal for the user to guess from.

- The create or edit form needs improvement on mobile view. The form is very narrow.

- A new component could be made to have the create and edit animal features seperate with different forms.

- User routes and log in functionality worked on the Backend API but has not been implemented here on the Frontend. Once this is added users could then save animals to a favourite list.

- The homepage can have a filter animal by location function made to the map of the world.


## 🧪 Testing

- ng test --include src/app/animals/game/game.component.spec.ts

Uses Angular’s testing framework with Jasmine and Karma on just the game.component tests

## 📁 Deployment

This project is deployed via Netlify. Build settings used:

- Build Command: npm run build

- Publish Directory: dist/amazing-animals-app

Make sure CORS is enabled on the backend to allow requests from your Netlify domain.

## 🙋‍♀️ Author

Susanna Holding

📍 Full Stack Open Source Developer in training

📫 sue.holding55@gmail.com

🔗 LinkedIn https://www.linkedin.com/in/susanna-holding-a4b14643/

## 📄 License

This project is open-source and free to use for learning and educational purposes.
