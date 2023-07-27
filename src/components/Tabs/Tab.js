import { useContext } from "react"
import { TabContext } from "./Tabs"

export default function Tab({children, eventKey, className}) {
    const {tabKey} = useContext(TabContext)

    if(tabKey === eventKey) {
        return <div className={`tab-item ${className || ''}`}>{children}</div>
    }

    return null;
}