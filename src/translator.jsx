import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';

const Translator = (props) => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const onTextChange = (e) => {
    setInputText(e.target.value);
  }

  const detectLanguage = () => {
    //TODO: Use an API to detect the language of the inputText
  }

  const translateText = () => {
    //TODO: Use an API to translate the inputText to English
  }

  return (
    <div>
      <Form.Control
        as="textarea"
        rows="1"
        value={inputText}
        onChange={onTextChange}
      />
      <Button variant="primary" onClick={detectLanguage}>
        Detect Language
      </Button>
      <Button variant="primary" onClick={translateText}>
        Translate
      </Button>
      <Form.Control
        disabled
        as="textarea"
        rows="1"
        value={outputText}
      />
    </div>
  );
}

export default Translator;


/* import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import { detectLanguage } from '../api/detectLanguage';

const Translator = (props) => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [detectedLanguage, setDetectedLanguage] = useState('');

  const onTextChange = (e) => {
    setInputText(e.target.value);
  }

  const detectInputLanguage = async () => {
    const language = await detectLanguage(inputText);
    setDetectedLanguage(language);
  }

  const translateText = () => {
    //TODO: Use an API to translate the inputText to English
  }

  return (
    <div>
      <Form.Control
        as="textarea"
        rows="4"
        value={inputText}
        onChange={onTextChange}
      />
      <Button variant="primary" onClick={detectInputLanguage}>
        Detect Language
      </Button>
      { detectedLanguage && <p>Detected Language: {detectedLanguage}</p> }
      <Button variant="primary" onClick={translateText}>
        Translate
      </Button>
      <Form.Control
        disabled
        as="textarea"
        rows="4"
        value={outputText}
      />
    </div>
  );
}

export default Translator; */