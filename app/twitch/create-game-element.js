export default function createGameElement(item) {
  const gridItem = document.createElement('div');

  gridItem.classList.add('grid__item');
  gridItem.innerHTML = `
  <div class="game-item">
    <img src="" alt="" class="game-item__pic">

    <h3 class="game-item__name"></h3>

    <p class="game-item__popularity"></p>
  </div>`;

  gridItem.querySelector('.game-item__pic').src = item.game.box.large;
  gridItem.querySelector('.game-item__name').innerText = item.game.name;
  gridItem.querySelector('.game-item__popularity').innerText = `${item.game.popularity} viewers`;

  return gridItem;
}
