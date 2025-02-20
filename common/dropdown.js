document.addEventListener('DOMContentLoaded', () => {
    try {
        const $dropdowns = document.querySelectorAll('.js_dropdown')

        $dropdowns.forEach(dropdown => {
            const $btns = dropdown.querySelectorAll('.js_dropdown_btn')
            const $input = dropdown.querySelector('.js_dropdown_input')
            const $textArea = dropdown.querySelector('.js_dropdown_textarea')
            const $options = dropdown.querySelectorAll('.js_dropdown_option')
            const $inputIniitalValue = $input?.value || $input?.textContent || ''

            $textArea?.addEventListener('input', evt => {
                $input.textContent = evt.target.value.trim() || $inputIniitalValue
            })

            dropdown.addEventListener('click', evt => {
                const option = evt.target.closest('.js_dropdown_option')

                if (option) {
                    if (!dropdown.classList.contains('js_dropdown_2')) {
                        $btns.forEach(btn => {
                            btn.textContent = option.textContent
                        })
                    }

                    $input.value = option.textContent.trim()
                    dropdown.classList.remove('dropdown--open')
                }
            })

            $btns.forEach(btn => {
                btn.addEventListener('click', () => {
                    dropdown.classList.toggle('dropdown--open')
                })
            })
        })

        document.addEventListener('mousedown', evt => {
            if (!evt.target.closest('.js_dropdown')) {
                $dropdowns.forEach(dropdown => {
                    dropdown.classList.remove('dropdown--open')
                })
            }
        })

        document.addEventListener('touchstart', evt => {
            if (!evt.target.closest('.js_dropdown')) {
                $dropdowns.forEach(dropdown => {
                    dropdown.classList.remove('dropdown--open')
                })
            }
        })
    } catch(err) {
        console.log(err);
    }
})
