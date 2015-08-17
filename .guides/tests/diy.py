
score = 0
energy = 20
steps = 0
sound = ''

def setScore(val):
  global score
  score = val

def setEnergy(val):
  global energy
  energy = val
  
def getEnergy():
  global energy
  return energy

def getSteps():
  global steps
  return steps

def playSound(val):
  global sound
  sound = val

try:
  execfile('/home/codio/workspace/public/py/diy.py')
  
  initGame()
  if score != 25 or energy != 20:
    raise ValueError('initGame is not setting the correct score or energy')
  
  score = 0
  energy = 2
  steps = 1
  turnTaken()
  if score != 6 or energy != 1:
    raise ValueError('first change and set the energy then calculat and set the score')

  hitWallEvent ()
  if sound != 'bump':
    raise bump('hitWallEvent is not playing the correct sound')

  energy = 0
  hitEnergyEvent()
  if energy != 5:
    raise ValueError('hitEnergyEvent is not changing and setting the energy value correctly')
    
  energy = 3
  hitMonsterEvent()
  if energy != 0 or sound != 'fight':
    raise ValueError('hitMonsterEvent is eeither not setting the correct energy or playing the correct sound')
    
  goalReachedEvent() 
  if sound != 'goal-reached':
    raise ValueError('goalReachedEvent is not playing the correct sound')
    
  print 'well done'
  exit(0)
except (IOError, SyntaxError) as e:
  pass
  
print 'Not quite right, try again!'
exit(1)
