import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Notes from './components/Notes';
import AddNotes from './components/AddNote';
import './App.css';

class App extends Component {
  state = {
    notes: [
      {
        id:1,
        title:'A note app',
        body: 'sadjfshbjs fvsbhfbud'
      },
      {
        id:2,
        title:'Another note app',
        body: 'sadjfshdafsdasfgdfddbjs fvsbhfbud'
      },
      {
        id:3,
        title:'A different note app',
        body: 'sadsdfgdmlgnkdsjjfshbjs fvsbhfbud'
      }
    ]
  };

  addNote = (e) =>{
      e.preventDefault();
      console.log('sdafgv');
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
        <AddNotes />
        <Notes notes={this.state.notes} handleDelete={this.deleteBtn} addNote={this.addNote} />
      </div>
    )
  }
}

export default App
