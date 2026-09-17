import { useState, useEffect } from "react";
import "./App.css";
import BookList from "./components/BookList";
import Panel from "./components/Panel";
import { books } from "./data/books";
import BookForm from "./components/BookForm";

const STORAGE_KEY = "reserva-biblioteca:books";

function loadBooks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return books;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return books;
    return parsed;
  } catch {
    return books;
  }
}

export default function App() {
  const [bookList, setBookList] = useState(loadBooks);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookList));
  }, [bookList]);

  const totalBooks = bookList.length;
  const availableBooks = bookList.filter((book) => book.available).length;

  function handleReserve(bookId) {
    const updatedBooks = bookList.map((book) =>
      book.id === bookId
        ? {
            ...book,
            available: !book.available,
          }
        : book,
    );
    setBookList(updatedBooks);
  }

  function handleAddBook(newBook) {
    setBookList([...bookList, newBook]);
  }

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
