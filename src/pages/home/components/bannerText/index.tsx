import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

interface Props {
    pageIndex: Number
}
export const BannerText = (props: Props) => {

    const { t } = useTranslation()

    return (
        <section id='reverse-dir' className={`${props.pageIndex === 0 ? `banner-text` : `second-banner-text`} `}>
            <article className='white text-2xl my-1 text-center md:text-4xl lg:w-fit lg:text-3xl xl:text-4xl' >{t("home_banner_header")}</article>

            <article className='white flex-row my-2 lg:justify-start' >
                <div className=' flex flex-col font-extrabold text-2xl md:text-4xl lg:text-3xl xl:text-4xl'>
                    <p>{t("home_banner_up")}</p>
                    <p>{t("home_banner_to")}</p>
                </div>
                <strong className='text-6xl mx-2 md:text-8xl lg:text-7xl xl:text-8xl'>{t("home_banner_50%off")}</strong>
            </article>

            <section className='items-center justify-center flex-wrap flex flex-col white my-1 text-base lg:justify-start lg:flex-row'>
                <article className='flex white h-fit w-fit'>
                    <p className='font-bold md:text-2xl lg:text-base xl:text-xl'>{t("home_banner_startingAt")}</p>

                    <p dir='ltr' className='orange mx-1 flex items-start font-semibold md:text-2xl lg:text-base xl:text-lg'  >
                        $<strong className='text-2xl md:text-3xl lg:text-lg xl:text-2xl'>19</strong>99
                    </p>
                </article>
                <a href={"#shop-now"} className='w-40 h-14 mt-2 bg-slate-50 black font-bold flex-row hover:bg-slate-200  duration-300 md:text-lg md:mt-4 lg:mt-0 lg:mx-2 lg:text-base lg:w-32 xl:mx-8 xl:w-44'
                >{t("home_banner_shop_now")}</a>
            </section>
        </section>
    )
}
