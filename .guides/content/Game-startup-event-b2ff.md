Let's introduce another event. The `initGame` event is called once as soon as the game has started up.

## Starting values
If you look at the code on the left, you can see how we are initialising the following things

1. The starting energy score of the player `score = 30`
1. The starting energy level of the player `energy = 10`
1. The amount of energy an energy store contains `setEnergyDefaultEnergy(10)`
1. The amount of damage a monster does to your energy `setMonsterDefaultDamage(5)`

## Play
Go ahead and play the game. Observe how the player energy changes as does the number of steps and the score.

Feel free to change the code. Try changing things like this

```javascript
energy = energy - 2
```
or
```javascript
energy = energy - 0.5
```