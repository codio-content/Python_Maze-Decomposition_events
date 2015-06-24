Let's look at the code line by line and see how we do the scoring.

## Calculate score
```javascript
score = energy*5  / steps
```

Here, we calculate the score based upon the following simple formula

$$
score = \dfrac{energy \times 5}{steps}
$$

## Energy decrease
```javascript
energy = energy - 1
```

After each step taken, we reduce the amount of energy a player has by 1.

