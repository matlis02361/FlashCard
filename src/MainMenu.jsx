import React from "react";
import "./scss/MainMenu.scss"

const MainMenu = () => {
  return (
    <div className=".top-menu">
      <ul>
        <li>Strona główna</li>
        <li>Importowanie i eksportowanie danych</li>
        <li>Zmiana rozmiaru i koloru kart</li>
        <li>Zmiana języka</li>
      </ul>
    </div>
  );
};

export default MainMenu;
