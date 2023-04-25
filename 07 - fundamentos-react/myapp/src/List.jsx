import React from 'react'
import Item from './Item'

const List = () => {
  const nomes = ['teste', 'lucas', 'admin','batata']
  return (
    <div>
        {nomes.map((nome)=>(<Item key={nome} name={nome}/>))}
    </div>
  )
}

export default List
