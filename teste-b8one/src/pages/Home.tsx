
import TopBar from "./../components/TopBar/index";
import Header from "./../components/Header/index";
import Shelfs from "./../components/Shelfs/index";
import product1 from "./../assets/product-image1.svg";
import product2 from "./../assets/product-image2.svg";
import product3 from "./../assets/product-image3.svg";
import Modal from "./../components/modal/Modal";
import useModal from "./../components/modal/useModal";
import StateList from "./../components/stateList";


const Home = ({ data, getInfo }: any) => {
    const { isOpen, toggle } = useModal()


    return (

        <div className="main-home">
            <TopBar />
            <Header />
            <div className="home-container--title">
                <span className="home-container--text">
                    Ofertas especiais pra você não perder nada!
                </span>
            </div>
            <div className="shelfs-container">
                <div className="shelf-slide-container">
                    <Shelfs product={product1} />
                    <Shelfs product={product2} />
                    <Shelfs product={product3} />
                </div>
            </div>
            <div className="modal">
                <Modal isOpen={!isOpen} toggle={toggle}>
                    <StateList toggle={toggle} data={data} getInfo={getInfo} />
                </Modal>
            </div>
        </div>
    )
}

export default Home