import React, { Component } from 'react'
import Note from './Note';

class Notes extends Component {
    render() {
        return (
            this.props.notes.map(note => 
                <Note key={note.id} note={note} handleEdit={this.props.handleEdit} handleDelete={this.props.handleDelete} />
            )
        )
    }
}

export default Notes
