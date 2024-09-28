import React from "react";
import "./NoteList.css";
import NoteItem from "../NoteItem/NoteItem";
import Button from "../Button/Button";

const NoteList = ({ notes, onDelete, onEdit }) => {
  return (
    <div className="note-list">
      {/* Mapeia a lista de notas e renderiza o componente NoteItem para cada uma */}
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} onDelete={onDelete} onEdit={onEdit}/>
      ))}
    </div>
  );
};

export default NoteList;
