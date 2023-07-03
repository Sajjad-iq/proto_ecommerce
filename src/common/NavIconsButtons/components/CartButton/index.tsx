import { useContext, useEffect, useRef, useState } from 'react'
import CartIcon from '../../../../assets/svg/cart.svg'
import ArrowDown from '../../../../assets/svg/arrow-down-338-svgrepo-com.svg'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { GlobalContext } from '../../../../setup/context-manger/GlobalContext'

export const CartButton = () => {

    const [isActive, setIsActive] = useState(false)
    const WindowRef = useRef<any>(null)
    const { t } = useTranslation()
    const { CartItems } = useContext(GlobalContext)

    useEffect(() => {

        const closeMenu = (e: any) => {
            if (!WindowRef.current?.contains(e.target)) setIsActive(false)
            e.stopPropagation()
        }

        document.body.addEventListener("mousedown", closeMenu)
        return () => document.body.removeEventListener("mousedown", closeMenu)
    }, [setIsActive])

    return (
        <section className='search-field-main-wrapper' >
            <button onClick={() => setIsActive((e: any) => e = !e)} className='nav-icons-button'>
                <img src={CartIcon} alt='cart icon' className='nav-icons-buttons-image' />
                <p>{CartItems.length || 0}</p>
            </button>

            <img src={ArrowDown} alt='Arrow Down' className='arrow-down' />


            <section ref={WindowRef} className={`cart-button-window-wrapper absolute  ${isActive ? `` : `none`}`} style={CartItems.length === 0 ? { height: "fit-content", bottom: window.innerWidth <= 600 ? "-7.5rem" : "-6rem" } : {}} >
                <section className='cart-window-header'>
                    <Link className='' to={"/Profile"}>{t("cart_view_cart")}</Link>
                    <p >{`${CartItems.length || 0} ${t("cart_items")}`}</p>
                </section>

                <p className='pt-2'>{t("cart_empty")}</p>
            </section>
        </section >
    )
}
