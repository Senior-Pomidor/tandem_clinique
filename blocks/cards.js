document.addEventListener('DOMContentLoaded', () => {
    try {
        let swiper = null

        const swiperParams = {
            loop: true,
            speed: 700,
            slidesPerView: 1,
    
            autoplay: {
                delay: 1500,
            },
    
            pagination: {
                el: '#js_cards .swiper-pagination',
                clickable: true,
                bulletActiveClass: 'slider_dots__item--active',
                bulletClass: 'slider_dots__item',
                bulletElement: 'span',
            },
        }

        const toggleInitSwiper = () => {
            const isMobile = window.innerWidth <= 720

            if (!isMobile && swiper && !swiper.destroyed) {
                swiper.destroy(true, true)
                swiper = null

                return
            }

            if (isMobile && (!swiper || swiper.destroyed)) {
                swiper = new Swiper('#js_cards', swiperParams)
            }
        }

        window.addEventListener('resize', toggleInitSwiper)

        toggleInitSwiper()
    } catch (err) {
        console.log(err);
    }


})