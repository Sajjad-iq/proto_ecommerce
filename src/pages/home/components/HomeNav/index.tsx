import { NavIconsButtons } from "../../../../common/NavIconsButtons"
import { MenuButton } from "../../../../layout/nav/components/MenuButton"
import { NormalNavButton } from "../../../../layout/nav/components/NormalNavButton"
import logo from '../../../../assets/brand/logo_white_new.png'

interface Props {
    setIsActive: any
    isActive: boolean
    Ref?: any
}
export const HomeNav = (props: Props) => {


    return (
        <nav ref={props.Ref} className={"scroll-nav"} dir={"ltr"}>
            <section className='flex-row'>
                <MenuButton isActive={props.isActive} onClick={() => { props.setIsActive(!props.isActive) }} />
                <img className='logo' src={logo} alt="logo" />
            </section>

            <section className='flex'>
                <NormalNavButton />
                <NavIconsButtons />
            </section>
        </nav>
    )
}