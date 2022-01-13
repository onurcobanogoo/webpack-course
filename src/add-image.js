import Library from './library.jpg'

function addImage() {
    const image = document.createElement('img');
    image.alt = 'Library';
    image.width = 600;
    image.src = Library;

    const body = document.querySelector('body');
    body.appendChild(image);
}

export default addImage;