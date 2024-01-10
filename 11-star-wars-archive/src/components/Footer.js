export default function Footer() {
  return (
    <footer className="p-4 d-flex flex-lg-nowrap flex-wrap justify-content-center justify-content-lg-between align-items-center">
      <p className="m-0">
        Powered by&nbsp;
        <a
          className="text-warning"
          href="https://github.com/akabab/starwars-api"
          rel="noreferrer"
          target="_blank"
        >
          <b>akabab/starwars-api</b>
        </a>
      </p>

      <p className="m-0 text-end">
        Developed by&nbsp;
        <a
          className="text-warning"
          href="https://github.com/deepak-parmar"
          rel="noreferrer"
          target="_blank"
        >
          <b>Deepak Parmar</b>
        </a>
      </p>
    </footer>
  );
}
