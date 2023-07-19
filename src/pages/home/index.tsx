import { useState, useRef, useEffect } from "react";
import Slider from "../../utils/lib";
import { FirstPage } from "./components/FirstPage";
import { SecondPage } from "./components/secoundPage";
import { HomeNav } from "./components/HomeNav";
import { ScrollDownAnimation } from "./components/ScrollDownAnimation";
import { Products } from "./sections/Products";

interface Props {
    setIsActive: any
    isActive: boolean
    IsNavIntersecting: boolean
    NavRef: any
}
export const Home = (props: Props) => {

    const [pageIndex, setPageIndex] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            setPageIndex(pageIndex === 0 ? 1 : 0)
        }, 6000)
        return () => clearTimeout(timer)
    }, [pageIndex])


    return (
        <section dir="ltr" className="full-w full-h">
            <section className="full-w full-h relative">
                <HomeNav Ref={props.NavRef} isActive={props.isActive} setIsActive={props.setIsActive} />
                <Slider
                    transition={0.5}
                    activeIndex={pageIndex}
                >
                    <FirstPage key={1} />
                    <SecondPage key={2} />
                </Slider>
                <ScrollDownAnimation />
            </section>

            <Products />
        </section>

    )
}
