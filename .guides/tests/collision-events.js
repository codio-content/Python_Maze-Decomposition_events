
hitWallEvent = null;
hitEnergyEvent = null;
hitMonsterEvent = null;
goalReachedEvent = null;

$.getScript(window.location.origin + '/public/js/' + window.testEnv.cmd + '.js?_=' + Date.now())
.done(function (script, status) {
  
  createEmptyMaze();
      
  
  var _hitWallEventSound = false;
  var _hitWallEventMessage = false;

  if(typeof hitWallEvent == 'function') {
    window.playSound = function (val) {
      if(val == 'bump') _hitWallEventSound = true;
    }
    window.showMessage = function (val) {
      if(val.toLowerCase() == 'hit wall') _hitWallEventMessage = true;
    }
    hitWallEvent();
    if(!_hitWallEventSound || !_hitWallEventMessage) {
      return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
    }       
  }
  else {
    return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
  }
  

  var _hitEnergyEventSound = false;
  var _hitEnergyEventMessage = false;

  if(typeof hitEnergyEvent == 'function') {
    window.playSound = function (val) {
      if(val == 'energy') _hitEnergyEventSound = true;
    }
    window.showMessage = function (val) {
      if(val.toLowerCase() == 'hit energy') _hitEnergyEventMessage = true;
    }
    hitEnergyEvent();
    if(!_hitEnergyEventSound || !_hitEnergyEventMessage) {
      return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
    }       
  }
  else {
    return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
  }


  var _hitMonsterEventSound = false;
  var _hitMonsterEventMessage = false;

  if(typeof hitMonsterEvent == 'function') {
    window.playSound = function (val) {
      if(val == 'fight') _hitMonsterEventSound = true;
    }
    window.showMessage = function (val) {
      if(val.toLowerCase() == 'hit monster') _hitMonsterEventMessage = true;
    }
    hitMonsterEvent();
    if(!_hitMonsterEventSound || !_hitMonsterEventMessage) {
      return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
    }       
  }
  else {
    return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
  }


  var _goalReachedEventSound = false;
  var _goalReachedEventMessage = false;

  if(typeof goalReachedEvent == 'function') {
    window.playSound = function (val) {
      if(val == 'goal-reached') _goalReachedEventSound = true;
    }
    window.showMessage = function (val) {
      if(val.toLowerCase() == 'reached goal') _goalReachedEventMessage = true;
    }
    goalReachedEvent();
    if(!_goalReachedEventSound || !_goalReachedEventMessage) {
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