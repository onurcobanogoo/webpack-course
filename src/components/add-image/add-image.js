import Library from '../../images/library.jpg';
import './o-image.scss';

class AddImage {
    render() {
        const image = document.createElement('img');
        image.alt = 'Library';
        image.width = 600;
        image.src = Library;
        image.classList.add('o-image')

        const body = document.querySelector('body');
        body.appendChild(image);
    }
}

export default AddImage;