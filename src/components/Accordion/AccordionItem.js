import { createContext } from "react"

export const AccordionItemContext = createContext();

export default function AccordionItem({children, eventKey = 0, disabled = false}) {

  return (
    <AccordionItemContext.Provider value={{eventKey, disabled}}>{children}</AccordionItemContext.Provider>
  )
}
