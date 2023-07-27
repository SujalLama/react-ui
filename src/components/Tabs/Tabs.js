import { createContext, useState } from "react"

export const TabContext = createContext();

export default function Tabs({children, defaultKey}) {
    const [tabKey, setTabKey] = useState(defaultKey);

    return (
        <TabContext.Provider value={{tabKey, setTabKey}}>
            {children}
        </TabContext.Provider>
    )
}
