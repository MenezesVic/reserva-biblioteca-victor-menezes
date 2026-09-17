import { BooksContext } from "../context/BooksContext";
import BookCard from "./BookCard";
import { useContext } from "react";
export default function BookList() {
  const { books, toggleBook } = useContext(BooksContext);

  if (!books || books.length === 0) {
    return <p>Nenhum livro no acervo.</p>
  }

  return (
    <section className="book-list" aria-label="Acervo">
      {books.map((book) => (
        <BookCard key={book.id} book={book} onReserve={toggleBook} />
      ))}
    </section>
  );
}
