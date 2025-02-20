
document.addEventListener('DOMContentLoaded', () => {
    try {
        const swiper = new Swiper('#js_doctors_slider_wrapper', {
            loop: true,
            speed: 700,
            slidesPerView: 1,

            breakpoints: {
                719: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },

                1201: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                }
            },

            autoplay: {
                delay: 1500,
            },

            pagination: {
                el: '#js_doctors .swiper-pagination',
                clickable: true,
                bulletActiveClass: 'slider_dots__item--active',
                bulletClass: 'slider_dots__item',
                bulletElement: 'span',
            },

            navigation: {
                nextEl: '#js_doctors .swiper-button-next',
                prevEl: '#js_doctors .swiper-button-prev',
            },
        })
    } catch (err) {
        console.log(err);
    }
})
