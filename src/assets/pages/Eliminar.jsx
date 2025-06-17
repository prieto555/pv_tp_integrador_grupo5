import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import Button from "react-bootstrap/Button";

export const Eliminar = ({ id }) => {
  const { handleDeleteProduct } = useContext(ProductContext);
  return (
    <>
      <Button variant="danger"
        onClick={() => handleDeleteProduct(id)}>Eliminar</Button >
    </>
  )
}
