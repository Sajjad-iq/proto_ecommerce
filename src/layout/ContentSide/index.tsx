import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
    children: ReactNode
    isActive: boolean
}
export const ContentSide = (props: Props) => {

    let Width = window.innerWidth * 40 / 100

    return (
        <motion.section
            className='content-side'
            animate={{
                width: !props.isActive ? window.innerWidth : Width
            }}
        >
            {props.children}

        </motion.section>
    )
}
