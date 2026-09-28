const galleryDialog = document.querySelector('.gallery-lightbox');

if (galleryDialog) {
    const galleryImage = galleryDialog.querySelector('img');
    const galleryCaption = galleryDialog.querySelector('p');
    const closeButton = galleryDialog.querySelector('.gallery-lightbox-close');

    document.querySelectorAll('[data-gallery-image]').forEach(function(photo) {
        photo.addEventListener('click', function() {
            galleryImage.src = this.dataset.galleryImage;
            galleryImage.alt = this.dataset.galleryAlt || '';
            galleryCaption.textContent = this.querySelector('span').textContent;
            galleryDialog.showModal();
        });
    });

    closeButton.addEventListener('click', function() {
        galleryDialog.close();
    });

    galleryDialog.addEventListener('click', function(event) {
        if (event.target === galleryDialog) {
            galleryDialog.close();
        }
    });
}

const weddingContactForm = document.querySelector('#weddingContactForm');

if (weddingContactForm) {
    weddingContactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        document.querySelector('#contactFormStatus').textContent =
            'Thanks for sharing your plans. This demo form does not send messages yet; please call or email us directly.';
        this.reset();
    });
}
