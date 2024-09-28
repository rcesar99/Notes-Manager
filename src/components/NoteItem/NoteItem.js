import React from "react";
import "./NoteItem.css";

const NoteItem = ({ note, onDelete, onEdit }) => {
  return (
    <div className="note-item">
      <p>{note.text}</p>
      <button onClick={() => onEdit(note)}>Editar</button> {/* Botão para carregar a nota no formulário para edição */}
      <button onClick={() => onDelete(note.id)}>Excluir</button> {/* Botão para excluir a nota com base no ID */}
    </div>
  );
};

export default NoteItem;
