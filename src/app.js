import React, {Component} from 'react';

class Game extends Component{
  render(){
    return(
      <div>
        <div className="jumbotron">
          <h1>Clicky Game!</h1>
          <h2>Click on an image to earn points, but don't click any more than once</h2>
        </div>   
      </div> 
    )
  }
}

export default Game;