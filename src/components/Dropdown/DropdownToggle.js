import { useContext } from "react"
import { ToggleContext } from "./Dropdown";

export default function DropdownToggle({children, className}) {
    const {toggleHandler} = useContext(ToggleContext);

    return (
        <div className={className} onClick={toggleHandler}>{children}</div>
    )
}
