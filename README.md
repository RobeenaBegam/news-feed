# News Feed

A news reading web app built with React. Users log in, see the latest headlines as cards, and open any article to read its details.

This is my own version of the "News Feed application" college team project (IBM / Naan Mudhalvan course, Anna University Regional Campus Tirunelveli). This version uses only HTML, CSS, JavaScript and React, with no backend or database.

## Features

- Login page with a fixed demo login
- News feed page with a welcome message, a Logout button and news cards in a grid
- "Loading..." message and an error message when the news cannot be loaded
- Article detail page with a big image, title, description, source, a "Read full article" link and a Back button
- The feed and article pages cannot be opened without logging in

## Technologies Used

- React
- React Router
- JavaScript
- HTML and CSS
- Vite
- NewsAPI (for the news data)

## Demo Login

The login is a fixed demo login written in the code, so it is not real security.

- Username: admin
- Password: news123

## How to Run

1. Get a free API key from https://newsapi.org
2. Download the project and open the folder in a terminal:

```
git clone https://github.com/RobeenaBegam/news-feed.git
cd news-feed
npm install
```

3. Create a file named `.env.local` in the project folder (the same level as `package.json`) with this one line, using your own key:

```
VITE_NEWS_API_KEY=your_key_here
```

4. Start the app:

```
npm run dev
```

5. Open http://localhost:5173 in your browser and log in with the demo login.

Note: the free NewsAPI plan works only on localhost, so the news will not load on a deployed website.

## Project Files

- `src/Login.jsx` - login page
- `src/NewsFeed.jsx` - news feed page
- `src/NewsCard.jsx` - one news card
- `src/ArticleDetail.jsx` - article detail page
- `src/App.jsx` - routes (`/`, `/feed`, `/article`)
- `src/App.css` and `src/index.css` - styling