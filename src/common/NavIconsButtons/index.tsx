import { Link } from 'react-router-dom'
import UserIcon from '../../assets/svg/user-svgrepo-com.svg'
import HeartIcon from '../../assets/svg/heart-02-svgrepo-com.svg'
import { useContext } from 'react'
import { GlobalContext } from '../../setup/context-manger/GlobalContext'
import { SearchField } from './components/SearchField'
import { CartButton } from './components/CartButton'



export const NavIconsButtons = () => {

    const { setIsWishListActive } = useContext(GlobalContext)

    return (

        window.innerWidth <= 768 ?
            < section className='flex-row nav-icons-buttons ' >
                <CartButton />

                <button onClick={() => setIsWishListActive((e: any) => e = !e)} className='nav-icons-button'>
                    <img src={HeartIcon} alt='wish list icon' className='nav-icons-buttons-image' />
                </button>

            </section>

            :

            < section className='flex-row nav-icons-buttons' >
                <Link className='nav-icons-button' to={"/Profile"}>
                    <img src={UserIcon} alt='user icon' className='nav-icons-buttons-image' />
                </Link>

                <button onClick={() => setIsWishListActive((e: any) => e = !e)} className='nav-icons-button'>
                    <img src={HeartIcon} alt='wish list icon' className='nav-icons-buttons-image' />
                </button>

                <SearchField />

                <CartButton />
            </section>

    )
}
