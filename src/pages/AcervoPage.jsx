import { useContext } from "react";
import Panel from "../components/Panel";
import BookList from "../components/BookList";
import { BooksContext } from "../context/BooksContext";

export default function AcervoPage() {
  const { books, availableCount } = useContext(BooksContext);

  return (
    <>
      <header className="hero">
        <p className="eyebrow">BIBLIOTECA ITEAM</p>
        <h1>Reserva de livros do acervo.</h1>
        <p>Consulte a disponibilidade e reserve o que precisar.</p>
        <p className="counter">
          <strong>{availableCount} de {books.length} livros disponíveis</strong>
        </p>
      </header>

      <Panel title="Acervo Disponível">
        <BookList />
      </Panel>
    </>
  );
}