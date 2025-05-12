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

- 🔍 Search & Filter animals by location (coming soon)

- 🎮 Fun Fact Game: Guess the animal based on a fact

- ✏️ Edit/Delete existing animals

- ➕ Add new animals to the database

- ⚙️ Handles errors and loading states gracefully

## 🌐 Backend API

The Angular frontend consumes data from a RESTful API you can find here:

🔗 RESTful API – Animal Learning for Toddlers

Main endpoints include:

|  HTTP request      |    Endpoint   |
|-------|----------------|
| GET  |   /api/animals |
| POST  |  /api/animals |
| PUT   |  /api/animals/:id |
| DELETE | /api/animals/:id |
| GET   |  /api/animals/game |
| POST  |  /api/animals/guess |

## 📦 Installation & Setup

### Clone the repo

git clone https://github.com/YOUR_USERNAME/amazing-animals-angular.git

cd amazing-animals-angular

### Install dependencies

npm install

### Run the app locally

ng serve

The app should now be running at http://localhost:4200

## 🧪 Testing

ng test --include src/app/animals/game/game.component.spec.ts

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

🔗 LinkedIn

## 📄 License

This project is open-source and free to use for learning and educational purposes.
