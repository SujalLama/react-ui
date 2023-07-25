import { createContext, useState } from "react"

export const AccordionContext = createContext();

export default function Accordion({children, defaultKey = 0, className}) {
    const [activeKey, setActiveKey] = useState(defaultKey);

  return (
    <AccordionContext.Provider value={{activeKey, setActiveKey}}>
        <div className={className}>
            {children}
        </div>
    </AccordionContext.Provider>
  )
}
