import React from "react";
import { Button } from "react-bootstrap";

   
  
  const ImageAddButton = ({setTranslations , translations, item }) => {
    return (
        <Button
        onClick={() => {
         // const imageAdd = [...translations];
         
         item.image = window.prompt("Enter image URL");

          setTranslations([...translations]);
        }}
      >
        Add Image
      </Button>
    );
  };
  
  export default  ImageAddButton 