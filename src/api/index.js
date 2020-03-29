export const fetchApi = async (url, options) => {
  try {
    const res = await fetch(url, options);
    const json = await res.json();
    return json;
  } catch (error) {
    throw new Error("Fetch failed");
  }
};

export const setFetchUrl = page =>
  `https://reqres.in/api/users?page=${page}?delay=3`;
