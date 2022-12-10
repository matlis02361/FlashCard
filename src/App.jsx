import React, { useState, useMemo } from "react";
import Pagination from "./pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./scss/App.scss";
import Upload from "./upload.jsx";
import { PrintCards } from "./printCards";
import { SpeakButton } from "./speakButton";
// todo: import Translator from "./translator.jsx";
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

  return (
    <>
      <h1>Excel Read/Write Example</h1>
      <p>Welcome to this site.</p>
      <div className="d-flex ">
     {/*  // todo  <Translator /> */}
      </div>
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
          <PrintCards />
        </div>
      </div>
      <Upload
        setTranslations={setTranslations}
        setCurrentPage={setCurrentPage}
      />
      <div className="container-fluid">
        <div className="content print-cards " id="printCards">
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
                    <button
                      onClick={() => {
                        const imageAdd = [...translations];
                        imageAdd[i].image = window.prompt("Enter image URL");
                        setTranslations(imageAdd);
                      }}
                    >
                      Add Image
                    </button>
                    <SpeakButton
                      item={{
                        Phrase: item.fromPhrase,
                        Language: item.fromLanguage,
                      }}
                    />
                  </Card.Body>
                  <Card.Img
                    src={item.image}
                    style={{
                      height: `${20 * size}px`,
                      width: `${30 * size}px`,
                      backgroundColor: color,
                    }}
                  />
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
                    <SpeakButton
                      item={{
                        Phrase: item.toPhrase,
                        Language: item.toLanguage,
                      }}
                    />
                  </Card.Body>
                  <Card.Img
                    src={item.image}
                    style={{
                      height: `${20 * size}px`,
                      width: `${30 * size}px`,
                      backgroundColor: color,
                    }}
                  />
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
