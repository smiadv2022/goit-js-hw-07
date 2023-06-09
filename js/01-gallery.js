import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const divRefs = document.querySelector('.gallery');
function createGalleryList(items) {
  return items
    .map(
      item => `<li class="gallery__item">
     <a class="allery__link" href="${item.original}">
     <img class="gallery__image" src="${item.preview}"
     data-source="${item.original}"
     alt="${item.description}" />
     </a>
     </li>`
    )
    .join('');
}
const addGalleryList = createGalleryList (galleryItems);
divRefs.innerHTML = addGalleryList;
divRefs.addEventListener ("click", onImgFocus);

function onImgFocus(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  } 
  function  listener(event){
        if (event.code === 'Escape') {
          instance.close();
          console.log("+");
        }
      }
  const instance = basicLightbox.create(`
  <img src ="${event.target.dataset.source}" width="800" height="600" >
  `, {
    onShow:(instance)=>{
      divRefs.addEventListener('keydown', listener);
      
      }
    ,
    onClose:(instance)=>{
      divRefs.removeEventListener('keydown', listener); 
    }
  });
  instance.show();
  
}