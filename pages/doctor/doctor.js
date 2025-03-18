document.addEventListener('DOMContentLoaded', () => {
    try {
        const $doctor = document.querySelector('.js_doctor');
        const $video_btn = $doctor.querySelector('.js_video_control');
        const $video = $doctor.querySelector('.js_video');
        const $video_popup = $doctor.querySelector('.js_doctor_video_popup');

        $video_btn.addEventListener('click', () => {
            $video.play()
            $video_btn.style.display = 'none'
        })

        $video.addEventListener('pause', () => {
            $video_btn.style.display = 'block'
        })

        $video.addEventListener('play', () => {
            $video_btn.style.display = 'none'
        })

        $video_popup.addEventListener('close', () => {
            $video.pause()
        })
    } catch (err) {
        console.log(err);
    }
})