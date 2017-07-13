import 'whatwg-fetch';
import createGameElement from './twitch/create-game-element';
import gameList from './data';

// Import `data.json`
// import `createGameElement` from `twitch/create-game-element`;
// import `addGamesToList` from `twitch/add-games-to-list`;

// Look up a `ul` element with a class called `results`
// Add games to the results list based on the data from `data.json`

const grid = document.querySelector('.grid');

grid.innerHTML = '';

gameList.top.forEach((game) => {
  const gameElement = createGameElement(game);

  grid.appendChild(gameElement);
});
