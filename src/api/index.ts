const URL: string = `https://api.pexels.com/v1/curated?per_page=60`;

const fetchImages = async () => {
  const requestHeaders: Headers = new Headers();
  requestHeaders.set(
    'Authorization',
    `KEY`,
  );

  const response = await fetch(URL, {
    headers: requestHeaders,
  });
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

export {fetchImages};
