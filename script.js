// *** Btns to start or reset the round or reset the whole score








// Get container and fill it up with squers
const grid_container = document.querySelector('#grid_container');
let Levels;
level_1 = 8;

// Here will be a fnc that expt leves and set em un 'for'
for (let i = 0; i <= level_1; i++) {
  grid_container.innerHTML += `<div class='grid-item ' id='${i}'></div>`;
}
// Listen where was a click and swow it in a squer
const grid_Evl = grid_container.addEventListener('click', setAreaId);
// Gets id where cliked and pass it to set or rejet the moove
function setAreaId(event) {
  const chosenId = event.target.id;
  chosenArea(chosenId);
}

// variables for gether plr moves and switch btn them
const playerX = 'x';
const playerO = 'o';
let playerXPattern = [];
let playerOPattern = [];
 
// The arrey of all posible win patterns
const winPatternsId = [
  [0, 1, 2], [3, 5, 4], [6, 7, 8], [0, 3, 6],
  [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6],
];
// A var that determinate who mooves first
// Will be a function so we may change first 'x' or 'o'
let turn = playerO;
// Fnc takes an id of a move and set a simvol and switch plr
// as well gethers the moves to check em for ptrn match
function chosenArea(id) {
  let grid_item_chosen = document.getElementById(`${id}`);

  if (grid_item_chosen.innerText === '') {
    console.log('empty');
    if (turn === playerO) {
      grid_item_chosen.innerHTML = playerX;
      playerXPattern.push(parseInt(id));
      turn = playerXPattern;
      checkForWin(playerXPattern, winPatternsId); 
    } else {
      grid_item_chosen.innerText = playerO;
      playerOPattern.push(parseInt(id));
      turn = playerO;
      checkForWin(playerOPattern, winPatternsId);
    }
  } else {
    //here will be a colback fnc shows in other color
    //that this squer is buisy
    console.log('buisy');
  }
}

// Looking for paterns and telling who won
// remove event listener
// *** If no 3 ids, dont chack 
function checkForWin(arrNum, patterns) {
  for (const pattern of patterns) {
    if (pattern.every(index => arrNum.includes(index))) {
      console.log("There is a winning pattern!", pattern);
      showWinner(pattern)
      grid_container.removeEventListener('click', setAreaId)
      // return true;
    }
  }
  console.log("No winning pattern found.");
  // return false;
} 
// *** Fnc shows that this squer is buisy

//Here we mark squers that have win ptrn
function showWinner(ids) {
  ids.forEach(id => {
    const winSqurs = document.getElementById(id)
    winSqurs.classList.add('win')
  })
}
// *** Animation of win squers through classes

// *** Tell who won X | O

// *** Store the result and show it

// *** Animation that is adaptive and has a decorative purpose

// *** Grow the grid for 4 sqrs



