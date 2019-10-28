import React, { Component } from 'react';

class AddNote extends Component {
    state = {
        title: '',
        body: ''
    }
    onSubmit = (e) => {
        e.preventDefault();
        const {title, body} = this.state;
        this.props.addNote(title, body);
        this.setState({ title: '', body: ''});
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };


    render() {
        return (
            <div style={addNoteStyle} className="ml-5">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input 
                            name="title" 
                            value={this.state.title} 
                            onChange={this.onChange} 
                            type="text" 
                            className="form-control" 
                            placeholder="Note Title"
                        />
                    </div>
                    <div className="form-group">
                        <label>Body</label>
                        <textarea 
                            name="body" 
                            value={this.state.body} 
                            onChange={this.onChange} 
                            className="form-control">
                        </textarea>
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
