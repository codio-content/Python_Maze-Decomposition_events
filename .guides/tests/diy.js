
initGame = null;
turnTaken = null;
hitWallEvent = null;
hitEnergyEvent = null;
hitMonsterEvent = null;
goalReachedEvent = null;

$.getScript(window.location.origin + '/public/js/' + window.testEnv.cmd + '.js?_=' + Date.now())
.done(function (script, status) {
  
  createEmptyMaze();
    
  if(typeof initGame == 'function') {
    score = 0;
    energy = 0;
    initGame(); 
    if(score != 25 || energy != 20) {
      return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
    }
  }
  else {
    return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
  }
  
  
  if(typeof turnTaken == 'function') {
    score = 0;
    energy = 1;
    steps = 1;
    turnTaken();
    if(score != 6 || energy != 0) {
      return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
    }
  }
  else {
    return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
  }
  
  
  var _hitWallEvent = false;

  if(typeof hitWallEvent == 'function') {
    window.playSound = function (val) {
      if(val == 'bump') _hitWallEvent = true;
    }
    hitWallEvent();
    if(!_hitWallEvent) {
      return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
    }       
  }
  else {
    return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
  }
  

  var _hitEnergyEvent = false;

  if(typeof hitEnergyEvent == 'function') {
    energy = 0;
    window.playSound = function (val) {
      if(val == 'energy') _hitEnergyEvent = true;
    }
    hitEnergyEvent();
    if(energy != 5 || !_hitEnergyEvent) {
      return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
    }   
  }
  else {
    return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
  }
  
  
  var _hitMonsterEvent  = false;

  if(typeof hitMonsterEvent == 'function') {
    energy = 3;
    window.playSound = function (val) {
      if(val == 'fight') _hitMonsterEvent = true;
    }
    hitMonsterEvent();
    if(energy != 0 || !_hitMonsterEvent) {
      return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
    }   
  }  
  else {
    return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
  }
  
  
  var _goalReachedEvent = false;

  if(typeof goalReachedEvent == 'function') {
    window.playSound = function (val) {
      if(val == 'goal-reached') _goalReachedEvent = true;
    }
    goalReachedEvent();
    if(!_goalReachedEvent) {
      return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
    }   
  }
  else {
    return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
  }
  
  
  codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.SUCCESS, 'Well done!');    

})
.fail(function (jqxhr, settings, exception) {
  console.log(exception);
  codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.INVALID, exception.message); 
});