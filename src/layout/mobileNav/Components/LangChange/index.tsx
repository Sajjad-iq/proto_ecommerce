import i18next from 'i18next'
import React, { useEffect } from 'react'
import { DropDownButton } from '../../../../common/DropDownButton'
import { languages } from '../../../Utils'
import Cookies from 'js-cookie'
import { useTranslation } from 'react-i18next'

interface Props {
    style: {}
}
export const LangChange = (props: Props) => {

    const currentLanguageCode = Cookies.get('i18next') || 'en'
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
    const { t } = useTranslation()

    useEffect(() => {
        let elements = document.querySelectorAll("#reverse-dir")
        document.body.dir = currentLanguage?.dir || 'ltr'
        if (elements) {
            elements.forEach((e: any) => {
                e.dir = currentLanguage?.dir || 'ltr'
            })
        }
    }, [currentLanguage, t])

    return (
        <DropDownButton SelectedName={currentLanguageCode === "en" ? 'EN' : "عربي"}>
            {languages.map((e: any) => {
                return <li className='text-sm  h-10 flex flex-col justify-center NavBorder px-6' style={props.style} key={e.name} onClick={() => i18next.changeLanguage(e.code)}>{currentLanguageCode === "en" ? e.name : e.arName}</li>
            })}
        </DropDownButton>
    )
}
