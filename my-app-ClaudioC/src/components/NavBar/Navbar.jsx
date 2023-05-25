import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    return (
        <header>
            <h1>HardCBA-Store</h1>

            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/productos">Productos</a></li>
                    <li><a href="/contacto">Carrito</a></li>
                </ul>
                <CartWidget/>
            </nav>
        </header>

    );
}

export default Navbar