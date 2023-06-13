const Item = ({id, titulo, imagen, precio, stock}) => {

    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {titulo}
                </h2>
            </header>
            <picture>
                <img src={imagen} alt={titulo} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${precio}
                </p>
                <p className="Info">
                    Stock disp: ${stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <button className="Option">Ver Detalle</button>

            </footer>
        </article>
    )
}

export default Item