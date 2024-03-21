// Get container and fill it up with squers
const grid_container = document.querySelector('#grid_container');
let Levels;
level_1 = 8;
level_2 = 11;

// *** Here will be a fnc that expt leves and set em un 'for'

function set3x3() {
  for (let i = 0; i <= level_1; i++) {
    grid_container.innerHTML += `<div class='grid-item ' id='${i}'></div>`;
  }
}
set3x3();
// Listen where was a click and swow it in a squer
// Gets id where cliked and pass it to set or rejet the moove
const grid_Evl = grid_container.addEventListener('click', setAreaId);

function setAreaId(event) {
  const chosenId = event.target.id;
  chosenArea(chosenId);
  // returnLastMove(chosenId)
  // showTurn();
}

// Store the score
const playersData = [
  {
    X: {
      score: 0,
      turn: 'x',
      pattern: [],
    },
  },
  {
    O: {
      score: 0,
      turn: 'o',
      pattern: [],
    },
  },
];

// The arrey of all posible win patterns
const winPatternsId = [
  [0, 1, 2],
  [3, 5, 4],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// A var that determinate who mooves first
// Will be a function so we may change first 'x' or 'o'
let turn = playersData[0].X.turn;

// Fnc takes an id of a move and set a simvol and switch plr
// as well gethers the moves to check em for ptrn match
function chosenArea(id) {
  let grid_item_chosen = document.getElementById(`${id}`);
  returnLastMove(id);

  if (grid_item_chosen.innerText === '') {
    // console.log('empty');
    if (turn === playersData[0].X.turn) {
      grid_item_chosen.innerHTML = playersData[0].X.turn;
      playersData[0].X.pattern.push(parseInt(id));
      turn = playersData[1].O.turn;
      checkForWin(playersData[0].X.pattern, winPatternsId);
    } else {
      grid_item_chosen.innerText = playersData[1].O.turn;
      playersData[1].O.pattern.push(parseInt(id));
      turn = playersData[0].X.turn;
      checkForWin(playersData[1].O.pattern, winPatternsId);
    }
  } else {
    // console.log('buisy');
    buisySquer(grid_item_chosen);
  }
  showTurn()
}

// Fnc shows that this squer is buisy
function buisySquer(squer) {
  const classBuisy = squer.classList;
  classBuisy.add('buisy');
  setTimeout(() => {
    classBuisy.remove('buisy');
  }, 100);
}

// Show whos turn
const turn_x = document.querySelector('.x').classList;
const turn_o = document.querySelector('.o').classList;
function showTurn() {
  // turn_x.remove('win-simbol');
  if (turn === 'x') {
    turn_x.add('t-active');
    turn_o.remove('t-active');
  } else if (turn === 'o') {
    turn_o.add('t-active');
    turn_x.remove('t-active');
  }
}

// Looking for paterns and telling who won
// remove event listener
// If no 3 ids, dont chack
function checkForWin(arrNum, patterns) {
  if (arrNum.length >= 3) {
    patterns.forEach((pattern) => {
      // console.log('No winning pattern found.');

      if (pattern.every((index) => arrNum.includes(index))) {
        console.log('There is a winning pattern!', pattern);
        showWinner(pattern);
        grid_container.removeEventListener('click', setAreaId);
      }
      // console.log("No winning pattern found.");
    });
  }
}

// Here we mark squers that have win ptrn
function showWinner(ids) {
  if (turn === 'x') {
    turn_x.remove('t-active');
    turn_o.add('win-simbol');
  } else if (turn === 'o') {
    turn_o.remove('t-active');
    turn_x.add('win-simbol');
  }

  ids.forEach((id) => {
    const winSqurs = document.getElementById(id);
    winSqurs.classList.add('win');
  });
}

// Btns to reset: (this raund or all scores)
// Show score and whos turn
const resetScoreBtn = document.getElementById('reset_score_btn');
const resetScoreBtnEvl = resetScoreBtn.addEventListener('click', resetScores);
const resetWinClass = document.querySelector(`.${turn}`).classList;
// console.log(resetWinClass);

function resetScores() {
  grid_container.innerHTML = '';
  set3x3();
  playersData.forEach((player) => {
    Object.keys(player).forEach((item) => {
      player[item].pattern = [];
      player[item].score = 0;
      turn = playersData[0].X.turn;
    });
  });
  grid_container.addEventListener('click', setAreaId);
  // showTurn();
  resetWinClass.remove('win-simbol');
}

// Return last move
// Btn to return last move
const lastMoveBtn = document.getElementById('return_lmove_btn');
const lastMoveBtn_Evl = lastMoveBtn.addEventListener('click', () =>
  returnLastMove()
);

function returnLastMove(move) {
  if (turn === playersData[1].O.turn) {
    console.log('x move');
  } else {
    console.log('o move');
  }
}

// *** Store the result and show it

// *** Tell who won X | O

// *** additional btns ask 'This Raund' or 'All Scors'

// *** Animation of win squers through classes

// *** Animation that is adaptive and has a decorative purpose

// *** Grow the grid for 4 sqrs
