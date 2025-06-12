import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'

export const Eliminar = ({ id }) => {
    const { handleDeleteProduct } = useContext(ProductContext);
  return (
    <>
        <button onClick={() => handleDeleteProduct(id)}>Eliminar</button>
    </>
  )
}
