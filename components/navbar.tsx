import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
      <Link href="/" passHref>
        <a className="navbar-brand">Wordle Tracker</a>
      </Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link href="/upload" passHref>
              <a className="nav-link">Upload</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/userscore/1" passHref>
              <a className="nav-link">Scores</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
