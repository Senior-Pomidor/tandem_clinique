
// мобильное меню
document.addEventListener('DOMContentLoaded', () => {
    try {
        const openClass = 'js_open'
        // const openMobListClass = 'services__nav_mob_list--open'

        const $navLinkActive = document.querySelector('.js_nav_link_active')
        const $navMobList = document.querySelector('.js_nav_mob_list')

        $navLinkActive.addEventListener('click', () => {
            $navLinkActive.classList.toggle(openClass)

            if ($navLinkActive.classList.contains(openClass)) {
                $navMobList.classList.add(openClass)
            } else {
                $navMobList.classList.remove(openClass)
            }
        })
    } catch (err) {
        console.log(err)
    }
})

// список цен, аккордеоны
document.addEventListener('DOMContentLoaded', () => {
    try {
        const closedClass = 'js_closed'
        // const openMobListClass = 'services__nav_mob_list--open'

        const $accHeaders = document.querySelectorAll('[data-acc-target]')

        $accHeaders.forEach(header => {
            header.addEventListener('click', () => {
                if (window.innerWidth <= 1200) {
                    const targetId = header.dataset.accTarget

                    const $target = document.querySelector(`[data-acc-id="${targetId}"]`)
                    header.classList.toggle(closedClass)
                    $target.classList.toggle(closedClass)
                }
            })
        })
    } catch (err) {
        console.log(err)
    }
})