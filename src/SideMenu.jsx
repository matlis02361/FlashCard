import React from "react";

const SideMenu = () => {
  return (
    <div  style={{
        width: `${200}px`,
      }}>
      <ul>
        <li>Dodawanie obrazków do kart</li>
        <li>Drukowanie kart</li>
        <li>Zapisywanie danych</li>
        <li>Kontrola stronicowania</li>
        <li>Mówienie fraz z kart</li>
      </ul>
    </div>
  );
};

export default SideMenu;
