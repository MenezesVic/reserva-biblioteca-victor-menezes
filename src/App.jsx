import { useState, useEffect, useContext } from "react";
import "./App.css";
import BookList from "./components/BookList";
import Panel from "./components/Panel";
import BookForm from "./components/BookForm";
import { BooksContext } from "./context/BooksContext";

export default function App() {
  const { books, availableCount} = useContext(BooksContext);

  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">BIBLIOTECA ITEAM</p>
        <h1>Reserva de livros do acervo.</h1>
        <p>Consulte a disponibilidade e reserve o que precisar.</p>

        <p className="counter">
          <strong>
            {availableBooks} de {totalBooks} livros disponíveis
          </strong>
        </p>
      </header>

      <Panel title="Novo livro">
        <BookForm onAddBook={handleAddBook} />
      </Panel>

      <Panel title="Acervo Disponível">
        <BookList books={bookList} onReserve={handleReserve} />
      </Panel>
    </main>
  );
}
