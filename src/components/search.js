import React, { Component } from 'react';





class Search extends Component {

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
                                <button className="input-group-text" id="inputGroup-sizing-sm">search</button>
                            </div>
                            <input type="number" className="form-control" aria-label="Small" onChange={this.props.onUpdate} aria-describedby="inputGroup-sizing-sm" />

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
export default Search;