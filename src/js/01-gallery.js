import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery1 = document.querySelector(".gallery");

function creargallery(items) {
    return items
    .map((item) => `<div class="gallery__item">
                    <a class="gallery__link" href="${item.original}">
                    <img class="gallery__image"
                    src="${item.preview}"
                    data-sourse="${item.original}"
                    alt="${item.description}"/>
                    </a>
                    </div>`).join("");

}
const agregarImagen = creargallery(galleryItems);

gallery1.innerHTML = agregarImagen;

gallery1.addEventListener("click", OnImageClick);

function OnImageClick(event) {
    blockStandartAction(event);

if (event.target.nodeName !== "IMG") {
    return;
}

const instancia = basicLightbox.create(`<img src="${event.target.dataset.sourse}" width="800" height="600">`);
    instancia.show();

    gallery1.addEventListener("keydown", (event) => {
        if (event.code === "Escape") {
            instancia.close();
        }
    });

}

function blockStandartAction(event){
    event.preventDefault();
}