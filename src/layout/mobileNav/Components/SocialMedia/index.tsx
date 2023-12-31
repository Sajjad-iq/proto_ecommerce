import { Link } from 'react-router-dom'
import { socialMedia } from './Utils'

export const SocialMedia = () => {
    return (
        <section className='m-5 flex justify-center'>
            {socialMedia.map((e: any) => {
                return <Link target={'_blank'} key={e.icon} to={e.href} className='m-2'>
                    <img src={e.icon} className='w-5 sm:w-6' />
                </Link>
            })}
        </section>
    )
}
