import ProductList from './ProductList'

export const Inicio = () => {
    return (
        <div>
            <h1 className="text-center" >Bienvenido a la Gestión de Productos</h1>
            <h2 className="text-center" >Todos los Productos</h2>
            <ProductList/>
        </div>
    )
}
