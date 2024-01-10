export default function ProfileImage(props) {
  return (
    <div
      className="col-lg-5 p-0 img-fluid"
      style={{
        minHeight: "580px",
        background: `url(${props.imageURL}) no-repeat top center`,
        backgroundSize: "cover",
      }}
    >
      {/* gradient overlay */}
      <div
        className="d-flex h-100 justify-content-center align-items-end"
        style={{ backgroundImage: "linear-gradient(0deg, #000, transparent)" }}
      >
        {/* character name */}
        <h1 className="display-4 text-warning fw-bold py-5">{props.name}</h1>
      </div>
    </div>
  );
}
