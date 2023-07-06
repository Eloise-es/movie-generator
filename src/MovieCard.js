function MovieCard({ title, synopsis, idea }) {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="text-center">{title}</h4>
        <p className="card-text">{synopsis}</p>
      </div>
      <div className="card-footer">Initial idea: "{idea}"</div>
    </div>
  );
}

export default MovieCard;
