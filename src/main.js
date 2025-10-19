import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getImagesByQuery from './js/pixabay-api';

import './css/reset.css';
import './css/base.css';
import './css/styles.css';

import {
  gallery,
  loader,
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  clearGallery();

  const query = event.target.elements['serch-text'].value.trim();

  showLoader();
  getImagesByQuery(query)
    .then(data => {
      if (!data.hits.length) {
        throw new Error(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }
      createGallery(data.hits);
    })
    .catch(error => {
      iziToast.error({
        message: `${error.message ?? String(err)}`,
        position: 'topCenter',
        timeout: 3000,
        backgroundColor: '#EF4040',
        messageColor: 'white',
        close: false,
      });
    })
    .finally(() => {
      event.target.elements['serch-text'].value = '';
      hideLoader();
    });
});
