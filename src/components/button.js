import './o-btn.scss'

class Button {
    render() {
        const body = document.querySelector('body');

        const button = document.createElement('button');
        button.innerText = "Click!";
        button.classList.add("o-btn");

        body.appendChild(button);

        button.onclick = function () {
            const description = document.createElement('p');
            description.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, quod.';
            description.classList.add('o-description');
            body.appendChild(description);
        };
    }
}

export default Button;