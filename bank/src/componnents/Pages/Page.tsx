import React from 'react'
import Home from './Home/Home'
import Credit from './Credit/Credit'
import Transfers from './Transfers/Transfers'
 

interface Props {
    SCurrPage: string
}
export default function Page({ SCurrPage }: Props) {
    return (
        <div className='page'>
            {SCurrPage == "Home" ? (
                <Home />
            ) : SCurrPage === "Credit" ? (
                <Credit />
            ) : (
                <Transfers />
            )}
             
        </div>
    )
}
