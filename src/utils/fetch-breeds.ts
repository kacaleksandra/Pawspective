async function fetchBreeds() {
  const apiKey = process.env.API_KEY;

  const response = await fetch(`https://api.thecatapi.com/v1/breeds`, {
    headers: {
      "x-api-key": apiKey,
    },
  });
  const data = await response.json();

  return data;
}

export { fetchBreeds };
