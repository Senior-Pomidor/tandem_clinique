document.addEventListener('DOMContentLoaded', () => {
    try {
        const $reviews = document.querySelectorAll('.js_review');
        const $reviewsPopup = document.querySelector('.js_review__popup_content');

        $reviews.forEach(review => {
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
                    $reviewsPopup.innerHTML = review.innerHTML;
                });
            } catch (err) {
                console.log(err);
            }
        })

        const swiper = new Swiper('#js_reviews_slider_wrapper', {
            loop: true,
            speed: 700,
            slidesPerView: 1,

            breakpoints: {
                721: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },

                921: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },

                // 1201: {
                //     slidesPerView: 3,
                //     spaceBetween: 40,
                // }
            },

            autoplay: {
                delay: 1500,
            },

            pagination: {
                el: '#js_reviews .swiper-pagination',
                clickable: true,
                bulletActiveClass: 'slider_dots__item--active',
                bulletClass: 'slider_dots__item',
                bulletElement: 'span',
            },

            navigation: {
                nextEl: '#js_reviews .swiper-button-next',
                prevEl: '#js_reviews .swiper-button-prev',
            },
        })
    } catch (err) {
        console.log(err);
    }
});