export default function BookCard({book}) {
    return (
        <div className="book-card">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            
            <span className={`badge ${book.available ? "badge-ok" : "badge-off"}`}>
                {book.available ? "Disponivel" : "Reservado"}
            </span>
        </div>
    )
}