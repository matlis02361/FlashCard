import React from 'react';

export const PrintCards = () => {
  const printWindow = () => {
    const printContents = document.getElementById("printCards").innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };

  return (
    <button onClick={printWindow} className="control-btn">
      Print Cards
    </button>
  );
};
