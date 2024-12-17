document.addEventListener('DOMContentLoaded', () => {
    const reviews = document.querySelectorAll('.js_review');
    const reviewsPopup = document.querySelector('.js_review__popup_content');

    reviews.forEach(review => {
        const textContent = review.querySelector('.js_review__text');
        const readMoreButton = review.querySelector('.js_review__show_more');

        try {
            if (textContent.scrollHeight > textContent.clientHeight) {
                readMoreButton.style.display = 'block';

                if (window.innerWidth <= 720) {
                    textContent.style['-webkit-line-clamp'] = 4;
                }
            }

            readMoreButton.addEventListener('click', () => {
                reviewsPopup.innerHTML = review.innerHTML;
            });
        } catch (err) {
            console.log(err);
        }
    })
});