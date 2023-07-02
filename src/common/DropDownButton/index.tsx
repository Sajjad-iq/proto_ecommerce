import { motion } from 'framer-motion'
import ArrowDown from '../../assets/svg/arrow-down-338-svgrepo-com.svg'
import { ReactNode, useEffect, useRef, useState } from 'react'


interface Props {
    SelectedName: string
    children: ReactNode
}

export const DropDownButton = (props: Props) => {

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
        <motion.section
            ref={WindowRef}
            onClick={() => setIsActive(true)}
            className='w-full h-10 flex-col relative overflow-hidden'
            animate={{
                height: isActive ? "fit-content" : 44
            }}
        >
            <section className='w-full flex justify-between items-center p-3'>
                <p className='text-sm white'>{props.SelectedName}</p>
                <motion.img src={ArrowDown} alt='Arrow Down' className='arrow-down'
                    animate={{
                        rotate: isActive ? 180 : 0
                    }}
                />
            </section>
            <ul className='overflow-hidden white w-full flex flex-col justify-start '>
                {props.children}
            </ul>
        </motion.section>

    )
}

