import './App.scss';
import GooglePexel from "./googlepexel.js";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand text-1" href="https">
            Photo album
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link text-2" href="https">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-3" href="https">
                  Link
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-4"
                  href="https"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item text-5" href="https">
                    Action
                  </a>
                  <a class="dropdown-item text-6" href="https">
                    Another action
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item text-7" href="https">
                    Something else here
                  </a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled text-8" href="https">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div class="container mt-5">
        <GooglePexel></GooglePexel>
      </div>
    </div>
  );
}

export default App;
