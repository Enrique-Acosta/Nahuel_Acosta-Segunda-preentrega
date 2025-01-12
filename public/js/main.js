const socket= io()

socket.on('connect', () => {
    console.log('Conectado al servidor con ID:', socket.id);
});

socket.on('all_products', (products)=>{
    const conteiner= document.getElementById('products-conteiner')
    products.forEach(prod => {
        conteiner.innerHTML+=`
            <div>
            
                <p>${prod.title}: ${prod.description}- Precio: ${prod.price}</p>
            
            </div>
        
        
        `
    });
})