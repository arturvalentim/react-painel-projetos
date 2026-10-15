function StatusBadge({ status }) {
  const classes = {
    "Concluído": "status-completed",
    "Em desenvolvimento": "status-progress",
    "Planejamento": "status-planning",
  };

  return (
    <span className={`status-badge ${classes[status] || "status-default"}`}>
      <span className="status-dot" />
      {status}
    </span>
  );
}

export default StatusBadge;