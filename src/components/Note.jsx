import React,{useState} from 'react';
import DeleteIcon from "@material-ui/icons/Delete";

//class names can only be added to real Html elements
function Note(props){

    function handleClick(event){
        props.onDelete(props.id);

    }

    return(
        <div className = "note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}><DeleteIcon /></button>
        </div>
    );
}

export default Note;