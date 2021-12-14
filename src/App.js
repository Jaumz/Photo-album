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
                <a class="nav-link text-3" href="https://leadster.com.br/" target="_blank" rel="noreferrer">
                  Leadster
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div class="container mt-5 mb-5" id="container">
        <GooglePexel></GooglePexel>
      </div>
      <footer class="container-fluid pt-5 bg-dark text-white">
        <div class="container">
          <div class="row mb-3">
            <div class="col-md-6">
              <p>
                <i></i> <strong>Email</strong>: assessoriacontabilre@gmail.com
              </p>
              <p>
                <i></i> <strong>Telefone</strong>: (24) 99243-6035
              </p>
              <p>
                <i></i> <strong>Endereço</strong>: Rua Sessenta, 487, Bairro
                Sessenta, Volta Redonda - RJ
              </p>
            </div>
            <div class="col-md-6 text-center">
              <img class="img-fluid rounded" alt="" />
            </div>
          </div>
          <div class="row text-center">
            <div class="col-md-6">
              <p>
                <span>2021 - RE Assessoria Contábil</span>
              </p>
            </div>
            <div class="col-md-6">Desenvolvido por </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
