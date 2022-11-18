export function createGalleryMarkup(items) {
  return items
    .map(
      item => `<a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
        </a>`
    )
    .join('');
}
