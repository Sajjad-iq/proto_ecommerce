import { useEffect, useRef, useState } from 'react'
import CartIcon from '../../../../assets/svg/cart.svg'
import ArrowDown from '../../../../assets/svg/arrow-down-338-svgrepo-com.svg'
import { Link } from 'react-router-dom'

export const CartButton = () => {

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
                <img src={CartIcon} alt='cart icon' className='nav-icons-buttons-image' />
                <p>0</p>
            </button>

            <img src={ArrowDown} alt='Arrow Down' className='arrow-down' />


            <section ref={WindowRef} className={`cart-button-window-wrapper ${isActive ? `` : `none`}`}>
                <section className='cart-window-header'>
                    <Link className='' to={"/Profile"}>VIEW CART</Link>
                    <p >{`${0} ITEM(S)`}</p>
                </section>

                <p>You have no items in your shopping cart.</p>
            </section>
        </section >
    )
}
