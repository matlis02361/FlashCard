import React from "react";
import { useState } from "react";
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
          <button
            style={{ backgroundColor: item }}
            onClick={() => setColor(item)}
            className="color-btn"
          ></button>
        );
      })}
    </div>
  );
};



const Sizes = ({setSize}) => {
    return (
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
      </div>
    );
  };


  export {ColorPicker, Sizes} ;