import { useContext} from "react";
import { AccordionContext } from "./Accordion";
import { AccordionItemContext } from "./AccordionItem";

export default function AccordionBody({children, className}) {
    className = className ? 'accordion-body ' + className : 'accordion-body';
    const {activeKey} = useContext(AccordionContext);
    const {eventKey, disabled} = useContext(AccordionItemContext);
    
    const activeStyle = {
        maxHeight: "100vh",
        transition: "all 0.1s 0.15s ease-in-out"
    }

    const defaultStyle = {
        maxHeight: "0",
        paddingTop: "0",
        paddingBottom: "0",
        border: "0",
        transition: "all 0.1s ease-in-out"
    }

    return (
        <div 
            className={className} 
            style={((activeKey === eventKey) || disabled) ? activeStyle : defaultStyle}>{children}</div>
    )
}
