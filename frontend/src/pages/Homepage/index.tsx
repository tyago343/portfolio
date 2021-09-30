import React from 'react';
import { Link } from 'react-router-dom';

const Homepage: React.FC = () => {
  return (
    <main>
      <div>
        <h1>Santiago Casanova -- Frontend developer</h1>
        <Link to="/admin">página de administracion</Link>
      </div>
    </main>
  );
};

export default Homepage;
