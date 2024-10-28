import React from 'react'

interface Props {
    setSCurrPage: (curr: string) => void
}


export default function Nav({ setSCurrPage }: Props) {
    return (
        <div className='nav'>
            <button onClick={()=>setSCurrPage("Home")}>Home</button>
            <button onClick={()=>setSCurrPage("Transfers")}>Transfers</button>
            <button onClick={()=>setSCurrPage("Credit")}>Credit</button>
        </div>
    )
}
