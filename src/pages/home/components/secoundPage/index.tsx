import bg from '../../../../assets/images/run.webp'
import { BannerText } from "../bannerText"
import MobilBallShoesImg from '../../../../assets/images/ball-mobil.webp'
import FullBallShoesImg from '../../../../assets/images/ball.webp'

export const SecondPage = () => {
    return (
        <section id='reverse-dir' style={{ backgroundImage: `url(${bg})` }} className='full-w full-h flex flex-col justify-start p-2 relative lg:flex-row lg:justify-between'>
            <img src={window.innerWidth >= 1024 ? FullBallShoesImg : MobilBallShoesImg} alt='white shoes' className='self-center w-4/5 my-5 md:w-3/5 md:my-12 lg:w-full lg:my-0' />
            <BannerText pageIndex={1} />
        </section>
    )
}
