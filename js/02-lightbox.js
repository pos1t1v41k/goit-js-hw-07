import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector(".gallery");
const addImagesMarkup = galleryItems
   .map((img) =>
      `<li><a class="gallery__item" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
      title = "${img.description}"
    />
  </a></li>`
   )
   .join("");
galleryList.insertAdjacentHTML("beforeend", addImagesMarkup);
new SimpleLightbox(".gallery a", { captionDelay: 250 });