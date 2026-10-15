function Resumo({ total, concluidos, emDesenvolvimento }) {
  const indicadores = [
    {
      titulo: "Total de projetos",
      valor: total,
      simbolo: "▦",
      classe: "metric-purple",
    },
    {
      titulo: "Concluídos",
      valor: concluidos,
      simbolo: "✓",
      classe: "metric-green",
    },
    {
      titulo: "Em desenvolvimento",
      valor: emDesenvolvimento,
      simbolo: "↗",
      classe: "metric-orange",
    },
  ];

  return (
    <section className="summary-grid" aria-label="Resumo dos projetos">
      {indicadores.map((indicador) => (
        <article className="metric-card" key={indicador.titulo}>
          <div className={`metric-icon ${indicador.classe}`}>
            {indicador.simbolo}
          </div>

          <div className="metric-content">
            <span>{indicador.titulo}</span>
            <strong>{indicador.valor.toString().padStart(2, "0")}</strong>
          </div>
        </article>
      ))}
    </section>
  );
}

export default Resumo;