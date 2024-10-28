 import React, { useState } from 'react'
import Nav from './componnents/Nav'
import Page from './componnents/Pages/Page'

 
 export default function App() {
  const [SCurrPage, setSCurrPage] = useState("Home")
   return (
     <div className='app'>
       <Page SCurrPage={SCurrPage}/>
       <Nav setSCurrPage={setSCurrPage}/>     
     </div>
   )
 }
 