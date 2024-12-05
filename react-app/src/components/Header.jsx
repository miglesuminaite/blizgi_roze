import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Blizgi Rožė</h1>
      <nav>
        <Link to="/">Pagrindinis</Link>
        <Link to="/catalog">Prekių katalogas</Link>
        <Link to="/order">Užsisakyti</Link>
        <Link to="/admin">Admin prisijungimas</Link>
      </nav>
    </header>
  );
}

export default Header;
