
|||challenge
Complete the code on the left so 

1. When the games starts, set the initial score to 25 and the player energy to 20.
1. Set the sounds (bump, energy, fight and goal-reached) for each corresponding event. As a reminder, the available sounds are `bump`, `energy`, `fight` and `goal-reached`. 
1. When a monster touches you, you should subtract 3 from the energy.
1. When you hit the energy store, you should add 5 to your energy.
1. Each time you take a turn, you subtract 1 from your energy.
1. When the exit has been reached, you should display a message using the  `showMessage()` function.
1. You calculate and display the score using the formula 

$$
score = \dfrac{energy \times 6}{steps}
$$



{Check It!!|custom}(diy)

|||

|||guidance

## Solution
```javascript
function initGame() {
  score = 25
  energy = 20  
}

function turnTaken() {
  // scoring is done in here  
  score = energy * 6 / steps
  energy = energy - 1
}

function hitWallEvent() {
  playSound('bump')
}

function hitEnergyEvent() {
  playSound('energy')
  energy = energy + 5
}

function hitMonsterEvent() {
  playSound('fight')
  energy = energy - 3
}

function goalReachedEvent() {
  playSound('goal-reached')
  showMessage('Reached goal!')
}
```

|||