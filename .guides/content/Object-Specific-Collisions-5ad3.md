In the last example, no matter what object your player collided with, you played one sound.

We can also play different sounds depending on which object is collided with.

{Check It!|assessment}(test-1566375114)

|||guidance

## Solution
```python

def hitWallEvent():
  showMessage('Hit wall')
  playSound('bump')

def hitEnergyEvent():
  showMessage('Hit energy')
  playSound('energy')

def hitMonsterEvent():
  showMessage('Hit monster')
  playSound('fight')

def goalReachedEvent():
  showMessage('Reached goal')
  playSound('goal-reached')

```
|||
