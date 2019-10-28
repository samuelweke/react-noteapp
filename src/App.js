import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Notes from './components/Notes';
import AddNotes from './components/AddNote';
import uuid from 'uuid';
import './App.css';

class App extends Component {
  state = {
    notes: [
    ]
  };

  addNote = (title, body) =>{
      const notes = {
        id: uuid.v4(),
        title: title,
        body: body
      }
      this.setState({notes: [...this.state.notes, notes]})
  };

  deleteBtn = (id) => {
    const notes = this.state.notes.filter((note) => 
      note.id !== id
    )
    this.setState({notes: notes});
  };

  render() {
    return (
      <div>
        <Navbar />
        <AddNotes addNote={this.addNote} />
        <Notes notes={this.state.notes} handleDelete={this.deleteBtn} addNote={this.addNote} />
      </div>
    )
  }
}

export default App
