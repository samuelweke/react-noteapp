import React, { Component } from 'react';
import AddNote from './AddNote';

class Navbar extends Component {    
    render(){
        return (
            <React.Fragment>
                <nav style={navStyle} className="navbar fixed-top navbar-expand-md navbar-dark bg-dark d-flex justify-content-between mb-4">
                    <p style={noteStyle}>Notes</p>
                    <AddNote addNote={this.props.addNote}/>
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
        fontSize: 38,
        fontWeight: 500,
        marginBottom: 0,
    };


export default Navbar;