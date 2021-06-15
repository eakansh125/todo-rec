import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import React, {useEffect, useState} from "react";
import './App.css';
import Todo from "./Todo";
import db from "./firebase";
import firebase from 'firebase'; 


function App() {

const [todos, setTodos] = useState([]);
const [input, setInput] = useState('');

//When the app loads, we need to listen to db and fetch the items being added/removed

useEffect(() => {
  //this code fires when the app.js loads and then whenever the value in [] below changes. If it's empty,
  //it will fire only once when the app loads
  db.collection('todos').orderBy('timestamp','asc').onSnapshot(snapshot => {
    setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
  })
}, [input])

const addToList = (event) => {
  event.preventDefault(); //Prevents old js features to override like refreshing after clicking a button of type submit
  db.collection('todos').add({
    todo: input,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })
  /* setTodos([...todos, input]); */
  setInput('');
}

  return (
    <div className="App">
    <h1>Rememba 💡</h1>
    <FormControl>
      <InputLabel>Write a small note ✅✅</InputLabel>
      <Input value={input} onChange={event => setInput(event.target.value)} 
      aria-describedby="my-helper-text" />
    </FormControl>
    <div className="addButton">
      <Button disabled={!input} onClick={addToList} variant="contained" color="primary">
        Add to list
      </Button>
    </div>
    
      <ul>
        {todos.map(todo => (
          <Todo AppsenderData={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
