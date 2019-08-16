import React, { Component } from 'react';





class Player extends Component {

    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (



            <div id="navbar" className="container-fluid">


                <div className="row">
                    <div className="col-2">
                        <div className="down10">
                            Enter Steam32 ID
                        </div>
                        
                    </div>
                    
                    <div className="col-7">

                        <div className="input-group input-group-sm mb-3 down10">

                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-sm">search</span>
                            </div>
                            <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                        </div>

                    </div>
                    <div className="col-2 right">
                        <div className="down10">
                            <button >login</button>
                            <button >signup</button>
                        </div>


                    </div>
                </div>
                

            </div>



        )
    };
}
export default Player;