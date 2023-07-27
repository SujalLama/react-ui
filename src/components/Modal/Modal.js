import { createContext, useEffect, useRef } from "react";

export const ModalContext = createContext();

export default function Modal({children, className, show = true, onClose = () => {}}) {
    const overlayRef = useRef(null);

    useEffect(() => {
        const body = document.querySelector('body');
        if(show) {
            body.style.overflow = "hidden"
        } else {
            body.style.overflow = "auto"
        }
    }, [show])

    // to close modal when clicked at overlay
    useEffect(() => {
        function mousedownHandler (e) {
            if(overlayRef.current === e.target) {
                onClose();
            }
        }

        document.addEventListener("mousedown", mousedownHandler)

        return () => document.removeEventListener("mousedown", mousedownHandler)
    }, [onClose])

    if(show) {
        return (
            <ModalContext.Provider value={{onClose}}>
                <div ref={overlayRef} className={`overlay ${className}`}>
                    {children}
                </div>
            </ModalContext.Provider>
        )
    }

    return null;
}
