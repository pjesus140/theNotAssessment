import React, { Component } from 'react';
import axios from 'axios';




class LastMatch extends Component {

    constructor(props) {
        super(props);


        this.state = {
            Fblood: 0,
            duration: 0,
            dire_score: 0,
            radiant_score: 0,
            hero: 1,
            hero_name: ""

        };
    }

    componentWillReceiveProps(nextProps) {
        axios.get('https://api.opendota.com/api/matches/' + nextProps.Mid)
            .then(res => {
                const lastGame = res.data;
                console.log(lastGame);

                if (lastGame.radiant_win) {

                    this.setState({
                        Fblood: lastGame.first_blood_time,
                        duration: lastGame.duration,
                        dire_score: lastGame.dire_score,
                        radiant_score: lastGame.radiant_score,
                        winner: "Radiant",
                        hero: lastGame.players[nextProps.slot].hero_id
                    });

                } else {
                    this.setState({
                        Fblood: lastGame.first_blood_time,
                        duration: lastGame.duration,
                        dire_score: lastGame.dire_score,
                        radiant_score: lastGame.radiant_score,
                        winner: "Dire",
                        hero: lastGame.players[nextProps.slot].hero_id

                    });
                }



            });
    }



    getheroname() {
        
        let id = this.state.hero-1;
        console.log(id)

       

        axios.get('https://api.opendota.com/api/heroes')
            .then(res => {
                const recentGames = res.data;
                console.log(recentGames[id].localized_name)
                if(this.state.hero_name !=recentGames[id].localized_name){

                    this.setState({
                        hero_name:recentGames[id].localized_name
                    })
                }

                

            });

        



    }

    render() {
        return (



            <div className="container-fluid left">

                <div className="row">
                    <div className="col-8 ">
                        <h3>Last Match ID: {this.props.Mid}</h3>
                    </div>
                    <div className="col-4 ">

                    </div>

                </div>
                <div className="row">
                    <div className="col-8 ">
                        <h4>winning team was {this.state.winner}</h4>
                        <h4>first Blood after {this.state.Fblood} seconds</h4>
                        <h4>hero you playes: {this.getheroname()} {this.state.hero_name}</h4>

                    </div>
                    <div className="col-4 ">

                    </div>

                </div>
                <div className="row">
                    <div className="col-8 ">
                        <h4>game length: {this.state.duration / 60} minutes</h4>
                        <h4>radiant vs dire kills: {this.state.radiant_score}:{this.state.dire_score}</h4>

                    </div>
                    <div className="col-4 ">

                    </div>

                </div>




            </div>



        )
    };
}
export default LastMatch;