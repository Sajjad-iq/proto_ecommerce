import bg from '../../../../assets/images/run.webp'
import { BannerText } from '../bannerText'
import MobilesShoesImg from '../../../../assets/images/white-shoes-fotor-mobile.webp'
import FullShoesImg from '../../../../assets/images/white-shoes.webp'

export const FirstPage = () => {
    return (
        <section id='reverse-dir' style={{ backgroundImage: `url(${bg})` }} className='full-w full-h flex flex-col justify-start p-2 relative lg:flex-row-reverse'>
            <img src={window.innerWidth >= 1024 ? FullShoesImg : MobilesShoesImg} alt='white shoes' className='self-center w-full mb-5 md:w-3/4 lg:w-full' />
            <BannerText pageIndex={0} />
        </section>
    )
}
