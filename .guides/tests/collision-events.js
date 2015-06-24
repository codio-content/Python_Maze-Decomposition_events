
hitWallEvent = null;
hitEnergyEvent = null;
hitMonsterEvent = null;
goalReachedEvent = null;


var fileName = window.location.origin + '/public/py/' + window.testEnv.cmd + '.py';

$.get(fileName)
.success(function(data) {

  if(data == 404) {
    console.log(exception);
    codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.INVALID, fileName + ' not found'); 
  }

  try {        
    
    // load python
    var module = Sk.importMainWithBody("", false, data);

    // get references to python functions and setup event hooks
    
    hitEnergyEvent = module.tp$getattr('hitEnergyEvent');
    hitWallEvent = module.tp$getattr('hitWallEvent');
    hitMonsterEvent = module.tp$getattr('hitMonsterEvent');
    goalReachedEvent = module.tp$getattr('goalReachedEvent');

    createEmptyMaze(); 
    
    // test


    var _hitWallEventSound = false;
    var _hitWallEventMessage = false;

    if(typeof hitWallEvent != 'function') {
      window.playSound = function (val) {
        if(val == 'bump') _hitWallEventSound = true;
      }
      window.showMessage = function (val) {
        if(val.toLowerCase() == 'hit wall') _hitWallEventMessage = true;
      }
      
      Sk.misceval.callsim(hitWallEvent);

      if(!_hitWallEventSound || !_hitWallEventMessage) {
        return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
      }       
    }
    else {
      return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
    }


    var _hitEnergyEventSound = false;
    var _hitEnergyEventMessage = false;

    if(typeof hitEnergyEvent != 'undefined') {
      window.playSound = function (val) {
        if(val == 'energy') _hitEnergyEventSound = true;
      }
      window.showMessage = function (val) {
        if(val.toLowerCase() == 'hit energy') _hitEnergyEventMessage = true;
      }
      
      Sk.misceval.callsim(hitEnergyEvent);
      
      if(!_hitEnergyEventSound || !_hitEnergyEventMessage) {
        return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
      }       
    }
    else {
      return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
    }


    var _hitMonsterEventSound = false;
    var _hitMonsterEventMessage = false;

    if(typeof hitMonsterEvent != 'undefined') {
      window.playSound = function (val) {
        if(val == 'fight') _hitMonsterEventSound = true;
      }
      window.showMessage = function (val) {
        if(val.toLowerCase() == 'hit monster') _hitMonsterEventMessage = true;
      }
      
      Sk.misceval.callsim(hitMonsterEvent);
      
      if(!_hitMonsterEventSound || !_hitMonsterEventMessage) {
        return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
      }       
    }
    else {
      return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
    }


    var _goalReachedEventSound = false;
    var _goalReachedEventMessage = false;

    if(typeof goalReachedEvent != 'undefined') {
      window.playSound = function (val) {
        if(val == 'goal-reached') _goalReachedEventSound = true;
      }
      window.showMessage = function (val) {
        if(val.toLowerCase() == 'reached goal') _goalReachedEventMessage = true;
      }
      
      Sk.misceval.callsim(goalReachedEvent);
      
      if(!_goalReachedEventSound || !_goalReachedEventMessage) {
        return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
      }       
    }
    else {
      return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
    }


    codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.SUCCESS, 'Well done!');    

  }
  catch(exception) {
    console.log('skulpt exception');
    console.log(exception);
    codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.INVALID, exception.toString()); 
  }
})
.fail(function(jqxhr, settings, exception) {
  console.log('jqxhr fail');
  console.log(exception);
  codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.INVALID, exception.message); 
});    
