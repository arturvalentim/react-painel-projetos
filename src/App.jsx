import { useState } from "react";
import "./App.css";

import ProjetoCard from "./components/ProjetoCard";
import Secao from "./components/Secao";
import Resumo from "./components/Resumo";

const projetos = [
  {
    id: 1,
    titulo: "Sistema de Estoque",
    descricao: "Controle inteligente de produtos, entradas e saídas de mercadorias.",
    responsavel: "Ana Martins",
    status: "Concluído",
    tecnologias: ["React", "Node.js", "PostgreSQL"],
    destaque: true,
  },
  {
    id: 2,
    titulo: "DevConnect",
    descricao: "Plataforma para conectar desenvolvedores e compartilhar conhecimento.",
    responsavel: "Lucas Ferreira",
    status: "Em desenvolvimento",
    tecnologias: ["React", "TypeScript", "Firebase"],
    destaque: true,
  },
  {
    id: 3,
    titulo: "FinanSmart",
    descricao: "Organizador financeiro para acompanhar despesas e metas mensais.",
    responsavel: "Mariana Costa",
    status: "Planejamento",
    tecnologias: ["JavaScript", "CSS", "React"],
    destaque: false,
  },
  {
    id: 4,
    titulo: "EcoTrack",
    descricao: "Aplicação para registrar hábitos sustentáveis e reduzir desperdícios.",
    responsavel: "Pedro Almeida",
    status: "Em desenvolvimento",
    tecnologias: ["React", "Node.js", "MongoDB"],
    destaque: false,
  },
  {
    id: 5,
    titulo: "FitLife",
    descricao: "Painel de acompanhamento de treinos, objetivos e evolução pessoal.",
    responsavel: "Julia Santos",
    status: "Concluído",
    tecnologias: ["React", "Tailwind CSS"],
    destaque: false,
  },
  {
    id: 6,
    titulo: "EducaPlay",
    descricao: "Ambiente de aprendizagem com desafios interativos e acompanhamento de progresso.",
    responsavel: "Gabriel Lima",
    status: "Planejamento",
    tecnologias: ["JavaScript", "HTML", "CSS"],
    destaque: true,
  },
];

function App() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState("Todos");

  const total = projetos.length;
  const concluidos = projetos.filter(
    (projeto) => projeto.status === "Concluído"
  ).length;
  const emDesenvolvimento = projetos.filter(
    (projeto) => projeto.status === "Em desenvolvimento"
  ).length;

  const projetosFiltrados = projetos.filter((projeto) => {
    const correspondeBusca =
      projeto.titulo.toLowerCase().includes(busca.toLowerCase()) ||
      projeto.responsavel.toLowerCase().includes(busca.toLowerCase());

    const correspondeFiltro =
      filtro === "Todos" || projeto.status === filtro;

    return correspondeBusca && correspondeFiltro;
  });

  return (
    <main className="dashboard">
      <header className="topbar">
        <a className="brand" href="#inicio">
          <span className="brand-icon">P.</span>
          <span>project<span className="brand-light">hub</span></span>
        </a>

        <span className="topbar-label">
          <span className="online-dot" />
          Painel de projetos
        </span>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-content">
          <span className="eyebrow">VISÃO GERAL • 2026</span>
          <h1>
            Ideias que viram
            <br />
            <span>grandes projetos.</span>
          </h1>
          <p>
            Acompanhe iniciativas, descubra tecnologias e veja
            o progresso de cada projeto em um só lugar.
          </p>
        </div>

        <div className="hero-decoration" aria-hidden="true">
          <div className="decoration-circle circle-one" />
          <div className="decoration-circle circle-two" />
          <span className="decoration-symbol">✳</span>
        </div>
      </section>

      <Resumo
        total={total}
        concluidos={concluidos}
        emDesenvolvimento={emDesenvolvimento}
      />

      <Secao titulo="Projetos da turma">
        <div className="projects-toolbar">
          <div className="search-box">
            <span aria-hidden="true">⌕</span>
            <input
              type="search"
              placeholder="Buscar projeto ou responsável..."
              value={busca}
              onChange={(event) => setBusca(event.target.value)}
              aria-label="Buscar projeto ou responsável"
            />
          </div>

          <select
            className="filter-select"
            value={filtro}
            onChange={(event) => setFiltro(event.target.value)}
            aria-label="Filtrar por status"
          >
            <option value="Todos">Todos os status</option>
            <option value="Concluído">Concluídos</option>
            <option value="Em desenvolvimento">Em desenvolvimento</option>
            <option value="Planejamento">Planejamento</option>
          </select>
        </div>

        <p className="results-label">
          {projetosFiltrados.length} projetos encontrados
        </p>

        <div className="projects-grid">
          {projetosFiltrados.map((projeto) => (
            <ProjetoCard
              key={projeto.id}
              titulo={projeto.titulo}
              descricao={projeto.descricao}
              responsavel={projeto.responsavel}
              status={projeto.status}
              tecnologias={projeto.tecnologias}
              destaque={projeto.destaque}
            />
          ))}
        </div>

        {projetosFiltrados.length === 0 && (
          <div className="empty-state">
            <span>⌕</span>
            <h3>Nenhum projeto encontrado</h3>
            <p>Tente outro nome ou selecione um status diferente.</p>
          </div>
        )}
      </Secao>

      <footer className="footer">
        <span className="brand footer-brand">
          <span className="brand-icon">P.</span>
          projecthub
        </span>
        <span>Feito com React · Painel de Projetos</span>
      </footer>
    </main>
  );
}

export default App;
