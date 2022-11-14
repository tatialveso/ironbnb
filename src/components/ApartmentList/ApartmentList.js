import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import AddApartment from "../AddApartment/AddApartment";


function ApartmentList() {
    const [apartments, setApartments] = useState([])
    const [fetching, setFetching] = useState(true)

    // captura a API (as informações de dados)
    // fetch("https://ironbnb-m3.herokuapp.com/apartments")
    //     // se deu certo então transforme esses dados em .json()
    //     .then((response) => {
    //         return response.json();
    //     })
    //     // então pegue os dados e imprima no console
    //     .then((data) => {
    //         console.log("Resposta: ", data)
    //     })
    //     .catch((error) => console.log(error))

    // callback -> o código que a gente vai rodar
    // array de valores que o código vai depender para rodar
        // se o array estiver vazio, o useEffect roda quando a aplicação iniciada
    useEffect(() => {
        axios.get("https://ironbnb-m3.herokuapp.com/apartments")
        .then((response) => {
            setApartments(response.data)
            setFetching(false)
        })
        .catch((error) => console.log(error))
    }, [])

    const renderApartments = apartments.map((apto) => {
        return (
            <Col key={apto._id}>
                <div className="card">
                    <img src={apto.img} />
                    <h3>{apto.title}</h3>
                    <p>Price: {apto.pricePerDay}</p>
                </div>
            </Col>
        )
    })

    return (
        <div>
            <Container>
                <Row>
                    <AddApartment />
                </Row>
                <Row>
                    { fetching && <Spinner animation="border" /> }
                    { renderApartments }
                </Row>
            </Container>
        </div>
    );
}

export default ApartmentList;



// Promises -> promessas
// promessa ser cumprida (então deu tudo certo) -> codigo segue fazendo algo
// OU a promessa não ser cumprida (então deu erro) -> pegar erro pra analisar o que aconteceu


// POST ->   CREATE -> ADICIONAMOS UM ITEM NOVO PRA API
// GET ->    READ ->   LER OS ITENS DA NOSSA API
// PUT ->    UPDATE -> ATUALIZA UM ITEM EXISTENTE COM NOVAS INFORMAÇÕES
// DELETE -> DELETE -> EXCLUI UM ITEM DA API