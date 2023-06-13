import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    return (
        <header>
            <h1 className="titulo1">HardCBA-Store</h1>

            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/categorias">Categorias</a></li>
                    <li><a href="/contacto">Carrito</a></li>
                </ul>
                <CartWidget/>
            </nav>
        </header>

    );
}

export default Navbar