const gallery = document.querySelector('#gallery');

const featured = document.querySelector('.featured');

const images = [
    { url: 'foto1.jpg', alt: 'Una playa paradisiaca' },
    { url: 'foto2.jpg', alt: 'un lago con montanas' },
    { url: 'foto3.jpg', alt: 'Un lago con bosque de fondo' },
    { url: 'foto4.jpg', alt: 'Muelle de un lago con arboles verdes' }
];

function addImages() {
    for (let i = 0; i < images.length; i++) {
        const photo = document.createElement('div');
        photo.setAttribute('class', 'photo');
        gallery.appendChild(photo);
        photo.innerHTML = `<img src="${images[i]['url']}" alt="${images[i]['alt']}">`;

        photo.addEventListener('click', function() {
            featured.innerHTML = `<img src="${images[i]['url']}" alt="${images[i]['alt']}">`;
        });
    }
}

addImages();
