
def initGame():
  setEnergyDefaultEnergy(10)
  setMonsterDefaultDamage(5)
  setScore(30)
  setEnergy(10)

def turnTaken():
  energy = getEnergy() - 1
  setEnergy(energy)
  score = getEnergy() * 5 / getSteps()
  setScore(score)
