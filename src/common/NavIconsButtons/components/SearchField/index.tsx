import { useEffect, useRef, useState } from 'react'
import SearchIcon from '../../../../assets/svg/magnifying-glass-svgrepo-com.svg'
import BlackSearchIcon from '../../../../assets/svg/search.svg'
import { useTranslation } from 'react-i18next'

export const SearchField = () => {
    const [isActive, setIsActive] = useState(false)
    const WindowRef = useRef<any>(null)
    const { t } = useTranslation()

    useEffect(() => {

        const closeMenu = (e: any) => {
            if (!WindowRef.current?.contains(e.target)) setIsActive(false)
            e.stopPropagation()
        }

        document.body.addEventListener("mousedown", closeMenu)
        return () => document.body.removeEventListener("mousedown", closeMenu)
    }, [setIsActive])

    return (
        <section className='search-field-main-wrapper'>
            <button onClick={() => setIsActive((e: any) => e = !e)} className='nav-icons-button'>
                <img src={SearchIcon} alt='search icon' className='nav-icons-buttons-image' />
            </button>

            <section ref={WindowRef} className={`search-field-window-wrapper absolute ${isActive ? `` : `none`}`}>
                <section className='secondary-wrapper'>

                    <input type='text' placeholder={t("search")} />

                    <section className='right-side'>
                        <section className='options-wrapper'>
                            <select id="search-options" onChange={(e) => ""} >
                                <option value="AllCatagories">{t("search_options_all_catagories")}</option>
                                <option value="electronics">{t("search_options_electronics")}</option>
                            </select>
                        </section>

                        <button className='flex-row'>
                            <img src={BlackSearchIcon} alt='search icon' className='search-icon' />
                        </button>
                    </section>

                </section>
            </section>
        </section >
    )
}
