import React, { useState, useEffect } from 'react';
import CreateUser from '../../components/admin/Users/CreateUser';
import RegisterUser from '../../components/admin/Users/RegisterUser';
import Dashboard from '../../components/admin/Dashboard';

export default function Back() {
  const [tab, setTab] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
  }, [isLoggedIn]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setTab(null);
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <div>
            <h1>Bienvenue dans le tableau de bord</h1>
            <button onClick={handleLogout}>Déconnexion</button>
          </div>
          <Dashboard onLogout={handleLogout} />
        </>
      ) : (
        <div>
          <button onClick={() => setTab('register')}>Register</button>
          <button onClick={() => setTab('inscription')}>Inscription</button>
          {tab === 'register' ? <RegisterUser onLogin={handleLogin} /> : null}
          {tab === 'inscription' ? <CreateUser onLogin={handleLogin} /> : null}
        </div>
      )}
    </>
  );
}
