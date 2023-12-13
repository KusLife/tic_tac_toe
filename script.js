const grid_container = document.querySelector('#grid_container');
const grid_Evl = grid_container.addEventListener('click', (event) => {
  const chosenId = event.target.id;

  // console.log(event.target.id);
  chosenArea(chosenId);
});

for (let i = 0; i <= 8; i++) {
  grid_container.innerHTML += `<div class='grid-item ' id='item-${i}'></div>`;
}

const playerX = 'x';
const playerO = 'o';
let turn = playerX;

function chosenArea(id) {
  let grid_item_chosen = document.getElementById(`${id}`);

  if (grid_item_chosen.innerText === '') {
    console.log('empty');
    if (turn === playerO) {
      // grid_item_chosen.innerHTML = `<p>${playerX}</p>`;
      grid_item_chosen.innerHTML = playerX;
      turn = playerX;
    } else {
      // grid_item_chosen.innerHTML = `<p>${playerO}</p>`;
      grid_item_chosen.innerText = playerO;
      turn = playerO;
    }
  } else {
    console.log('buisy');
  }
}
