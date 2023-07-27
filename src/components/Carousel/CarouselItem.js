import { useContext } from "react"
import { CarouselContext } from "./Carousel"

export default function CarouselItem({children, className=''}) {
    const {slides} = useContext(CarouselContext);
    
  return (
    <div className={`carousel-item ${className}`} style={{flexBasis: `${100 / slides}%`}}>{children}</div>
  )
}
