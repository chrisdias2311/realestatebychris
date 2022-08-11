import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
        'X-RapidAPI-Key': 'cef382d32amsh0bcf2fb80114654p1b167djsn9d23cd837c71',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
      },
  });
    
  return data;
}