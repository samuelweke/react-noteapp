import React, { Component } from 'react';

class Navbar extends Component {
    render(){
        return (
            <React.Fragment>
                <nav style={navStyle} className="navbar navbar-expand-md navbar-dark bg-dark d-flex justify-content-between mb-4">
                    <p style={noteStyle}>Notes</p>
                    <button className="btn btn-light">Take Note</button>
                </nav>
            </React.Fragment>
        )
    }
};
    const navStyle = {
        paddingLeft: '5%',
        paddingRight: '5%'
    };

    const noteStyle = {
        color: '#fff',
        fontSize: 34,
        fontWeight: 500,
        marginBottom: 0,
    };

export default Navbar;