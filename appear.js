document.addEventListener('DOMContentLoaded', function() {
    const blocks = document.querySelectorAll('[class*="js_appear"]');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transition = 'opacity .7s, transform .7s';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translate(0, 0)';
                observer.unobserve(entry.target);

                setTimeout(() => {
                    entry.target.style.transform = 'initial';
                    entry.target.style.transition = 'initial';
                }, 700);
            }
        });
    }, {
        threshold: 0.2
    });

    blocks.forEach(block => {
        block.style.opacity = 0

        if (window.innerWidth <= 720) {
            block.style.transform = 'translateY(100px)';
        } else {
            if (block.classList.contains('js_appear_top')) {
                block.style.transform = 'translateY(100px)';
            } else if (block.classList.contains('js_appear_left')) {
                block.style.transform = 'translateX(-100px)';
            } else if (block.classList.contains('js_appear_right')) {
                block.style.transform = 'translateX(100px)';
            } else if (block.classList.contains('js_appear_bottom')) {
                block.style.transform = 'translateY(-100px)';
            }
        }

        observer.observe(block);
    });
});
