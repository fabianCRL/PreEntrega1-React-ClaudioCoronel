import { useEffect, useState } from "react"
import { getProductById, getProducts } from "../asynMock"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    useEffect(() =>{
        getProductById('vga-01')
            .then(response =>{
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    },[])

    return(
        <div>
            <ItemDetail{...product}/>
        </div>
    )
}

export default ItemDetailContainer