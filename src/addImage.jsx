import React from "react";
import { Button } from "react-bootstrap";

   
  
  const ImageAddButton = ({setTranslations, translations, i}) => {
    return (
        <Button
        onClick={() => {
          const imageAdd = [...translations];
          imageAdd[i].image = window.prompt("Enter image URL");
          setTranslations(imageAdd);
        }}
      >
        Add Image
      </Button>
    );
  };
  
  export default  ImageAddButton 