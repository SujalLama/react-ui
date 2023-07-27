import { useContext } from "react"
import { ModalContext } from "./Modal"

export default function ModalButton({children, className}) {
    const {onClose} = useContext(ModalContext);
  return (
    <button aria-label="close modal" className={`btn ${className}`} onClick={onClose}>{children}</button>
  )
}
