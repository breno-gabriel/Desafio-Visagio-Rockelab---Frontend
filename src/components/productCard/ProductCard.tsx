import './ProductCard.css'

function ProductCard() {

    return(
        <section className = "productCard">
            <img src="http://http2.mlstatic.com/D_937210-MLU72628282510_112023-W.jpg" alt="" className='productImage'/>

            <div className='productInformation'>
                <h2 className='productPrice'>R$2000,00</h2>
                <h2 className='productDescription'>Descrição qualquer</h2>
            </div>

            <button className='shopButton'>adicionar ao carrinho</button>

        </section>
    ); 

}

export default ProductCard; 
