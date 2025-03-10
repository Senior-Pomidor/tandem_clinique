document.addEventListener('DOMContentLoaded', () => {
    try {
        const swiper = new Swiper('#js_content_slider_slider', {
            loop: true,
            speed: 700,
            slidesPerView: 1,
    
            autoplay: {
                delay: 1500,
            },
    
            pagination: {
                el: '#js_content_slider_slider .swiper-pagination',
                clickable: true,
                bulletActiveClass: 'slider_dots__item--active',
                bulletClass: 'slider_dots__item',
                bulletElement: 'span',
            },
        })
    } catch (err) {
        console.log(err);
    }
})