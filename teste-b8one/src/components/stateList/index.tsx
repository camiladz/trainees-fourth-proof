import { MouseEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom"


type StateListProps = {
    toggle: () => void
}

function StateList({ toggle, data, getInfo }: any) {
    const [stateSelected, setStateSelected] = useState(false)
    const [stateLocal, setStateLocal] = useState('')
    const localStorageData = window.localStorage.getItem('state')


    useEffect(() => {
        if (localStorageData) {
            getInfo({
                variables: {
                    input: {
                        email: "teste@gmail.com",
                        state: localStorageData,
                    },
                },
            });
        }
    }, [])

    const selectState = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        setStateLocal(target.getAttribute("data-state")!!)

        getInfo({
            variables: {
                input: {
                    email: "teste@gmail.com",
                    state: target.getAttribute("data-state"),
                },
            },
        });

    };

    return (
        <>
            {
                !data && (
                    <div className="modal-select-state">
                        <span className="modal-select-title">
                            Olá Trainee 😃, selecione seu Estado:
                        </span>
                        <div className="state-options">
                            <ul className="select-state__options">
                                <li className="state-name" data-state="AC" onClick={selectState}>
                                    Acre
                                </li>
                                <li className="state-name" data-state="AL" onClick={selectState}>
                                    Alagoas
                                </li>
                                <li className="state-name" data-state="AM" onClick={selectState}>
                                    Amazonas
                                </li>
                                <li className="state-name" data-state="BA" onClick={selectState}>
                                    Bahia
                                </li>
                                <li className="state-name" data-state="CE" onClick={selectState}>
                                    Ceará
                                </li>
                                <li className="state-name" data-state="ES" onClick={selectState}>
                                    Espirito Santo
                                </li>
                                <li className="state-name" data-state="GO" onClick={selectState}>
                                    Goiás
                                </li>
                                <li className="state-name" data-state="MA" onClick={selectState}>
                                    Maranhão
                                </li>
                                <li className="state-name" data-state="MT" onClick={selectState}>
                                    Mato Grosso
                                </li>
                                <li className="state-name" data-state="MS" onClick={selectState}>
                                    Mato Grosso do Sul
                                </li>
                                <li className="state-name" data-state="MG" onClick={selectState}>
                                    Minas Gerais
                                </li>
                                <li className="state-name" data-state="PA" onClick={selectState}>
                                    Pará
                                </li>
                                <li className="state-name" data-state="PB" onClick={selectState}>
                                    Paraíba
                                </li>
                                <li className="state-name" data-state="PR" onClick={selectState}>
                                    Paraná
                                </li>
                                <li className="state-name" data-state="PE" onClick={selectState}>
                                    Pernambuco
                                </li>
                                <li className="state-name" data-state="PI" onClick={selectState}>
                                    Piauí
                                </li>
                                <li className="state-name" data-state="RJ" onClick={selectState}>
                                    Rio de Janeiro
                                </li>
                                <li className="state-name" data-state="RS" onClick={selectState}>
                                    Rio Grande do Sul
                                </li>
                                <li className="state-name" data-state="RN" onClick={selectState}>
                                    Rio Grande do Norte
                                </li>
                                <li className="state-name" data-state="RO" onClick={selectState}>
                                    Rondônia
                                </li>
                                <li className="state-name" data-state="RR" onClick={selectState}>
                                    Roraima
                                </li>
                                <li className="state-name" data-state="SC" onClick={selectState}>
                                    Santa Catarina
                                </li>
                                <li className="state-name" data-state="SP" onClick={selectState}>
                                    São Paulo
                                </li>
                                <li className="state-name" data-state="SE" onClick={selectState}>
                                    Sergipe
                                </li>
                                <li className="state-name" data-state="TO" onClick={selectState}>
                                    Tocantins
                                </li>
                            </ul>
                        </div>
                    </div>
                )
            }
            {
                !stateSelected && data && (
                    <div className="modal-next-step">
                        <span className="next-step-title">
                            Confira as informações da loja do seu Estado e prossiga:
                        </span>
                        <div className="store-info">
                            <h1 className="store-info__name">
                                {data.storeRegionalization.name}
                            </h1>

                            <div className="store-info__container">
                                <div className="address-container">
                                    <span className="store-address">
                                        Endereço: {data.storeRegionalization.address}
                                    </span>
                                    <span className="store-neighborhood">
                                        Bairro: {data.storeRegionalization.neighborhood}
                                    </span>
                                    <span className="store-city">
                                        Cidade: {data.storeRegionalization.city}
                                    </span>
                                    <span className="store-postalCode">
                                        CEP: {data.storeRegionalization.postalCode}
                                    </span>
                                </div>
                            </div>
                            <div className="store-schedule">
                                <span className="store-schedule__hour">
                                    {data.storeRegionalization.hour}
                                </span>
                            </div>
                            <div className="store-phone__container">
                                <div className="phone-container">
                                    <span className="store-phone">
                                        (11) 98991-9999
                                    </span>
                                    <span className="store-phone">
                                        0800 0000 0000
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="buttons__modal">
                            <button className="go-back__button">
                                Voltar
                            </button>
                            <button className="next-step__button" onClick={() => {
                                toggle()
                                setStateSelected(true)
                                window.localStorage.setItem('state', stateLocal)
                            }}>
                                <Link to="/productPage" className="button-text">
                                    Prosseguir
                                </Link>
                            </button>
                        </div>
                    </div>
                )
            }
            {
                stateSelected && (
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
                                    </div>
                                </div>
                            </div>
                        )
                    })
                )
            }
        </>
    )
}

export default StateList