In the last example, no matter what object your player collided with, you played one sound.

We can also play different sounds depending on which object is collided with.

{Check It!|assessment}(test-1566375114)

|||guidance

## Solution
```python

def hitWallEvent():
  showMessage('hit wall')
  playSound('bump')

def hitEnergyEvent():
  showMessage('hit energy')
  playSound('energy')

def hitMonsterEvent():
  showMessage('hit monster')
  playSound('fight')

def goalReachedEvent():
  showMessage('reached goal')
  playSound('goal-reached')

```
|||
