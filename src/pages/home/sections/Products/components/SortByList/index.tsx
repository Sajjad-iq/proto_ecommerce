import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { sortByListNames } from '../../../../Utils'

interface Props {
    isActive: boolean
    setIsActive: any
}
export const MobileSortByList = (props: Props) => {

    let Width = window.innerWidth * 50 / 100
    const WindowRef = useRef<any>(null)
    const { t } = useTranslation()

    useEffect(() => {
        const closeMenu = (e: any) => { if (!WindowRef.current?.contains(e.target)) props.setIsActive(false) }
        document.body.addEventListener("mousedown", closeMenu)
        return () => document.body.removeEventListener("mousedown", closeMenu)
    }, [])

    return (
        <motion.section
            ref={WindowRef}
            className="h-full bg-gray-100 absolute top-0 flex flex-col overflow-hidden p-2 "
            animate={{
                translateX: props.isActive ? 0 : - Width,
                width: props.isActive ? Width : 0,
                padding: props.isActive ? "1rem" : "0"
            }}
        >

            <h2 className=' text-xl font-semibold m-3'>{t("products_Sort_by")}</h2>
            <section className='flex flex-col'>

                {sortByListNames.map((e) => {
                    return <label key={e.name} htmlFor={e.name} className='flex items-center text-base font-medium'>
                        <input type={"radio"} id={e.name} name='sort-list' className='radio-check-box m-4' />
                        {t(e.name)}
                    </label>

                })}
            </section>
        </motion.section>
    )
}
