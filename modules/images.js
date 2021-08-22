const images = () => {
    const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImage = document.createElement('img');

    imgPopup.classList.add('popup');
    workSection.append(imgPopup);

    imgPopup.style.cssText = `
            justify-content: center;
            align-items: center;
            display: none;
    `;

    bigImage.style.cssText = `
            max-height: 80vh;
            max-width: 100%;
    `;

    imgPopup.append(bigImage);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = "flex";
            document.body.style.overflow = "hidden";

            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
        }

        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = "";

        }
    });
};

export default images;