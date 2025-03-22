document.addEventListener('DOMContentLoaded', () => {
//Dice Function
function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}
//DOM Elements
const rollButton = document.getElementById('rollButton');
const diceTypeSelect = document.getElementById('diceType');
const diceDiv = document.getElementById('result');
//Event Listener
rollButton.addEventListener('click', () => {
  const diceSides = parseInt(diceTypeSelect.value);
  const rollResult = rollDice(diceSides);

  //Display the result
  diceDiv.textContent = 'You rolled a ${rollResult}';
});
});
