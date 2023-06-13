const products = [
    {
        "id": "vga-01",
        "titulo": "AMD RX 6700XT",
        "category":"Placa Video",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_947403-MLA45789450946_052021-O.webp",       
        "precio": 500,
        "stock" : 10,
        "details": "Detalles item 01"
    },
    {
        "id": "vga-02",
        "titulo": "AMD RX 6800",
        "category":"Placa Video",
        "imagen": "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/video-radeon-rx-6800-16gb-gigabyte-gaming-oc-0.jpg",        
        "precio": 800,
        "stock" : 15,
        "details": "Detalles item 02"
    },
    {
        "id": "vga-03",
        "titulo": "NVIDIA RTX 4070 Ti",
        "category":"Placa Video",
        "imagen": "https://statics.globaldrop.com.ar/kalpa-system-12-2022/26_28-05-2023-06-05-12-41t3ewtej+l.jpg",       
        "precio": 1500,
        "stock" : 30,
        "details": "Detalles item 03"
    },
    {
        "id": "micro-01",
        "titulo": "INTEL CORE I7", 
        "category":"Microprocesador",
        "imagen": "https://www.chlgadget.com/wp-content/uploads/2023/02/intel-core-i7-13700-16-core-24-thread-11th-gen-processor.jpg",       
        "precio": 800,
        "stock" : 10,
        "details": "Detalles item 04"
    },
    {
        "id": "micro-02",
        "titulo": "AMD RYZEN 5800X",
        "category":"Microprocesador",
        "imagen": "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-amd-ryzen-7-5800x-svideo-scooler-0.jpg",       
        "precio": 700,
        "stock" : 20,
        "details": "Detalles item 05"
    }
    
]

export const getProducts = () =>{
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(products)
        }, 500)
    }
    )
}

export const getProductById = (productId) => {
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductByCategory = (categoryId) => {
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(products.find(prod => prod.category === categoryId))
        }, 500)
    })
}
