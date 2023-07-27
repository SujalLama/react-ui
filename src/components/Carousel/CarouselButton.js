
export default function CarouselButton({children, className = '', ...rest}) {

    return <button className={className} {...rest}>{children}</button>
}
