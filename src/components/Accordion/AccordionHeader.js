import { useContext } from "react"
import { AccordionContext } from "./Accordion"
import { AccordionItemContext } from "./AccordionItem";


export default function AccordionHeader({children, className, ...rest}) {
    const {activeKey, setActiveKey} = useContext(AccordionContext);
    const {eventKey, disabled} = useContext(AccordionItemContext);

    // variables
    let newClassName = className ? 'accordion-header ' + className : 'accordion-header ';

    let activeClass = activeKey === eventKey && 'active';

    // functions
    const clickHandler = () => {
        setActiveKey(eventKey)
    }

  return (
    <button {...rest} disabled={disabled} className={`${newClassName + ' ' + activeClass}`} onClick={clickHandler}>{children}</button>
  )
}
