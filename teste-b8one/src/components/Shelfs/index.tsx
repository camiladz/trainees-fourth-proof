
const Shelfs = ({ product }: any) => {
    return (
        <div className="main-content__shelf">
            <div className="product-information">
                <div className="product-image__container">
                    <span className="shipping-text">Frete Grátis</span>
                    <img src={product} alt="" className="product-image-1" />
                </div>
                <div className="product-name-container">
                    <span className="product-name">
                        Smartphone Samsung Galaxy Z Flip4 5G Tela dobrável de 6.7" 256GB Processador Snapdragon 8GB de
                        RAM Câmera Dupla Traseira Violeta
                    </span>
                </div>
                <div className="product-price--container">
                    <span className="product-price">
                        R$ 7.498,89
                    </span>
                    <span className="product-listPrice">
                        R$ 6.749,00
                    </span>
                    <span className="product-listPrice--text">
                        à vista no pix ou cartão de crédito
                    </span>
                    <span className="product-installments">
                        R$ 7.498,89 <span>em até</span> 8x <span>de</span> R$ 937,36
                    </span>
                    <div className="product-installments-mobile">
                        R$ 7.498,89
                        <div className="product-installment-text">
                            <span >em até</span> 8x <span>de</span> R$ 937,36
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Shelfs