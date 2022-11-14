import axios from "axios";
import { Container, Row } from "react-bootstrap";
import AddApartment from "../AddApartment/AddApartment";


function ApartmentList() {
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

    axios.get("https://ironbnb-m3.herokuapp.com/apartments")
        .then((response) => {
            console.log("Resposta: ", response.data)
        })
        .catch((error) => console.log(error))

    return (
        <div>
            <Container>
                <Row>
                    <AddApartment />
                </Row>
                <Row>
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