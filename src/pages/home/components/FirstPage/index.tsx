import bg from '../../../../assets/images/run.webp'
import { BannerText } from '../bannerText'

export const FirstPage = () => {
    return (
        <section style={{ backgroundImage: `url(${bg})` }} className='w-full h-full flex flex-col justify-center content-center p-2'>
            <BannerText />
        </section>
    )
}
