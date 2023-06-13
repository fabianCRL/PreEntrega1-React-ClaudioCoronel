
import './App.css'
import Navbar from './components/NavBar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/itemCount/itemCount'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'



function App() {
  
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={'Bienvenidos a la tienda'}/>
      <ItemDetailContainer />
      {/* <ItemCount initial={1} stock={15} onAdd={(quantity) => console.log('Cantidad de items agregados', quantity)}/>
     */}
    </>
  )
}

export default App

