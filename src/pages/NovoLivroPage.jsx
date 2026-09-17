import Panel from "../components/Panel";
import BookForm from "../components/BookForm";

export default function NovoLivroPage() {
  return (
    <>
      <header className="hero">
        <h1>Cadastrar novo livro</h1>
      </header>
      <Panel title="Novo livro">
        <BookForm />
      </Panel>
    </>
  );
}
