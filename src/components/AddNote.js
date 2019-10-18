import React, { Component } from 'react';

class AddNote extends Component {
    render() {
        return (
            <div style={addNoteStyle} className="ml-5">
                <form onSubmit={()=> this.props.addNote(this.props.addNote.e)}>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Note Title"/>
                    </div>
                    <div className="form-group">
                        <label>Body</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button className="btn btn-success">Save</button>
                </form>
            </div>
        )
    }
}

const addNoteStyle = {
    width: '400px'
}

export default AddNote
