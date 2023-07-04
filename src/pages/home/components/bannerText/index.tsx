import React from 'react'
import { useTranslation } from 'react-i18next'

export const BannerText = () => {

    const { t } = useTranslation()

    return (
        <section id='reverse-dir' className='flex flex-col w-fit'>
            <article className='white w-fit text-2xl' >{t("home_banner_header")}</article>

            <article className='white flex-row w-fit' >
                <div className=' flex flex-col font-semibold'>
                    <p className='flex text-xl'>{t("home_banner_up")}</p>
                    <p className='flex text-xl'>{t("home_banner_to")}</p>
                </div>
                <strong className='text-6xl mx-2'>{t("home_banner_50%off")}</strong>
            </article>

            <section className='flex flex-row white w-fit'>
                <article className='flex flex-row white w-fit'>
                    <p>{t("home_banner_startingAt")}</p>
                    <p className='orange'>$<strong>19</strong>99</p>
                </article>
                <button className='px-7 py-5 mx-4 bg-slate-200 '
                >{t("home_banner_shop_now")}</button>
            </section>


        </section>
    )
}
