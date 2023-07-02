import logo from '../../assets/brand/logo_white_new.png'
import { NavIconsButtons } from '../../common/NavIconsButtons'
import { MenuButton } from './components/MenuButton'

interface Props {
    setIsActive: any
    isActive: boolean
}
export const Nav = (props: Props) => {

    return (
        <nav className="nav" dir={"ltr"}>
            <section className='flex-row'>
                <MenuButton isActive={props.isActive} onClick={() => { props.setIsActive(!props.isActive) }} />
                <img className='logo' src={logo} alt="logo" />
            </section>

            <NavIconsButtons />
        </nav>
    )
}
