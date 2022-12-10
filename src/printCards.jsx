import React from "react";
import "./scss/App.scss";

export const PrintCards = () => {
  const printWindow = () => {
    const printContents = document.getElementById("printCards").innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;

    // Dodaj kod @media print tutaj
    const printStyle = document.createElement("style");
    printStyle.textContent = `
  @media print {
    .print-cards {
      display: flex !important;
      flex-wrap: wrap !important;
      justify-content: center !important;
    }

    .print-cards .card {
      width: 200px !important;
      height: 100px !important;
      margin: 5px !important;
      background: black !important;
    }
  }
`;
    document.head.appendChild(printStyle);

    window.print();
    document.body.innerHTML = originalContents;
  };

  return (
    <button onClick={printWindow} className="control-btn">
      Print Cards
    </button>
  );
};
