
{Check It!|assessment}(test-2018812658)

|||guidance

## Solution
```python

def initGame():
  setScore(25)
  setEnergy(20)

def turnTaken():
  energy = getEnergy() - 1
  setEnergy(energy)
  score = getEnergy() * 6 / getSteps()
  setScore(score)

def hitWallEvent():
  playSound('bump')

def hitEnergyEvent():
  energy = getEnergy() + 5
  setEnergy(energy)
  playSound('energy')

def hitMonsterEvent():
  energy = getEnergy() - 3
  setEnergy(energy)
  playSound('fight')

def goalReachedEvent():
  playSound('goal-reached')
  
```

|||