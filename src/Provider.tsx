import React, { createContext, useState } from 'react'

export const dataProvider = createContext<any>({})
export const Provider = ({children}:any) => {
   const  [data, setData] = useState<any>([])
  return (
    <div>
        <dataProvider.Provider value={{data, setData}}>
            {children}
        </dataProvider.Provider>
    </div>
  )
}
