import ItemCount from "../itemCount/itemCount"

const ItemDetail = ({ id, titulo, imagen, precio, stock, details }) => {
    return (
        <article>
            <header>
                <h2>
                    {titulo}
                </h2>
            </header>
            <picture>
                <img src={imagen} alt={titulo} className="ItemImg"/>
            </picture>
            <section>
                <p>
                    Descripcion: {details}
                </p>
                <p>
                    Precio: ${precio}
                </p>
            </section>
            <footer>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada', quantity)}/>
            </footer>
        </article>
    )
}

export default ItemDetail