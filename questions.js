document.addEventListener('DOMContentLoaded', () => {
    const $playPauseBtns = document.querySelectorAll('.js_video_control');

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
                console.log(evt.target)
                $video.removeAttribute('controls')
                btn.style.display = "block";
            })
        } catch (err) {
            console.log(err);
        }
    })
})