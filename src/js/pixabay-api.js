import axios from 'axios';

function getImagesByQuery(query) {
  const API_KEY = '36451556-b70cce37d343215b637d239eb';
  const urlAdress = 'https://pixabay.com/api/';

  return axios(urlAdress, {
    params: {
      key: API_KEY,
      q: `${query}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 9,
    },
  }).then(({ data }) => {
    console.log(data.hits);
    return data;
  });
}

export default getImagesByQuery;
