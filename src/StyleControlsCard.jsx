import React from "react";
import { Button } from "react-bootstrap";

const ColorPicker = ({ setColor }) => {
  const colorOptions = [
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
  ];

  return (
    <div>
      {colorOptions.map((item, i) => {
        return (
          <Button
            style={{ backgroundColor: item }}
            onClick={() => setColor(item)}
            className="color-btn mt-3 "
          ></Button>
        );
      })}
    </div>
  );
};

const Sizes = ({ setSize }) => {
  return (
    <div className="d-flex">
      <Button onClick={() => setSize(1)} className="control-btn mt-3">
        XS
      </Button>
      <Button onClick={() => setSize(1.5)} className="control-btn mt-3">
        SM
      </Button>
      <Button onClick={() => setSize(2)} className="control-btn mt-3">
        MD
      </Button>
      <Button onClick={() => setSize(2.5)} className="control-btn mt-3">
        LG
      </Button>
    </div>
  );
};

export { ColorPicker, Sizes };
