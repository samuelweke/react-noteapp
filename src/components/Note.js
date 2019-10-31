import React, { Component } from 'react';


class Note extends Component {
    render() {
        return (
            <div style={noteStyle} className="card ml-5">
                <div style={cardHeader} className="card-header bg-dark">{this.props.note.title}</div>
                <div className="card-body">{this.props.note.body}</div>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-danger btn-sm" onClick={() => this.props.handleDelete(this.props.note.id)}>Del</button>
                    <button className="btn btn-primary btn-sm">Edit</button>
                </div>
            </div>
        )
    }
}

const noteStyle = {
    width: '280px',
    maxHeight: '280px'
};

const cardHeader = {
    color: '#fff'
};


export default Note;
