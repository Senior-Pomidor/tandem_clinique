

document.addEventListener('DOMContentLoaded', () => {
    try {
        const $header = document.querySelector('.js_header')
        const $burgerBtn = document.querySelector('.js_header_nav_btn')
        const headerOpenClass = 'header--nav-open'

        $burgerBtn.addEventListener('click', () => {
            $header.classList.toggle(headerOpenClass)
        })

        const $searchInput = $header.querySelector('.js_search_input')
        const $resetBtn = $header.querySelector('.js_search_reset_btn')

        $resetBtn.addEventListener('mousedown', evt => {
            evt.preventDefault()
            $searchInput.value = ''
        })


        // START: подсказки в поиске
        const $headerSearchOpenClass = 'header--search-open'

        $searchInput.addEventListener('focus', () => {
            $header.classList.add($headerSearchOpenClass)
        })

        // $searchInput.addEventListener('blur', () => {
        //     $header.classList.remove($headerSearchOpenClass)
        // })

        document.addEventListener('click', evt => {
            console.log('22222');
            
            if (!evt.target.closest('.js_header_search') && !evt.target.closest('.js_header_search_btn_mob')) {
                $header.classList.remove($headerSearchOpenClass)

                return
            }

            if (evt.target.closest('.js_header_search_btn_mob')) {
                $header.classList.add($headerSearchOpenClass)
                $searchInput.focus()

                return
            }
        })

        // END: подсказки в поиске
    } catch (err) {
        console.log(err)
    }
})