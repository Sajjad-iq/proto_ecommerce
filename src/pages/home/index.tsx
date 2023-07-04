import Slider from "../../utils/lib";
import { FirstPage } from "./components/FirstPage";

export const Home = () => {
    return (
        <section dir="ltr" className="w-full h-3/6">
            <Slider
                onSlideComplete={(i) => {
                    console.log('finished dragging, current slide is', i)
                }}
                onSlideStart={(i) => {
                    console.log('started dragging on slide', i)
                }}
                transition={0.5}
            >
                <FirstPage key={1} />
                <FirstPage key={2} />
            </Slider>
        </section>

    )
}
