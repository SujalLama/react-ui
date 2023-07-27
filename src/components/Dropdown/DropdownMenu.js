import React, { useContext } from 'react'
import { ToggleContext } from './Dropdown'

export default function DropdownMenu({children, className}) {
    const {toggle} = useContext(ToggleContext);

    return (
        <div className={`${className} ${toggle ? ' active' : ''}`}>{children}</div>
    )
}
