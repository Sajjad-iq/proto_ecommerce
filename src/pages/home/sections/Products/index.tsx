import { useState } from "react"
import { MenuButton } from "../../../../layout/nav/components/MenuButton"
import { MobileSortByList } from "./components/SortByList"

export const Products = () => {
    const [isActive, setIsActive] = useState(false)

    return (
        <section id="shop-now" className=' h-screen flex flex-col bg-gray-100 relative'>
            <section id='reverse-dir'>
                <section className="bg-black rounded w-fit m-3 ">
                    <MenuButton isActive={isActive} onClick={() => setIsActive(!isActive)} />
                </section>
                <MobileSortByList isActive={isActive} setIsActive={setIsActive} />
            </section>


        </section>
    )
}
