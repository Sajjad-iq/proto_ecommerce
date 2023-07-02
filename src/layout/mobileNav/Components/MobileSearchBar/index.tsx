import searchIcon from '../../../../assets/svg/magnifying-glass-svgrepo-com.svg'
import { useTranslation } from 'react-i18next'

export const MobileSearchBar = () => {

    const { t } = useTranslation()

    return (
        <section className="flex flex-col items-start pb-6  p-3 w-full NavBorder">
            <div className="relative rounded w-full">
                <div className=" absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <img src={searchIcon} alt="search icon" className="w-6" />
                </div>
                <input dir="ltr" type="text" className="w-full bg-slate-950 p-3 text-gray-50 rounded text-sm" placeholder={t("search")} />
            </div>
        </section>
    )
}
