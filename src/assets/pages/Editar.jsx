import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export const Editar = () => {
    const { editProducts, findProduct } = useContext(ProductContext);
    const navigate = useNavigate();
    let params = useParams();
    const product = findProduct(parseInt(params.id));
    
    const [formulario, setFormulario] = useState({ ...product });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormulario({ ...formulario, [name]: value });
    };

    const actualizarProducto = (e) => {
        e.preventDefault();
        editProducts(params.id, formulario)
        navigate("/");
    };

    return (
        <div>
            <form onSubmit={actualizarProducto}>
                <h2>Modificar Producto</h2>
                <div>
                    <label>Nombre</label>
                    <input type="text" name="title" value={formulario.title || ""} onChange={handleChange} required />
                </div>
                <div>
                    <label>Precio</label>
                    <input type="number" name="price" value={formulario.price || ""} onChange={handleChange} required />
                </div>
                <div>
                    <label>Descripcion</label>
                    <input type="text" name="description" value={formulario.description || ""} onChange={handleChange} required />
                </div>
                <div>
                    <label>Categoria</label>
                    <input type="text" name="category" value={formulario.category || ""} onChange={handleChange} required />
                </div>
                <button type="submit">Actualizar Producto</button>
            </form>
        </div>
    );
};