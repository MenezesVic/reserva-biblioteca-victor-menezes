import { useState, useContext } from "react";
import { BooksContext } from "../context/BooksContext";

export default function BookForm() {
  const { addBook } = useContext(BooksContext);

  const [formData, setFormData] = useState({ title: "", author: "" });
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (formData.title.trim() === "" || formData.author.trim() === "") {
      setError("Preencha o título e o autor.");
      return;
    }

    const newBook = {
      id: crypto.randomUUID(),
      title: formData.title,
      author: formData.author,
      available: true,
    };

    addBook(newBook);

    setFormData({ title: "", author: "" });
    setError("");
  }

  return (
    <form onSubmit={handleSubmit} className="book-form">
      {error && (
        <p className="error-message" style={{ color: "red" }}>
          {error}
        </p>
      )}

      <div>
        <label htmlFor="title">Título: </label>
        <input
          id="title"
          name="title" // Tem que ser exatamente o nome da chave no estado
          value={formData.title}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="author">Autor: </label>
        <input
          id="author"
          name="author" // Tem que ser exatamente o nome da chave no estado
          value={formData.author}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Cadastrar</button>
    </form>
  );
}
