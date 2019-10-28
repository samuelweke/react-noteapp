import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Notes from './components/Notes';
import AddNotes from './components/AddNote';
import uuid from 'uuid';
import './App.css';

class App extends Component {
  state = {
    notes: [
      // {
      //   id:1,
      //   title:'A note app',
      //   body: 'sadjfshbjs fvsbhfbud'
      // },
      // {
      //   id:2,
      //   title:'Another note app',
      //   body: 'sadjfshdafsdasfgdfddbjs fvsbhfbud'
      // },
      // {
      //   id:3,
      //   title:'A different note app',
      //   body: 'sadsdfgdmlgnkdsjjfshbjs fvsbhfbud'
      // }
    ]
  };

  componentDidMount(){
    const notes = JSON.parse(localStorage.getItem('notes'))
    this.setState({notes: [notes]})
  };

  addNote = (title, body) =>{
      const notes = {
        id: uuid.v4(),
        title: title,
        body: body
      }
      this.setState({notes: [...this.state.notes, notes]});
      localStorage.setItem('notes', JSON.stringify(notes))
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
        <Notes notes={this.state.notes} getNote={this.getNote} handleDelete={this.deleteBtn} addNote={this.addNote} />
      </div>
    )
  }
}

export default App
