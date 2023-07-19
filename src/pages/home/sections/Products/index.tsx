import { useState } from "react"
import { MenuButton } from "../../../../layout/nav/components/MenuButton"
import { MobileSortByList } from "./components/SortByList"

export const Products = () => {
    const [isActive, setIsActive] = useState(false)

    return (
        <section id="shop-now" className=' w-screen h-screen flex flex-col bg-white relative'>
            <section>
                <section className="bg-black rounded w-fit m-3 ">
                    <MenuButton isActive={isActive} onClick={() => setIsActive(!isActive)} />
                </section>
                <MobileSortByList isActive={isActive} setIsActive={setIsActive} />
            </section>


        </section>
    )
}
