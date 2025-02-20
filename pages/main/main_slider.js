
document.addEventListener('DOMContentLoaded', () => {
    try {
        const swiper = new Swiper('#js_main_slider_wrapper', {
            loop: true,
            speed: 700,

            autoplay: {
                delay: 1500,
            },

            pagination: {
                el: '#js_main_slider .swiper-pagination',
                clickable: true,
                bulletActiveClass: 'slider_dots__item--active',
                bulletClass: 'slider_dots__item',
                bulletElement: 'span',
            },

            navigation: {
                nextEl: '#js_main_slider .swiper-button-next',
                prevEl: '#js_main_slider .swiper-button-prev',
            },
        })
    } catch (err) {
        console.log(err);
    }
})


