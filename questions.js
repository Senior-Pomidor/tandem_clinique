document.addEventListener('DOMContentLoaded', () => {
    const $playPauseBtns = document.querySelectorAll('.js_video_control');
    const $questionsSection = document.querySelector('#js_questions');
    const $videos = $questionsSection.querySelectorAll('.js_video')

    $playPauseBtns?.forEach(btn => {
        try {
            const $wrapper = btn.closest('.js_video_wrapper');
            const $video = $wrapper.querySelector('.js_video')

            btn.addEventListener('click', () => {
                    if ($video.paused) {
                        $video.play();
                        $video.setAttribute('controls', 'controls')
                        btn.style.display = "none";
                    }
            })

            $video.addEventListener('pause', evt => {
                $video.removeAttribute('controls')
                btn.style.display = "block";
            })
        } catch (err) {
            console.log(err);
        }
    })

    const $questionsSliderButtons = $questionsSection.querySelectorAll('.js_slider_button');
    const $questionsSlides = $questionsSection.querySelectorAll('.js_slider_slide');

    const swiperParams = {
        loop: true,
        speed: 700,
        slidesPerView: 1,

        autoplay: {
            delay: 1500,
        },


        // effect: 'fade',
        // fadeEffect: {
        //     crossFade: true,
        // }
        // crossFade: true,
    
        pagination: {
            el: '#js_questions .swiper-pagination',
            clickable: true,
            bulletActiveClass: 'slider_dots__item--active',
            bulletClass: 'slider_dots__item',
            bulletElement: 'span',
        },
    }


    if (window.innerWidth > 720) {
        const swiper = new Swiper('#js_questions_slider', swiperParams)

        $questionsSliderButtons.forEach((btn, index) => {
            const handleHover = () => {
                if (swiper.realIndex != index) {
                    // $servicesSliderButtons.forEach(btn => {
                        // btn.classList.remove('slider_button_card--active')
                    // })
                    // btn.classList.add('slider_button_card--active')
                    swiper.slideToLoop(index);
                }
            }

            btn.addEventListener('mouseover', handleHover);
            // btn.addEventListener('click', handleHover);
        })

        swiper.on('slideChange', () => {
            $videos.forEach(video => {
                video.pause()
            })
        })
    } else {
        const swiper = new Swiper('#js_questions_slider_mob', swiperParams)

        swiper.on('slideChange', () => {
            $questionsSlides.forEach((slide, index) => {
                slide.classList.remove('questions__slide--active')
                slide.style.position = 'absolute'
            })

            $videos.forEach(video => {
                video.pause()
            })
    
            $questionsSlides[swiper.realIndex].classList.add('questions__slide--active')
            $questionsSlides[swiper.realIndex].style.position = 'relative'
        });

        $questionsSlides[swiper.realIndex].style.position = 'relative'
        $questionsSlides[swiper.realIndex].classList.add('questions__slide--active')
    }
})
