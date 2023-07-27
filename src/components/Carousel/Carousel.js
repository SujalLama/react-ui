import { createContext, useEffect, useMemo, useRef, useState } from "react"
import CarouselButton from "./CarouselButton";
import {GrPrevious} from "react-icons/gr";
import {GoDotFill} from "react-icons/go";

export const CarouselContext = createContext();

export default function Carousel({
    children, 
    interval, 
    className, 
    showButton = true, 
    showIndicator = true, 
    button, 
    indicator, 
    slides = 1,
}) {

    const [slideBy, setSlideBy] = useState(0);
    const slideNumber = useRef(slideBy);
    const moveBy =  100;

    //TODO 
    // connect the first and last item of carousel
    // no gap in last item

    let childrenlen = children?.length || 1;

    // maximum scrollpoint
    const maxScroll = useMemo(() => ((Math.ceil(childrenlen / slides) - 1) * moveBy), [childrenlen, slides, moveBy]);

    // slides on interval
    useEffect(() => {
        if(interval) {

            const timer = setInterval(() => {
                if(slideNumber.current < maxScroll) {
                    setSlideBy((prev) => prev + moveBy);
                    slideNumber.current += moveBy;
                } else {
                    setSlideBy(0);
                    slideNumber.current = 0;
                }

            }, interval)

            return () => clearInterval(timer);
        }
    }, [interval])


    const slideStyle = {
        transform: `translateX(-${slideBy}%)`,
        transition: 'transform 0.3s ease-in-out'
    }

    function nextSlider () {
        if(slideBy < maxScroll) {
            setSlideBy((prev) => {
                slideNumber.current = prev + moveBy;
                return prev + moveBy
            })
        }
    }

    function prevSlider () {
        if(slideBy !== 0) {
            setSlideBy((prev) => {
                slideNumber.current = prev - moveBy;
                return prev - moveBy
            })
        }
    }

    function indicatorSlider (sliderPos) {
        setSlideBy(sliderPos * moveBy);
        slideNumber.current = sliderPos * moveBy;
    }


    return (
        <CarouselContext.Provider value={{slides}}>
            <div className={`carousel-wrapper ${className}`}>
                <div className="carousel" style={slideStyle}>{children}</div>
                {showButton && (<>
                    <CarouselButton className="carousel-btn left-btn" disabled={slideBy === 0} onClick={prevSlider}>
                        {button || <GrPrevious />}
                    </CarouselButton>
                    <CarouselButton className="carousel-btn right-btn" disabled={slideBy === maxScroll || slideBy > maxScroll} onClick={nextSlider}>
                        {button || <GrPrevious />}
                    </CarouselButton>
                    </>
                )}

                
                {showIndicator && (<div className="carousel-indicator">
                    {
                        Array(Math.ceil(childrenlen / slides)).fill('0').map((_, index) => (
                            <CarouselButton className={`indicator-btn ${(slideBy / moveBy) === index ? 'active' : ''}`} onClick={() => indicatorSlider(index)} key={index}>
                                {indicator || <GoDotFill />}
                            </CarouselButton>
                            ))
                    }
                </div>)}
            </div>
        </CarouselContext.Provider>
    )
}
