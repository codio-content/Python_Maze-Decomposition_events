Let's look at the code line by line and see how we do the scoring.

## Energy decrease
```python
  energy = getEnergy() - 1
  setEnergy(energy)
```

After each step taken, we reduce the amount of energy a player has by 1.

## Calculate score
```python
  score = getEnergy() * 5 / getSteps()
  setScore(score)
```

Here, we calculate the score based upon the following simple formula

$$
score = \dfrac{energy \times 5}{steps}
$$
