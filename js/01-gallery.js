import { galleryItems } from './gallery-items.js'
// Change code below this line

const gallery = document.querySelector('.gallery');
const itemsArray = [];

galleryItems.forEach(element => {
	const galleryItem = document.createElement('div');
	galleryItem.className = 'gallery__item';

	const galleryLink = document.createElement('a');
	galleryLink.className = 'gallery__link';
	galleryLink.href = element.original;

	const galleryImage = document.createElement('img');
	galleryImage.className = 'gallery__image';
    galleryImage.src = element.preview;
	galleryImage.setAttribute('data-source', element.original);
    galleryImage.alt = element.description;

	galleryItem.append(galleryLink);
	galleryLink.append(galleryImage);
	itemsArray.push(galleryItem);
})

gallery.append(...itemsArray);

gallery.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
		return
	}

	const selectedImage = event.target.getAttribute('data-source');

	const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">
`);

	instance.show();
    
	gallery.addEventListener('keydown', event => {
		if (event.key === 'Escape') {
			instance.close()
		}
	});
})

console.log(galleryItems);