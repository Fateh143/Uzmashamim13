import React, { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [user, setUser] = useState(null);
  const [signupMode, setSignupMode] = useState(false);

  if (!user) {
    return signupMode ? (
      <Signup onSignup={() => setSignupMode(false)} />
    ) : (
      <Login onLogin={setUser} />
    );
  }

  return <div>Welcome, {user.email}!</div>;
}

export default App;
