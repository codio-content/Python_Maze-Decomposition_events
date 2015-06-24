
def turnTaken():
  energy = getEnergy() - 1
  setEnergy(energy)
  score = getEnergy() * 5 / getSteps()
  setScore(score)
