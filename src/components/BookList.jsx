import BookCard from "./BookCard";

export default function BookList({ books }) {
  if (!books || books.lenght === 0) {
    return <p>Nenhum livro no acervo.</p>;
  }

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
