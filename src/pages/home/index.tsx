import Slider from "../../utils/lib";
import { FirstPage } from "./components/FirstPage";
import { SecondPage } from "./components/secoundPage";

export const Home = () => {
    return (
        <section dir="ltr" className="full-w full-h ">
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
                <SecondPage key={2} />
            </Slider>
        </section>

    )
}
