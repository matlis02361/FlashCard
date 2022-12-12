import React, { useState, useMemo } from "react";
import Pagination from "./pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./scss/App.scss";
import Upload from "./upload.jsx";
import { PrintCards } from "./printCards";
import { SpeakButton } from "./speakButton";
import { ColorPicker, Sizes } from "./StyleControlsCard.jsx";
import defaultTranslations from "./data/translations.json";
import { FileSaver } from "./saveTranslations";
import ImageAddButton from "./addImage";
// todo: import Translator from "./translator.jsx";
const PageSize = 20;

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [translations, setTranslations] = useState(defaultTranslations);
  const [sizeCard, setCardsSize] = useState(1.3);
  const [color, setColor] = useState("lightgrey");
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return translations.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, translations]);

  return (
    <>
      <h1>Excel Read/Write FlashCard</h1>
      <p>Welcome to this site.</p>
      <div className="d-flex ">{/*  // todo  <Translator /> */}</div>
      <h2>
        There are {(currentPage - 1) * PageSize + 1} to{" "}
        {currentPage > translations.length / PageSize
          ? (currentPage - 1) * PageSize + (translations.length % PageSize)
          : (currentPage - 1) * PageSize + PageSize}{" "}
        from {translations.length} translations:
      </h2>
      <Sizes setSize={setCardsSize} />
      <PrintCards />
      <ColorPicker setColor={setColor} />
      <Upload
        setTranslations={setTranslations}
        setCurrentPage={setCurrentPage}
      />
      <FileSaver newData={translations}>Save data</FileSaver>
      <div className="container-fluid">
        <div className="content print-cards " id="printCards">
          {currentTableData.map((item, i) => {
            return (
              <div key={i}>
                <Card
                  style={{
                    height: `${100 * sizeCard}px`,
                    width: `${200 * sizeCard}px`,
                    backgroundColor: color,
                  }}
                >
                  <Card.Body>
                    <Card.Title>{item.fromLanguage}</Card.Title>
                    <Card.Text>{item.fromPhrase}</Card.Text>

                    <SpeakButton
                      item={{
                        Phrase: item.fromPhrase,
                        Language: item.fromLanguage,
                      }}
                      text={item.fromLanguage}
                    />
                  </Card.Body>
                  <Card.Img
                    src={item.image}
                    style={{
                      height: `${20 * sizeCard}px`,
                      width: `${30 * sizeCard}px`,
                      backgroundColor: color,
                    }}
                  />
                </Card>

                <Card
                  style={{
                    height: `${100 * sizeCard}px`,
                    width: `${200 * sizeCard}px`,
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
                      text={item.toLanguage}
                    />
                  </Card.Body>
                  <Card.Img
                    src={item.image}
                    style={{
                      height: `${20 * sizeCard}px`,
                      width: `${30 * sizeCard}px`,
                      backgroundColor: color,
                    }}
                  />
                </Card>

                <ImageAddButton
                  setTranslations={setTranslations}
                  translations={translations}
                  i={i}
                />
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
