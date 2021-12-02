import React, { useState, useEffect } from "react";

import { auth, logout } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import Button from "react-bootstrap/button";

const Account = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    setName(user.displayName);
    setEmail(user.email);
  }, []);

  return (
    <div className="content">
      <h1>Account</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <Button onClick={logout}>Sign out</Button>
    </div>
  );
};

export default Account;
