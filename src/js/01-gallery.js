// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { createGalleryMarkup } from './createGalleryMarkup';
// Change code below this line

// console.log(galleryItems);
// console.log(SimpleLightbox);

const galleryRef = document.querySelector('.gallery');

galleryRef.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));
galleryRef.addEventListener('click', openOriginalImage);
createLightbox();

// === FUNCTIONS

function openOriginalImage(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
}

function createLightbox() {
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    scrollZoom: false,
    alertError: false,
  });
}
