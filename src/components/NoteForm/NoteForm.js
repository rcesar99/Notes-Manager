import React from "react";
import "./NoteForm.css";
import Button from "../Button/Button";

const NoteForm = ({ currentNote, setCurrentNote, onSave }) => {
  // Função para tratar o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Chama a função onSave com a nota atual e redefine o estado para vazio
    onSave(currentNote);
    setCurrentNote({ id: null, text: "" });
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <textarea
        className="note-textarea"
        placeholder="Digite sua nota..."
        value={currentNote.text}
        onChange={(e) =>
          setCurrentNote({ ...currentNote, text: e.target.value })
        }
        required
      />
      <Button type="submit" text="Salvar Nota" />
    </form>
  );
};

export default NoteForm;
