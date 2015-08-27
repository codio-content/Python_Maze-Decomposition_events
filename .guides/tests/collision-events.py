
message = ''
sound = ''

def showMessage(val):
  global message
  message = val

def playSound(val):
  global sound
  sound = val

try:
  execfile('/home/codio/workspace/public/py/collision-events.py')
  
  hitWallEvent()
  if message.lower().strip() != 'hit wall' or sound != 'bump':
    raise ValueError('incorrect values')
  
  hitEnergyEvent()
  if message.lower().strip() != 'hit energy' or sound != 'energy':
    raise ValueError('incorrect values')

  hitMonsterEvent()
  if message.lower().strip() != 'hit monster' or sound != 'fight':
    raise ValueError('incorrect values')

  goalReachedEvent()
  if message.lower().strip() != 'reached goal' or sound != 'goal-reached':
    raise ValueError('incorrect values')
    
  print 'well done'
  exit(0)
except (IOError, SyntaxError, ValueError) as e:
  pass
  
print 'Not quite right, try again!'
exit(1)
