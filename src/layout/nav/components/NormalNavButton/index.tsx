import { useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../../../setup/context-manger/GlobalContext'
import { currency, languages, NavPages } from '../../../Utils'
import Cookies from 'js-cookie'
import { HoverDropDownButton } from '../../../../common/HoverDropDownButton'
import i18next from 'i18next'

export const NormalNavButton = () => {
    const currentLanguageCode = Cookies.get('i18next') || 'en'
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
    const { t } = useTranslation()
    const { SelectedCurrency, setSelectedCurrency } = useContext(GlobalContext)

    useEffect(() => { document.body.dir = currentLanguage?.dir || 'ltr' }, [currentLanguage, t])

    return (
        <section className='hidden lg:flex mr-6'>
            <HoverDropDownButton SelectedName={t("nav_pages")}>
                {NavPages.map((e: any) => {
                    return <Link className="text-sm  h-10 flex flex-col justify-center px-6" key={e.TranslationCode} to={e.href}>{t(e.TranslationCode)}</Link>
                })}
            </HoverDropDownButton>


            <HoverDropDownButton SelectedName={currentLanguageCode === "en" ? 'EN' : "عربي"}>
                {languages.map((e: any) => {
                    return <li className='text-sm  h-10 flex flex-col justify-center px-6' style={{}} key={e.name} onClick={() => i18next.changeLanguage(e.code)}>{currentLanguageCode === "en" ? e.name : e.arName}</li>
                })}
            </HoverDropDownButton>

            <HoverDropDownButton SelectedName={SelectedCurrency}>
                {currency.map((e: any) => {
                    return <li className='text-sm  h-10 flex flex-col justify-center px-6' key={e.name} onClick={() => setSelectedCurrency(e.name)}>{currentLanguageCode === "en" ? e.name : e.arName}</li>
                })}
            </HoverDropDownButton>

        </section>
    )
}
