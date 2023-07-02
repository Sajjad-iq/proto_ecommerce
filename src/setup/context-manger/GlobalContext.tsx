import { createContext, ReactNode, useState } from 'react'

type ProviderChildrenType = {
    children: ReactNode
}

export const GlobalContext = createContext<any>([])

const GlobalContextProvider = ({ children }: ProviderChildrenType) => {

    const [IsWishListActive, setIsWishListActive] = useState(false)
    const [SelectedCurrency, setSelectedCurrency] = useState('USD')

    return (
        <GlobalContext.Provider value={{ IsWishListActive, setIsWishListActive, SelectedCurrency, setSelectedCurrency }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider