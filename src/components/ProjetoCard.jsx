import StatusBadge from "./StatusBadge";
import TecnologiaTag from "./TecnologiaTag";

function ProjetoCard({
  titulo,
  descricao,
  responsavel,
  status,
  tecnologias,
  destaque,
}) {
  return (
    <article className={`project-card ${destaque ? "featured-card" : ""}`}>
      <div className="card-top">
        <div className="project-icon">
          {titulo.charAt(0)}
        </div>

        {destaque && (
          <span className="featured-label">
            ✦ Destaque
          </span>
        )}
      </div>

      <div className="card-heading">
        <h3>{titulo}</h3>
        <StatusBadge status={status} />
      </div>

      <p className="project-description">{descricao}</p>

      <div className="technology-list">
        {tecnologias.map((tecnologia) => (
          <TecnologiaTag
            key={tecnologia}
            nome={tecnologia}
          />
        ))}
      </div>

      <div className="card-divider" />

      <div className="card-footer">
        <div className="avatar">
          {responsavel
            .split(" ")
            .map((parte) => parte[0])
            .slice(0, 2)
            .join("")
            .toUpperCase()}
        </div>

        <div className="responsible-info">
          <span>Responsável</span>
          <strong>{responsavel}</strong>
        </div>

        <span className="card-arrow" aria-hidden="true">↗</span>
      </div>
    </article>
  );
}

export default ProjetoCard;