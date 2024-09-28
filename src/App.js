import "./App.css";

import Header from "./components/Header/Header";
import NoteForm from "./components/NoteForm/NoteForm";
import NoteItem from "./components/NoteItem/NoteItem";
import NoteList from "./components/NoteList/NoteList";
import { useEffect, useState } from "react";

function App() {
  const [notes, setNotes] = useState([]); // Estado para gerenciar as notas
  const [currentNote, setCurrentNote] = useState({ id: null, text: "" }); /// Estado para gerenciar a nota atual (utilizado para edição ou nova nota)

   // useEffect para buscar notas no servidor quando o componente é montado (GET)
  useEffect(() => {
    async function fetchNotes() {
      try { // Busca as notas do servidor local (json-server)
        const response = await fetch("http://localhost:3005/notes");
        const data = await response.json();
        setNotes(data.slice(0)); // Define o estado das notas com os dados recebidos do servidor
      } catch (error) {
        console.error("Erro ao buscar notas:", error);
      }
    }
    fetchNotes();
  }, []);

   // Função para salvar uma nota (adiciona nova nota ou edita existente)
  const handleSaveNote = async (note) => {
    if (note.id) {
      // Edição de uma nota existente (PUT)
      const updatedNotes = notes.map((n) => (n.id === note.id ? note : n));
      setNotes(updatedNotes);
    } else {
      // Adicionar nova nota (POST)
      const newNote = { ...note, id: notes.length + 1 };
      setNotes([...notes, newNote]);
    }
  };

  // Função para excluir nota (DELETE)
  const handleDeleteNote = async (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  // Função para editar uma nota existente
  const handleEditNote = (note) => {
    setCurrentNote(note);
  };

  return (
    <div className="container">
      <Header />
      <NoteForm
        currentNote={currentNote}
        setCurrentNote={setCurrentNote}
        onSave={handleSaveNote}
      />
      <NoteList
        notes={notes}
        onDelete={handleDeleteNote}
        onEdit={handleEditNote}
      />
    </div>
  );
}

export default App;
