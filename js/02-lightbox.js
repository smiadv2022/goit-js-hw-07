import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const divRefs = document.querySelector('.gallery');
function createGalleryList(items) {
  return items
    .map(
      item => `<li class="gallery__item">
     <a class="allery__link" href="${item.original}">
     <img class="gallery__image"  src="${item.preview}"
     title ="${item.description}" />
     </a>
     </li>`
    )
    .join('');
}
const addGalleryList = createGalleryList(galleryItems);
divRefs.innerHTML = addGalleryList;

divRefs.addEventListener('click', onImgFocus);

function onImgFocus(event) {
  event.preventDefault();

  let gallery = new SimpleLightbox('.gallery a',{captionDelay:250});
  gallery.on('show.simplelightbox');

  if (event.target.nodeName !== 'IMG') {
    return;
  }
}