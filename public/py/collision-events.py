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