// Importuj potrzebne biblioteki
import axios from "axios";

// Ustaw klucz API i adres serwera
const accessKey = "AXyF6wqgvvrXQ5Wd7OWR9qLr32R4RYFY5tB6uVm1s-0";
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${accessKey}`;

// Funkcja pobierająca zdjęcie na podstawie wyrazu
const getImage = async (term) => {
  // Wyślij zapytanie do API i pobierz odpowiedź
  const response = await axios.get(apiUrl, {
    params: { query: term },
  });

  // Pobierz adres URL zdjęcia
  const imageUrl = response.data.urls.regular;

  // Zwróć adres URL
  return imageUrl;
};

// Pobierz zdjęcie na podstawie wyrazu
const imageUrl = await getImage(item.fromPhrase);

// Użyj zdjęcia w aplikacji
<img src={imageUrl} />