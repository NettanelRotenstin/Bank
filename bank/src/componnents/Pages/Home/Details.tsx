import React from 'react'
interface Props{
    name:string
    accountNum:string
    balance:number
}

export default function Details({name,accountNum,balance}:Props) {
  return (
    <div>
      <p>{name}</p>
      <p>{accountNum}</p>
      <p>your balance is {balance}$ {balance > 0?"😇":"😓"}</p>
    </div>
  )
}
