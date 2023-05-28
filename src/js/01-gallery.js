// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const ulListElemSecond = document.querySelector('.gallery');


const createImageListFuncSecond = galleryItems.map(({preview, original, description}) =>{
    return `
    <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" 
      src="${preview}" 
      alt="${description}" />
   </a>
</li>`
}).join('')

ulListElemSecond.insertAdjacentHTML("beforeend",createImageListFuncSecond);

let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', 
    captionDelay: 250,
    captionPosition: 'bottom',
    close: true,
});

