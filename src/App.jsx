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
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return translations.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, translations]);
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
      <Upload setTranslations={setTranslations} setCurrentPage={setCurrentPage} />
      <div className="container-fluid">
        <div className="content">
          {currentTableData.map((item, i) => {
            return (
              <div key={i}>
                <Card
                  style={{
                    height: "150px",
                    width: "300px",
                    backgroundColor: "lightgrey",
                  }}
                >
                  <Card.Body>
                    <Card.Title>{item.fromLanguage}</Card.Title>
                    <Card.Text>{item.fromPhrase}</Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{
                    height: "150px",
                    width: "300px",
                    backgroundColor: "lightblue",
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
      </div>
    </>
  );
}