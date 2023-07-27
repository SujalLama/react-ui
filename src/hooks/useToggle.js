import { useState } from "react";

export default function useToggle (initialState = false) {
    const [toggle, setToggle] = useState(initialState);

    const toggleHandler = () => {
        setToggle(!toggle);
    }

    const closeHandler = () => {
        setToggle(false);
    }

    const openHandler = () => {
        setToggle(true);
    }
    
    return {toggle, toggleHandler, openHandler, closeHandler};
}