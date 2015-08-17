We are now going to move onto another practical application of variables and functions. We're going to handle the scoring for the game using a simple algorithm.

The game can handle the display of the following information

- **Steps** the number of moves your player has made, calling `getSteps()` returns the steps.
- **Energy** the amount of energy your player has, calling `getEnergy()` returns the energy and calling `setEnergy(value)` sets the energy
- **Score** the total score, calling `getScore()` returns the score and calling `setScore(value)` sets the score.

## Rules of the game

- The player has a certain amount of starting energy, which you can decide, as we'll see later.
- You lose energy with each step you take.
- You gain energy when you hit an energy store. 
- You lose energy when you brush up against a monster.

## Play
Play the game and see what happens to the score each time you take a step, hit an energy store or brush up against a monster. Keep an eye on the steps, energy and score displays.
