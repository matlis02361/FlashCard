import React, { useState, useMemo } from "react";
import Pagination from "./pagination";
import data from "./data/translations.json";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./scss/App.scss";
import Upload from "./upload.jsx";

const PageSize = 20;

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  return (
    <>
      <h1>Excel Read/Write Example</h1>
      <p>Welcome to this site.</p>
      <h2>
        There are {(currentPage - 1) * PageSize + 1} to{" "}
        {currentPage > data.length / PageSize
          ? (currentPage - 1) * PageSize + (data.length % PageSize)
          : (currentPage - 1) * PageSize + PageSize}{" "}
        from {data.length} translations:
      </h2>
      <Upload />
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
          totalCount={data.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </>
  );
}

