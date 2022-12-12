import React, { useState, useMemo } from "react";
import Pagination from "./pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./scss/App.scss";
import Upload from "./upload.jsx";
import { PrintCards } from "./printCards";
import { SpeakButton } from "./speakButton";
import { ColorPicker, Sizes } from "./StyleControlsCard.jsx";
// todo: import Translator from "./translator.jsx";
const PageSize = 20;

const styleCard = {
  height: `${100 * sizeCard}px`,
  width: `${200 * sizeCard}px`,
  backgroundColor: color,
}

const styleImage = {
  height: `${20 * sizeCard}px`,
  width: `${30 * sizeCard}px`,
  backgroundColor: color,
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [color, setColor] = useState("#ffffff");
  const [sizeCard, setSizeCard] = useState(1);

  const numberOfPages = useMemo(() => {
    return Math.ceil(data.length / PageSize);
  }, [data]);

  const onPageChanged = (data) => {
    const { currentPage } = data;
    setCurrentPage(currentPage);
  };

  const onUpload = (data) => {
    setData(data);
  };

  const onColorChange = (color) => {
    setColor(color);
  };

  const onSizeChange = (size) => {
    setSizeCard(size);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="controls-card">
              <Upload onUpload={onUpload} />
              <ColorPicker onColorChange={onColorChange} />
              <Sizes onSizeChange={onSizeChange} />
            </div>
          </div>
          <div className="col-sm">
            {data.length > 0 ? (
              <Pagination
                totalRecords={data.length}
                pageLimit={PageSize}
                pageNeighbours={2}
                onPageChanged={onPageChanged}
              />
            ) : null}
            <div className="cards-container">
              {data.slice(
                (currentPage - 1) * PageSize,
                currentPage * PageSize
              ).map((cardInfo) => (
                <Card
                  style={styleCard}
                  key={`${cardInfo.title}-${cardInfo.index}`}
                >
                  <Card.Img
                    style={styleImage}
                    variant="top"
                    src={cardInfo.img}
                  />
                  <Card.Body>
                    <Card.Title>
                      {cardInfo.title}
                    </Card.Title>
                    <Card.Text>
                      {cardInfo.text}
                    </Card.Text>
                    <SpeakButton text={cardInfo.text} />
                    <PrintCards cardInfo={cardInfo} />
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




import React from "react";
import { Nav, Navbar } from "react-bootstrap";

export default function MenuGłówne() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Excel Read/Write FlashCard</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Strona główna</Nav.Link>
          <Nav.Link href="#import-eksport">
            Importowanie i eksportowanie danych
          </Nav.Link>
          <Nav.Link href="#zmiana-rozmiaru-koloru">
            Zmiana rozmiaru i koloru kart
          </Nav.Link>
          <Nav.Link href="#zmiana-jezyka">Zmiana języka</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
