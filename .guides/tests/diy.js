
initGame = null;
turnTaken = null;
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
    createEmptyMaze();
    
    // load python
    var module = Sk.importMainWithBody("", false, data);

    // get reference to functions

    initGame = module.tp$getattr('initGame');
    turnTaken = module.tp$getattr('turnTaken');

    hitEnergyEvent = module.tp$getattr('hitEnergyEvent');
    hitWallEvent = module.tp$getattr('hitWallEvent');
    hitMonsterEvent = module.tp$getattr('hitMonsterEvent');
    goalReachedEvent = module.tp$getattr('goalReachedEvent');
    
    // test

    if(typeof initGame != 'undefined') {
      score = 0;
      energy = 0;
      Sk.misceval.callsim(initGame); 
      if(score != 25 || energy != 20) {
        return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
      }
    }
    else {
      return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
    }


    if(typeof turnTaken != 'undefined') {
      score = 0;
      energy = 2;
      steps = 1;
      Sk.misceval.callsim(turnTaken);
      if(score != 6 || energy != 1) {
        return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
      }
    }
    else {
      return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
    }


    var _hitWallEvent = false;

    if(typeof hitWallEvent != 'undefined') {
      window.playSound = function (val) {
        if(val == 'bump') _hitWallEvent = true;
      }
      Sk.misceval.callsim(hitWallEvent);
      if(!_hitWallEvent) {
        return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
      }       
    }
    else {
      return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
    }


    var _hitEnergyEvent = false;

    if(typeof hitEnergyEvent != 'undefined') {
      energy = 0;
      window.playSound = function (val) {
        if(val == 'energy') _hitEnergyEvent = true;
      }
      Sk.misceval.callsim(hitEnergyEvent);
      if(energy != 5 || !_hitEnergyEvent) {
        return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
      }   
    }
    else {
      return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
    }


    var _hitMonsterEvent  = false;

    if(typeof hitMonsterEvent != 'undefined') {
      energy = 3;
      window.playSound = function (val) {
        if(val == 'fight') _hitMonsterEvent = true;
      }
      Sk.misceval.callsim(hitMonsterEvent);
      if(energy != 0 || !_hitMonsterEvent) {
        return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
      }   
    }  
    else {
      return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
    }


    var _goalReachedEvent = false;

    if(typeof goalReachedEvent != 'undefined') {
      window.playSound = function (val) {
        if(val == 'goal-reached') _goalReachedEvent = true;
      }
      Sk.misceval.callsim(goalReachedEvent);
      if(!_goalReachedEvent) {
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
    