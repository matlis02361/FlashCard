import React, { useState, useMemo } from "react";
import Pagination from "./pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./scss/App.scss";
import Upload from "./upload.jsx";

const PageSize = 20;

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [translations, setTranslations] = useState([]);
  const [size, setSize] = useState(1);
  const [color, setColor] = useState("lightgrey");
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return translations.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, translations]);
  const printCards = () => {
    const printContents = document.getElementById("printCards").innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };
  return (
    <>
      <h1>Excel Read/Write Example</h1>
      <p>Welcome to this site.</p>
      <h2>
        There are {(currentPage - 1) * PageSize + 1} to{" "}
        {currentPage > translations.length / PageSize
          ? (currentPage - 1) * PageSize + (translations.length % PageSize)
          : (currentPage - 1) * PageSize + PageSize}{" "}
        from {translations.length} translations:
      </h2>
      <div className="d-flex">
        <button onClick={() => setSize(1)} className="control-btn">
          XS
        </button>
        <button onClick={() => setSize(1.5)} className="control-btn">
          SM
        </button>
        <button onClick={() => setSize(2)} className="control-btn">
          MD
        </button>
        <button onClick={() => setSize(2.5)} className="control-btn">
          LG
        </button>
        <div className="d-flex flex-wrap">
          {[
            "lightgrey",
            "red",
            "orange",
            "yellow",
            "green",
            "teal",
            "blue",
            "indigo",
            "purple",
            "pink",
            "lightblue",
            "lightgreen",
            "lightyellow",
            "lavender",
            "cyan",
            "brown",
            "black",
            "lightcyan",
            "darkblue",
            "darkgreen",
            "darkred",
            "darkcyan",
            "darkorange",
          ].map((item, i) => {
            return (
              <button
                style={{ backgroundColor: item }}
                onClick={() => setColor(item)}
                className="color-btn"
              ></button>
            );
          })}
        </div>
      </div>
      <Upload
        setTranslations={setTranslations}
        setCurrentPage={setCurrentPage}
      />
      <div className="container-fluid">
        <div className="content" id="printCards">
          {currentTableData.map((item, i) => {
            return (
              <div key={i}>
                <Card
                  style={{
                    height: `${100 * size}px`,
                    width: `${200 * size}px`,
                    backgroundColor: color,
                  }}
                >
                  <Card.Body>
                    <Card.Title>{item.fromLanguage}</Card.Title>
                    <Card.Text>{item.fromPhrase}</Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{
                    height: `${100 * size}px`,
                    width: `${200 * size}px`,
                    backgroundColor: color,
                  }}
                >
                  <Card.Body>
                    <Card.Title>{item.toLanguage}</Card.Title>
                    <Card.Text>{item.toPhrase}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={translations.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
        <button onClick={printCards} className="control-btn">
          Print Cards
        </button>
      </div>
    </>
  );
}
