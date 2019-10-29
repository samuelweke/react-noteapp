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
      //   title:'The boy',
      //   body: 'There was a boy'
      // },
      // {
      //   id:2,
      //   title:'Bag',
      //   body: 'Once upon a time'
      // },
      // {
      //   id:3,
      //   title:'Quote',
      //   body: 'As flies to wanton boys'
      // }
    ]
  };

  componentDidMount(){
    if(localStorage.getItem('notes') !== null){
      this.setState({notes:JSON.parse(localStorage.getItem('notes')) })
    }
  }
  
  addNote = (title, body) =>{
      const notes = {
        id: uuid.v4(),
        title: title,
        body: body
      }
      this.state.notes.push(notes);
      localStorage.setItem('notes', JSON.stringify(this.state.notes));

      this.setState({
        notes: JSON.parse(localStorage.getItem('notes'))
      });
  };

  deleteBtn = (id) => {
    const notes = this.state.notes.filter((note) => 
      note.id !== id
    )
    localStorage.setItem('notes', JSON.stringify(notes));
    this.setState({
      notes: JSON.parse(localStorage.getItem('notes'))
    });
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
