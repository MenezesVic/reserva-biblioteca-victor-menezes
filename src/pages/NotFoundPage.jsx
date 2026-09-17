import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <section className="hero">
      <h1>Página não encontrada</h1>
      <p>O endereço que você tentou acessar não existe.</p>
      <Link to="/">Voltar para o início</Link>
    </section>
  );
}
