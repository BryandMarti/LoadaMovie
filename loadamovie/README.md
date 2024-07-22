<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movie Search App</title>
</head>
<body>
    <h1>Movie Search App</h1>
    <p>
        This is a movie search application built using React, Vite, and The Movie Database (TMDb) API. 
        The application allows users to search for movies, view details, manage a wishlist, and keep 
        track of to-do tasks. It also includes a counter component.
    </p>

    <h2>Features</h2>
    <ul>
        <li>
            <strong>Movie Search</strong>: Users can search for movies using the TMDb API. Search results 
            display movie titles, overviews, and posters. Users can click on a movie to view detailed information.
        </li>
        <li>
            <strong>Wishlist</strong>: Users can add movies to their wishlist. The wishlist allows users to keep track of movies they want to watch.
        </li>
        <li>
            <strong>To-Do List</strong>: Users can add and manage to-do tasks. Tasks can be added, viewed, and deleted.
        </li>
        <li>
            <strong>Counter</strong>: A simple counter component that allows users to increment and decrement a value.
        </li>
    </ul>

    <h2>Installation</h2>
    <p>To run this project locally, follow these steps:</p>

    <ol>
        <li>Clone the repository:</li>
        <pre><code>git clone https://github.com/your-username/movie-search-app.git<br>cd movie-search-app</code></pre>

        <li>Install the dependencies:</li>
        <pre><code>npm install</code></pre>

        <li>Install additional dependencies:</li>
        <pre><code>npm i axios<br>npm i react-router-dom</code></pre>

        <li>Start the development server:</li>
        <pre><code>npm run dev</code></pre>
    </ol>

    <h2>Usage</h2>
    <p>
        Once the development server is running, you can access the application in your browser at 
        <code>http://localhost:3000</code>. The application includes the following pages:
    </p>

    <ul>
        <li><strong>Home</strong>: Search for movies and view search results.</li>
        <li><strong>Movie Details</strong>: View detailed information about a selected movie.</li>
        <li><strong>Wishlist</strong>: Manage your wishlist of movies.</li>
        <li><strong>To-Do List</strong>: Manage your to-do tasks.</li>
        <li><strong>Counter</strong>: A simple counter to increment and decrement a value.</li>
    </ul>

    <h2>License</h2>
    <p>
        This project is licensed under the MIT License. See the <code>LICENSE</code> file for details.
    </p>
</body>
</html>
