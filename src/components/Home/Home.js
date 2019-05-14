import React from 'react'
import CardContainer from '../../containers/CardContainer/CardContainer'
import Header from '../../containers/Header/Header'

export default function Main(props) {
  return(
    <div>
      <Header />
      <CardContainer router={{...props}} />
    </div>
  )
}