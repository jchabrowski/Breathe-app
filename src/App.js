import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <React.Fragment>
    <div className="col d-flex justify-content-center text-center">
      <ul class="list-unstyled">
        <li class="h2 pt-3">Drugi oddech</li>
        <li class="h5 py-3">Aby rozpocząć, prosimy wykonać pomiar długości wydechu.</li>
        <button type="button" class="btn btn-primary btn-lg">Wykonaj pomiar</button>
      </ul>
    </div>

    <div className="col d-flex justify-content-center text-center">
      <ul class="list-unstyled">
        <p class="pt-3">Jeżeli pomiar został poprzednio wykonany może Pan/i przejść bezpośrednio do ćwiczeń</p>
        <button type="button" class="btn btn-primary btn-lg">Ćwiczenia</button>
      </ul>
    </div>
    </React.Fragment>
  );
}

export default App;
