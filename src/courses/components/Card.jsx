export function Card({ header, title, description }) {
  return (
    <div
      className="col-12 col-md-6 col-xl-3 card border-info"
      style={{ minHeight: "13rem", maxWidth: "20rem" }}
    >
      <div className="card-header d-flex justify-content-between">
        <span className="small">{header}</span>
      </div>
      <div className="card-body">
        <h5 className="card-title font-weight-bold">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer ">
        <button type="button" className="btn w-100 btn-info">
          Ver más
        </button>
      </div>
    </div>
  );
}
