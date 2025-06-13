import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
export const useGetProducts = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { setProducts } = useContext(ProductContext);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                // Simular una demora de 1 segundo extra
                await new Promise(resolve => setTimeout(resolve, 1000));

                const dataFormatted = data.map((prod) => {
                    return {
                        ...prod,
                        favorite: false,
                        active: true
                    };
                });
                console.log(dataFormatted,"Nuevo traido")
                setProducts(dataFormatted);
            } catch (err) {
                setError(err.message || "Error al obtener los productos");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return { loading, error };
};
