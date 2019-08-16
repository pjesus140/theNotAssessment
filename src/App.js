import React, { Component } from 'react';

import './App.css';
import Search from './components/search.js';
import LastMatch from './components/LastMatch.js';
import axios from 'axios';

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      matchId: 0,
      playerslot:0
    }
  }



  updateMatchId = (e) => {


    
    axios.get('https://api.opendota.com/api/players/'+e.target.value+'/recentMatches')
    .then(res => {
      const recentGames = res.data;
      console.log(recentGames);
      this.setState({ 
        matchId: recentGames[0].match_id,
        playerslot: recentGames[0].player_slot });
      console.log(this.state);
    });
    
    
  
  }
  render() {
    return (
      <div className="App">
        <Search onUpdate={this.updateMatchId} Mid={this.state.matchId} ></Search>


        <div className="row">
          <div className="col-8 ">
            <div className="scroll">
             
            </div>

            <LastMatch Mid={this.state.matchId} slot={this.state.playerslot}></LastMatch>

          </div>
          <div className="col-4 ">

          

          </div>
          
        </div>


      </div>
    );
  }

}


