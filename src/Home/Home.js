import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className="col justify-content-center text-center">
      <div className="py-3">
        <h1>Drugi oddech</h1>
      </div>

      <div>
        <h5>Aby rozpocząć, prosimy wykonać pomiar długości wydechu.</h5>
        <button type="button" class="btn btn-primary btn-lg" disabled>Wykonaj pomiar</button>
      </div>
    </div>
  )
};

export default Home;