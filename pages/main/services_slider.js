// js_services_slider
document.addEventListener('DOMContentLoaded', () => {
    try {
        if (window.innerWidth > 720) {
            const swiper = new Swiper('#js_services_slider', {
                loop: true,
                speed: 700,
    
                autoplay: {
                    delay: 1500,
                },
    
                pagination: {
                    el: '#js_services_slider .swiper-pagination',
                    clickable: true,
                    bulletActiveClass: 'slider_dots__item--active',
                    bulletClass: 'slider_dots__item',
                    bulletElement: 'span',
                },
            })
    
            const $servicesSlider = document.querySelector('#js_services_slider_wrapper');
            const $servicesSliderButtons = $servicesSlider.querySelectorAll('.js_slider_button');
    
            $servicesSliderButtons.forEach((btn, index) => {
                const handleHover = () => {
                    if (swiper.realIndex != index) {
                        $servicesSliderButtons.forEach(btn => {
                            btn.classList.remove('slider_button_card--active')
                        })
                        btn.classList.add('slider_button_card--active')
                        swiper.slideToLoop(index);
                    }
                }
    
                btn.addEventListener('mouseover', handleHover);
            })
    
            swiper.on('slideChange', () => {
                $servicesSliderButtons.forEach((btn, index) => {
                    btn.classList.remove('slider_button_card--active')
                })
    
                $servicesSliderButtons[swiper.realIndex].classList.add('slider_button_card--active')
            });
        } else {
            const swiperSlides = new Swiper('#js_services_slider', {
                loop: true,
                speed: 700,
    
                autoplay: {
                    delay: 1500,
                },
    
                pagination: {
                    el: '#js_services_slider .swiper-pagination',
                    clickable: true,
                    bulletActiveClass: 'slider_dots__item--active',
                    bulletClass: 'slider_dots__item',
                    bulletElement: 'span',
                }
            })

            const swiperCards = new Swiper('#js_services_slider_cards', {
                loop: false,
                speed: 700,
    
                autoplay: {
                    delay: 1500,
                },
    
                pagination: {
                    el: '#js_services_slider_cards .swiper-pagination',
                    clickable: true,
                    bulletActiveClass: 'slider_dots__item--active',
                    bulletClass: 'slider_dots__item',
                    bulletElement: 'span',
                }
            })
        }
    } catch (err) {
        console.log(err);
    }
})
