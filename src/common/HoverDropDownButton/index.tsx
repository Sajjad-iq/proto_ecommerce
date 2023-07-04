import { motion } from 'framer-motion'
import ArrowDown from '../../assets/svg/arrow-down-338-svgrepo-com.svg'
import { ReactNode, useEffect, useRef, useState } from 'react'

interface Props {
    SelectedName: string
    children: ReactNode
}

export const HoverDropDownButton = (props: Props) => {
    const [isActive, setIsActive] = useState(false)
    const WindowRef = useRef<any>(null)

    useEffect(() => {

        const closeMenu = (e: any) => {
            if (!WindowRef.current?.contains(e.target)) setIsActive(false)
            e.stopPropagation()
        }
        document.body.addEventListener("mousedown", closeMenu)
        return () => document.body.removeEventListener("mousedown", closeMenu)
    }, [setIsActive])

    return (
        <section ref={WindowRef} onClick={() => setIsActive(!isActive)} className='flex-col relative'>

            <section className='flex justify-between items-center m-3' id='reverse-dir'>
                <p className='text-sm white mx-2'>{props.SelectedName}</p>
                <img src={ArrowDown} alt='Arrow Down' className='arrow-down ' />
            </section>

            <motion.ul className='hover-drop-window flex flex-col justify-start absolute bg-zinc-100'
                animate={{
                    width: isActive ? 200 : 0,
                    opacity: isActive ? 1 : 0,
                    overflow: isActive ? "unset" : "hidden",
                }}
            >
                {props.children}
            </motion.ul>
        </section>
    )
}
