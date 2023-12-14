// Get container and fill it up with squers
const grid_container = document.querySelector('#grid_container');
let Levels;
level_1 = 8;
//Here will be a fnc that expt leves and set em un 'for'
for (let i = 0; i <= level_1; i++) {
  grid_container.innerHTML += `<div class='grid-item ' id='${i}'></div>`;
}
// Listen where was a click
const grid_Evl = grid_container.addEventListener('click', (event) => {
  const chosenId = event.target.id;
  // console.log(event.target.id);
  chosenArea(chosenId);
});

// variables for gether plr moves and switch btn them
// const playerX = 'x';
// const playerO = 'o';
let playersPatterns = [
  { player: 'x', scoreX: [] },
  { player: 'o', scoreO: [] },
];
// let playerOPattern = [];
// A var that determinate who mooves first
// Will be a function so we may change first 'x' or 'o'
let turn = playersPatterns[0].player;
// Fnc takes an id of a move and set a simvol and switch plr
// as well gethers the moves to check em for ptrn match
function chosenArea(id) {
  let grid_item_chosen = document.getElementById(`${id}`);

  if (grid_item_chosen.innerText === '') {
    console.log('empty');
    if (turn === playersPatterns[1].player) {
      grid_item_chosen.innerHTML = playersPatterns[0].player;
      playersPatterns[0].scoreX.push(parseInt(id));
      turn = playersPatterns[0].player;
      console.log(playersPatterns);
      // playerTriplet(playersPatterns[0].scoreX); 
      checkForWin(playersPatterns[0].scoreX, winPatternsId1); 
    } else {
      grid_item_chosen.innerText = playersPatterns[1].player;
      playersPatterns[1].scoreO.push(parseInt(id));
      turn = playersPatterns[1].player;
      console.log(playersPatterns);
      // playerTriplet(playersPatterns[1].scoreO);
      checkForWin(playersPatterns[1].scoreO, winPatternsId1);
    }
  } else {
    //here will be a colback fnc shows in other color
    //that this squer is buisy
    console.log('buisy');
  }
}

// Looking for paterns and telling who won
// remove event listener
const winPatternsId = [
  [0, 1, 2],
  [0, 2, 1],
  [1, 2, 0],
  [1, 0, 2],
  [2, 0, 1],
  [2, 1, 0],
  //
  [3, 5, 4],
  [3, 4, 5],
  [4, 3, 5],
  [4, 5, 3],
  [5, 4, 3],
  [5, 3, 4],
  //
  [6, 7, 8],
  [6, 8, 7],
  [7, 8, 6],
  [7, 6, 8],
  [8, 6, 7],
  [8, 7, 6],
  //
  [0, 3, 6],
  [0, 6, 3],
  [3, 6, 0],
  [3, 0, 6],
  [6, 3, 0],
  [6, 0, 3],
  //
  [1, 4, 7],
  [1, 7, 4],
  [4, 7, 1],
  [4, 1, 7],
  [7, 1, 4],
  [7, 4, 1],
  //
  [2, 5, 8],
  [2, 8, 5],
  [5, 8, 2],
  [5, 2, 8],
  [8, 2, 5],
  [5, 2, 8],
  //
  [0, 4, 8],
  [0, 8, 4],
  [4, 8, 0],
  [4, 0, 8],
  [8, 0, 4],
  [8, 4, 0],
  //
  [2, 4, 6],
  [2, 6, 4],
  [4, 2, 6],
  [4, 6, 2],
  [6, 2, 4],
  [6, 4, 2],
];
const winPatternsId1 = [
  [0, 1, 2],
  //
  [3, 5, 4],
  //
  [6, 7, 8],
  //
  [0, 3, 6],
  //
  [1, 4, 7],
  //
  [2, 5, 8],
  //
  [0, 4, 8],
  //
  [2, 4, 6],
];
// // In the arrNum I have find a pater of 3 number in a row
const arrNum1 = [1, 2, 8, 3, 4, 5, 7, 6];
const arrNum2 = [1, 7, 4];
const arrNum3 = [1, 4, 7];
const arrNum4 = [3, 4, 7];

function playerTriplet(moovesIdArr) {
  // console.log(moovesIdArr, 'triplet');
  for (let i = 0; i <= moovesIdArr.length - 3; i++) {
    const triplet = moovesIdArr.slice(i, i + 3);
    // console.log(`iteration ${i + 1}: ${triplet} of ${turn}`);
    comparePatterns(triplet);
  }
}
 

function checkForWin(arrNum, patterns) {
  for (const pattern of patterns) {
    if (pattern.every(index => arrNum.includes(index))) {
      return true;
    }
  }
  return false;
}
const hasWinningPattern = checkForWin();
// const hasWinningPattern = checkForWin(arrNum1, winPatternsId1);

if (hasWinningPattern) {
  console.log("There is a winning pattern!");
} else {
  console.log("No winning pattern found.");
}

// console.log(arrNum2);

// console.log(playerTriplet());
// comparePatterns( );

// algoritm that searches for matches
function comparePatterns(playerPattrn) {
  let count = 0;

  winPatternsId.forEach((pattern) => {
    console.log(count++);
    const [a, b, c] = pattern;
    let validation =
      a === playerPattrn[0] && b === playerPattrn[1] && c === playerPattrn[2];

    if (validation) {
      console.log(pattern, ' win === ', playerPattrn, turn);
      return;
    }
  });
}
