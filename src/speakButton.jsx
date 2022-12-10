import React from "react";
import { Button } from "react-bootstrap";
import languages from "./data/languages.json";

const handleSpeak = (cardText, fromLanguage) => {
  const speech = new SpeechSynthesisUtterance();
  speech.text = cardText;

  // Używamy tłumacza/translatora, aby przetłumaczyć nazwę języka na angielski
  // const translatedLanguage = translateLanguage(fromLanguage);

  const languageCode = languages.find(
    (language) => language.Language.toLowerCase() === fromLanguage.toLowerCase()
  );
  if (languageCode) {
    speech.lang = languageCode.code;
  } else {
    /*  LanguageCodeByName is responsible for finding the language code for a given language
     using a translator. Includes cases where a language name is used in another language. 
     For example, the Polish name "Niemcy" is "Germany" in English */
    const languageCodeByName = translations.find(
      (language) =>
        language.name.toLowerCase() === translatedLanguage.toLowerCase()
    );
    if (languageCodeByName) {
      speech.lang = languageCodeByName.code;
    } else {
      // todo : Verwenden die Übersetzerfunktion, um den Namen des Landes in sein englisches Äquivalent zu ändern

      const englishLanguageCode = languages.find(
        (language) =>
          language.name.toLowerCase() === translatedLanguage.toLowerCase()
      );
      if (englishLanguageCode) {
        speech.lang = englishLanguageCode.code;
      } else {
        speech.lang = "en-US";
      }
    }
  }

  speechSynthesis.speak(speech);
};

const SpeakButton = ({ item }) => {
  return (
    <Button onClick={() => handleSpeak(item.Phrase, item.Language)}>
      Speak
    </Button>
  );
};

export { SpeakButton };
