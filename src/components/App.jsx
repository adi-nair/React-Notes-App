import React, {useState} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../Notes";
import Area from "./Area";






function App() {

    const [notes, setNotes] = useState([]);


    function addNote(newNote){
        setNotes(prevNotes =>{
            return [...prevNotes, newNote]
        });
    }

    function delNote(id){
        setNotes(prevNotes =>{
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
          <Header />
          <Area onAdd={addNote} />
          {notes.map((noteItem, index) => {
              return (
                <Note 
              key={index}
              id={index}
              title={noteItem.title} 
              content={noteItem.content} 
              onDelete={delNote}

              />);
          })}
          
          <Footer />
        </div>
      );
}

export default App;
