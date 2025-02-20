document.addEventListener('DOMContentLoaded', () => {
    const $popupBtns = document.querySelectorAll('[data-popup-id]');

    $popupBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const popupId = btn.dataset.popupId;
            const $popup = document.getElementById(popupId);
            $popup.classList.add('popup--open');
        })
    })
})

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('js_popup')) {
        event.target.classList.remove('popup--open');
    }
})