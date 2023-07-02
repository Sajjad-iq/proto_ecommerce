import { motion } from "framer-motion";
import { DropDownButton } from "../../common/DropDownButton";
import { useRef, useEffect, useContext } from "react";
import { GlobalContext } from "../../setup/context-manger/GlobalContext";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import cookies from 'js-cookie'
import i18next from "i18next";
import { NavPages, currency, languages } from "../Utils";
import { MobileSearchBar } from "./Components/MobileSearchBar";
import { SocialMedia } from "./Components/SocialMedia";

interface Props {
    isActive: boolean
    setIsActive: any
}

export const MobileNav = (props: Props) => {

    let Width = window.innerWidth * 60 / 100
    const WindowRef = useRef<any>(null)
    const { SelectedCurrency, setSelectedCurrency } = useContext(GlobalContext)
    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
    const { t } = useTranslation()

    useEffect(() => {
        const closeMenu = (e: any) => { if (!WindowRef.current?.contains(e.target)) props.setIsActive(false) }
        document.body.addEventListener("mousedown", closeMenu)
        return () => document.body.removeEventListener("mousedown", closeMenu)
    }, [props.setIsActive])

    useEffect(() => { document.body.dir = currentLanguage?.dir || 'ltr' }, [currentLanguage, t])

    return (
        <motion.section
            ref={WindowRef}
            className={"mobile-nav"}
            animate={{
                translateX: props.isActive ? 0 : - Width,
                width: props.isActive ? Width : 0
            }}
        >
            <DropDownButton SelectedName={SelectedCurrency}>
                {currency.map((e: any) => {
                    return <li className='text-sm  h-10 flex flex-col justify-center NavBorder px-6' key={e.name} onClick={() => setSelectedCurrency(e.name)}>{currentLanguageCode === "en" ? e.name : e.arName}</li>
                })}
            </DropDownButton>

            <DropDownButton SelectedName={currentLanguageCode === "en" ? 'EN' : "عربي"}>
                {languages.map((e: any) => {
                    return <li className='text-sm  h-10 flex flex-col justify-center NavBorder px-6' key={e.name} onClick={() => i18next.changeLanguage(e.code)}>{currentLanguageCode === "en" ? e.name : e.arName}</li>
                })}
            </DropDownButton>

            <section className="w-full flex flex-col items-start py-3">
                <DropDownButton SelectedName={t("nav_pages")}>
                    {NavPages.map((e: any) => {
                        return <Link className="text-sm  h-10 flex flex-col justify-center NavBorder px-6" key={e.TranslationCode} to={e.href}>{t(e.TranslationCode)}</Link>
                    })}
                </DropDownButton>
            </section>

            <MobileSearchBar />

            <SocialMedia />

        </motion.section>
    )
}
