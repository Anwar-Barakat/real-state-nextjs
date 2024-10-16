import React from 'react'
import { Header } from './_components'

const Provider = ({ children }) => {
    return (
        <div>
            <Header>
                {children}
            </Header>
        </div>
    )
}

export default Provider