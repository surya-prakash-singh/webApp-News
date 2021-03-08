import API_KEY from "../config/constants";


export const fetchPosts = (searchParam: string): Promise<Response> => {
  const URI = `http://newsapi.org/v2/everything?q=${searchParam}&apiKey=${API_KEY}`;
  const fetchURL = `${URI}`;
  return fetch(fetchURL);
};
