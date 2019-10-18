import React, { Component } from 'react';

class Navbar extends Component {
    render(){
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                    <p className="navbar-brand">Notes</p>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <form className="form-inline mt-2 mt-md-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-light my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
};

export default Navbar;