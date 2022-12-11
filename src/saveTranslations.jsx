import React from "react";
import { Button } from "react-bootstrap";
import fs from "fs";


const saveTranslations = (translations) => {
  const data = JSON.stringify(translations);
  fs.writeFileSync("./data/translations.json", data);
};

const FileSaver = (newData) => {
  return (
    <Button onClick={() => saveTranslations(newData)}>
      Save data
    </Button>
  );
};

export { FileSaver };
