# Movie Search

This is a movie search application built with React, Vite and Tailwind CSS.

The application allows users to search for movies and mark movies.

## Features

- Search for movies
- Mark and unmark movies
- Pagination support

## Prerequisites

This project requires Node.js. Vite has issue with node version 20+. If you're using [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager), you can switch to the preferred version with the following command:

```bash
nvm use 18
```

## Installation

1. Copy `.env.sample` to `.env`
2. Get a unique token ID from [The Movie DB](https://www.themoviedb.org/)
3. Enter the unique TheMovieDB token in the `.env` file
4. Install the dependencies: `npm install`
5. Start the server: `npm run dev`
6. Open your browser and navigate to `http://localhost:5173/`

## Usage

Enter a movie name in the search bar and press enter. The application will display a list of movies that match the search term. 

You can mark a movie by clicking the toggle button.

At the bottom of the page, you will see a total results count and a pagination bar.

