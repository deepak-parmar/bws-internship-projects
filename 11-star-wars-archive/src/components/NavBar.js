export default function NavBar(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid p-3">

        {/* Title */}
        <a className="navbar-brand text-warning fw-bold fs-3 m-0 text-uppercase" href="/">
          Star Wars Archives
        </a>

        {/* Refresh button */}
        <div className="d-flex">
          <button
            className="btn btn-outline-warning text-light p-2 border-2 rounded-circle d-flex justify-content-center align-items-center"
            onClick={props.handleRefresh}
            aria-label="Refresh"
          >
            {/* Refresh icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"></path>
              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
