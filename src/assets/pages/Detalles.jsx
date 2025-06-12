import React from 'react';
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export const Detalles = () => {
    const { findProduct } = useContext(ProductContext);
    const params = useParams();
    const product = findProduct(parseInt(params.id));

    if (!product) {
        return <div>Producto no encontrado</div>;
    }

    return (
        <div style={{ padding: "20px" }}>
            <h2>Detalles del Producto</h2>
            <div>
                <p><strong>Nombre:</strong> {product.name}</p>
                <p><strong>Precio:</strong> ${product.price}</p>
                <p><strong>Descripción:</strong> {product.description}</p>
                <p><strong>Categoría:</strong> {product.category}</p>
                <img 
                    src={product.image} 
                    alt={product.name} 
                    style={{ width: "200px", height: "auto" }} 
                />
            </div>
        </div>
    );
};
