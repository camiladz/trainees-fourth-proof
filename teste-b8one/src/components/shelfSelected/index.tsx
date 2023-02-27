
const ShelfSelected = ({ data }: any) => {
    return (
        data.storeRegionalization.products.map((product: any) => {
            return (
                <div key={product.id}>
                    <div className="product-main-content">
                        <div className="product-shelf">
                            <img src={product.image} alt="imagem do produto" className="product-image" />
                            <span className="product-name">
                                {product.name}
                            </span>
                            <span className="product-price">
                                R$ {product.price}
                            </span>
                            <span className="product-listPrice">
                                R$ {product.listPrice}
                            </span>
                            <span className="product-listPrice--text">
                                à vista no pix ou cartão de crédito
                            </span>
                            <span className="product-installments">
                                R$ {product.price} em até {product.installments}x de {product.price / 10}
                            </span>
                            <button className="buy-product">
                                <span className="buy-procut-text">
                                    Adicionar ao carrinho
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            )
        })
    )
}


export default ShelfSelected