
function keyPressedEvent(keyCode) {

  // reload the page
  if ( keyCode == 'R' ) {
    document.location.reload(true);
  }

  if ( keyCode == 'LEFT' ) {
    player.moveleft()
  } 
  if ( keyCode == 'RIGHT' ) {
    player.moveleft()
  } 

  
};

