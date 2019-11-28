import React, { Component } from 'react';


class Note extends Component {
    render() {
        return (
            <div className="col-4 mb-3">
                <div style={noteStyle} className="card">
                    <div style={cardHeader} className="card-header bg-dark">{this.props.note.title}</div>
                    <div style={cardBody} className="card-body">{this.props.note.body}</div>
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-danger btn-sm" onClick={() => this.props.handleDelete(this.props.note.id)}>Del</button>
                        <button className="btn btn-primary btn-sm">Edit</button>
                    </div>
                </div>
            </div>
        )
    }
}

const noteStyle = {
    width: '320px',
    height: '250px',
};

const cardHeader = {
    color: '#fff'
};

const cardBody = {
    overflow: 'visible',
}


export default Note;
