const URL: string = `https://api.pexels.com/v1/curated?per_page=60`;

const fetchImages = async () => {
  const requestHeaders: Headers = new Headers();
  requestHeaders.set(
    'Authorization',
    `563492ad6f91700001000001112fb002fcaf4ad393e41ffb679ea983`,
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
