import './o-btn.scss'

class Button {
    buttonText = "Click!!"

    render() {
        const body = document.querySelector('body');

        const button = document.createElement('button');
        button.innerText = this.buttonText;
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