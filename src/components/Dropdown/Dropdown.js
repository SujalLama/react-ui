import { createContext, useEffect, useRef } from "react";
import useToggle from "../../hooks/useToggle"

export const ToggleContext = createContext();

export default function Dropdown({children, className}) {
    const {toggle, toggleHandler, closeHandler} = useToggle();
    const toggleRef = useRef(null);

    useEffect(() => {
        function mouseDownHandler (e) {
            if(!e.target) return;

            if(!toggleRef.current.contains(e.target)) {
                closeHandler();
            };
        }

        document.addEventListener('mousedown', mouseDownHandler);

        return () => document.removeEventListener('mousedown', mouseDownHandler);
    }, [])

    return (
    <ToggleContext.Provider value={{toggle, toggleHandler}}>
        <div ref={toggleRef} className={className}>{children}</div>
    </ToggleContext.Provider>
    )
}
