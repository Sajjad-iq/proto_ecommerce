import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'

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
            className="h-full bg-slate-400 absolute top-0 flex flex-col"
            animate={{
                translateX: props.isActive ? 0 : - Width,
                width: props.isActive ? Width : 0
            }}
        >

            <h2>Sort By</h2>
            <section>
                <label>GAMES</label>
                <input type={"checkbox"} />

            </section>
        </motion.section>
    )
}
