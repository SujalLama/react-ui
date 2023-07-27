import React, { useContext } from 'react'
import { TabContext } from './Tabs'

export default function TabHead({children, className, eventKey}) {
    const {tabKey, setTabKey} = useContext(TabContext);

  return (
    <li 
        className={`tab-head ${className || ''} ${tabKey === eventKey ? 'tab-active' : ''}`}  
        onClick={() => setTabKey(eventKey)}>
            {children}
    </li>
  )
}
