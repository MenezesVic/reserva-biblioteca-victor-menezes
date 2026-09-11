import { useState } from "react"; // 1. Importe o useState do React
import "./App.css";
import BookList from "./components/BookList";
import Panel from "./components/Panel";
import { books } from "./data/books";

export default function App() {
  // 2. Guarda a lista de livros no estado
  const [bookList, setBookList] = useState(books);

  // 3. O contador precisa ser calculado (não criado com outro useState)
  const totalBooks = bookList.length;
  const availableBooks = bookList.filter((book) => book.available).length;

  // 4. Troca o alerta por uma atualização imutável
  function handleReserve(bookId) {
    const updatedBooks = bookList.map((book) => {
      // Se for o livro clicado, cria uma cópia dele invertendo o 'available'
      if (book.id === bookId) {
        return { ...book, available: !book.available };
      }
      // Se não for, devolve o livro intacto
      return book;
    });

    // Atualiza o estado com a nova lista
    setBookList(updatedBooks);
  }

  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">BIBLIOTECA ITEAM</p>
        <h1>Reserva de livros do acervo.</h1>
        <p>Consulte a disponibilidade e reserve o que precisar.</p>

        {/* Mostrando o contador no topo da página */}
        <p className="counter">
          <strong>
            {availableBooks} de {totalBooks} livros disponíveis
          </strong>
        </p>
      </header>

      <Panel title="Acervo Disponível">
        <BookList books={bookList} onReserve={handleReserve} />
      </Panel>
    </main>
  );
}
