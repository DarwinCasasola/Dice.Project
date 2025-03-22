//Dice Function
function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}
//DOM Elements
const rollButton = document.getElementById('roll-button');
const diceTypeSelect = document.getElementById('dice-type');
const diceResult = document.getElementById('result');
//Event Listener
rollButton.addEventListener('click', () => {
  const diceSides = parseInt(diceTypeSelect.value);
  const rollResult = rollDice(diceSides);

  //Display the result
  resultDiv.textContent = "You rolled a ${rollResult}";
});

