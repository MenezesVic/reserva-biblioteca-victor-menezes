export default function BookCard({ book, onReserve }) {
  return (
    <article className="book-card">
      <div className="book-card">
        <h3>{book.title}</h3>
        <p>{book.author}</p>
      </div>
      <span className={`badge ${book.available ? "badge-ok" : "badge-off"}`}>
        {book.available ? "Disponivel" : "Reservado"}
      </span>

      <button onClick={() => onReserve(book.id)}>Reservar</button>
    </article>
  );
}
