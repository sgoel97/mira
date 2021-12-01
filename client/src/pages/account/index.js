import React from "react";

import { logout } from "../../firebase";

import Button from "react-bootstrap/button";

const Account = ({ userData }) => {
  return (
    <div>
      <h1>Account</h1>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <Button onClick={logout}>Sign out</Button>
    </div>
  );
};

export default Account;
