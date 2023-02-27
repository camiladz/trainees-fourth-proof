import Header from "../components/Header"
import ShelfSelected from "../components/shelfSelected"
import TopBar from "../components/TopBar"
import Modal from "../components/modal/Modal"
import useModal from "../components/modal/useModal"
import StateList from "../components/stateList"


const ProductPage = ({ data }: any) => {
    const { isOpen, toggle } = useModal()
    if (!data) return null

    return (
        <div className="main-home">
            <TopBar />
            <Header />
            <div className="header-store-selected">
                <div className="header-store-info">
                    <div className="store-info-1">
                        <span className="store-name-1">
                            {data.storeRegionalization.name}
                        </span>
                        <span className="store-address-1">
                            {data.storeRegionalization.address}
                        </span>
                        <span className="store-neighborhood-1">
                            Bairro: {data.storeRegionalization.neighborhood}
                        </span>
                        <span className="store-city-1">
                            Cidade: {data.storeRegionalization.city}
                        </span>
                        <span className="store-postalCode-1">
                            CEP: {data.storeRegionalization.postalCode}
                        </span>
                    </div>
                    <div className="store-info-2">
                        <div className="store-info-2-container">
                            <span className="store-phone-2-text">
                                {data.storeRegionalization.hour}
                            </span>
                            <span className="store-phone-2">
                                (11) 98991-9999  |  0800 0000 0000
                            </span>
                        </div>
                        <div className="change-store">
                            <button onClick={toggle} className="change-state">
                                <span className="change-state-text">
                                    Trocar de Estado
                                </span>
                            </button>
                            <Modal isOpen={isOpen} toggle={toggle}>
                                <StateList toggle={toggle} />
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
            <span className="store-information--title">
                Seleção de produtos {data.storeRegionalization.name}
            </span>
            <ShelfSelected data={data} />
        </div>
    )
}

export default ProductPage