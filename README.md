Pokemon Explorer

**Overview**

Pokemon Explorer is a web application that allows users to browse a list of Pokémon, filter their favorites, and view details about individual Pokémon. The project is built using React with Redux Toolkit for state management, React-Bootstrap for styling, and follows best practices for performance and modularity.

**Features**

Fetch and display a list of Pokémon.

Filter Pokémon based on favorites.

Search functionality with debounce for performance optimization.

Modular and scalable code structure.

**Tech Stack**

Frontend: React, Redux Toolkit, TypeScript

UI Framework: React-Bootstrap

State Management: Redux Toolkit

API Handling: Axios (or Fetch API, depending on implementation)

**Getting Started**
Follow these steps to run the frontend locally.

Ensure you have the following installed on your machine:

Node.js (LTS version recommended)

npm or yarn (package manager)

Installation

Clone the repository

TOMTOMTOMT

Install dependencies

npm install  # or yarn install

Running the Application

Start the development server

npm run dev  # or yarn dev

The app should now be running on http://localhost:5173/

Folder Structure

/src
│── components/            # Reusable UI components
│── stores/                # Redux stores and actions
│── slices/                # Redux slices
│── services/              # API service layer
│── assets/                # Static assets (images, icons)
│── styles/                # Global and component-specific styles
│── types/                 # TypeScript interfaces and types
│── App.tsx                # Main application component
│── index.tsx              # Entry point
