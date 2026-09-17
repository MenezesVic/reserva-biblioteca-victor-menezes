// src/components/BookForm.jsx
import { useState } from "react";

export default function BookForm({ onAddBook }) {
  // Estado para os campos do formulário
  const [formData, setFormData] = useState({ title: "", author: "" });
  // Estado para a mensagem de erro
  const [error, setError] = useState("");

  // Único handleChange cuidando de todos os campos
  function handleChange(event) {
    const { name, value } = event.target;
    // Usa a "chave calculada" [name] para atualizar o campo certo
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault(); // Impede a página de recarregar

    // Verificação de campos vazios
    if (formData.title.trim() === "" || formData.author.trim() === "") {
      setError("Preencha o título e o autor.");
      return; // Para a execução aqui e não cadastra
    }

    // Cria o objeto do novo livro com as exigências da etapa
    const newBook = {
      id: crypto.randomUUID(), // Gera um ID único aleatório
      title: formData.title,
      author: formData.author,
      available: true,
    };

    // Envia o livro pronto para a função do App
    onAddBook(newBook);

    // Limpa os campos e some com a mensagem de erro
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
