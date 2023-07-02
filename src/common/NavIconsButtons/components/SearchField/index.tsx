import { useEffect, useRef, useState } from 'react'
import SearchIcon from '../../../../assets/svg/magnifying-glass-svgrepo-com.svg'
import BlackSearchIcon from '../../../../assets/svg/search.svg'
import { languages } from '../../../../layout/Utils'
import Cookies from 'js-cookie'

export const SearchField = () => {
    const [isActive, setIsActive] = useState(false)
    const WindowRef = useRef<any>(null)

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

            <section ref={WindowRef} className={`search-field-window-wrapper ${isActive ? `` : `none`}`}>
                <section className='secondary-wrapper'>

                    <input type='text' placeholder='Search...' />

                    <section className='right-side'>
                        <section className='options-wrapper'>
                            <select id="search-options" onChange={(e) => ""} >
                                <option value="AllCatagories">All Catagories</option>
                                <option value="electronics">Electronics</option>
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
