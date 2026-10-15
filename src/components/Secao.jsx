
function Secao({ titulo, children }) {
  return (
    <section className="projects-section">
      <div className="section-heading">
        <div>
          <span className="section-eyebrow">EXPLORE</span>
          <h2>{titulo}</h2>
        </div>

        <span className="section-decoration">✳</span>
      </div>

      {children}
    </section>
  );
}

export default Secao;